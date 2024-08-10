import { Suspense } from "react";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { Pagination } from "@/ui/molecules/Pagination";
import { getCollectionProducts } from "@/api/collections";
import { PAGE_SIZE } from "@/app/consts";

export default async function CollectionsPage({
	params,
	searchParams,
}: {
	params: { collection: string };
	searchParams: { [key: string]: string[] | undefined };
}) {
	const page = Number(searchParams["page"] ?? 1);
	const take = Number(searchParams["take"] ?? PAGE_SIZE);

	const collectionProducts = await getCollectionProducts(params.collection);

	if (!collectionProducts) return <div>Brak produktów</div>;

	const totalPages = Math.ceil(collectionProducts.products.length / take);

	const startIndex = (page - 1) * take;
	const endIndex = startIndex + take;

	const productsOnPage = collectionProducts.products.slice(startIndex, endIndex);

	return (
		<Suspense>
			<ul>
				<ProductsList products={productsOnPage} />
			</ul>
			<Pagination currentPage={page} take={take} totalPages={totalPages} />
		</Suspense>
	);
}
