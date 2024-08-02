import {
	type ProductsResponseType,
	type ProductItemType,
	type SingleProductResponseType,
} from "@/app/types";
import { ProductGetByIdDocument, ProductsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";

export const getProductsList = async (
	take?: number,
	skip?: number,
): Promise<ProductsResponseType> => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {
		take,
		skip,
	});

	const data: ProductItemType[] = graphqlResponse.products.data.map((p) => ({
		id: p.id,
		name: p.name,
		description: p.description,
		categories: p.categories.map((c) => ({
			name: c.name,
		})),
		images: p.images.map((i) => ({
			url: i.url,
			alt: i.alt,
			width: i.width,
			height: i.height,
		})),
		price: p.price,
	}));

	const total = graphqlResponse.products.meta.total;

	return {
		data,
		total,
	};
};

export const getProductById = async (id: string): Promise<ProductItemType> => {
	const { product: p }: SingleProductResponseType = await executeGraphql(ProductGetByIdDocument, {
		id,
	});

	if (!p) throw new Error(`Product not found with id: ${id}`);

	return {
		id: p.id,
		name: p.name,
		description: p.description,
		price: p.price,
		categories: p.categories.map((c) => ({
			name: c.name,
		})),
		images: p.images.map((i) => ({
			url: i.url,
			alt: i.alt,
			width: i.width,
			height: i.height,
		})),
	};
};
