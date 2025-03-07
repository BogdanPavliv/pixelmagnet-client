const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'https', hostname: 'pixelmagnet-admin-mern-server.onrender.com' },
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'https://pixelmagnet-admin-mern-server.netlify.app/api/:path*',
  //     },
  //   ];
  // },
};

export default nextConfig;
