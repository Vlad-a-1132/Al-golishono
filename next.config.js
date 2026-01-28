const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ВАЖНО: Статический экспорт отключен, так как используются API routes для отправки email
  // Если нужен статический экспорт, раскомментируйте строки ниже и удалите API routes
  // ...(process.env.NODE_ENV === 'production' && {
  //   output: 'export',
  //   trailingSlash: true,
  //   distDir: 'out',
  // }),
  
  // Image settings
  images: {
    unoptimized: true,
  },
  
  // Webpack configuration for path aliases
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
  
  // TypeScript support
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ESLint settings
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Редиректы со старых URL на новые (терапевт, педиатр, гастроэнтеролог, ЛОР, офтальмолог, дерматолог Голицино)
  async redirects() {
    return [
      { source: '/services/therapy', destination: '/services/terapevt-golitsino', permanent: true },
      { source: '/services/pediatrics', destination: '/services/pediatr-golitsino', permanent: true },
      { source: '/services/gastroenterology', destination: '/services/gastroenterolog-golitsino', permanent: true },
      { source: '/services/otolaryngology', destination: '/services/otorinolaringolog-golitsino', permanent: true },
      { source: '/services/ophthalmology', destination: '/services/oftalmolog-golitsino', permanent: true },
      { source: '/services/dermatology', destination: '/services/dermatolog-golitsino', permanent: true },
      { source: '/services/gynecology', destination: '/services/ginekolog-golitsino', permanent: true },
      { source: '/services/neurology', destination: '/services/nevrolog-golitsino', permanent: true },
      { source: '/services/ultrasound', destination: '/services/uzi-golitsino', permanent: true },
    ];
  },
}

module.exports = nextConfig 