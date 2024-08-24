import { CollectionsGetListDocument, CollectionsGetProductsDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";

export const getCollectionsList = async () => {
	const graphqlResponse = await executeGraphql({
		query: CollectionsGetListDocument,
	});

	return graphqlResponse.collections.data;
};

export const getCollectionProducts = async (slug: string) => {
	const graphqlResponse = await executeGraphql({
		query: CollectionsGetProductsDocument,
		variables: { slug },
	});

	return graphqlResponse.collection;
};
