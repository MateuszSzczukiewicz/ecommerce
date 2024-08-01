import { type FC } from "react";
import { type ProductItemType } from "@/app/types";
import { formatMoney } from "@/app/utils";

type ProductDetailsProps = {
	product: ProductItemType;
};

export const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
	return (
		<div className="flex w-1/3 flex-col gap-5">
			<h1 className="text-4xl font-bold">{product.title}</h1>
			<p className="text-xl font-semibold">{formatMoney(product.price / 100)}</p>
			<p className="text-lg">{product.description}</p>
		</div>
	);
};