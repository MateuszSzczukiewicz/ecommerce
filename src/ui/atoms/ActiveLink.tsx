"use client";
import Link from "next/link";
import { type ReactNode } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type Route } from "next";

type ActiveLinkProps<T extends string> = {
	href: Route<T>;
	children: ReactNode;
	exact?: boolean;
};

export const ActiveLink = <T extends string>({
	href,
	children,
	exact = true,
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	const isActive = exact ? pathname === href : pathname.startsWith(href);

	return (
		<Link
			href={{ pathname: href }}
			className={clsx("h-full text-lg text-zinc-600 hover:text-zinc-950", {
				["text-xl font-semibold text-zinc-950"]: isActive,
			})}
			aria-current="page"
		>
			{children}
		</Link>
	);
};
