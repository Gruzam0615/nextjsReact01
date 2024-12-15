import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
};

export default nextConfig;
