"use client";

import { useOptimistic } from "react";
import { changeItemQuantity } from "@/api/cart";

export const ChangeProductQuantityButton = ({
	productId,
	quantity,
}: {
	productId: string;
	quantity: number;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);

	const updateQuantity = async (change: number) => {
		const newQuantity = optimisticQuantity + change;
		setOptimisticQuantity(newQuantity);
		await changeItemQuantity(productId, newQuantity);
	};

	return (
		<form className="flex items-center">
			<button
				className="h-6 w-6 border disabled:opacity-50"
				type="submit"
				formAction={() => updateQuantity(-1)}
				disabled={optimisticQuantity === 1}
			>
				-
			</button>
			<span className="w-8 text-center">{optimisticQuantity}</span>
			<button className="h-6 w-6 border" type="submit" formAction={() => updateQuantity(1)}>
				+
			</button>
		</form>
	);
};
