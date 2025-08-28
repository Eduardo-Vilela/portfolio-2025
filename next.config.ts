import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.svglogos.dev",
      },
    ],
  },
};

export default nextConfig;
