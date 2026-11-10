import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import CallToAction from '@/components/CallToAction';
import SeoLinksSection from '@/components/SeoLinksSection';
import { siteConfig, fiveLocations } from '@/data/siteData';

export const metadata: Metadata = {
  title: "Commercial Cleaning Service Areas Deer Valley AZ",
  description:
    "We provide commercial cleaning in Deer Valley, North Phoenix, Anthem, Scottsdale and Phoenix, AZ. Find your area and request a free quote.",
};

export default function LocationsHubPage() {
  const locationsInternalLinks = [
    {
      href: "/",
      label: "Deer Valley Commercial Cleaning Homepage",
      context: "Home operational base in Deer Valley, Phoenix AZ 85027.",
    },
    {
      href: "/locations/deer-valley",
      label: "Commercial Cleaning in Deer Valley AZ (85024 & 85027)",
      context: "Our core local market around the Deer Valley Airport and Loop 101.",
    },
    {
      href: "/locations/north-phoenix",
      label: "Commercial Cleaning in North Phoenix",
      context: "Serving Desert Ridge, Norterra, and Tatum Blvd business districts.",
    },
    {
      href: "/locations/anthem",
      label: "Commercial Cleaning in Anthem",
      context: "I-17 corridor north routes covering community retail and healthcare.",
    },
    {
      href: "/locations/scottsdale",
      label: "Commercial Cleaning in Scottsdale",
      context: "High-end corporate and medical janitorial in Scottsdale Airpark & Kierland.",
    },
    {
      href: "/locations/phoenix",
      label: "Commercial Cleaning in Phoenix",
      context: "Central Phoenix corporate towers, Camelback corridor, and logistics.",
    },
  ];

  const locationsExternalLink = {
    href: "https://www.phoenixchamber.com",
    label: "Greater Phoenix Chamber of Commerce",
    authorityName: "Greater Phoenix Regional Business Network",
  };

  return (
    <div className="bg-white">
      {/* Hero Header with Photographic Background */}
      <section className="relative overflow-hidden bg-navy-950 py-16 lg:py-20 border-b border-slate-800 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1920&q=85"
            alt="North Phoenix and Deer Valley regional commercial area"
            fill
            priority
            className="object-cover opacity-25 filter brightness-90 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/90 to-brand-950/80 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-grid-white opacity-25 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-white/10 backdrop-blur-md text-cyan-300 border border-cyan-400/30">
              <MapPin className="w-4 h-4 text-cyan-300" />
              <span>North Phoenix & Valley-Wide Reach</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Commercial Cleaning Service Areas in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-emerald-300">
                Deer Valley & Phoenix
              </span>
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              <strong className="text-white">Brightcrest Commercial Cleaning Deer Valley</strong> operates strategically from our primary dispatch headquarters in Deer Valley, Phoenix (ZIP codes 85024 and 85027), providing responsive, high-standard commercial cleaning across five primary market corridors.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Locations Narrative (2000 Word Silo Core) */}
          <div className="lg:col-span-8 space-y-12 text-slate-700 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Local Presence Means Faster Response and Consistent Quality
              </h2>
              <p>
                When searching for a commercial janitorial partner, geographic proximity matters tremendously. Distant national cleaning franchises often subcontract accounts to third parties with minimal supervision, resulting in missed cleanings, high staff turnover, and sluggish communication when emergencies arise.
              </p>
              <p>
                At Brightcrest, our crews live and work right here in the north Valley. Whether your building is an aerospace fabrication plant on Deer Valley Road, a busy urgent care clinic in North Phoenix, an upscale financial practice in Scottsdale Airpark, or a community school in Anthem, our supervisors conduct in-person inspections and maintain immediate contact.
              </p>
            </section>

            {/* 5 Location Cards Grid */}
            <section className="space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Select Your Market to View Local Specifications:
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Each regional hub features dedicated cleaning crews, localized industry expertise, and customized scheduling:
                </p>
              </div>

              <div className="space-y-6">
                {fiveLocations.map((loc, idx) => (
                  <div
                    key={loc.id}
                    className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-brand-400 hover:shadow-xl transition-all group"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      <div className="md:col-span-5 relative h-52 rounded-2xl overflow-hidden">
                        <Image
                          src={loc.image}
                          alt={`Commercial cleaning services in ${loc.name} AZ`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                          Market Hub 0{idx + 1}
                        </div>
                      </div>

                      <div className="md:col-span-7 space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                            <Link href={`/locations/${loc.slug}`}>
                              {loc.fullName}
                            </Link>
                          </h4>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed">
                          {loc.content.slice(0, 220)}...
                        </p>

                        <div className="space-y-1">
                          <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                            Key Landmarks & Corridors Covered:
                          </span>
                          <div className="flex flex-wrap gap-1.5 pt-0.5">
                            {loc.landmarks.slice(0, 3).map((lm, i) => (
                              <span
                                key={i}
                                className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                              >
                                {lm}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2">
                          <Link
                            href={`/locations/${loc.slug}`}
                            className="seo-link text-xs font-bold inline-flex items-center gap-1.5"
                          >
                            <span>Explore {loc.name} Commercial Cleaning Page</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Geographical Context & Coverage */}
            <section className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Not Sure If Your Building Falls Within Our Radius?
              </h3>
              <p>
                Our commercial cleaning dispatch center covers a 25-mile radius from our central Deer Valley hub at Deer Valley Road and I-17. If your business is located in Peoria, Glendale, Carefree, or Paradise Valley, we frequently service commercial complexes in these adjacent areas. Contact our team today and we will verify crew availability within minutes.
              </p>
              <div className="p-4 rounded-2xl bg-brand-50 border border-brand-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span>
                  Ready to confirm service at your facility? Call our dispatch line:
                </span>
                <a
                  href={siteConfig.phoneHref}
                  className="font-bold text-brand-700 hover:text-brand-900 underline whitespace-nowrap"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </section>

            {/* Mandated SEO Links Section */}
            <SeoLinksSection
              title="Regional Directory & Local Market Links"
              description="Navigate to individual market sub-pages, service hubs, and regional civic authorities:"
              internalLinks={locationsInternalLinks}
              externalLink={locationsExternalLink}
            />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <QuoteForm
              compact
              title="Schedule a Site Walkthrough"
              subtitle="We service all commercial properties across the North Valley."
            />

            <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <MapPin className="w-4 h-4" />
                <span>Valley Map Coverage</span>
              </div>
              <h4 className="text-lg font-bold">Visit Our Location on Google Maps</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Click below to view our location on Google Maps and get direct driving directions.
              </p>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow-md"
              >
                <span>Open Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-accent" />
              </a>
            </div>
          </aside>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <CallToAction />
      </div>
    </div>
  );
}
