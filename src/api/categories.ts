import { executeGraphql } from "@/api/graphqlApi";
import { CategoriesGetListDocument, CategoriesGetProductsDocument } from "@/gql/graphql";

export const getCategoriesList = async () => {
	const graphqlResponse = await executeGraphql({
		query: CategoriesGetListDocument,
	});

	return graphqlResponse.categories.data;
};

export const getCategoryProducts = async (slug: string) => {
	const graphqlResponse = await executeGraphql({
		query: CategoriesGetProductsDocument,
		variables: { slug },
	});

	return graphqlResponse.category;
};
