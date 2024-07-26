import { type MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		h1: ({ className = "", ...props }) => (
			<h1 className={`font-serif text-3xl font-bold ${className}`} {...props} />
		),
	};
}
