import { getCollectionsList } from "@/api/collections";
import { CollectionsList } from "@/ui/molecules/CollectionsList";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";

export default async function Homepage() {
	const collections = await getCollectionsList();
	console.log(collections);

	return (
		<section className="flex flex-col gap-10">
			<SuggestedProductsList />
			<CollectionsList collections={collections} />
		</section>
	);
}
