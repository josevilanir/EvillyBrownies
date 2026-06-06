/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF tem melhor compressão que WebP; o Next gera sob demanda e cacheia.
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
