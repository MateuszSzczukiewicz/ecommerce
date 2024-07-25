export const ProductsList = async ({ page }: { page: number }) => {
	const take = 10;
	const offset = 10 * (page - 1);
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?offset=${offset}&take=${take}`,
	);
	const products = (await res.json()) as { id: string; title: string }[];

	return (
		<>
			{products.map((product) => (
				<li key={product.id}>{product.title}</li>
			))}
		</>
	);
};
