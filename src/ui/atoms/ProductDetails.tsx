import { type FC } from "react";
import { formatMoney } from "@/app/utils";
import { type ProductListItemFragment } from "@/gql/graphql";
import { AddToCartButton } from "@/ui/atoms/AddToCartButton";
import { addToCart } from "@/api/cart";

type ProductDetailsProps = {
	product: ProductListItemFragment;
};

export const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
	const addProductToCartAction = async () => {
		"use server";
		const productId = product.id;
		await addToCart({ productId });
	};

	return (
		<div className="flex w-1/3 flex-col gap-5">
			<h1 className="text-4xl font-bold">{product.name}</h1>
			<p className="text-xl font-semibold">{formatMoney(product.price / 100)}</p>
			<p className="text-lg">{product.description}</p>
			<form action={addProductToCartAction}>
				<AddToCartButton />
			</form>
		</div>
	);
};
