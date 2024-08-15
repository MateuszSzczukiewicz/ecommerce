import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export const Cart = () => {
	return (
		<Link href={{ pathname: "/cart" }} className="flex items-center justify-center gap-2">
			<ShoppingCart />
			<span className="text-lg font-semibold">0</span>
		</Link>
	);
};
