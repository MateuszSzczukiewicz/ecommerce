"use client";

import { changeItemQuantity } from "@/api/cart";
import { useOptimistic } from "react";

export const IncrementProductQuantityButton = ({
	quantity,
	productId,
}: {
	quantity: number;
	productId: string;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);

	const handleIncrementQuantity = async () => {
		const updatedQuantity = optimisticQuantity + 1;
		setOptimisticQuantity(updatedQuantity);
		await changeItemQuantity(productId, updatedQuantity);
	};

	console.log(optimisticQuantity);

	return (
		<form className="flex">
			<span className="w-8 text-center">{optimisticQuantity}</span>
			<button
				className="ml-2 h-8 w-8 border bg-slate-50"
				type="submit"
				formAction={handleIncrementQuantity}
			>
				+
			</button>
		</form>
	);
};
