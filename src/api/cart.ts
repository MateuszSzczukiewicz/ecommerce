"use server";

import { CartFindOrCreateDocument, CartItemInput, CartRemoveProductDocument } from "../gql/graphql";
import { CartSetProductQuantityDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";
import { CartAddProductDocument, CartGetByIdDocument } from "@/gql/graphql";
import { cookies } from "next/headers";
import Stripe from "stripe";
import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";

export const getCartById = async (cartId: string) => {
	try {
		const response = await executeGraphql({
			query: CartGetByIdDocument,
			variables: { id: cartId },
			cache: "no-store",
			next: {
				tags: ["cart"],
			},
		});
		if (!response || !response.cart) {
			throw new Error("Failed to fetch cart data");
		}
		return response.cart;
	} catch (err) {
		console.error("Error fetching cart by id:", err);
		throw new Error(`Could not retrieve cart with ID ${cartId}`);
	}
};

export const getCartFromCookie = async () => {
	const cartId = cookies().get("cartId")?.value;

	if (cartId) {
		try {
			const cart = await getCartById(cartId);
			return cart;
		} catch (err) {
			console.error("Error retrieving cart from cookie:", err);
			cookies().delete("cartId");
		}
	}

	return null;
};

const createNewCart = async () => {
	try {
		const createCartResponse = await executeGraphql({
			query: CartFindOrCreateDocument,
			variables: { items: [] },
			cache: "no-store",
			next: {
				tags: ["cart"],
			},
		});

		if (!createCartResponse || !createCartResponse.cartFindOrCreate) {
			throw new Error("Failed to create a new cart");
		}

		const newCart = createCartResponse.cartFindOrCreate;

		cookies().set("cartId", newCart.id, {
			maxAge: 60 * 60 * 24 * 365, // 1 rok
			expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
			httpOnly: true,
			sameSite: "lax",
			priority: "low",
		});

		return newCart;
	} catch (err) {
		console.error("Error creating new cart:", err);
		throw new Error("Failed to create a new cart");
	}
};

export const findOrCreateCart = async () => {
	const existingCart = await getCartFromCookie();

	if (existingCart) {
		return existingCart;
	}

	return await createNewCart();
};

export const addToCart = async ({ productId, quantity }: CartItemInput) => {
	try {
		const cartId = (await findOrCreateCart()).id;

		const input = { productId, quantity };

		const response = await executeGraphql({
			query: CartAddProductDocument,
			variables: { cartAddItemId: cartId, input },
			cache: "no-store",
			next: {
				tags: ["cart"],
			},
		});

		if (!response || !response.cartAddItem) {
			throw new Error("Failed to add item to cart");
		}

		return response.cartAddItem;
	} catch (err) {
		console.error("Error adding product to cart:", err);
		throw new Error(`Unable to add product to cart: ${err}`);
	}
};

export const changeItemQuantity = async (productId: string, quantity: number) => {
	const cartId = (await findOrCreateCart()).id;
	await executeGraphql({
		query: CartSetProductQuantityDocument,
		variables: { cartId, productId, quantity },
		cache: "no-store",
		next: {
			tags: ["cart"],
		},
	});
	revalidateTag("cart");
};

export const removeItem = async (productId: string) => {
	const cartId = (await findOrCreateCart()).id;
	await executeGraphql({
		query: CartRemoveProductDocument,
		variables: { cartId, productId },
		cache: "no-store",
		next: {
			tags: ["cart"],
		},
	});
};

export const handlePaymentAction = async () => {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing Stripe secret key");
	}

	const cart = await findOrCreateCart();

	if (!cart) {
		throw new Error("Cart not found");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2024-06-20",
		typescript: true,
	});

	const checkoutSession = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		metadata: {
			cartId: cart.id,
		},
		line_items: cart.items.map(({ product, quantity }) => ({
			price_data: {
				currency: "usd",
				product_data: {
					name: product.name || "",
				},
				unit_amount: product.price || 0,
			},
			quantity,
		})),
		mode: "payment",
		success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart/success?sessionId={CHECKOUT_SESSION_ID}`,
		cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart/cancel`,
	});

	if (!checkoutSession.url) {
		throw new Error("Failed to create checkout session");
	}

	cookies().set("cartId", "");

	redirect(checkoutSession.url);
};
