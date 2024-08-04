import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { getCategoriesList } from "@/api/categories";

type NavLinkType = {
	href: Route<string>;
	label: string;
	exact?: boolean;
};

export const NavBar = async () => {
	const categoriesList = await getCategoriesList();

	const categoriesNavLinks = categoriesList.map((category) => {
		return {
			href: `/${category.slug}`,
			label: category.name,
			exact: false,
		} as NavLinkType;
	});

	const navLinks: NavLinkType[] = [
		{ href: "/", label: "Home" },
		{ href: "/products", label: "All", exact: false },
		...categoriesNavLinks,
	];

	return (
		<nav className="sticky top-0 flex items-center justify-center bg-zinc-200 bg-opacity-60 p-5 backdrop-blur-xl">
			<ul className="flex gap-5">
				{navLinks.map((link) => (
					<li key={link.href}>
						<ActiveLink href={link.href} exact={link.exact}>
							{link.label}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
