"use client";

import { useRouter } from "next/navigation";
import { type ChangeEvent, type FormEvent, useCallback, useState } from "react";
import { useDebounce } from "@/app/hooks/useDebounce";

export const SearchForm = () => {
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();

	const handleSearch = useCallback(
		(query: string) => {
			if (query.length >= 2) {
				router.push(`/search?query=${query}`);
			}
		},
		[router],
	);

	const debouncedHandleSearch = useDebounce(handleSearch, 500);

	const handleInputChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const newValue = e.target.value;
			setSearchQuery(newValue);
			if (error) setError(null);
			debouncedHandleSearch(newValue);
		},
		[error, debouncedHandleSearch],
	);

	const handleSubmit = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			if (searchQuery.length < 2) {
				setError("Search query must be at least 2 characters long.");
				return;
			}
			router.push(`/search?query=${searchQuery}`);
		},
		[searchQuery, router],
	);

	return (
		<form onSubmit={handleSubmit} className="flex items-center space-x-4">
			{error && <p className="mt-2 text-red-500">{error}</p>}
			<input
				type="search"
				value={searchQuery}
				onChange={handleInputChange}
				className="w-full rounded-md border border-zinc-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-500"
				placeholder="Search..."
			/>
		</form>
	);
};
