"use server";

import { CartFindOrCreateDocument, CartItemInput, CartRemoveProductDocument } from "../gql/graphql";
import { CartSetProductQuantityDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";
import { CartAddProductDocument, CartGetByIdDocument } from "@/gql/graphql";
import { cookies } from "next/headers";
import Stripe from "stripe";
import { redirect } from "next/navigation";

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
		return await getCartById(cartId);
	}

	return null;
};

const createNewCart = async () => {
	"use server";
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
			maxAge: 60 * 60 * 24 * 365,
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
	const cartId = cookies().get("cartId")?.value;

	if (cartId) {
		try {
			const cart = await getCartById(cartId);

			if (!cart) {
				cookies().delete("cartId");
				return await createNewCart();
			}

			const response = await executeGraphql({
				query: CartFindOrCreateDocument,
				variables: { id: cart.id, items: [] },
				cache: "no-store",
				next: {
					tags: ["cart"],
				},
			});

			if (!response || !response.cartFindOrCreate) {
				throw new Error("Failed to create or update cart");
			}

			return response.cartFindOrCreate;
		} catch (err) {
			console.error("Error fetching or updating cart by id:", err);
			cookies().delete("cartId");
			throw new Error("Failed to fetch or update cart, deleted cartId cookie");
		}
	}

	return await createNewCart();
};

export const addToCart = async ({ productId, quantity }: CartItemInput) => {
	try {
		const cartAddItemId = (await findOrCreateCart()).id;

		const input = { productId, quantity };

		const response = await executeGraphql({
			query: CartAddProductDocument,
			variables: { cartAddItemId, input },
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

export const handlePaymantAction = async () => {
	"use server";

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing Stripe secret key");
	}

	const cart = await getCartFromCookie();

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
