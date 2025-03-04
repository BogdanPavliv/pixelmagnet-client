/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
        { protocol: 'http', hostname: 'localhost' },
        { protocol: 'https', hostname: 'pixelmagnet-mongodb-client.netlify.app' },
      ],
    },
  };
  
  export default nextConfig;
  
  // {
  //   protocol: 'http',
  //   hostname: 'localhost',
  //   port: '3002',
  //   pathname: '/**',
  // },