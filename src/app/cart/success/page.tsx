import Stripe from "stripe";

export default async function CartSuccess({
	searchParams,
}: {
	searchParams: { session_id: string };
}) {
	if (!process.env.STRIPE_SECRET_KEY) {
		return null;
	}

	// @ts-ignore: Ignoring this line because session_id is not a valid key
	if (!searchParams.sessionId) {
		return <div>Session ID is missing</div>;
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2024-06-20",
		typescript: true,
	});

	// @ts-ignore: Ignoring this line because session_id is not a valid key
	const stripeCheckoutSession = await stripe.checkout.sessions.retrieve(searchParams.sessionId);

	return <div>{stripeCheckoutSession.payment_status}</div>;
}
