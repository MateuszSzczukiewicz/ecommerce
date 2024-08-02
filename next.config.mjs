import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	// redirects: async () => {
	// 	return [
	// 		{
	// 			source: "/",
	// 			destination: "/docs",
	// 			permanent: false,
	// 		},
	// 	];
	// },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
