import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";

export default function Homepage() {
	return (
		<section className="flex flex-col gap-10">
			<h1 className="text-2xl font-semibold">Sugerowane produkty: </h1>
			<SuggestedProductsList />
		</section>
	);
}
