import { getSuggestedProductsList } from "@/api/products";
import { ProductsList } from "@/ui/organisms/ProductsList";

export const SuggestedProductsList = async () => {
	const suggestedProducts = await getSuggestedProductsList();

	return (
		<>
			<h2 className="text-2xl font-semibold">Suggested products: </h2>
			<ProductsList products={suggestedProducts} />
		</>
	);
};
