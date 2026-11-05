/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export: the whole site is prebuilt into `out/` and served by Render as a Static Site.
  // Security headers live in render.yaml, because a static export cannot set them itself.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
