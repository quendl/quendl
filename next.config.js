/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  async rewrites() {
    return [
      {
        source: '/signup',
        destination: 'http://localhost:4000/signup',
      },
      {
        source: '/login',
        destination: 'http://localhost:4000/login',
      }
    ]
  },
}
