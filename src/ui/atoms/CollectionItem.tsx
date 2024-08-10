import { type FC } from "react";
import { useRouter } from "next/navigation";
import { type Route } from "next";
import { type CollectionListItemFragment } from "@/gql/graphql";

type CollectionItemProps = {
	collection: CollectionListItemFragment;
};

export const CollectionItem: FC<CollectionItemProps> = ({ collection }) => {
	const router = useRouter();

	return (
		<li
			onClick={() => {
				router.push(`/collections/${collection.slug}` as Route);
			}}
			key={collection.id}
		>
			<button className="flex flex-col items-center justify-center gap-5 rounded-xl bg-zinc-200 p-5 hover:scale-105 hover:bg-zinc-300">
				<h3 className="line-clamp-4 text-xl font-semibold">{collection.name}</h3>
				<p>{collection.description}</p>
			</button>
		</li>
	);
};
