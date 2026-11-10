import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import CallToAction from '@/components/CallToAction';
import SeoLinksSection from '@/components/SeoLinksSection';
import { siteConfig } from '@/data/siteData';

export const metadata: Metadata = {
  title: "Free Commercial Cleaning Quote | Deer Valley AZ",
  description:
    "Request a free commercial cleaning quote in Deer Valley, AZ. Tell us about your building and get a clear written quote after a short walkthrough.",
};

export default function ContactPage() {
  const contactInternalLinks = [
    {
      href: "/",
      label: "Commercial Cleaning Deer Valley Home",
      context: "Return to our central operational headquarters overview.",
    },
    {
      href: "/services",
      label: "Commercial Cleaning Services Hub",
      context: "Review all 20 specialized facility cleaning programs.",
    },
    {
      href: "/services/office-cleaning",
      label: "Office Cleaning in Deer Valley",
      context: "Nightly and multi-day corporate office cleaning programs.",
    },
    {
      href: "/services/janitorial-services",
      label: "Janitorial Services in Deer Valley",
      context: "Recurring custodial upkeep and supply replenishment.",
    },
    {
      href: "/locations/deer-valley",
      label: "Deer Valley Operational Territory (85024 & 85027)",
      context: "Local route information along Loop 101 and I-17.",
    },
    {
      href: "/faq",
      label: "Frequently Asked Questions (FAQ)",
      context: "Quick answers regarding costs, insurance, and schedules.",
    },
  ];

  const contactExternalLink = {
    href: "https://www.phoenixchamber.com",
    label: "Greater Phoenix Chamber of Commerce",
    authorityName: "Greater Phoenix Regional Business Directory",
  };

  return (
    <div className="bg-white">
      {/* Hero Header with Photographic Background */}
      <section className="relative overflow-hidden bg-navy-950 py-16 lg:py-20 border-b border-slate-800 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85"
            alt="Deer Valley commercial business office"
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
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>Direct Commercial Dispatch & Walkthrough Scheduling</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Request a Free Commercial Cleaning Quote in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-emerald-300">
                Deer Valley, AZ
              </span>
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Tell us about your facility and our local Deer Valley team will schedule an efficient walkthrough and deliver an itemized written quote. 100% free with zero obligation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Contact Info + Interactive Map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info & Map Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  Direct Contact Information
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Brightcrest Commercial Cleaning Deer Valley
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Headquartered in Deer Valley, Phoenix, AZ (85024 / 85027), serving businesses across North Phoenix, Anthem, Scottsdale, and the greater Phoenix metro area.
                </p>
              </div>

              <div className="space-y-4 pt-2 text-sm">
                <div className="flex items-start gap-3.5 text-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block text-xs uppercase tracking-wider text-slate-400">
                      24/7 Dispatch & Quotes Phone:
                    </span>
                    <a
                      href={siteConfig.phoneHref}
                      className="text-lg font-bold text-white hover:text-accent transition-colors underline"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                    <p className="text-xs text-slate-400 mt-0.5">Click to call anytime</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block text-xs uppercase tracking-wider text-slate-400">
                      Email Inquiries:
                    </span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm font-semibold text-white hover:text-accent transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block text-xs uppercase tracking-wider text-slate-400">
                      Operational Headquarters:
                    </span>
                    <p className="text-sm text-slate-300">
                      {siteConfig.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-accent-emerald shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block text-xs uppercase tracking-wider text-slate-400">
                      Operations Hours:
                    </span>
                    <p className="text-xs text-slate-300">
                      {siteConfig.hours}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow-md"
                >
                  <span>Open in Google Maps App</span>
                  <ExternalLink className="w-4 h-4 text-accent" />
                </a>
              </div>
            </div>

            {/* Embedded Visible Google Map */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white p-2">
              <div className="p-3 flex items-center justify-between text-xs text-slate-600">
                <span className="font-bold flex items-center gap-1.5 text-slate-800">
                  <MapPin className="w-4 h-4 text-accent" />
                  Deer Valley Headquarters Location
                </span>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 font-bold hover:underline"
                >
                  View Large Map
                </a>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <iframe
                  title="Brightcrest Commercial Cleaning Deer Valley Google Map"
                  src={siteConfig.googleMapsEmbed}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Right: Interactive Quote Form */}
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
        </div>

        {/* What to Expect Section */}
        <section className="my-16 p-8 rounded-3xl bg-slate-50 border border-slate-200/80">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
            What to Expect After Submitting Your Quote Request
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-700 font-bold flex items-center justify-center text-xs">
                1
              </div>
              <h4 className="font-bold text-slate-900">Initial Phone Confirmation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We review your square footage and priorities and reach out within 2 hours to confirm a brief, 15-minute on-site walkthrough.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-700 font-bold flex items-center justify-center text-xs">
                2
              </div>
              <h4 className="font-bold text-slate-900">On-Site Walkthrough</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our estimator inspects floor surfaces, restroom counts, and special security or access requirements at your building.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-700 font-bold flex items-center justify-center text-xs">
                3
              </div>
              <h4 className="font-bold text-slate-900">Written Proposal & Start Date</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                You receive a clear, itemized proposal with guaranteed flat pricing. Once approved, cleaning can begin within 24 to 48 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Mandated SEO Links Section */}
        <SeoLinksSection
          title="Related Services & Regional Commercial Hubs"
          description="Explore our primary commercial services and local market pages across Maricopa County:"
          internalLinks={contactInternalLinks}
          externalLink={contactExternalLink}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <CallToAction />
      </div>
    </div>
  );
}
