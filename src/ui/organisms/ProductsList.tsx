import { type ProductItemType } from "@/app/types";
import { getProductsListByPage } from "@/api/products";
import { ProductsListItem } from "@/ui/molecules/ProductsListItem";

export const ProductsList = async ({ page }: { page: number }) => {
	const products = await getProductsListByPage({ page });
	return (
		<ul className="grid grid-cols-4 gap-5">
			{products.map((product: ProductItemType) => (
				<ProductsListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
