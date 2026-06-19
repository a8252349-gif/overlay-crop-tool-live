import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  experimental: {
    cpus: 2,
    workerThreads: false,
    staticGenerationMaxConcurrency: 2,
  },
};

export default nextConfig;
