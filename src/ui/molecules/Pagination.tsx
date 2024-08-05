"use client";

import { useRouter } from "next/navigation";
import { type FC } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

type PaginationProps = {
	currentPage: number;
	take: number;
	totalPages: number;
};

export const Pagination: FC<PaginationProps> = ({ currentPage, take, totalPages }) => {
	const router = useRouter();
	const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

	const handlePageChange = (page: number) => {
		const url = `/products/?page=${page}&take=${take}` as Parameters<typeof router.push>[0];
		router.push(url);
	};

	return (
		<nav aria-label="pagination" className="mt-10 flex items-center justify-center gap-4">
			<button
				className={clsx("h-full text-lg text-zinc-600 hover:text-zinc-950", {
					"opacity-50": currentPage === 1,
				})}
				onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				<ChevronLeft />
			</button>
			{pages.map((page: number) => (
				<button
					key={page}
					className={clsx("h-full text-lg text-zinc-600 hover:text-zinc-950", {
						"text-xl font-semibold text-zinc-950": currentPage === page,
					})}
					onClick={() => handlePageChange(page)}
				>
					{page}
				</button>
			))}
			<button
				className={clsx("h-full text-lg text-zinc-600 hover:text-zinc-950", {
					"opacity-50": currentPage === totalPages,
				})}
				onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				<ChevronRight />
			</button>
		</nav>
	);
};
