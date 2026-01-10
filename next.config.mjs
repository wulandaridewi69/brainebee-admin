/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000', // Sesuaikan dengan port backend kamu
        pathname: '**',
      },
    ],
  },
};


export default nextConfig;