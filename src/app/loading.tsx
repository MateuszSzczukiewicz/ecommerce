import { Spinner } from "@/ui/atoms/Spinner";

export default function Loading() {
	return (
		<div aria-busy="true">
			<Spinner />
		</div>
	);
}
