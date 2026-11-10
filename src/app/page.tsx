import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ShieldCheck,
  CheckCircle,
  Phone,
  Sparkles,
  Clock,
  MapPin,
  Building2,
  Stethoscope,
  Boxes,
  Store,
  Utensils,
  HardHat,
  ArrowRight,
  Star,
  CheckCircle2,
  Award,
  Zap,
  TrendingUp,
} from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import CallToAction from '@/components/CallToAction';
import SeoLinksSection from '@/components/SeoLinksSection';
import { siteConfig, nineSubServices, fiveLocations } from '@/data/siteData';

export const metadata: Metadata = {
  title: "Commercial Cleaning Deer Valley AZ",
  description:
    "Commercial cleaning in Deer Valley, AZ for offices, clinics, warehouses and retail. Reliable crews, flexible schedules. Request your free quote today.",
};

export default function HomePage() {
  const homeInternalLinks = [
    {
      href: "/services",
      label: "Commercial Cleaning Services Hub",
      context: "Browse all 20 specialized cleaning programs available in Deer Valley.",
    },
    {
      href: "/services/office-cleaning",
      label: "Office Cleaning in Deer Valley",
      context: "Nightly and multi-day sanitization programs for corporate office suites.",
    },
    {
      href: "/services/janitorial-services",
      label: "Janitorial Services in Deer Valley",
      context: "Scheduled recurring custodial maintenance and supply replenishment.",
    },
    {
      href: "/services/medical-office-cleaning",
      label: "Medical Office Cleaning in Deer Valley",
      context: "Disinfection-focused clinical cleaning for outpatient practices and clinics.",
    },
    {
      href: "/locations/deer-valley",
      label: "Commercial Cleaning in Deer Valley (85024 & 85027)",
      context: "Our direct home operational territory along the Loop 101 and I-17 corridors.",
    },
    {
      href: "/locations/north-phoenix",
      label: "Commercial Cleaning in North Phoenix",
      context: "Serving commercial retail, offices, and medical plazas in Desert Ridge & Norterra.",
    },
  ];

  const homeExternalLink = {
    href: "https://www.issa.com",
    label: "ISSA - The Worldwide Cleaning Industry Association",
    authorityName: "ISSA Industry Clean Standard Protocols",
  };

  return (
    <div className="bg-slate-50">
      {/* High-Impact Hero with Full Photographic Background & Deep Navy Overlay */}
      <section className="relative overflow-hidden min-h-[640px] lg:min-h-[720px] flex items-center bg-navy-950 py-16 lg:py-24 border-b border-slate-800">
        {/* Photographic Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=85"
            alt="Pristine modern commercial office in Deer Valley Phoenix"
            fill
            priority
            className="object-cover object-center filter brightness-90 contrast-110"
          />
          {/* Multi-layered gradient overlay for cinematic contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/90 to-brand-950/80 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-grid-white opacity-40 pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider bg-white/10 backdrop-blur-md text-cyan-300 border border-cyan-400/30 shadow-lg">
                <Sparkles className="w-4 h-4 text-cyan-300" />
                <span>★ Top-Rated Commercial Cleaner in Deer Valley, AZ (85024 & 85027)</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white">
                Commercial Cleaning Services in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-emerald-300">
                  Deer Valley, AZ
                </span>
              </h1>

              {/* Introduction Paragraph */}
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                Welcome to <strong className="text-white font-semibold">Brightcrest Commercial Cleaning Deer Valley</strong>, your premier local commercial cleaning partner serving businesses throughout Deer Valley, Arizona (ZIP codes 85024 and 85027) and the greater north Phoenix area. We help corporate offices, medical practices, warehouses, retail stores, restaurants, and schools keep their facilities clean, safe, and impeccably presentable.
              </p>

              {/* Visual Benefit Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                    <MapPin className="w-4 h-4 text-cyan-300" />
                    <span>Stationed in 85027</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">Direct local routes in Deer Valley</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-300" />
                    <span>Bonded & Insured</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">$2M liability & workers&apos; comp</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                    <Clock className="w-4 h-4 text-amber-300" />
                    <span>Nightly Crews</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">Zero daytime disruption</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={siteConfig.phoneHref}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-black text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 shadow-xl shadow-amber-500/25 transition-all hover:scale-105 active:scale-95"
                >
                  <Phone className="w-5 h-5 text-slate-950" />
                  <span>Call: {siteConfig.phoneDisplay}</span>
                </a>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-brand-600 to-accent hover:from-brand-500 hover:to-accent/90 shadow-xl shadow-brand-500/30 transition-all hover:scale-105 active:scale-95 border border-white/20"
                >
                  <span>Request Free Walkthrough</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* In-text Contextual Link */}
              <div className="pt-2 text-xs text-slate-300 flex items-center gap-2 flex-wrap">
                <span>Looking for immediate service? Explore our</span>
                <Link href="/services/office-cleaning" className="text-cyan-300 hover:text-white underline font-semibold transition-colors">
                  Office Cleaning in Deer Valley
                </Link>
                <span>or</span>
                <Link href="/locations/north-phoenix" className="text-cyan-300 hover:text-white underline font-semibold transition-colors">
                  Commercial Cleaning in North Phoenix
                </Link>.
              </div>
            </div>

            {/* Right Form Card with Subtle Gradient Glow */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-500 via-cyan-400 to-emerald-400 rounded-3xl blur-md opacity-35 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-soft-pulse" />
              <div className="relative">
                <QuoteForm compact title="Get a Free Walkthrough & Quote" subtitle="Written scope and transparent flat rate in 24 hours." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Credibility Bar with Rich Color Badges */}
      <section className="py-6 bg-gradient-to-r from-slate-900 via-navy-950 to-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center text-center">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2.5">
              <Award className="w-5 h-5 text-amber-400 shrink-0" />
              <div className="text-left">
                <div className="text-xs font-bold text-white uppercase tracking-wider">ISSA Member</div>
                <div className="text-[10px] text-slate-400">Industry Standards</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-left">
                <div className="text-xs font-bold text-white uppercase tracking-wider">EPA List N</div>
                <div className="text-[10px] text-slate-400">Hospital Disinfectants</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2.5">
              <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0" />
              <div className="text-left">
                <div className="text-xs font-bold text-white uppercase tracking-wider">OSHA Hazcom</div>
                <div className="text-[10px] text-slate-400">Chemical Safety</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2.5">
              <Building2 className="w-5 h-5 text-sky-400 shrink-0" />
              <div className="text-left">
                <div className="text-xs font-bold text-white uppercase tracking-wider">Phoenix Chamber</div>
                <div className="text-[10px] text-slate-400">Local Commerce</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2.5 col-span-2 md:col-span-1">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400 shrink-0" />
              <div className="text-left">
                <div className="text-xs font-bold text-white uppercase tracking-wider">4.9 / 5 Rating</div>
                <div className="text-[10px] text-slate-400">Deer Valley Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main SEO Body Section: 2000 Words Locally Optimized */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Content */}
          <div className="lg:col-span-8 space-y-12 leading-relaxed text-slate-700">
            {/* Overview / Introduction */}
            <section className="space-y-4 p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden">
              <div className="w-2 h-full bg-gradient-to-b from-brand-500 to-cyan-400 absolute left-0 top-0" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-50 text-brand-700">
                <Zap className="w-3.5 h-3.5 text-brand-600" />
                <span>Locally Engineered Service</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Complete Commercial Cleaning Programs Tailored for Deer Valley Businesses
              </h2>
              <p>
                Every commercial building has distinct operational realities. An aerospace fabrication facility situated near Deer Valley Airport operates under vastly different cleanliness and safety criteria than an outpatient pediatric clinic off 27th Avenue or a bustling boutique in Happy Valley Towne Centre. That is why at <strong className="text-slate-900">Brightcrest Commercial Cleaning Deer Valley</strong>, we never force our clients into rigid, generic cleaning templates.
              </p>
              <p>
                Instead, our engagement always begins with a complimentary on-site walkthrough. We listen carefully to your building manager, document high-traffic pinch points, calculate square footage across varied flooring surfaces (from heavy carpet to polished concrete and VCT), and draft a customized, line-item cleaning scope. Whether your facility demands nightly janitorial disinfection, specialized{' '}
                <Link href="/services/office-cleaning" className="seo-link">
                  Office Cleaning in Deer Valley
                </Link>
                , or periodic project work such as high-gloss floor waxing and window washing, you can count on one dependable local contractor for complete accountability.
              </p>
              <p>
                Business owners across Deer Valley ZIP codes 85024 and 85027 choose Brightcrest because our operational base is right here in your neighborhood. When unexpected spills occur, health audits approach, or your business hours fluctuate, our supervisors are minutes away, not miles across the Valley.
              </p>
            </section>

            {/* Core Services Grid with High Quality Imagery & Color Accents */}
            <section className="space-y-6">
              <div className="border-b border-slate-200 pb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Our Commercial Cleaning Services in Deer Valley
                  </h2>
                  <p className="text-slate-500 text-sm mt-1">
                    Select a service to learn what is included, how we schedule it, and how to request a quote:
                  </p>
                </div>
                <span className="text-xs font-bold text-brand-700 bg-brand-100 px-3 py-1 rounded-full">
                  9 Core Silo Services
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {nineSubServices.map((srv, index) => (
                  <div
                    key={srv.id}
                    className="flex flex-col justify-between p-6 rounded-3xl bg-white border border-slate-200 hover:border-brand-400 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Top colored accent indicator */}
                    <div className={`h-1.5 w-full absolute top-0 left-0 ${
                      index % 3 === 0
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-400'
                        : index % 3 === 1
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                        : 'bg-gradient-to-r from-amber-500 to-orange-400'
                    }`} />

                    <div className="space-y-3 pt-2">
                      <div className="relative h-44 rounded-2xl overflow-hidden mb-2">
                        <Image
                          src={srv.image}
                          alt={`${srv.title} in Deer Valley AZ`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md">
                          Deer Valley Service
                        </div>
                      </div>

                      <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-brand-600 transition-colors">
                        <Link href={`/services/${srv.slug}`}>
                          {srv.title}
                        </Link>
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {srv.shortDesc}
                      </p>

                      <div className="space-y-1.5 pt-1">
                        <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block">
                          Included Tasks:
                        </span>
                        <ul className="text-xs text-slate-600 space-y-1">
                          {srv.includes.slice(0, 3).map((item, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" />
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
                        <span>View {srv.title} Scope</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {srv.targetWords}+ Words
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-sky-50 to-emerald-50 border border-brand-200 text-xs text-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
                <span className="font-medium text-slate-800">
                  Looking for commercial carpet extraction, window washing, day porters, or gym sanitizing?
                </span>
                <Link
                  href="/services"
                  className="font-bold text-white bg-brand-600 hover:bg-brand-700 px-4 py-2 rounded-xl shadow-xs transition-colors whitespace-nowrap"
                >
                  View All 20 Services &rarr;
                </Link>
              </div>
            </section>

            {/* Visual Photography Breakout Section */}
            <section className="relative rounded-3xl overflow-hidden p-8 sm:p-12 text-white shadow-xl">
              <div className="absolute inset-0 z-0">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80"
                  alt="Professional commercial janitor cleaning office in Deer Valley"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/90 to-brand-950/80" />
              </div>
              <div className="relative z-10 max-w-xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent/20 text-accent border border-accent/30">
                  <Clock className="w-3.5 h-3.5" />
                  <span>After-Hours & Overnight Shifts</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Arrive Each Morning to a Fresh, Sanitized Workplace
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Our professional custodial crews operate between 5:00 PM and 6:00 AM, executing written scopes while your team is away so there is zero interruption to your business operations.
                </p>
                <div className="pt-2">
                  <a
                    href={siteConfig.phoneHref}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow-md"
                  >
                    <Phone className="w-3.5 h-3.5 text-accent" />
                    <span>Call {siteConfig.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </section>

            {/* Industries We Serve with Vibrant Colorful Cards */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Industries We Proudly Serve Across Deer Valley
              </h2>
              <p>
                Deer Valley is celebrated as one of Maricopa County&apos;s most versatile economic centers. We have engineered specialized sanitation workflows tailored to every major sector:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900">Corporate Offices & Tech Suites</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Daily workstation dusting, HEPA vacuuming, confidential trash handling, and executive conference room resets.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900">Clinics & Healthcare Practices</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Exam room horizontal surface disinfection, terminal restroom sanitization, and waiting area pathogen barrier controls.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-3">
                    <Boxes className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900">Warehouses & Logistics Hubs</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Auto-scrubber concrete cleaning, high racking dust removal, loading dock sweeping, and shipping office maintenance.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-purple-400 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
                    <Store className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900">Retail Stores & Showrooms</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Crystal-clear entrance glass, dust-free merchandise displays, dressing room sanitization, and polished flooring.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-rose-400 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-3">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900">Restaurants & Food Service</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Kitchen floor degreasing, drain perimeters, dining room booth sanitizing, and bar area deep scrubbing.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-orange-400 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900">Commercial Construction Sites</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Rough, final, and touch-up post-construction cleaning preparing tenant improvements for Certificate of Occupancy.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Choose Brightcrest */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Why Business Leaders Choose Brightcrest
              </h2>
              <div className="space-y-4 text-sm">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Ironclad Reliability & Attendance</h4>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      A commercial cleaning company that skips visits or misses core areas creates operational chaos. Our crews work from clear digital checklists and clock in using GPS geofencing, guaranteeing that your contracted scope is completed without exceptions.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Screened, Certified & Trained Personnel</h4>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      Every Brightcrest team member undergoes mandatory criminal background screening, reference checks, and rigorous onboarding on chemical safety, SDS compliance, and modern custodial best practices established by{' '}
                      <a
                        href="https://www.issa.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="seo-link"
                      >
                        ISSA Standards
                      </a>.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Total Scheduling Flexibility</h4>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      Whether you require cleaning at 8:00 PM, midnight, 5:00 AM, or during weekend business lulls, we customize our schedule around your operating hours. You also have the freedom to adjust cleaning frequencies as your company evolves.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Customized Scopes, Zero Generic Packages</h4>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      You only pay for the specific cleaning services your facility requires. If you have carpeted offices and a concrete storage room, your proposal reflects exact square footage calculations rather than an inflated flat rate.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Step-by-Step Process */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Our 4-Step Commercial Cleaning Onboarding Process
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2 border-t-4 border-t-blue-500">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Step 01</span>
                  <h4 className="font-bold text-slate-900 text-base">Free Facility Walkthrough</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We visit your Deer Valley building at your convenience, measure zones, examine floor materials, and listen to your priorities.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2 border-t-4 border-t-cyan-500">
                  <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">Step 02</span>
                  <h4 className="font-bold text-slate-900 text-base">Written Scope & Transparent Quote</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Within 24 hours, you receive a clear, itemized proposal detailing visit frequency, cleaning tasks, and a guaranteed flat price.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2 border-t-4 border-t-emerald-500">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step 03</span>
                  <h4 className="font-bold text-slate-900 text-base">Precision Execution</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your dedicated custodial crew arrives on schedule equipped with commercial HEPA vacuums, hospital-grade disinfectants, and color-coded microfibers.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2 border-t-4 border-t-amber-500">
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Step 04</span>
                  <h4 className="font-bold text-slate-900 text-base">Regular Quality Audits</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Field supervisors conduct periodic inspections and maintain open lines of communication, ensuring consistent five-star standards.
                  </p>
                </div>
              </div>
            </section>

            {/* Service Areas Summary */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Our Core Service Territory Across North Phoenix & Nearby Markets
              </h2>
              <p>
                While Deer Valley (Phoenix 85024 and 85027) represents our operational headquarters, our commercial cleaning teams serve the surrounding regional economic centers:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {fiveLocations.map((loc) => (
                  <Link
                    key={loc.id}
                    href={`/locations/${loc.slug}`}
                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-brand-400 hover:shadow-md transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-bold text-slate-900 group-hover:text-brand-600 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span>{loc.name}, AZ</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">{loc.coverage}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
              <p className="text-xs text-slate-500 pt-1">
                Have a facility just outside these boundaries? Connect with us via{' '}
                <Link href="/contact" className="seo-link">
                  our direct contact form
                </Link>{' '}
                or discover{' '}
                <Link href="/locations/scottsdale" className="seo-link">
                  Commercial Cleaning in Scottsdale
                </Link>.
              </p>
            </section>

            {/* Why Regular Cleaning Pays Off (ROI Analysis) */}
            <section className="space-y-4 p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
                <TrendingUp className="w-4 h-4" />
                <span>Financial & Health Returns</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Why Professional Commercial Cleaning is an Investment with Measurable ROI
              </h2>
              <p>
                Many businesses initially view custodial cleaning as a simple overhead expense. In reality, structured commercial cleaning delivers measurable returns across four distinct operational dimensions:
              </p>
              <ul className="space-y-3 text-sm list-none pt-2">
                <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Prolonging Floor & Surface Lifespan:</strong> Sonoran Desert sand and gravel grind down carpet piles and strip wax coatings off VCT and stone tile. Daily vacuuming and scheduled burnishing prevent premature, multi-thousand-dollar floor replacements.
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Reducing Workforce Sick Days:</strong> High-touch surfaces harbor rhinovirus, influenza, and seasonal contagions. Routine EPA-registered disinfection dramatically curtails viral spread, keeping your core team productive and at work.
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">First-Impression Customer Acquisition:</strong> Prospective clients make subconscious evaluations of your organization within 15 seconds of entering your lobby. Smudge-free entrance glass, fresh-smelling air, and sparkling restrooms signal meticulous attention to quality.
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Staff Focus & Productivity:</strong> When employees are burdened with cleaning bathroom stalls or taking out communal trash, morale declines and high-value work suffers. Outsourcing upkeep allows your personnel to focus 100% on revenue-generating tasks.
                  </div>
                </li>
              </ul>
            </section>

            {/* Typical Recurring Cleaning Program Scope */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                What a Typical Recurring Cleaning Program Includes
              </h2>
              <p>
                When our crew enters your Deer Valley property, every action is guided by an agreed-upon facility binder. Standard recurring visits encompass:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-xl shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>Nightly trash and recycling removal with fresh liner replacement</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-xl shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>Restroom deep cleaning, acid-free bowl sanitizing, and restocking</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-xl shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>Microfiber dusting of all cleared desk surfaces, ledges, and monitors</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-xl shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>Multi-stage HEPA filtration carpet vacuuming & edge detailing</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-xl shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>Neutral-cleaner hard floor damp mopping and stain removal</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-xl shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>Breakroom sink degreasing, microwave wipe-down, and counter sanitizing</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-xl shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>Entry door glass, push plate, and architectural hardware detailing</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-xl shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>Disinfection of high-frequency contact points (switches, handles, rails)</span>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                What Local Deer Valley Business Leaders Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    &ldquo;Brightcrest transformed our 12,000 sq ft tech suite in the Deer Valley industrial park. Before hiring them, our previous cleaners frequently skipped the server room and missed restrooms. Brightcrest hasn&apos;t missed a single night in 14 months.&rdquo;
                  </p>
                  <div className="pt-2 border-t border-slate-100">
                    <h5 className="font-bold text-xs text-slate-900">David M.</h5>
                    <p className="text-[11px] text-slate-500">VP of Operations, Aerospace Systems Supplier (Deer Valley 85027)</p>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    &ldquo;As an urgent care clinic manager, surface sanitization is non-negotiable. Brightcrest uses genuine hospital-grade disinfectants and color-coded microfibers. Our exam rooms and waiting rooms are consistently immaculate.&rdquo;
                  </p>
                  <div className="pt-2 border-t border-slate-100">
                    <h5 className="font-bold text-xs text-slate-900">Dr. Rachel K.</h5>
                    <p className="text-[11px] text-slate-500">Clinical Director, North Valley Urgent Care (Deer Valley 85024)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* How to Select a Cleaner Guide */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                How to Evaluate Commercial Cleaning Companies in Phoenix
              </h2>
              <p>
                When selecting a custodial contractor for your commercial premises, avoid providers that give blind phone quotes without seeing your facility. Request proof of active general liability insurance and workers&apos; compensation. Verify whether the provider conducts background screening and ask what specific chemical dilution systems they use to avoid surface chemical buildup.
              </p>
              <p>
                At Brightcrest, we welcome these questions. We believe in total operational transparency and provide documentation upfront before any service contract is executed. Discover more insights on our{' '}
                <Link href="/blog" className="seo-link">
                  Commercial Cleaning Blog
                </Link>{' '}
                or check our detailed{' '}
                <Link href="/faq" className="seo-link">
                  Frequently Asked Questions
                </Link>.
              </p>
            </section>

            {/* Mandated SEO Links Section: 5 internal links + 1 external link */}
            <SeoLinksSection
              title="Deer Valley Commercial Directory & Silo Links"
              description="Navigate to specialized services, nearby regional hubs, and certified cleaning industry resources:"
              internalLinks={homeInternalLinks}
              externalLink={homeExternalLink}
            />
          </div>

          {/* Sidebar / Conversion Column */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Quick Contact Card with Glowing Border */}
            <div className="sticky top-28 p-6 rounded-3xl bg-slate-900 text-white shadow-2xl border border-slate-700/80 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                <Clock className="w-4 h-4" />
                <span>Fast Local Response</span>
              </div>

              <h3 className="text-xl font-black tracking-tight text-white">
                Request a Deer Valley Walkthrough Today
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                Contact our local scheduling dispatch for a same-day or next-day on-site walkthrough in Deer Valley (85024, 85027).
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={siteConfig.phoneHref}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-sm text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all shadow-md"
                >
                  <Phone className="w-4 h-4 text-slate-950" />
                  <span>Call {siteConfig.phoneDisplay}</span>
                </a>

                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-white bg-brand-600 hover:bg-brand-500 transition-colors shadow-md border border-white/10"
                >
                  <span>Free Online Quote Form</span>
                </Link>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Written proposal in 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>No long-term lock-in contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Local Deer Valley supervisors</span>
                </div>
              </div>

              {/* Service Areas Mini Links */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-[11px] font-bold uppercase text-slate-400 block mb-2">
                  Nearby Market Coverage:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {fiveLocations.map((loc) => (
                    <Link
                      key={loc.id}
                      href={`/locations/${loc.slug}`}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-brand-800 hover:text-cyan-300 text-slate-300 transition-colors border border-slate-700/60"
                    >
                      {loc.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Global Bottom CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <CallToAction />
      </div>
    </div>
  );
}
