"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
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
	const pathname = usePathname();
	const params = useSearchParams();

	const handlePageChange = (page: number) => {
		let url: string;
		if (!params || !params.toString()) {
			url = `${pathname}?page=${page}&take=${take}`;
		} else {
			const searchParams = new URLSearchParams(params.toString());
			searchParams.set("page", page.toString());
			searchParams.set("take", take.toString());
			url = `${pathname}?${searchParams.toString()}`;
		}
		router.push(url as Route);
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
