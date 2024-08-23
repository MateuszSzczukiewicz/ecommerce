import { SearchForm } from "@/ui/molecules/SearchForm";
import { NavLinks } from "@/ui/atoms/NavLinks";
import { Cart } from "@/ui/atoms/Cart";

export const NavBar = async () => {
	return (
		<nav className="sticky top-0 flex items-center justify-between bg-zinc-50 bg-opacity-60 px-16 py-5 backdrop-blur-xl">
			<NavLinks />
			<div className="flex items-center justify-center gap-10">
				<SearchForm />
				<Cart />
			</div>
		</nav>
	);
};
