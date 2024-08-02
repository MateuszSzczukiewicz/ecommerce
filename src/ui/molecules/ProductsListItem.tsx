import Link from "next/link";
import { type FC } from "react";
import { ProductListItemDescription } from "@/ui/atoms/ProductsListItemDescription";
import { type ProductListItemFragment } from "@/gql/graphql";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";

type ProductListItemProps = {
	product: ProductListItemFragment;
};

export const ProductsListItem: FC<ProductListItemProps> = ({ product }) => {
	return (
		<li>
			<Link href={{ pathname: `/products/${product.id}` }}>
				<article className="w-80">
					<ProductCoverImage product={product} />
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
