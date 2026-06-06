/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["*.ngrok-free.dev", "*.ngrok-free.app"],
  images: {
    // Runtime image optimization on Netlify (next/image). AVIF with WebP fallback.
    formats: ["image/avif", "image/webp"]
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=()"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
