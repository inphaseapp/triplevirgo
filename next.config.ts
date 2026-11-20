import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return ["/within", "/within/evidence", "/within/me"].map((source) => ({
      source,
      destination: "/within/index.html",
    }));
  },
  async redirects() {
    return [
      {
        source: "/within/:path*",
        has: [{ type: "host", value: ".*\\.netlify\\.app" }],
        destination: "https://triplevirgo.com/within/:path*",
        permanent: false,
      },
      {
        source: "/why",
        destination: "/triplevirgo",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
