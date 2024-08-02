import { ProductGetByIdDocument, ProductsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";

export const getProductsList = async (take?: number, skip?: number) => {
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
