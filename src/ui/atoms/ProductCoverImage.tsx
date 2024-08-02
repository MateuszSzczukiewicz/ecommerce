// import NextImage from "next/image";
import { type FC } from "react";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductCoverImageProps = {
	product: ProductListItemFragment;
};

export const ProductCoverImage: FC<ProductCoverImageProps> = ({ product }) => {
	const { url, alt, width, height } = product.images[0];

	return (
		<img
			src={url}
			alt={alt}
			width={width}
			height={height}
			className="rounded-md bg-zinc-100 object-cover p-5 transition hover:p-3"
		/>
	);
};
