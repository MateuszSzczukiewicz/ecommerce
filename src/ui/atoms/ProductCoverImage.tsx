export const ProductCoverImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<img
			src={src}
			alt={alt}
			className="rounded-md bg-zinc-100 p-5 transition hover:p-0"
			width="320"
			height="320"
		/>
	);
};
