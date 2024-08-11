import { type ReactNode } from "react";

export default async function SearchLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<section className="mt-10">{children}</section>
		</>
	);
}
