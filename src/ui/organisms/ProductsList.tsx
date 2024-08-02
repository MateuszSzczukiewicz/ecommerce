import { type FC } from "react";
import { type ProductItemType } from "@/app/types";
import { ProductsListItem } from "@/ui/molecules/ProductsListItem";
import { getProductsList } from "@/api/products";

type ProductsListProps = {
	page: number;
	take: number;
};

export const ProductsList: FC<ProductsListProps> = async ({ page, take }) => {
	const skip = (page - 1) * take;

	const { data: products } = await getProductsList(take, skip);

	return (
		<ul className="grid grid-cols-4 gap-10">
			{products.map((product: ProductItemType) => (
				<ProductsListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
