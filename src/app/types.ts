export type ProductCategoryType = {
	name: string;
};

export type ProductImageType = {
	url: string;
	alt: string;
	width: number;
	height: number;
};

export type ProductItemType = {
	id: string;
	name: string;
	description: string;
	categories: ProductCategoryType[];
	images: ProductImageType[];
	price: number;
};

export type ProductsResponseType = {
	data: ProductItemType[];
	total: number;
};
