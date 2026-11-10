'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Phone,
  Clock,
  MapPin,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { siteConfig, nineSubServices, fiveLocations } from '@/data/siteData';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      {/* Top Notice Bar */}
      <div className="bg-navy-950 text-white text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>Deer Valley, Phoenix AZ (85024 & 85027) & Surrounding Areas</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-accent-emerald" />
              <span>24/7 Response | Nightly & Weekend Commercial Crews</span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <span className="hidden sm:inline-flex items-center gap-1 text-accent-amber font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              Licensed, Bonded & Insured
            </span>
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-1.5 text-white font-bold hover:text-accent transition-colors bg-accent/20 px-2.5 py-0.5 rounded-full border border-accent/40"
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>Call: {siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-600 to-navy-900 text-white flex items-center justify-center shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6 text-brand-200" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight leading-none group-hover:text-brand-600 transition-colors">
                Brightcrest
              </span>
              <span className="text-[11px] font-semibold text-brand-600 uppercase tracking-wider">
                Commercial Cleaning Deer Valley
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isActive('/') && pathname === '/'
                  ? 'text-brand-600 bg-brand-50 font-bold'
                  : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            {/* Services with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href="/services"
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  isActive('/services')
                    ? 'text-brand-600 bg-brand-50 font-bold'
                    : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform" />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute left-0 top-full pt-1 w-80 shadow-2xl rounded-2xl bg-white border border-slate-100 p-3 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5">
                    Core Silo Services
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {nineSubServices.map((srv) => (
                      <Link
                        key={srv.id}
                        href={`/services/${srv.slug}`}
                        className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        <span>{srv.title}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent opacity-0 hover:opacity-100" />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100 px-3">
                    <Link
                      href="/services"
                      className="text-xs font-bold text-brand-600 hover:text-brand-800 flex items-center justify-between"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <span>View All 20 Commercial Services &rarr;</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Locations with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsDropdownOpen(true)}
              onMouseLeave={() => setLocationsDropdownOpen(false)}
            >
              <Link
                href="/locations"
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  isActive('/locations') || isActive('/service-areas')
                    ? 'text-brand-600 bg-brand-50 font-bold'
                    : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                <span>Locations</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </Link>

              {locationsDropdownOpen && (
                <div className="absolute left-0 top-full pt-1 w-72 shadow-2xl rounded-2xl bg-white border border-slate-100 p-3 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5">
                    Markets We Serve
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {fiveLocations.map((loc) => (
                      <Link
                        key={loc.id}
                        href={`/locations/${loc.slug}`}
                        className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                        onClick={() => setLocationsDropdownOpen(false)}
                      >
                        <span>{loc.name}</span>
                        <MapPin className="w-3.5 h-3.5 text-accent" />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100 px-3">
                    <Link
                      href="/locations"
                      className="text-xs font-bold text-brand-600 hover:text-brand-800"
                      onClick={() => setLocationsDropdownOpen(false)}
                    >
                      All Service Areas &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isActive('/blog')
                  ? 'text-brand-600 bg-brand-50 font-bold'
                  : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
              }`}
            >
              Blog
            </Link>

            <Link
              href="/faq"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isActive('/faq')
                  ? 'text-brand-600 bg-brand-50 font-bold'
                  : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
              }`}
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isActive('/contact')
                  ? 'text-brand-600 bg-brand-50 font-bold'
                  : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-2 text-slate-800 hover:text-brand-600 font-bold text-sm px-3 py-2"
            >
              <div className="w-8 h-8 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <span>{siteConfig.phoneDisplay}</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 shadow-md shadow-brand-600/25 hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Request Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={siteConfig.phoneHref}
              className="p-2 text-brand-600 bg-brand-50 rounded-lg hover:bg-brand-100"
              aria-label="Call Business"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-brand-600 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto shadow-xl">
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              className={`px-3 py-2.5 rounded-lg text-base font-semibold ${
                isActive('/') && pathname === '/'
                  ? 'bg-brand-50 text-brand-700 font-bold'
                  : 'text-slate-800 hover:bg-slate-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Services */}
            <div className="py-1">
              <Link
                href="/services"
                className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Services Hub (All 20)</span>
                <span className="text-xs bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full font-bold">20</span>
              </Link>
              <div className="pl-4 pr-2 py-1 grid grid-cols-1 gap-1 border-l-2 border-brand-200 ml-3 mt-1">
                {nineSubServices.map((srv) => (
                  <Link
                    key={srv.id}
                    href={`/services/${srv.slug}`}
                    className="text-xs font-semibold py-1.5 px-2 rounded text-slate-600 hover:text-brand-700 hover:bg-brand-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    • {srv.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Locations */}
            <div className="py-1">
              <Link
                href="/locations"
                className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Service Locations</span>
                <span className="text-xs bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full font-bold">5 Markets</span>
              </Link>
              <div className="pl-4 pr-2 py-1 grid grid-cols-1 gap-1 border-l-2 border-brand-200 ml-3 mt-1">
                {fiveLocations.map((loc) => (
                  <Link
                    key={loc.id}
                    href={`/locations/${loc.slug}`}
                    className="text-xs font-semibold py-1.5 px-2 rounded text-slate-600 hover:text-brand-700 hover:bg-brand-50 flex items-center justify-between"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>• {loc.name}</span>
                    <span className="text-[10px] text-slate-400">AZ</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/blog"
              className={`px-3 py-2.5 rounded-lg text-base font-semibold ${
                isActive('/blog') ? 'bg-brand-50 text-brand-700 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog & Industry Guides
            </Link>

            <Link
              href="/faq"
              className={`px-3 py-2.5 rounded-lg text-base font-semibold ${
                isActive('/faq') ? 'bg-brand-50 text-brand-700 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Frequently Asked Questions (FAQ)
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2.5 rounded-lg text-base font-semibold ${
                isActive('/contact') ? 'bg-brand-50 text-brand-700 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us & Free Quote
            </Link>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col gap-3">
            <a
              href={siteConfig.phoneHref}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-white bg-slate-900 shadow"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>Call Us: {siteConfig.phoneDisplay}</span>
            </a>
            <Link
              href="/contact"
              className="w-full text-center py-3 px-4 rounded-xl font-bold text-white bg-brand-600 shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request Free On-Site Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
