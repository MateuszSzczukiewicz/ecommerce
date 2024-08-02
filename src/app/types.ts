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
	price: number;
	categories: ProductCategoryType[];
	images: ProductImageType[];
};

export type ProductsResponseType = {
	data: ProductItemType[];
	total: number;
};

export type SingleProductResponseType = {
	product?: ProductItemType | null;
};
