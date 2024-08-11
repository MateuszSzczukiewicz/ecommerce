"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";

export const SearchForm = () => {
	const [searchQuery, setSearchQuery] = useState<string>("");

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		alert(`Wyszukiwanie: ${searchQuery}`);
	};

	return (
		<form onSubmit={handleSubmit} className="flex items-center space-x-4">
			<input
				type="search"
				value={searchQuery}
				onChange={handleInputChange}
				placeholder="Search..."
				className="w-full rounded-md border border-zinc-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-500"
			/>
			<button
				type="submit"
				className="rounded-md bg-zinc-500 px-4 py-2 text-white hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500"
			>
				Search
			</button>
		</form>
	);
};
