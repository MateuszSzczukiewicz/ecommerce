import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById, getProductsList } from "@/api/products";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";
import { formatMoney } from "@/app/utils";

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
				<img src={product.image} alt={product.title} />
				<div>
					<h1>{product.title}</h1>
					<h2>{product.category}</h2>
					<p>{formatMoney(product.price / 100)}</p>
					<p>{product.longDescription}</p>
					<div>
						<h3>Ocena: {product.rating.rate}</h3>
						<p>Oceniono: {product.rating.count} razy</p>
					</div>
				</div>
			</article>
			<aside>
				<Suspense fallback>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</div>
	);
}
