import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Calendar, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteData';

interface CallToActionProps {
  heading?: string;
  subheading?: string;
}

export default function CallToAction({
  heading = "Ready for an Uncompromisingly Clean Deer Valley Facility?",
  subheading = "Join leading medical offices, corporate tech suites, distribution warehouses, and local enterprises who rely on Brightcrest for consistent, spotless results.",
}: CallToActionProps) {
  return (
    <section className="relative overflow-hidden py-16 px-6 sm:px-12 bg-navy-950 text-white rounded-3xl my-16 shadow-2xl border border-slate-700/80">
      {/* Background Image with Dark Navy Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1600&q=80"
          alt="Gleaming clean commercial facility floor"
          fill
          className="object-cover opacity-25 filter brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/90 to-brand-950/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-white/10 backdrop-blur-md text-cyan-300 border border-cyan-400/30 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          <span>Deer Valley Commercial Cleaning Specialists</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
          {heading}
        </h2>

        <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
          {subheading}
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteConfig.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-black text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 shadow-xl shadow-amber-500/25 transition-all hover:scale-105 active:scale-95"
          >
            <Phone className="w-5 h-5 text-slate-950" />
            <span>Call Now: {siteConfig.phoneDisplay}</span>
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-brand-600 to-accent hover:from-brand-500 hover:to-accent/90 shadow-xl shadow-brand-500/30 transition-all hover:scale-105 active:scale-95 border border-white/20"
          >
            <span>Request Free Walkthrough</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <span className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Licensed, Bonded & Fully Insured
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <Calendar className="w-4 h-4 text-cyan-400" />
            Free On-Site Written Scope in 24 Hours
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Zero Long-Term Lock-in Contracts
          </span>
        </div>
      </div>
    </section>
  );
}
