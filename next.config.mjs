import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
};

const withMDX = createMDX();

export default withMDX(nextConfig);
