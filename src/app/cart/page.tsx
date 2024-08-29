import { getCartFromCookie, handlePaymentAction } from "@/api/cart";
import { formatMoney } from "@/app/utils";
import { IncrementProductQuantityButton } from "@/ui/atoms/IncrementProductQuantityButton";
import { RemoveButton } from "@/ui/atoms/RemoveButton";
import { redirect } from "next/navigation";

export default async function CartPage() {
	const cart = await getCartFromCookie();

	if (!cart) {
		return redirect("/");
	}

	return (
		<div className="mt-10">
			<h1>Order #{cart.id}</h1>
			<table className="table-fixed">
				<thead>
					<tr>
						<th>Product</th>
						<th className="px-4 text-center">Quantity</th>
						<th>Price</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{cart.items.map(({ product, quantity }) => {
						if (!product) {
							return null;
						}
						return (
							<tr key={product.id}>
								<td>{product.name}</td>
								<td className="text-center">
									<IncrementProductQuantityButton quantity={quantity} productId={product.id} />
								</td>
								<td>{formatMoney(product.price / 100)}</td>
								<td className="px-4 py-2">
									<RemoveButton productId={product.id} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<form action={handlePaymentAction}>
				<button
					type="submit"
					className="rounded-sm border bg-slate-100 px-8 py-2 shadow-sm transition-colors hover:bg-slate-200"
				>
					Pay
				</button>
			</form>
		</div>
	);
}
