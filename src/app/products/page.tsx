import { Suspense } from "react";
import { ProductsList } from "@/ui/organisms/ProductsList";

export default async function ProductsPage() {
	return (
		<div>
			<h2 className="m-4 from-zinc-950 text-xl font-semibold">Lista produktów</h2>
			<ul>
				<Suspense>
					<ProductsList page={1} />
				</Suspense>
			</ul>
		</div>
	);
}
