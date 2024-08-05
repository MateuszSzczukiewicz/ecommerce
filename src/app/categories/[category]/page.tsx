import { Suspense } from "react";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { Pagination } from "@/ui/molecules/Pagination";
import { getProductsList } from "@/api/products";

export default async function CategoriesPage({
	params,
	searchParams,
}: {
	params: { category: string };
	searchParams: { [key: string]: string[] | undefined };
}) {
	const page = Number(searchParams["page"] ?? 1);
	const take = Number(searchParams["take"] ?? 10);

	const { total } = await getProductsList();
	const totalPages = Math.ceil(total / take);

	return (
		<>
			<ul>
				<Suspense>
					<ProductsList page={page} take={take} category={params.category} />
				</Suspense>
			</ul>
			<Pagination currentPage={page} take={take} totalPages={totalPages} />
		</>
	);
}
