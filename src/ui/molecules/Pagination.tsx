"use client";

import { useRouter } from "next/navigation";
import { type FC } from "react";
import { type Route } from "next";
import { PaginationArrowButton } from "@/ui/atoms/PaginationArrowButton";
import { PaginationPageButton } from "@/ui/atoms/PaginationPageButton";

type PaginationProps = {
	currentPage: number;
	take: number;
	totalPages: number;
};

export const Pagination: FC<PaginationProps> = ({ currentPage, take, totalPages }) => {
	const router = useRouter();
	const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

	const handlePageChange = (page: number) => {
		const url = `/products/?page=${page}&take=${take}` as Route;
		router.push(url);
	};

	return (
		<nav aria-label="pagination" className="mt-10 flex items-center justify-center gap-4">
			<button
				onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				<PaginationArrowButton direction="left" disabled={currentPage === 1} />
			</button>
			{pages.map((page: number) => (
				<button key={page} onClick={() => handlePageChange(page)}>
					<PaginationPageButton page={page} isActive={currentPage === page} />
				</button>
			))}
			<button
				onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				<PaginationArrowButton direction="right" disabled={currentPage === totalPages} />
			</button>
		</nav>
	);
};
