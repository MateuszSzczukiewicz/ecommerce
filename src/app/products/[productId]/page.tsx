import { type Metadata } from "next";
import { getProductById, getProductsList } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductDetails } from "@/ui/atoms/ProductDetails";
import { addToCart } from "@/api/cart";
import { revalidateTag } from "next/cache";
import { ProductListItemFragment } from "@/gql/graphql";

export const generateStaticParams = async () => {
	const { data: products } = await getProductsList();
	return products.map((product: ProductListItemFragment) => ({
		productId: product.id,
	}));
};

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);

	if (!product) throw new Error(`Could not get product ${params.productId}`);

	const productImages = product.images[0];
	return {
		title: `${product.name} - Sklep internetowy`,
		description: `${product.description}`,
		openGraph: {
			title: `${product.name} - Sklep internetowy`,
			description: `${product.description}`,
			images: [{ url: productImages.url }],
		},
	};
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	const productId = product.id;

	if (!product) return <div>Product not found</div>;

	async function addToCartAction(_formData: FormData) {
		"use server";

		await addToCart({ productId });

		revalidateTag("cart");
	}

	return (
		<article className="flex justify-center gap-10">
			<ProductCoverImage product={product} />
			<ProductDetails product={product} />
		</article>
	);
}
