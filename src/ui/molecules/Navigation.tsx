import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Navigation = () => {
	return (
		<nav className="sticky top-0 flex items-center justify-center bg-zinc-200 bg-opacity-60 p-5 backdrop-blur-xl">
			<ul className="flex gap-5">
				<li>
					<ActiveLink href="/">Homepage</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/products" exact={false}>
						Produkty
					</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};
