import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	output: "standalone",
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "loremflickr.com",
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
