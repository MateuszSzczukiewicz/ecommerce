import Link from "next/link";
import { type ProductItemType } from "@/app/types";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductsListItemDescription";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductsListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<Link href={{ pathname: `/products/${product.id}` }}>
				<article className="w-80">
					<ProductCoverImage {...product.coverImage} />
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
