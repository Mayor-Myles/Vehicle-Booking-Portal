import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

async rewrites() {
    return [
      {
        source: '/api/php/:path*',
        destination: 'http://mylezic.myartsonline.com*', // Your HTTP PHP URL
      },
    ]
  },

  
};

export default nextConfig;
