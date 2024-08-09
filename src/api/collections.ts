import { executeGraphql } from "@/api/graphqlApi";
import { CollectionsGetListDocument } from "@/gql/graphql";

export const getCollectionsList = async () => {
	const graphqlResponse = await executeGraphql(CollectionsGetListDocument);

	return graphqlResponse.collections.data;
};
