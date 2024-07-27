import { type ProductItemType } from "@/app/types";
import { formatMoney } from "@/app/utils";

type ProductListItemDescriptionProps = {
	product: ProductItemType;
};

export const ProductListItemDescription = ({
	product: { category, title, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-3 flex justify-between">
			<div>
				<h3 className="font-semibold">{title}</h3>
				<p>{category}</p>
			</div>
			<p className="font-semibold">{formatMoney(price / 100)}</p>
		</div>
	);
};
