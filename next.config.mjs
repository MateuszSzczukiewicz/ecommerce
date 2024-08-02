import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "static-ourstore.hyperfunctor.com",
			},
		],
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
