import { type ProductsResponseType, type ProductItemType } from "@/app/types";
import { ProductsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";

export const getProductsList = async (
	take?: number,
	skip?: number,
): Promise<ProductsResponseType> => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {
		take,
		skip,
	});

	const data: ProductItemType[] = graphqlResponse.products.data.map((p) => ({
		id: p.id,
		name: p.name,
		description: p.description,
		categories: p.categories.map((c) => ({
			name: c.name,
		})),
		images: p.images.map((i) => ({
			url: i.url,
			alt: i.alt,
			width: i.width,
			height: i.height,
		})),
		price: p.price,
	}));

	const total = graphqlResponse.products.meta.total;

	return {
		data,
		total,
	};
};
