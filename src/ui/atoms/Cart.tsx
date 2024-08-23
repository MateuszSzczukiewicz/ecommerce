import { findOrCreateCart } from "@/api/cart";
import { ShoppingCart } from "lucide-react";
import { redirect } from "next/navigation";

export const Cart = () => {
	const handleCreateOrFindCart = async () => {
		"use server";
		await findOrCreateCart();
		redirect("/cart");
	};

	return (
		<form action={handleCreateOrFindCart}>
			<button type="submit" className="flex gap-3">
				<ShoppingCart />
				<span className="text-lg font-semibold">0</span>
			</button>
		</form>
	);
};
