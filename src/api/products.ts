import { type ProductItemType } from "@/app/types";

export const getProductsList = async () => {
	type ProductResponseItem = {
		id: string;
		title: string;
		price: number;
		description: string;
		category: string;
		rating: {
			rate: number;
			count: number;
		};
		image: string;
		longDescription: string;
	};

	const res = await fetch("https://naszsklep-api.vercel.app/api/products");
	const productsResponse = (await res.json()) as ProductResponseItem[];
	const products = productsResponse.map(
		(product): ProductItemType => ({
			id: product.id,
			name: product.title,
			category: product.category,
			price: product.price,
			coverImage: {
				src: product.image,
				alt: product.title,
			},
		}),
	);
	return products;
};
