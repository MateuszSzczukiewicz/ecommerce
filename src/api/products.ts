import {
	ProductGetByIdDocument,
	ProductsGetListDocument,
	ProductsGetSuggestedDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";

export const getProductsList = async (take: number = 10, skip: number = 0) => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {
		take,
		skip,
	});

	const data = graphqlResponse.products.data;

	const total = graphqlResponse.products.meta.total;

	return {
		data,
		total,
	};
};

export const getProductById = async (id: string) => {
	const graphqlResponse = await executeGraphql(ProductGetByIdDocument, {
		id,
	});

	return graphqlResponse.product;
};

export const getSuggestedProductsList = async (take: number = 4) => {
	const graphqlResponse = await executeGraphql(ProductsGetSuggestedDocument, {
		take,
	});

	return graphqlResponse.products.data;
};
