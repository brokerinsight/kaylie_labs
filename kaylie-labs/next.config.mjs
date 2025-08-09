/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during builds for demo purposes
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript build errors for demo
    ignoreBuildErrors: false,
  },
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig;