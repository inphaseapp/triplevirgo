import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      "/within",
      "/within/evidence",
      "/within/energy-centers",
      "/within/me",
      "/within/my-account",
    ].map((source) => ({
      source,
      destination: "/within/index.html",
    }));
  },
  async redirects() {
    return [
      {
        source: "/why",
        destination: "/triplevirgo",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
