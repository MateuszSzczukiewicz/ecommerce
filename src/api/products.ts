import { type ProductItemType } from "@/app/types";

export const getProductsList = async () => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products");
	const productsResponse = (await res.json()) as ProductItemType[];
	const products = productsResponse.map(productResponseItemToProductItemType);
	return products;
};

export const getProductsListByPage = async ({ page }: { page: number }) => {
	const offset = 20 * (page - 1);
	const take = 20;
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?offset=${offset}&take=${take}`,
	);
	const products = (await res.json()) as ProductItemType[];
	return products;
};

export const getProductById = async (id: ProductItemType["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = (await res.json()) as ProductItemType;
	return productResponseItemToProductItemType(productResponse);
};

const productResponseItemToProductItemType = (product: ProductItemType): ProductItemType => {
	return {
		id: product.id,
		title: product.title,
		description: product.description,
		category: product.category,
		price: product.price,
		rating: {
			rate: product.rating.rate,
			count: product.rating.count,
		},
		image: product.image,
		longDescription: product.longDescription,
	};
};
