import { type Metadata } from "next";
import { getProductById, getProductsList } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductDetails } from "@/ui/atoms/ProductDetails";

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
		<article className="flex justify-center gap-10">
			<ProductCoverImage productImages={product.images} />
			<ProductDetails product={product} />
		</article>
	);
}
