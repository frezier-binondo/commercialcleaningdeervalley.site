import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteConfig } from '@/data/siteData';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Commercial Cleaning Deer Valley AZ",
    template: "%s",
  },
  description:
    "Commercial cleaning in Deer Valley, AZ for offices, clinics, warehouses and retail. Reliable crews, flexible schedules. Request your free quote today.",
  keywords: [
    "commercial cleaning Deer Valley",
    "commercial cleaning company Phoenix 85027",
    "janitorial services Deer Valley",
    "office cleaning Deer Valley AZ",
    "medical office cleaning North Phoenix",
    "warehouse cleaning Deer Valley",
    "post construction cleaning 85024",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.siteUrl,
    title: "Commercial Cleaning Deer Valley AZ",
    description:
      "Reliable commercial cleaning and janitorial services across Deer Valley, North Phoenix, Anthem, Scottsdale & Phoenix AZ.",
    siteName: siteConfig.name,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Brightcrest Commercial Cleaning Deer Valley AZ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Commercial Cleaning Deer Valley AZ",
    description:
      "Commercial cleaning in Deer Valley, AZ for offices, clinics, warehouses and retail. Request your free quote today.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    '@id': siteConfig.siteUrl,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.6845,
      longitude: -112.1644,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Deer Valley, Phoenix, AZ' },
      { '@type': 'AdministrativeArea', name: 'North Phoenix, AZ' },
      { '@type': 'AdministrativeArea', name: 'Anthem, AZ' },
      { '@type': 'AdministrativeArea', name: 'Scottsdale, AZ' },
      { '@type': 'AdministrativeArea', name: 'Phoenix, AZ' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Commercial Cleaning Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Office Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Janitorial Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Medical Office Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dental Office Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Industrial Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Warehouse Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Retail Store Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Restaurant Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Post-Construction Cleaning' } },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-brand-100 selection:text-brand-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
