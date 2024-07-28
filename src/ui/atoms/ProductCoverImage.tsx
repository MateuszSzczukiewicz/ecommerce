export const ProductCoverImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<img
			src={src}
			alt={alt}
			className="h-80 w-80 rounded-md bg-zinc-100 object-cover p-5 transition hover:p-0"
		/>
	);
};
