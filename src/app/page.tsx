import { type ProductItemType } from "@/app/types";
import { ProductList } from "@/app/ui/organisms/ProductList";

const products: ProductItemType[] = [
	{
		id: "1",
		category: "Elektronika",
		name: "Komputer",
		price: 1000,
		coverImage: {
			src: "/komputer.jpg",
			alt: "Komputer",
		},
	},
	{
		id: "2",
		category: "Elektronika",
		name: "Smartfon",
		price: 2500,
		coverImage: {
			src: "/smartfon.jpg",
			alt: "Smartfon",
		},
	},
	{
		id: "3",
		category: "Narzędzia",
		name: "Klawiatura",
		price: 4320,
		coverImage: {
			src: "/klawiatura.png",
			alt: "Klawiatura",
		},
	},
	{
		id: "4",
		category: "Narzędzia",
		name: "Myszka",
		price: 2550,
		coverImage: {
			src: "/myszka.jpg",
			alt: "Myszka",
		},
	},
];

export default function Home() {
	return (
		<section className="bg-zinc-200 px-20 py-40">
			<ProductList products={products} />
		</section>
	);
}
