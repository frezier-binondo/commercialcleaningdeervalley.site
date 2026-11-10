import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ShieldCheck,
  Phone,
  Sparkles,
  Clock,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Building,
} from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import CallToAction from '@/components/CallToAction';
import SeoLinksSection from '@/components/SeoLinksSection';
import { allTwentyServices, siteConfig, fiveLocations } from '@/data/siteData';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return allTwentyServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = allTwentyServices.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: service.metaTitle,
    description: service.metaDesc,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDesc,
      images: [{ url: service.image }],
    },
  };
}

export default function ServiceSubPage({ params }: ServicePageProps) {
  const service = allTwentyServices.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Map 5 internal links + 1 external authority link tailored to this service
  const relatedServices = allTwentyServices
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const internalLinks = [
    {
      href: "/services",
      label: "All Commercial Cleaning Services Hub",
      context: "Return to the full directory of 20 commercial cleaning programs.",
    },
    ...relatedServices.map((s) => ({
      href: `/services/${s.slug}`,
      label: `${s.title} in Deer Valley`,
      context: `Explore our specialized ${s.title.toLowerCase()} program.`,
    })),
    {
      href: "/locations/deer-valley",
      label: "Commercial Cleaning in Deer Valley AZ (85024 & 85027)",
      context: "Local operational dispatch and on-site facility walkthroughs.",
    },
    {
      href: "/locations/north-phoenix",
      label: "Commercial Cleaning in North Phoenix",
      context: "Serving Desert Ridge, Loop 101, and Tatum Blvd business corridors.",
    },
  ].slice(0, 5);

  // Authority external link mapping per service type
  let externalLink = {
    href: "https://www.issa.com",
    label: "ISSA - The Worldwide Cleaning Industry Association",
    authorityName: "ISSA Clean Standards",
  };

  if (service.slug.includes("medical") || service.slug.includes("dental") || service.slug.includes("disinfection")) {
    externalLink = {
      href: "https://www.cdc.gov/infection-control/hcp/environmental-control/",
      label: "CDC Environmental Infection Control Guidelines",
      authorityName: "Centers for Disease Control and Prevention",
    };
  } else if (service.slug.includes("industrial") || service.slug.includes("warehouse")) {
    externalLink = {
      href: "https://www.osha.gov/hazcom",
      label: "OSHA Hazard Communication Standards",
      authorityName: "Occupational Safety and Health Administration",
    };
  } else if (service.slug.includes("post-construction")) {
    externalLink = {
      href: "https://www.osha.gov/construction",
      label: "OSHA Construction Industry Resource Guidelines",
      authorityName: "OSHA Construction Safety Division",
    };
  } else if (service.slug.includes("restaurant")) {
    externalLink = {
      href: "https://www.fda.gov/food/retail-food-protection/fda-food-code",
      label: "FDA Food Code Facility Cleanliness Guidelines",
      authorityName: "U.S. Food & Drug Administration",
    };
  } else if (service.slug.includes("floor")) {
    externalLink = {
      href: "https://nfsi.org",
      label: "National Floor Safety Institute (NFSI)",
      authorityName: "NFSI Slip and Fall Prevention Standards",
    };
  }

  return (
    <div className="bg-white">
      {/* Breadcrumb Bar */}
      <div className="bg-slate-50 border-b border-slate-200 py-3 px-4 sm:px-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-brand-600">Services Hub</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">{service.title}</span>
        </div>
      </div>

      {/* Hero Header with Photographic Background */}
      <section className="relative overflow-hidden bg-navy-950 py-16 lg:py-20 border-b border-slate-800 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
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
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>Deer Valley Specialized Silo Program</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                {service.h1}
              </h1>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                {service.shortDesc} <strong className="text-white">Brightcrest Commercial Cleaning Deer Valley</strong> delivers verified, checklist-driven commercial care for facilities across Deer Valley (85024, 85027), North Phoenix, Anthem, Scottsdale, and Phoenix AZ.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-black text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all shadow-md"
                >
                  <Phone className="w-4 h-4 text-slate-950" />
                  <span>Call: {siteConfig.phoneDisplay}</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-brand-600 to-accent hover:from-brand-500 hover:to-accent/90 transition-all shadow-md border border-white/20"
                >
                  <span>Request Free Scope & Quote</span>
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
                  After-Hours Schedules
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  Deer Valley Base
                </span>
              </div>
            </div>

            {/* Service Featured Image Card */}
            <div className="lg:col-span-5">
              <div className="relative h-72 sm:h-88 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-700">
                <Image
                  src={service.image}
                  alt={`${service.title} services in Deer Valley AZ`}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                  <span className="text-white text-xs font-black tracking-wide uppercase bg-slate-900/90 px-3.5 py-1.5 rounded-xl backdrop-blur-md border border-white/20 shadow-md">
                    Professional Grade • {service.title}
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
            {/* Detailed Service Narrative (800+ Words locally optimized) */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Comprehensive {service.title} in Deer Valley, AZ
              </h2>
              <p>
                {service.content}
              </p>
              <p>
                Maintaining high cleanliness and sanitation standards in Deer Valley is vital for enterprise longevity. In the arid climate of north Phoenix, fine dust, particulate matter, and monsoon residues enter commercial buildings through loading bays, high-traffic entry doors, and air handling equipment. Without continuous professional custodial attention, surfaces quickly develop stubborn grime layers, carpet traffic lanes turn dull, and microbial transmission risks increase.
              </p>
              <p>
                Our specialized <strong className="text-slate-900">{service.title}</strong> protocols are structured around how your facility is actually utilized day-to-day. Rather than relying on rushed visual sweeps, our custodial specialists follow an exhaustive task binder customized specifically for your facility&apos;s floor plan and sector requirements.
              </p>
            </section>

            {/* What is Included Checklist */}
            <section className="space-y-4 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                What Our {service.title} Program Includes
              </h2>
              <p className="text-sm text-slate-600">
                Each visit follows a strict written quality checklist inspected and signed off by on-site supervisors:
              </p>
              <div className="grid grid-cols-1 gap-2.5 pt-2">
                {service.includes.map((inc, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800">{inc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Who We Serve & Why It Matters */}
            <section className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Building className="w-5 h-5 text-brand-600" />
                    <span>Who We Serve</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.whoWeServe}
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-accent-emerald" />
                    <span>Why It Matters</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.whyItMatters}
                  </p>
                </div>
              </div>
            </section>

            {/* Step-by-Step Execution Process */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Our Proven 4-Stage Operational Process
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.process.map((step, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                    <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
                      Phase 0{idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Scheduling & Flexibility */}
            <section className="space-y-3 p-6 rounded-3xl bg-brand-50/50 border border-brand-200">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand-600" />
                <span>Scheduling & Frequency Options</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {service.scheduling}. All schedules are confirmed in writing with zero surprise charges. We adapt as your company expands, operating after hours, overnights, or during weekend operational pauses.
              </p>
            </section>

            {/* Local Context: Supporting Deer Valley & Nearby Markets */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {service.title} Across Our Service Areas
              </h2>
              <p>
                In addition to our core Deer Valley service zone (ZIP 85024 and 85027), we provide {service.title.toLowerCase()} across our regional service corridors:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {fiveLocations.map((loc) => (
                  <Link
                    key={loc.id}
                    href={`/locations/${loc.slug}`}
                    className="p-3 bg-white border border-slate-200 rounded-xl hover:border-brand-400 hover:text-brand-700 transition-colors flex items-center justify-between"
                  >
                    <span className="font-semibold text-slate-800">{service.title} in {loc.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-accent" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Frequently Asked Questions for this Service */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-brand-600" />
                <span>Frequently Asked Questions: {service.title}</span>
              </h2>
              <div className="space-y-3">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <h4 className="font-bold text-sm sm:text-base text-slate-900">
                      {faq.question}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Mandated SEO Links Section: 5 internal links + 1 external link */}
            <SeoLinksSection
              title={`Related Commercial Cleaning Services & Service Locations`}
              description={`Explore complementary facility care options and regional service coverage for ${service.title}:`}
              internalLinks={internalLinks}
              externalLink={externalLink}
            />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <QuoteForm
              compact
              initialService={service.title}
              title={`Request a Quote for ${service.title}`}
              subtitle="Get an itemized written estimate for your Deer Valley facility."
            />

            <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <Phone className="w-4 h-4" />
                <span>Direct Dispatch</span>
              </div>
              <h4 className="text-lg font-bold">Need Immediate Service?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Call our Deer Valley operational team directly to schedule a same-day walkthrough or emergency start.
              </p>
              <a
                href={siteConfig.phoneHref}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow-md"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>Call {siteConfig.phoneDisplay}</span>
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
