import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { getCategoriesList } from "@/api/categories";

type NavLinkType = {
	href: Route<string>;
	label: string;
	exact?: boolean;
};

export const NavLinks = async () => {
	const categoriesList = await getCategoriesList();

	const categoriesNavLinks = categoriesList.map((category) => {
		return {
			href: `/categories/${category.slug}`,
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
		<ul className="flex gap-5">
			{navLinks.map((link) => (
				<li key={link.href}>
					<ActiveLink href={link.href} exact={link.exact}>
						{link.label}
					</ActiveLink>
				</li>
			))}
		</ul>
	);
};
