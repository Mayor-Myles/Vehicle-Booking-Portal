import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

async rewrites() {
    return [
      {
        // The "Mask" you use in React
        source: '/api/login', 
        // The "Final Destination" where the data lives
        destination: 'http://mylezic.myartsonline.com/user/login',
      },
    ]
  },
  
};

export default nextConfig;
