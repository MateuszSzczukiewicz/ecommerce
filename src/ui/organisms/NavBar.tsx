import { SearchForm } from "@/ui/molecules/SearchForm";
import { NavLinks } from "@/ui/atoms/NavLinks";

export const NavBar = async () => {
	return (
		<nav className="sticky top-0 flex items-center justify-between bg-zinc-200 bg-opacity-60 px-16 py-5 backdrop-blur-xl">
			<NavLinks />
			<SearchForm />
		</nav>
	);
};
