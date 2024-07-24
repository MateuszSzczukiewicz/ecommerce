import { type ProductItemType } from "@/app/types";
import { ProductCoverImage } from "@/app/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/app/ui/atoms/ProductListItemDescription";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<article className="w-80">
				<ProductCoverImage {...product.coverImage} />
				<ProductListItemDescription product={product} />
			</article>
		</li>
	);
};
