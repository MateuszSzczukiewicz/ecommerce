import { type FC } from "react";
import { formatMoney } from "@/app/utils";
import { type ProductListItemFragment } from "@/gql/graphql";
import { addToCart, getOrCreateCart } from "@/api/carts";

type ProductDetailsProps = {
	product: ProductListItemFragment;
};

export const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
	async function addProductToCartAction(formData: FormData) {
		"use server";
		const cart = await getOrCreateCart();

		await addToCart(cart.id, product.id);
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
