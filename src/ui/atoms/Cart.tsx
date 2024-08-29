import { getCartFromCookie } from "@/api/cart";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export const Cart = async () => {
	const cart = await getCartFromCookie();

	const quantity = cart?.items.reduce((acc, item) => acc + item.quantity, 0) ?? 0;

	return (
		<Link href="/cart" className="flex gap-3">
			<ShoppingCart />
			<span className="text-lg font-semibold">{quantity}</span>
			<span className="sr-only">items in cart, view bag</span>
		</Link>
	);
};
