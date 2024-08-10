import { type FC } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

type PaginationArrowButtonProps = {
	direction: "left" | "right";
	disabled: boolean;
};

export const PaginationArrowButton: FC<PaginationArrowButtonProps> = ({ direction, disabled }) => {
	return (
		<span
			className={clsx("h-full text-lg text-zinc-600", {
				"pointer-events-none opacity-50": disabled,
				"hover:text-zinc-950": !disabled,
			})}
		>
			{direction === "left" ? <ChevronLeft /> : <ChevronRight />}
		</span>
	);
};
