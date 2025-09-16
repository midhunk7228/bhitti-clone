import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.newyorker.com",
      },
    ],
    // Allow images from localhost
    domains: ["localhost"],
  },
};

export default nextConfig;
