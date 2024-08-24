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
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListDocument,
		variables: { take, skip },
		next: {
			revalidate: 60 * 60 * 24,
		},
	});

	const data = graphqlResponse.products.data;
	const total = graphqlResponse.products.meta.total;

	return { data, total };
};

export const getProductById = async (id: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id },
		next: {
			revalidate: 60 * 60 * 24,
		},
	});

	return graphqlResponse.product;
};

export const getSuggestedProductsList = async (
	take = 4,
	order = SortDirection.Desc,
	orderBy = ProductSortBy.Rating,
) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetSuggestedDocument,
		variables: { take, order, orderBy },
		next: {
			revalidate: 60 * 60 * 24,
		},
	});

	return graphqlResponse.products.data;
};

export const getProductsSearchList = async (take = PAGE_SIZE, skip = 0, searchTerm: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsSearchListDocument,
		variables: { take, skip, searchTerm },
		next: {
			revalidate: 60 * 60 * 24,
		},
	});

	const data = graphqlResponse.products.data;
	const total = graphqlResponse.products.meta.total;

	return { data, total };
};
