import { CollectionsGetListDocument, CollectionsGetProductsDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";

export const getCollectionsList = async () => {
	const graphqlResponse = await executeGraphql({
		query: CollectionsGetListDocument,
		next: {
			revalidate: 60 * 60 * 24,
		},
	});

	return graphqlResponse.collections.data;
};

export const getCollectionProducts = async (slug: string) => {
	const graphqlResponse = await executeGraphql({
		query: CollectionsGetProductsDocument,
		variables: { slug },
		next: {
			revalidate: 60 * 60 * 24,
		},
	});

	return graphqlResponse.collection;
};
