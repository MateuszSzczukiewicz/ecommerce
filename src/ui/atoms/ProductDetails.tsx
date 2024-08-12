import { type FC } from "react";
import { formatMoney } from "@/app/utils";
import { CartGetByIdDocument, type ProductListItemFragment } from "@/gql/graphql";
import { cookies } from "next/headers";
import { executeGraphql } from "@/api/graphqlApi";

type ProductDetailsProps = {
	product: ProductListItemFragment;
};

export const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
	async function addProductToCartAction(formData: FormData) {
		"use  server";
		const cart = await getOrCreateCart();
        cookies.().set("cartId", cart.id, {
            httpOnly: true,
            sameSite: "lax",
            // secure: true
        });
		await addToCart(cart.id, product.productId);
	}

	return (
		<div className="flex w-1/3 flex-col gap-5">
			<h1 className="text-4xl font-bold">{product.name}</h1>
			<p className="text-xl font-semibold">{formatMoney(product.price / 100)}</p>
			<p className="text-lg">{product.description}</p>
			<form action={addProductToCartAction}>
				<input type="hidden" name="productId" value={product.id} />
				<button
					type="submit"
					className="w-full rounded-md border bg-slate-700 px-8 py-3 text-white"
				>
					Add to cart
				</button>
			</form>
		</div>
	);
};

async function getOrCreateCart(): Promise<CartFragment> {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await getCartById(cartId);
		if (cart.order) {
			return cart.order;
		}
	}

	const cart = await createCart();
	if (!cart.createOrder) {
		throw new Error("Failed to create cart");
	}
	return cart.createOrder;
}

async function getCartById(cartId: string) {
	executeGraphql(CartGetByIdDocument, { id: cartId });
}

async function createCart() {
	return executeGraphql(CartCreateDocument, {});
}

function addToCart(orderId: string, productId: string) {
    const product = await executeGraphql(ProductGetById, {
        id: productId
    })
    if(!product.product) {
        throw new Error("Product not found")
    }

    await executeGraphql(CartAddProductDocument, {
        orderId,
        productId,
        total: product.product.price
    });
}
