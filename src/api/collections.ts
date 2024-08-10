import { CollectionsGetListDocument, CollectionsGetProductsDocument } from "./../gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";

export const getCollectionsList = async () => {
	const graphqlResponse = await executeGraphql(CollectionsGetListDocument);

	return graphqlResponse.collections.data;
};

export const getCollectionProducts = async (slug: string) => {
	const graphqlResponse = await executeGraphql(CollectionsGetProductsDocument, { slug });

	return graphqlResponse.collection;
};
