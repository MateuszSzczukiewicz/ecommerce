export default async function BlogPage({ params }: { params: { pathname: string[] } }) {
	const pathname = params.pathname?.join("/") ?? [];
	return (
		<div>
			<h1>Blog {pathname}</h1>
		</div>
	);
}
