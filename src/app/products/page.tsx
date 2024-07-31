import { Suspense } from "react";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { Pagination } from "@/ui/molecules/Pagination";
import { getProductsList } from "@/api/products";

export default async function ProductsPage({
	searchParams,
}: {
	searchParams: { [key: string]: string[] | undefined };
}) {
	const page = Number(searchParams["page"] ?? 1);
	const take = Number(searchParams["take"] ?? 20);
	const totalPages = Math.ceil((await getProductsList()).length / take);

	return (
		<div>
			<h2 className="m-4 from-zinc-950 text-xl font-semibold">Lista produktów</h2>
			<ul>
				<Suspense>
					<ProductsList page={page} take={take} />
				</Suspense>
			</ul>
			<Pagination currentPage={page} take={take} totalPages={totalPages} />
		</div>
	);
}
