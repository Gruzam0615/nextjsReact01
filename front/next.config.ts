import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // crossOrigin: "anonymous",
  reactStrictMode: true,

  async rewrites() {
      return[
        {
          destination: "https://api.vercel.app/blog/:path*",
          source: "/blog/:path*",
        }, 
        {
          destination: "https://api.vercel.app/pokemon/:path*",
          source: "/pokemon/:path*"
        }
      ];
  },
  // eslint: {
  //   dirs: [],
  // }
};

export default nextConfig;
