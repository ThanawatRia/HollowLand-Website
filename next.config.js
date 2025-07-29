/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // ปิดไว้เพราะใช้ NextAuth (ต้องการ server-side)
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 