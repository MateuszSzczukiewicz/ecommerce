"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

export const ActiveLink = ({ href, children }: { href: string; children: ReactNode }) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<Link
			href={{ pathname: href }}
			className={clsx(`h-full text-lg text-zinc-600 hover:text-zinc-950`, {
				underline: isActive,
			})}
		>
			{children}
		</Link>
	);
};
