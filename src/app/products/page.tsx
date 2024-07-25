import { Suspense } from "react";
import { ProductsList } from "@/ui/organisms/ProductsList";

export default async function ProductsPage() {
	return (
		<div>
			<h2 className="mb-4 text-xl font-bold">Lista produktów</h2>
			<ul>
				<Suspense>
					<ProductsList page={1} />
				</Suspense>
				<Suspense>
					<ProductsList page={2} />
				</Suspense>
			</ul>
		</div>
	);
}
