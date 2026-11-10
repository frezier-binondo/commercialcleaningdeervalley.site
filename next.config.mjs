/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/service-areas',
        destination: '/locations',
      },
      {
        source: '/service-areas/:slug',
        destination: '/locations/:slug',
      },
      {
        source: '/commercial-cleaning',
        destination: '/services/commercial-cleaning',
      },
      {
        source: '/office-cleaning',
        destination: '/services/office-cleaning',
      },
      {
        source: '/janitorial-services',
        destination: '/services/janitorial-services',
      },
      {
        source: '/medical-office-cleaning',
        destination: '/services/medical-office-cleaning',
      },
      {
        source: '/dental-office-cleaning',
        destination: '/services/dental-office-cleaning',
      },
      {
        source: '/industrial-cleaning',
        destination: '/services/industrial-cleaning',
      },
      {
        source: '/warehouse-cleaning',
        destination: '/services/warehouse-cleaning',
      },
      {
        source: '/retail-store-cleaning',
        destination: '/services/retail-store-cleaning',
      },
      {
        source: '/restaurant-cleaning',
        destination: '/services/restaurant-cleaning',
      },
      {
        source: '/school-cleaning',
        destination: '/services/school-cleaning',
      },
      {
        source: '/church-cleaning',
        destination: '/services/church-cleaning',
      },
      {
        source: '/bank-financial-office-cleaning',
        destination: '/services/bank-financial-office-cleaning',
      },
      {
        source: '/post-construction-cleaning',
        destination: '/services/post-construction-cleaning',
      },
      {
        source: '/commercial-carpet-cleaning',
        destination: '/services/commercial-carpet-cleaning',
      },
      {
        source: '/commercial-floor-cleaning',
        destination: '/services/commercial-floor-cleaning',
      },
      {
        source: '/commercial-window-cleaning',
        destination: '/services/commercial-window-cleaning',
      },
      {
        source: '/day-porter-services',
        destination: '/services/day-porter-services',
      },
      {
        source: '/disinfection-sanitizing-services',
        destination: '/services/disinfection-sanitizing-services',
      },
      {
        source: '/gym-fitness-center-cleaning',
        destination: '/services/gym-fitness-center-cleaning',
      },
      {
        source: '/green-commercial-cleaning',
        destination: '/services/green-commercial-cleaning',
      },
    ];
  },
};

export default nextConfig;
