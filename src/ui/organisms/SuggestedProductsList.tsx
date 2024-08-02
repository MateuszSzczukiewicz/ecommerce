import { ProductsList } from "@/ui/organisms/ProductsList";

export const SuggestedProductsList = async () => {
	return <ProductsList page={1} take={4} />;
};
