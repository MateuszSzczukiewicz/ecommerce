import { type ReactNode } from "react";

export default async function ProductsLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<main className="mt-10">{children}</main>
		</>
	);
}
