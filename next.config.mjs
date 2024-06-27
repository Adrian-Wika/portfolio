/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.glsl$|\.frag$|\.vert$/i,
      use: ['raw-loader'],
    })
    return config
  }
}

export default nextConfig
