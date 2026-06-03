/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        // Allow any HTTPS domain — needed for AI-provided food image URLs
        // which can come from various recipe/food sites
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;

