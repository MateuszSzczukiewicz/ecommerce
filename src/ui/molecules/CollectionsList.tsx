"use client";

import { type FC, Suspense } from "react";
import { type CollectionListItemFragment } from "@/gql/graphql";
import { CollectionItem } from "@/ui/atoms/CollectionItem";

type CollectionsListProps = {
	collections: CollectionListItemFragment[];
};

export const CollectionsList: FC<CollectionsListProps> = ({ collections }) => {
	return (
		<>
			<h2 className="text-2xl font-semibold">Our collections:</h2>
			<ul className="flex justify-between">
				<Suspense>
					{collections.map((collection) => (
						<CollectionItem key={collection.id} collection={collection} />
					))}
				</Suspense>
			</ul>
		</>
	);
};
