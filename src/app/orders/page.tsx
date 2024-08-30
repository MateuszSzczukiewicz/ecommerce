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

			{orders.data.length === 0 ? (
				<div>No orders found</div>
			) : (
				<ul>
					{orders.data.map((order) => (
						<li key={order.id}>
							<div>{order.id}</div>
							<div>
								<time dateTime={new Date(order.createdAt as string).toISOString()}>
									{new Date(order.createdAt as string).toLocaleDateString()}
								</time>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
