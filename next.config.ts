import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/projects/museum-guide/:path*",
          destination: "https://the-museum-guide-smart-city.vercel.app/:path*",
        },
        {
          source: "/projects/video-converter/:path*",
          destination: "https://video-mp3-converter.onrender.com/:path*",
        },
      ],
    };
  },
};

export default nextConfig;