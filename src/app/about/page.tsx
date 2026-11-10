import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import {
  ShieldCheck,
  Sparkles,
  Award,
  Users,
} from 'lucide-react';
import CallToAction from '@/components/CallToAction';
import SeoLinksSection from '@/components/SeoLinksSection';

export const metadata: Metadata = {
  title: "About Us Deer Valley AZ",
  description:
    "Meet Brightcrest, a local Deer Valley commercial cleaning company. Learn about our approach, screening, and request a free quote for your building.",
};

export default function AboutPage() {
  const aboutInternalLinks = [
    {
      href: "/",
      label: "Commercial Cleaning Deer Valley Home",
      context: "Return to our central headquarters overview.",
    },
    {
      href: "/services",
      label: "Commercial Cleaning Services Hub",
      context: "Review all 20 specialized facility cleaning programs.",
    },
    {
      href: "/services/office-cleaning",
      label: "Office Cleaning in Deer Valley",
      context: "Nightly sanitization programs for corporate office suites.",
    },
    {
      href: "/locations/deer-valley",
      label: "Deer Valley Operational Territory (85024 & 85027)",
      context: "Local route information along Loop 101 and I-17.",
    },
    {
      href: "/contact",
      label: "Request a Free Walkthrough & Written Scope",
      context: "Get an itemized written quote within 24 hours.",
    },
  ];

  const aboutExternalLink = {
    href: "https://www.issa.com",
    label: "ISSA - The Worldwide Cleaning Industry Association",
    authorityName: "ISSA Global Cleaning Standards",
  };

  return (
    <div className="bg-white">
      {/* Hero Header with Photographic Background */}
      <section className="relative overflow-hidden bg-navy-950 py-16 lg:py-20 border-b border-slate-800 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=85"
            alt="About Brightcrest Commercial Cleaning Deer Valley"
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
              <span>Locally Owned & Operated in Deer Valley, Phoenix AZ</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              About Brightcrest Commercial Cleaning in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-emerald-300">
                Deer Valley, AZ
              </span>
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              We are a dedicated commercial cleaning company stationed directly in Deer Valley, Phoenix, AZ (ZIP codes 85024 and 85027). We specialize in reliable, recurring janitorial programs, healthcare-grade disinfection, and advanced floor care for commercial spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6 text-slate-700 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Disciplined Facility Care Approach
            </h2>
            <p>
              At <strong className="text-slate-900">Brightcrest Commercial Cleaning Deer Valley</strong>, we believe commercial cleaning should be consistent, accountable, and completely transparent. Inconsistent cleaning creates administrative frustration for facility managers and projects poor credibility to customers.
            </p>
            <p>
              We solve this by eliminating the guesswork. Every client receives a custom written task binder, dedicated custodial specialists who understand your building, and GPS-verified shift attendance. Field supervisors conduct regular site inspections to ensure checklists are followed to the letter.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-brand-600">100%</div>
                <div className="text-xs font-semibold text-slate-800 mt-0.5">Written Checklists</div>
                <p className="text-[11px] text-slate-500 mt-1">Inspected and verified on every shift.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-accent-emerald">24/7</div>
                <div className="text-xs font-semibold text-slate-800 mt-0.5">Local Response</div>
                <p className="text-[11px] text-slate-500 mt-1">Supervisors on call in Deer Valley 85027.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
              alt="Brightcrest Commercial Cleaning Deer Valley management team"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Credentials and Insurance */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 space-y-6 mb-16">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
              <ShieldCheck className="w-4 h-4" />
              <span>Full Compliance & Safety</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Insurance, Training & Industry Credentials
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We protect our clients with comprehensive insurance coverage and rigorous staff onboarding:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <Award className="w-6 h-6 text-accent" />
              <h4 className="font-bold text-white text-base">Comprehensive Insurance</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                $2,000,000 general liability coverage, commercial property damage insurance, and complete workers&apos; compensation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <Users className="w-6 h-6 text-accent-emerald" />
              <h4 className="font-bold text-white text-base">Background Screened</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                100% background checks, drug screenings, and security clearance verification for all cleaning crew members.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <Sparkles className="w-6 h-6 text-accent-amber" />
              <h4 className="font-bold text-white text-base">OSHA & EPA Standards</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Continuous training in Hazard Communication (Hazcom), bloodborne pathogen control, and chemical dilution safety.
              </p>
            </div>
          </div>
        </div>

        {/* Mandated SEO Links Section */}
        <SeoLinksSection
          title="Related Services & Regional Service Hubs"
          description="Continue exploring related commercial cleaning services and local market pages:"
          internalLinks={aboutInternalLinks}
          externalLink={aboutExternalLink}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <CallToAction />
      </div>
    </div>
  );
}
