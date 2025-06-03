import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ['unavatar.io','lh3.googleusercontent.com']
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unavatar.io",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
