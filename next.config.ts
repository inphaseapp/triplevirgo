import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
