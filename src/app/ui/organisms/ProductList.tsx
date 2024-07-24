import { ProductListItem } from "@/app/ui/molecules/ProductListItem";
import { type ProductItemType } from "@/app/types";

export const ProductList = ({ products }: { products: ProductItemType[] }) => {
	return (
		<ul className="grid grid-cols-4">
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
