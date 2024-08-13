import { executeGraphql } from "@/api/graphqlApi";
import {
	CartAddProductDocument,
	CartGetByIdDocument,
	CartGetOrCreateDocument,
	CartItem,
	CartItemInput,
	CartListItemFragment,
	ProductGetByIdDocument,
} from "@/gql/graphql";
import { cookies } from "next/headers";

export const getCartById = async (cartId: string) => {
	executeGraphql(CartGetByIdDocument, { id: cartId });
};

export const getOrCreateCart = async (items?: CartItemInput[]) => {
	const cartId = cookies().get("cartId")?.value;

	if (cartId) {
		try {
			const cart = await getCartById(cartId);
			return cart;
		} catch (err) {
			console.error("Error fetching cart by id", err);
			cookies().delete("cartId");
		}
	}

	const input = {
		items: items.map((item) => ({
			productId: item.productId,
			quantity: item.quantity ?? 1,
		})),
	};

	const newCart = await executeGraphql(CartGetOrCreateDocument, { id: "123", input });

	if (!newCart) {
		throw new Error("Failed to create or retrieve the cart.");
	}
	cookies().set("cartId", newCart.cartFindOrCreate.id, {
		httpOnly: true,
		sameSite: "lax",
		// secure: true
	});

	return newCart;
};

export const addToCart = async (orderId: string, productId: string) => {
	const cartId = cookies().get("cartId")?.value;

	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id: productId,
	});

	if (!product) {
		throw new Error("Product not found");
	}

	await executeGraphql(CartAddProductDocument, {
		cartId,
		productId,
		total: product.price,
	});
};
