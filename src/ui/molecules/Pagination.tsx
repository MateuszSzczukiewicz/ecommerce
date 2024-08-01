"use client";

import { useRouter } from "next/navigation";
import { type FC } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
	currentPage: number;
	take: number;
	totalPages: number;
};

export const Pagination: FC<PaginationProps> = ({ currentPage, take, totalPages }) => {
	const router = useRouter();
	const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

	const handlePageChange = (page: number) => {
		router.push(`/products/?page=${page}&take=${take}`);
	};

	return (
		<nav aria-label="pagination" className="mt-10 flex items-center justify-center gap-4">
			<button
				className={`h-full text-lg text-zinc-600 hover:text-zinc-950 ${currentPage === 1 ? "opacity-50" : ""}`}
				onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				<ChevronLeft />
			</button>
			{pages.map((page: number) => (
				<button
					key={page}
					className={`h-full text-lg text-zinc-600 hover:text-zinc-950 ${currentPage === page ? "text-xl font-semibold text-zinc-950" : ""}`}
					onClick={() => handlePageChange(page)}
				>
					{page}
				</button>
			))}
			<button
				className={`h-full text-lg text-zinc-600 hover:text-zinc-950 ${currentPage === totalPages ? "opacity-50" : ""}`}
				onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				<ChevronRight />
			</button>
		</nav>
	);
};
