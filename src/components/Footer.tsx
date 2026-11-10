import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,
  Sparkles,
  ExternalLink,
  CheckCircle,
  Building,
} from 'lucide-react';
import { siteConfig, nineSubServices, fiveLocations } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-slate-800">
      {/* Visual Google Map Section - Explicitly required */}
      <section className="border-b border-slate-800 bg-navy-900/50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent/20 text-accent border border-accent/30">
                <MapPin className="w-3.5 h-3.5" />
                <span>Deer Valley Operational Headquarters</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Locally Based in Deer Valley, Phoenix AZ
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Operating directly from the Deer Valley / North Phoenix commercial hub (ZIP 85024 & 85027), our crews are on-site daily across the Loop 101 corridor, Deer Valley Airport industrial park, North Phoenix, Anthem, Scottsdale, and greater Phoenix.
              </p>

              <div className="space-y-2 pt-2 text-sm">
                <div className="flex items-start gap-3 text-slate-200">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Office & Operations Base:</span>
                    <p className="text-slate-400">{siteConfig.address.full}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-200">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Direct Dispatch Line:</span>{' '}
                    <a
                      href={siteConfig.phoneHref}
                      className="text-white hover:text-accent font-bold underline transition-colors"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-200">
                  <Clock className="w-5 h-5 text-accent-emerald shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Hours:</span>{' '}
                    <span className="text-slate-400">Open 24/7 for Inquiries & Nightly Crews</span>
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-accent hover:bg-brand-600 text-white shadow-md transition-all hover:scale-[1.02]"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Embedded Interactive Visible Google Map */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700 bg-slate-800">
                <div className="bg-slate-800 px-4 py-2 flex items-center justify-between text-xs text-slate-400 border-b border-slate-700">
                  <span className="flex items-center gap-1.5 font-medium text-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    Deer Valley, Phoenix, AZ (85024 & 85027) Service Radius
                  </span>
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline flex items-center gap-1"
                  >
                    View Live Google Map <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <iframe
                  title="Brightcrest Commercial Cleaning Deer Valley Google Map"
                  src={siteConfig.googleMapsEmbed}
                  width="100%"
                  height="340"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full filter contrast-[1.05]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent text-white flex items-center justify-center shadow-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white tracking-tight">
                  Brightcrest
                </span>
                <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">
                  Commercial Cleaning Deer Valley
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              The premier commercial cleaning partner for businesses across Deer Valley (85024, 85027), North Phoenix, Anthem, Scottsdale, and Phoenix, Arizona. Customized recurring janitorial programs, medical-grade disinfection, and advanced floor restoration with written quality checklists.
            </p>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Direct Contact & Quick Quotes
              </div>
              <div className="text-white font-bold text-lg flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <a href={siteConfig.phoneHref} className="hover:text-accent transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-slate-200">
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <span className="inline-flex items-center gap-1 bg-slate-900 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800">
                <Shield className="w-3.5 h-3.5 text-accent-emerald" />
                Licensed & Insured
              </span>
              <span className="inline-flex items-center gap-1 bg-slate-900 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800">
                <CheckCircle className="w-3.5 h-3.5 text-accent" />
                EPA List N Compliant
              </span>
              <span className="inline-flex items-center gap-1 bg-slate-900 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800">
                <Building className="w-3.5 h-3.5 text-accent-amber" />
                OSHA Hazcom Certified
              </span>
            </div>
          </div>

          {/* Col 2: Core 9 Sub-Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Commercial Services
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {nineSubServices.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="text-slate-400 hover:text-accent transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-slate-600">•</span>
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-accent hover:text-white font-bold transition-colors pt-1 inline-block"
                >
                  View All 20 Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas / Locations */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Service Locations
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {fiveLocations.map((loc) => (
                <li key={loc.id}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="text-slate-400 hover:text-accent transition-colors flex items-center justify-between"
                  >
                    <span>{loc.name}, AZ</span>
                    <span className="text-[10px] text-slate-600">Local Crew</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/locations"
                  className="text-accent hover:text-white font-bold transition-colors inline-block"
                >
                  Explore All Service Areas &rarr;
                </Link>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-800/80">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                External Resources
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>
                  <a
                    href="https://www.issa.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent flex items-center gap-1"
                  >
                    <span>ISSA Worldwide</span>
                    <ExternalLink className="w-3 h-3 text-slate-600" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.phoenixchamber.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent flex items-center gap-1"
                  >
                    <span>Greater Phoenix Chamber</span>
                    <ExternalLink className="w-3 h-3 text-slate-600" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.epa.gov/saferchoice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent flex items-center gap-1"
                  >
                    <span>EPA Safer Choice</span>
                    <ExternalLink className="w-3 h-3 text-slate-600" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 4: Site Links & Quick Quote */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Navigation & Info
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/" className="text-slate-400 hover:text-accent transition-colors">
                  Home (Deer Valley AZ)
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-accent transition-colors">
                  Commercial Cleaning Services Hub
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-slate-400 hover:text-accent transition-colors">
                  Service Areas & Market Map
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-accent transition-colors">
                  Facility Hygiene Blog & Articles
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-accent transition-colors">
                  Commercial Cleaning FAQ (10 Q&A)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-accent transition-colors">
                  Contact Us & Map View
                </Link>
              </li>
            </ul>

            <div className="pt-3">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center text-center px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-brand-600 hover:bg-brand-500 shadow-md transition-all"
              >
                Schedule Free Walkthrough &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Professional commercial cleaning services in Deer Valley, Phoenix AZ.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/faq" className="hover:text-slate-300">FAQ</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-300">Quote</Link>
            <span>•</span>
            <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">
              Google Maps Location
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
