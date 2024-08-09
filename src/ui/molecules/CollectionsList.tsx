"use client";

import { type FC, Suspense } from "react";
import { useRouter } from "next/navigation";
import { type Route } from "next";
import { type CollectionListItemFragment } from "@/gql/graphql";

type CollectionsListProps = {
	collections: CollectionListItemFragment[];
};

export const CollectionsList: FC<CollectionsListProps> = ({ collections }) => {
	const router = useRouter();

	return (
		<>
			<h2 className="text-2xl font-semibold">Nasze kolekcje:</h2>
			<ul className="flex justify-between">
				<Suspense>
					{collections.map((collection) => (
						<li
							onClick={() => {
								router.push(`/collections/${collection.slug}` as Route);
							}}
							key={collection.id}
						>
							<button className="flex flex-col items-center justify-center gap-5 rounded-xl bg-zinc-200 p-5">
								<h3 className="line-clamp-4 text-xl font-semibold">{collection.name}</h3>
								<p>{collection.description}</p>
							</button>
						</li>
					))}
				</Suspense>
			</ul>
		</>
	);
};
