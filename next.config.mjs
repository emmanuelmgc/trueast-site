const isGitHubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGitHubPages ? "/trueast-site" : "",
  assetPrefix: isGitHubPages ? "/trueast-site" : "",
};

export default nextConfig;
