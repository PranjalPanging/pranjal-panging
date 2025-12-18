import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/projects/museum-guide/:path*",
          destination: "https://the-museum-guide-smart-city.vercel.app/:path*",
        }
      ],
    };
  },
};

export default nextConfig;
