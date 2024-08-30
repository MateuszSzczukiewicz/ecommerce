import { executeGraphql } from "@/api/graphqlApi";
import { OrdersGetByEmailDocument } from "@/gql/graphql";

export const getOrdersByEmail = async (email: string) => {
	const graphqlResponse = await executeGraphql({
		query: OrdersGetByEmailDocument,
		variables: { email },
	});

	return graphqlResponse.orders;
};
