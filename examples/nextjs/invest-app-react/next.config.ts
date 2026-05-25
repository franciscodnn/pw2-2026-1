import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ifpb.edu.br',  // domínio exato
        pathname: '/**',                   // permite qualquer caminho
      },
    ],
  }
};

export default nextConfig;
