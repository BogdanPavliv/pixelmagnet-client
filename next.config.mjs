const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3002',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://pixelmagnet-admin-mern-server.netlify.app/api/:path*',
      },
    ];
  },
};

export default nextConfig;
