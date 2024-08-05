import { type FC } from "react";
import { ProductsListItem } from "@/ui/molecules/ProductsListItem";
import { getProductsList } from "@/api/products";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductsListProps = {
	page: number;
	take: number;
	category?: string;
};

export const ProductsList: FC<ProductsListProps> = async ({ page, take, category: name }) => {
	const skip = (page - 1) * take;

	const { data: products } = await getProductsList(take, skip);

	const filteredProducts = name
		? products.filter((product: ProductListItemFragment) =>
				product.categories.some((category) => category.slug === name),
			)
		: products;

	return (
		<ul className="grid grid-cols-4 gap-10">
			{filteredProducts.map((product: ProductListItemFragment) => (
				<ProductsListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
