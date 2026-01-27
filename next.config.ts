import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "punks.art",
        pathname: "/api/punks/**",
      },
      {
        protocol: "https",
        hostname: "**.6529.io",
      },
      {
        protocol: "https",
        hostname: "9dcc.xyz",
      },
      {
        protocol: "https",
        hostname: "**.xyz",
      },
      {
        protocol: "https",
        hostname: "example.com",
      },
    ],
  },
};

export default nextConfig;
