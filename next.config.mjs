import createMDX from "@next/mdx";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProduction ? "/home" : "",
  assetPrefix: isProduction ? "/home" : "",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"]
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});

export default withMDX(nextConfig);
