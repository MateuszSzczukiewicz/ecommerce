"use client";

import { useRouter } from "next/navigation";
import { type ChangeEvent, type FormEvent, useCallback, useState } from "react";

export const SearchForm = () => {
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [error, setError] = useState<string | null>(null);
	const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);
	const router = useRouter();

	const handleInputChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const newValue = e.target.value;
			setSearchQuery(newValue);
			if (error) setError(null);

			if (debounceTimeout) {
				clearTimeout(debounceTimeout);
			}

			const timeout = setTimeout(() => {
				if (newValue.length >= 2) {
					router.push(`/search?query=${newValue}`);
				}
			}, 500);

			setDebounceTimeout(timeout);
		},
		[error, debounceTimeout, router],
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
