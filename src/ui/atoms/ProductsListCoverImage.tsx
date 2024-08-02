// import NextImage from "next/image";
import { type FC } from "react";
import { type ProductImageType } from "@/app/types";

type ProductImageProps = {
	productImage: ProductImageType;
};

export const ProductsListCoverImage: FC<ProductImageProps> = ({
	productImage: { url, alt, width, height },
}) => {
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
