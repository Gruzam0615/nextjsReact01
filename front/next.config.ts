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
      },
      {
        destination: "http://localhost:4000/page2/writePost/:path*",
        source: "/page2/writePost/:path*"
      }
    ];
},
};

export default nextConfig;
