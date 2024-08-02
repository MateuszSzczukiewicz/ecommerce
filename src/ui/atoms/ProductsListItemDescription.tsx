import { type FC } from "react";
import { formatMoney } from "@/app/utils";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductListItemDescriptionProps = {
	product: ProductListItemFragment;
};

export const ProductListItemDescription: FC<ProductListItemDescriptionProps> = ({
	product: { name, price, categories },
}) => {
	const categoryName = categories[0].name;

	return (
		<div className="mt-3 flex justify-between">
			<div>
				<h3 className="font-semibold">{name}</h3>
				<p>{categoryName}</p>
			</div>
			<p className="font-semibold">{formatMoney(price / 100)}</p>
		</div>
	);
};
