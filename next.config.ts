import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',          // crucial for static export
  images: {
    unoptimized: true       // prevents image errors on static host
  },
}

export default nextConfig
