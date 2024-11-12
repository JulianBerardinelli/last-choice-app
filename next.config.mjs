/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: [
          'encrypted-tbn0.gstatic.com', // Dominio para CoderHouseIcon
          'your-other-domain.com',      // Agrega otros dominios según sea necesario
        ],
        formats: ['image/avif', 'image/webp'], // Optimización automática de imágenes
      },
};

export default nextConfig;
