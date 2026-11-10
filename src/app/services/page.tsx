import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import {
  Sparkles,
  CheckCircle,
  Phone,
  ShieldCheck,
  ArrowRight,
  Layers,
} from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import CallToAction from '@/components/CallToAction';
import SeoLinksSection from '@/components/SeoLinksSection';
import { siteConfig, allTwentyServices, nineSubServices } from '@/data/siteData';

export const metadata: Metadata = {
  title: "Commercial Cleaning Services Deer Valley AZ",
  description:
    "Browse 20 commercial cleaning services in Deer Valley, AZ, from office and medical cleaning to floors, windows and day porters. Get a free quote.",
};

export default function ServicesHubPage() {
  const servicesInternalLinks = [
    {
      href: "/",
      label: "Deer Valley Commercial Cleaning Homepage",
      context: "Return to our Deer Valley operational headquarters overview.",
    },
    {
      href: "/services/office-cleaning",
      label: "Office Cleaning in Deer Valley",
      context: "Nightly cleaning for professional suites and corporate offices.",
    },
    {
      href: "/services/janitorial-services",
      label: "Janitorial Services in Deer Valley",
      context: "Scheduled recurring janitorial programs with defined checklists.",
    },
    {
      href: "/services/medical-office-cleaning",
      label: "Medical Office Cleaning in Deer Valley",
      context: "Disinfection-focused clinical cleaning for outpatient practices.",
    },
    {
      href: "/locations/deer-valley",
      label: "Commercial Cleaning in Deer Valley (85024 & 85027)",
      context: "Our direct local service area along the Loop 101 corridor.",
    },
    {
      href: "/locations/scottsdale",
      label: "Commercial Cleaning in Scottsdale",
      context: "High-presentation custodial services for Scottsdale Airpark & Kierland.",
    },
  ];

  const servicesExternalLink = {
    href: "https://www.issa.com",
    label: "ISSA - The Worldwide Cleaning Industry Association",
    authorityName: "ISSA Commercial Facility Standards",
  };

  return (
    <div className="bg-white">
      {/* Services Hub Header with Cinematic Photographic Background */}
      <section className="relative overflow-hidden bg-navy-950 py-16 lg:py-20 border-b border-slate-800 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=85"
            alt="Commercial cleaning services in Deer Valley AZ"
            fill
            priority
            className="object-cover opacity-20 filter brightness-90 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/90 to-brand-950/80 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-grid-white opacity-25 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-white/10 backdrop-blur-md text-cyan-300 border border-cyan-400/30">
              <Layers className="w-4 h-4 text-cyan-300" />
              <span>Comprehensive Facility Silo (20 Services)</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Commercial Cleaning Services in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-emerald-300">
                Deer Valley, AZ
              </span>
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              <strong className="text-white">Brightcrest Commercial Cleaning Deer Valley</strong> provides a complete suite of specialized commercial cleaning, recurring janitorial maintenance, and specialty project care for enterprises across Deer Valley, North Phoenix, Anthem, Scottsdale, and the greater Phoenix metropolitan area.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Services List & Guide */}
          <div className="lg:col-span-8 space-y-12 text-slate-700 leading-relaxed">
            {/* 800+ Words Structured Hub Content */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                All 20 Commercial Cleaning Programs Under One Reliable Local Provider
              </h2>
              <p>
                Whether you manage a single 2,500 square-foot corporate office or an expansive 80,000 square-foot industrial distribution complex near Deer Valley Airport, fragmented cleaning contractors create scheduling headaches and inconsistent standards. Brightcrest solves this challenge by delivering single-source custodial excellence. Every program starts with an on-site facility audit, written task specifications, and transparent fixed pricing.
              </p>
              <p>
                From medical facilities requiring terminal disinfection compliant with CDC guidelines to high-traffic retail stores needing sparkling storefront glass before opening, explore our 20 specialized service categories below:
              </p>
            </section>

            {/* Core 9 Sub-Pages Highlighted */}
            <section className="space-y-6">
              <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Featured Core Silo Services (9 Sub-Pages)
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    In-depth dedicated programs with full specifications, daily checklists, and scheduling options:
                  </p>
                </div>
                <span className="hidden sm:inline-block text-xs font-bold text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
                  Primary Silo
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {nineSubServices.map((srv) => (
                  <div
                    key={srv.id}
                    className="flex flex-col justify-between p-6 rounded-3xl bg-white border border-slate-200 hover:border-brand-400 hover:shadow-lg transition-all group"
                  >
                    <div className="space-y-3">
                      <div className="relative h-44 rounded-2xl overflow-hidden mb-3">
                        <Image
                          src={srv.image}
                          alt={`${srv.title} in Deer Valley AZ`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                          Deer Valley Silo
                        </div>
                      </div>

                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                        <Link href={`/services/${srv.slug}`}>
                          {srv.title}
                        </Link>
                      </h4>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {srv.shortDesc}
                      </p>

                      <div className="space-y-1 pt-1">
                        <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                          Included Tasks:
                        </span>
                        <ul className="text-[11px] text-slate-600 space-y-1">
                          {srv.includes.slice(0, 3).map((item, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <CheckCircle className="w-3 h-3 text-accent shrink-0" />
                              <span className="line-clamp-1">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={`/services/${srv.slug}`}
                        className="seo-link text-xs font-bold inline-flex items-center gap-1"
                      >
                        <span>View Dedicated Sub-Page</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {srv.targetWords}+ Words
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Additional 11 Specialty Services */}
            <section className="space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Additional Specialty & Project Cleaning Services
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Combine recurring janitorial maintenance with periodic high-performance facility restoration:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {allTwentyServices.slice(9).map((srv) => (
                  <div
                    key={srv.id}
                    className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-brand-300 transition-all"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h4 className="font-bold text-sm text-slate-900">
                        <Link href={`/services/${srv.slug}`} className="hover:text-brand-600 transition-colors">
                          {srv.title}
                        </Link>
                      </h4>
                      <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {srv.shortDesc}
                    </p>
                    <Link
                      href={`/services/${srv.slug}`}
                      className="seo-link text-xs font-semibold inline-flex items-center gap-1"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* Choosing the Right Service Guide */}
            <section className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                How to Determine the Right Commercial Service Mix
              </h3>
              <p>
                Most businesses start with a core foundation—such as{' '}
                <Link href="/services/office-cleaning" className="seo-link">
                  Office Cleaning
                </Link>{' '}
                or comprehensive{' '}
                <Link href="/services/janitorial-services" className="seo-link">
                  Janitorial Services
                </Link>
                —and add periodic specialty care. For example, corporate offices often benefit from quarterly{' '}
                <Link href="/services/commercial-carpet-cleaning" className="seo-link">
                  Commercial Carpet Cleaning
                </Link>{' '}
                and bi-monthly{' '}
                <Link href="/services/commercial-window-cleaning" className="seo-link">
                  Commercial Window Cleaning
                </Link>{' '}
                to counteract Sonoran Desert dust accumulation.
              </p>
              <p>
                If your company operates under specific healthcare protocols, our{' '}
                <Link href="/services/medical-office-cleaning" className="seo-link">
                  Medical Office Cleaning
                </Link>{' '}
                and terminal disinfection programs ensure full regulatory alignment without placing burden on clinical caregivers.
              </p>
            </section>

            {/* SEO Links Section */}
            <SeoLinksSection
              title="Related Services & Regional Service Hubs"
              description="Navigate to specialized commercial cleaning sub-pages and regional service areas:"
              internalLinks={servicesInternalLinks}
              externalLink={servicesExternalLink}
            />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <QuoteForm compact title="Request a Custom Service Scope" subtitle="Receive an itemized commercial proposal for your building." />

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent-emerald" />
                <span>Our Service Guarantee</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                If any aspect of your contracted written checklist does not meet your expectations, notify our dispatch team within 24 hours. A supervisor will arrive on-site to resolve the issue at no additional cost.
              </p>
              <div className="pt-2">
                <a
                  href={siteConfig.phoneHref}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-accent" />
                  <span>Call {siteConfig.phoneDisplay}</span>
                </a>
              </div>
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
