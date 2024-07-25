import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsList } from "@/api/products";

export default async function ProductsPage() {
	const products = await getProductsList();

	return (
		<section className="bg-zinc-200 px-20 py-40">
			<ProductList products={products} />
		</section>
	);
}
