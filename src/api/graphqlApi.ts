import { type TypedDocumentString } from "@/gql/graphql";

type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };

export const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined");
	}

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	const GraphQLResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (GraphQLResponse.errors) {
		throw new TypeError(`GraphQL Error`, {
			cause: GraphQLResponse.errors,
		});
	}

	return GraphQLResponse.data;
};