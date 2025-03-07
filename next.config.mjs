const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'https', hostname: 'pixelmagnet-admin-mern-server.onrender.com' },
    ],
  },
};

export default nextConfig;
