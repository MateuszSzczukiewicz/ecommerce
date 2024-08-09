import { getSuggestedProductsList } from "@/api/products";
import { type ProductListItemFragment } from "@/gql/graphql";
import { ProductsListItem } from "@/ui/molecules/ProductsListItem";

export const SuggestedProductsList = async () => {
	const suggestedProducts = await getSuggestedProductsList();

	return (
		<ul className="grid grid-cols-4 gap-10">
			{suggestedProducts.map((product: ProductListItemFragment) => (
				<ProductsListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
