import { type ProductItemType } from "./../app/types";
import { ProductsGetListDocument, type TypedDocumentString } from "@/gql/graphql";

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

export const getProductsList = async (): Promise<ProductItemType[]> => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument);

	return graphqlResponse.products.data.map((p) => {
		return {
			id: p.id,
			name: p.name,
			description: p.description,
			images: p.images.map((image) => ({
				url: image.url,
				alt: image.alt,
				width: image.width,
				height: image.height,
			})),
			price: p.price,
		};
	});
};
