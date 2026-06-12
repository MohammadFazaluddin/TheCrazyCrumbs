import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["http://localhost:3000", "https://thecrazycrumbs.com", "192.168.0.153", "100.96.59.21", "https://*.ngrok-free.app"],
};

export default nextConfig;
