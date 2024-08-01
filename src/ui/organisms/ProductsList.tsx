import { getProductsList } from "@/api/products";
import { type ProductItemType } from "@/app/types";
import { ProductsListItem } from "@/ui/molecules/ProductsListItem";

export const ProductsList = async ({ page, take }: { page: number; take: number }) => {
	const products = await getProductsList();

	return (
		<ul className="grid grid-cols-4 gap-10">
			{products.map((product: ProductItemType) => (
				<ProductsListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
