import { type ReactNode } from "react";

export async function generateStaticParams() {
	return [{ category: "category1" }, { category: "category2" }, { category: "category3" }];
}

export default async function CategoryLayout({ children }: { children: ReactNode }) {
	return <div>{children}</div>;
}
