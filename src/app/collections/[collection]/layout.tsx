import { type ReactNode } from "react";

export default async function ProductsLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<section className="mt-10">{children}</section>
		</>
	);
}
