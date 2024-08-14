import { CartFindOrCreateDocument, CartItemInput } from "./../gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";
import { CartAddProductDocument, CartGetByIdDocument } from "@/gql/graphql";
import { cookies } from "next/headers";

export const getCartById = async (cartId: string) => {
	return executeGraphql(CartGetByIdDocument, { id: cartId });
};

export const findOrCreateCart = async () => {
	const cartId = cookies().get("cartId")?.value;

	if (cartId) {
		try {
			const { cart } = await getCartById(cartId);

			if (!cart) throw new Error("Cart not found");

			const response = await executeGraphql(CartFindOrCreateDocument, {
				id: cart.id,
				items: cart.items.map(({ product, quantity }) => ({
					productId: product.id,
					quantity,
				})),
			});
			return response.cartFindOrCreate;
		} catch (err) {
			console.error("Error fetching cart by id", err);
			cookies().delete("cartId");
		}
	}

	const createCartResponse = await executeGraphql(CartFindOrCreateDocument, {
		items: [],
	});

	const newCart = createCartResponse.cartFindOrCreate;

	cookies().set("cartId", newCart.id, {
		httpOnly: true,
		sameSite: "lax",
	});

	return newCart;
};

export const addToCart = async ({ productId, quantity }: CartItemInput) => {
	const cartId = (await findOrCreateCart()).id;

	const item = {
		productId,
		quantity,
	};

	await executeGraphql(CartAddProductDocument, {
		cartId,
		item,
	});
};
