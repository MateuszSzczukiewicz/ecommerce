import { Suspense } from "react";
import { getProductById } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductsListItemDescription";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return (
		<>
			<article className="max-w-xs">
				<ProductCoverImage {...product.coverImage} />
				<ProductListItemDescription product={product} />
			</article>
			<aside>
				<Suspense fallback>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
}
