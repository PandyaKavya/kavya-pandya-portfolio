import type { NextConfig } from "next";

// This is a GitHub Pages *project* site served at
//   https://pandyakavya.github.io/kavya-pandya-portfolio/
// so the bundle + routes must be prefixed with the repo name.
//
// If you ever move to a *user* site (repo renamed to `PandyaKavya.github.io`,
// served at https://pandyakavya.github.io/ root), delete the `basePath` line.
const nextConfig: NextConfig = {
  output: "export", // emit a fully static site into out/
  trailingSlash: true, // each route -> its own directory + index.html (Pages-friendly)
  basePath: "/kavya-pandya-portfolio",
  images: { unoptimized: true }, // no server image optimizer on static hosting
};

export default nextConfig;
