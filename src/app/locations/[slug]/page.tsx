import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import CallToAction from '@/components/CallToAction';
import SeoLinksSection from '@/components/SeoLinksSection';
import { fiveLocations, siteConfig, nineSubServices } from '@/data/siteData';

interface LocationPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return fiveLocations.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const loc = fiveLocations.find((l) => l.slug === params.slug);
  if (!loc) return { title: 'Location Not Found' };

  return {
    title: loc.metaTitle,
    description: loc.metaDesc,
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDesc,
      images: [{ url: loc.image }],
    },
  };
}

export default function LocationSubPage({ params }: LocationPageProps) {
  const loc = fiveLocations.find((l) => l.slug === params.slug);

  if (!loc) {
    notFound();
  }

  // 5 internal links + 1 external authority link tailored to this location
  const otherLocations = fiveLocations.filter((l) => l.slug !== loc.slug);

  const internalLinks = [
    {
      href: "/locations",
      label: "All Service Locations Hub",
      context: "Browse our complete 5-market regional coverage directory.",
    },
    {
      href: "/services/office-cleaning",
      label: `Office Cleaning in ${loc.name}`,
      context: `Scheduled recurring corporate office sanitization in ${loc.name}.`,
    },
    {
      href: "/services/janitorial-services",
      label: `Janitorial Services in ${loc.name}`,
      context: `Daily custodial upkeep, trash removal, and restroom restocking in ${loc.name}.`,
    },
    {
      href: `/locations/${otherLocations[0].slug}`,
      label: `Commercial Cleaning in ${otherLocations[0].name}`,
      context: `Explore our commercial cleaning operations in nearby ${otherLocations[0].name}.`,
    },
    {
      href: `/locations/${otherLocations[1].slug}`,
      label: `Commercial Cleaning in ${otherLocations[1].name}`,
      context: `Serving commercial facilities across ${otherLocations[1].name}.`,
    },
  ];

  // External authority link per area
  let externalLink = {
    href: "https://www.phoenixchamber.com",
    label: "Greater Phoenix Chamber of Commerce",
    authorityName: "Greater Phoenix Chamber",
  };

  if (loc.slug === "scottsdale") {
    externalLink = {
      href: "https://www.scottsdalechamber.com",
      label: "Scottsdale Chamber of Commerce",
      authorityName: "Scottsdale Business Alliance",
    };
  } else if (loc.slug === "anthem") {
    externalLink = {
      href: "https://www.maricopa.gov",
      label: "Maricopa County Official Government Portal",
      authorityName: "Maricopa County Public Services",
    };
  } else if (loc.slug === "phoenix" || loc.slug === "deer-valley") {
    externalLink = {
      href: "https://www.phoenix.gov",
      label: "City of Phoenix Official Portal",
      authorityName: "City of Phoenix Municipal Commerce",
    };
  }

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200 py-3 px-4 sm:px-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <span>/</span>
          <Link href="/locations" className="hover:text-brand-600">Locations</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">{loc.name}</span>
        </div>
      </div>

      {/* Hero Header with Photographic Background */}
      <section className="relative overflow-hidden bg-navy-950 py-16 lg:py-20 border-b border-slate-800 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={loc.image}
            alt={loc.fullName}
            fill
            priority
            className="object-cover opacity-20 filter brightness-90 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/90 to-brand-950/80 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-grid-white opacity-25 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-white/10 backdrop-blur-md text-cyan-300 border border-cyan-400/30">
                <MapPin className="w-3.5 h-3.5 text-cyan-300" />
                <span>Regional Market Hub: {loc.name}, Arizona</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Commercial Cleaning in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-emerald-300">
                  {loc.name}, AZ
                </span>
              </h1>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                Professional, reliable commercial cleaning and janitorial services for corporate offices, medical clinics, distribution warehouses, retail stores, and facilities throughout <strong>{loc.fullName}</strong>.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-black text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all shadow-md"
                >
                  <Phone className="w-4 h-4 text-slate-950" />
                  <span>Call {loc.name} Dispatch: {siteConfig.phoneDisplay}</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-brand-600 to-accent hover:from-brand-500 hover:to-accent/90 transition-all shadow-md border border-white/20"
                >
                  <span>Request Free Walkthrough</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-300 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Licensed & Insured
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  Nightly Routines
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  Local {loc.name} Routes
                </span>
              </div>
            </div>

            {/* Location Image Card */}
            <div className="lg:col-span-5">
              <div className="relative h-72 sm:h-88 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-700">
                <Image
                  src={loc.image}
                  alt={`Commercial cleaning services in ${loc.name} Arizona`}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                  <span className="text-white text-xs font-black tracking-wide uppercase bg-slate-900/90 px-3.5 py-1.5 rounded-xl backdrop-blur-md border border-white/20 shadow-md">
                    {loc.name} Commercial Routes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12 text-slate-700 leading-relaxed">
            {/* Detailed Local Narrative */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Locally Optimized Commercial Cleaning for {loc.name} Businesses
              </h2>
              <p>
                {loc.content}
              </p>
              <p>
                Operating in {loc.name} presents distinct facility management requirements. Whether your property is exposed to heavy foot traffic along major commercial arterials or requires silent, confidential after-hours executive cleaning, Brightcrest Commercial Cleaning Deer Valley aligns our cleaning scope to your business cadence.
              </p>
            </section>

            {/* Key Corridors & Landmarks */}
            <section className="space-y-4 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Commercial Corridors & Sub-Districts We Service in {loc.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Our daily routes actively cover commercial properties adjacent to:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {loc.landmarks.map((lm, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 bg-white rounded-xl border border-slate-200">
                    <MapPin className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{lm}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Highlights of Service in this Market */}
            <section className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Why {loc.name} Facility Managers Rely on Brightcrest
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {loc.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
                    <CheckCircle2 className="w-5 h-5 text-accent-emerald shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 font-medium">{hl}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Services Available in this Location */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Commercial Services Available in {loc.name}
              </h2>
              <p className="text-sm text-slate-600">
                All 20 specialized Brightcrest commercial cleaning programs are deployed in {loc.name}. Explore core options:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {nineSubServices.map((srv) => (
                  <Link
                    key={srv.id}
                    href={`/services/${srv.slug}`}
                    className="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-brand-400 hover:text-brand-600 transition-colors flex items-center justify-between group"
                  >
                    <span className="text-xs font-bold text-slate-800 group-hover:text-brand-600">{srv.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Key Industries in this Location */}
            <section className="space-y-3 p-6 rounded-3xl bg-brand-50/50 border border-brand-200">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                Primary Business Sectors Served in {loc.name}:
              </h4>
              <div className="flex flex-wrap gap-2 pt-1">
                {loc.keyIndustries.map((ind, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white text-slate-800 border border-brand-200 shadow-2xs"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </section>

            {/* Mandated SEO Links Section: 5 internal links + 1 external link */}
            <SeoLinksSection
              title={`Local Navigation & Authority References for ${loc.name}`}
              description={`Connect to related services, neighboring market hubs, and municipal business resources:`}
              internalLinks={internalLinks}
              externalLink={externalLink}
            />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <QuoteForm
              compact
              title={`Request a Walkthrough in ${loc.name}`}
              subtitle="Our local estimator will inspect your building and prepare a written quote."
            />

            <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <MapPin className="w-4 h-4" />
                <span>Google Map Navigation</span>
              </div>
              <h4 className="text-lg font-bold">Interactive Service Map</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                View our main operations center and full service boundaries on Google Maps.
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
