import {
	ProductGetByIdDocument,
	ProductsGetListDocument,
	ProductsGetSuggestedDocument,
	ProductSortBy,
	ProductsSearchListDocument,
	SortDirection,
} from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";
import { PAGE_SIZE } from "@/app/consts";

export const getProductsList = async (take = PAGE_SIZE, skip = 0) => {
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

export const getSuggestedProductsList = async (
	take = 4,
	order = SortDirection.Desc,
	orderBy = ProductSortBy.Rating,
) => {
	const graphqlResponse = await executeGraphql(ProductsGetSuggestedDocument, {
		take,
		order,
		orderBy,
	});

	return graphqlResponse.products.data;
};

export const getProductsSearchList = async (take = PAGE_SIZE, skip = 0, searchTerm: string) => {
	const graphqlResponse = await executeGraphql(ProductsSearchListDocument, {
		take,
		skip,
		searchTerm,
	});

	const data = graphqlResponse.products.data;

	const total = graphqlResponse.products.meta.total;

	return {
		data,
		total,
	};
};
