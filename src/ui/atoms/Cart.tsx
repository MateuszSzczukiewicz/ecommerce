import { findOrCreateCart, getCartFromCookie } from "@/api/cart";
import { ShoppingCart } from "lucide-react";
import { redirect } from "next/navigation";

export const Cart = async () => {
	const handleCreateOrFindCart = async () => {
		"use server";
		await findOrCreateCart();
		redirect("/cart");
	};

	const cart = await getCartFromCookie();

	const quantity =
		cart?.items?.reduce((acc: number, item: { quantity: number }) => acc + item.quantity, 0) ?? 0;

	return (
		<form action={handleCreateOrFindCart}>
			<button type="submit" className="flex gap-3">
				<ShoppingCart />
				<span className="text-lg font-semibold">{quantity}</span>
				<span className="sr-only">items in cart, view bag</span>
			</button>
		</form>
	);
};
