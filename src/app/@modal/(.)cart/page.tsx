import { getCartFromCookie } from "@/api/cart";
import { Overlay } from "@/ui/atoms/Overlay";

export default async function ModalCart() {
	const cart = await getCartFromCookie();

	return (
		<>
			<Overlay />
			<div className="absolute right-0 top-0 z-40 h-screen w-full max-w-sm bg-white">
				<ul>{cart?.items.map(({ product }) => <li key={product.id}>{product?.name}</li>)}</ul>
			</div>
		</>
	);
}
