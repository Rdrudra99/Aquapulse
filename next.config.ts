/* eslint-disable */
import type { NextConfig } from "next";

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = withPWA({
  eslint: {
    dirs: ["src"],
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "mobile-magicui.vercel.app",
      },
      {
        hostname: "randomuser.me",
      }
    ],
  },
});

export default nextConfig;
