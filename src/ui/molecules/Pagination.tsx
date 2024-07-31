"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { type FC } from "react";

type PaginationProps = {
	currentPage: number;
	take: number;
	totalPages: number;
};

export const Pagination: FC<PaginationProps> = ({ currentPage, take, totalPages }) => {
	const router = useRouter();
	const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

	return (
		<nav aria-label="pagination" className="flex space-x-2">
			{pages.map((page) => (
				<button
					key={page}
					className={`h-full text-lg text-zinc-600 hover:text-zinc-950 ${currentPage === page ? "text-xl font-semibold text-zinc-950" : ""}`}
					onClick={() => {
						router.push(`/products/?page=${page}&take=${take}`);
					}}
				>
					{page}
				</button>
			))}
		</nav>
	);
};
