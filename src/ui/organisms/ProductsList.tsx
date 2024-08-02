import { type FC } from "react";
import { ProductsListItem } from "@/ui/molecules/ProductsListItem";
import { getProductsList } from "@/api/products";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductsListProps = {
	page: number;
	take: number;
};

export const ProductsList: FC<ProductsListProps> = async ({ page, take }) => {
	const skip = (page - 1) * take;

	const { data: products } = await getProductsList(take, skip);

	return (
		<ul className="grid grid-cols-4 gap-10">
			{products.map((product: ProductListItemFragment) => (
				<ProductsListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
