import { type FC } from "react";
import clsx from "clsx";

type PaginationPageButtonProps = {
	page: number;
	isActive: boolean;
};

export const PaginationPageButton: FC<PaginationPageButtonProps> = ({ page, isActive }) => {
	return (
		<span
			className={clsx("h-full text-lg text-zinc-600", {
				"text-xl font-semibold text-zinc-950": isActive,
				"hover:text-zinc-950": !isActive,
			})}
		>
			{page}
		</span>
	);
};
