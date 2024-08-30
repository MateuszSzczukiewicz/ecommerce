import { getOrdersByEmail } from "@/api/orders";
import { currentUser } from "@clerk/nextjs/server";

export default async function OrdersPage() {
	const user = await currentUser();
	const email = user?.emailAddresses[0]?.emailAddress;

	if (!email) {
		return <div>User does not have email</div>;
	}

	const orders = await getOrdersByEmail(email);

	return (
		<div>
			<h1>{user.firstName}&rsquo;s Orders</h1>

			{orders.meta.total === 0 ? (
				<p>No orders found</p>
			) : (
				<ul>
					{orders.data.map((order) => (
						<li key={order.id}>
							<p>Order ID: {order.id}</p>
							<p>Order Date: {new Date(order.createdAt as Date).toLocaleDateString()}</p>
							<p>Order Total: ${orders.meta.total}</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
