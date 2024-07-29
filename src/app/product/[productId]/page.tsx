import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById, getProductsList } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductsListItemDescription";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";

export const generateStaticParams = async () => {
	const products = await getProductsList();
	return products.map((product) => ({
		productId: product.id,
	}));
};

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: `${product.title} - Sklep internetowy`,
		description: `${product.longDescription}`,
		openGraph: {
			title: `${product.title} - Sklep internetowy`,
			description: `${product.longDescription}`,
			images: [{ url: product.image }],
		},
	};
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return (
		<div className="flex flex-col gap-20">
			<article className="flex items-center justify-around">
				<ProductCoverImage src={product.image} alt={product.title} />
				<ProductListItemDescription product={product} />
			</article>
			<aside className="">
				<Suspense fallback>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</div>
	);
}
