import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['in.bmscdn.com', 'assets-in.bmscdn.com' , 'res.cloudinary.com'], // Add the hostname(s) here
  },
};

export default nextConfig;
