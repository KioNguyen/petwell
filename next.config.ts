import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/600x300*",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/600x400*",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
