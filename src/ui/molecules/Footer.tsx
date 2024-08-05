"use client";
import { useRouter } from "next/navigation";
import { type Route } from "next";

export const Footer = () => {
	const router = useRouter();

	const navigateTo = (path: Route) => {
		router.push(path);
	};

	return (
		<footer className="mt-5 flex w-full items-center justify-center gap-10 bg-zinc-200 p-5 backdrop-blur-xl">
			<p>&copy; 2023 My Website. All rights reserved.</p>
			<button onClick={() => navigateTo("/regulamin" as Route)} className="hover:font-semibold">
				Regulamin
			</button>
			<button
				onClick={() => navigateTo("/polityka-prywatnosci" as Route)}
				className="hover:font-semibold"
			>
				Polityka Prywatności
			</button>
		</footer>
	);
};
