import NextImage from "next/image";
import { type FC } from "react";

type ProductImagesProps = {
	productImages: {
		url: string;
		alt: string;
		width: number;
		height: number;
	};
};

export const ProductCoverImage: FC<ProductImagesProps> = ({
	productImages: { url, alt, width, height },
}) => {
	return (
		<NextImage
			src={url}
			alt={alt}
			width={width}
			height={height}
			className="rounded-md bg-zinc-100 object-cover p-5 transition hover:p-3"
		/>
	);
};
