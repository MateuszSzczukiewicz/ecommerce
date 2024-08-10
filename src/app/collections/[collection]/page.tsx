import { Suspense } from "react";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { Pagination } from "@/ui/molecules/Pagination";
import { getCollectionProducts } from "@/api/collections";

export default async function CollectionsPage({
	params,
	searchParams,
}: {
	params: { collection: string };
	searchParams: { [key: string]: string[] | undefined };
}) {
	const page = Number(searchParams["page"] ?? 1);
	const take = Number(searchParams["take"] ?? 10);

	const collectionProducts = await getCollectionProducts(params.collection);

	if (!collectionProducts) return <div>Brak produktów</div>;

	const totalPages = Math.ceil(collectionProducts.products.length / take);

	return (
		<>
			<ul>
				<Suspense>
					<ProductsList products={collectionProducts.products} />
				</Suspense>
			</ul>
			<Pagination currentPage={page} take={take} totalPages={totalPages} />
		</>
	);
}
