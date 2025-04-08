/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      // Add any domains you need to fetch images from
      'cdn.sanity.io',
      'images.unsplash.com',
      'randomuser.me',
      'html.tailus.io',
      'framerusercontent.com',
      'aximo-tailwind.netlify.app',
    ],
  },
  env: {
    // Make sure your base URL is properly set
    NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN || 'https://www.aquapulse.co.in',
  },
};

module.exports = nextConfig;
