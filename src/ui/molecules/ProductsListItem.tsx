import Link from "next/link";
import { type FC } from "react";
import { type ProductItemType } from "@/app/types";
import { ProductsListCoverImage } from "@/ui/atoms/ProductsListCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductsListItemDescription";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductsListItem: FC<ProductListItemProps> = ({ product }) => {
	return (
		<li>
			<Link href={{ pathname: `/products/${product.id}` }}>
				<article className="w-80">
					<ProductsListCoverImage productImages={product.images} />
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
