export type ProductItemType = {
	id: string;
	name: string;
	description: string;
	images: {
		url: string;
		alt: string;
		width: number;
		height: number;
	}[];
	price: number;
};
