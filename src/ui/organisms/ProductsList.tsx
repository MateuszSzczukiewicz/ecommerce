import { type FC } from "react";
import { ProductsListItem } from "@/ui/molecules/ProductsListItem";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductsListProps = {
	products: ProductListItemFragment[];
};

export const ProductsList: FC<ProductsListProps> = async ({ products }: ProductsListProps) => {
	return (
		<ul className="grid grid-cols-4 gap-10">
			{products.map((product: ProductListItemFragment) => (
				<ProductsListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
