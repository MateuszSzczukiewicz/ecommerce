import { findOrCreateCart } from "@/api/cart";
import { formatMoney } from "@/app/utils";
import { IncrementProductQuantityButton } from "@/ui/atoms/IncrementProductQuantityButton";
import { redirect } from "next/navigation";

export default async function CartPage() {
	const cart = await findOrCreateCart();

	if (!cart) {
		redirect("/");
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
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
