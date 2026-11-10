'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  HelpCircle,
  ChevronDown,
  Search,
  Phone,
} from 'lucide-react';
import CallToAction from '@/components/CallToAction';
import SeoLinksSection from '@/components/SeoLinksSection';
import { tenFaqs, siteConfig } from '@/data/siteData';

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Pricing & Quotes', 'Operations & Scheduling', 'Supplies & Equipment', 'Quality & Security'];

  const filteredFaqs = tenFaqs.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqInternalLinks = [
    {
      href: "/",
      label: "Commercial Cleaning Deer Valley Home",
      context: "Return to our central headquarters overview.",
    },
    {
      href: "/services",
      label: "All 20 Commercial Cleaning Services",
      context: "Explore our full directory of commercial cleaning scopes.",
    },
    {
      href: "/services/office-cleaning",
      label: "Office Cleaning in Deer Valley",
      context: "Nightly cleaning for professional suites and corporate offices.",
    },
    {
      href: "/locations/deer-valley",
      label: "Deer Valley Service Location (85024 & 85027)",
      context: "Local operational details along the Loop 101 corridor.",
    },
    {
      href: "/contact",
      label: "Request a Free Walkthrough & Written Scope",
      context: "Get an itemized quote within 24 hours.",
    },
  ];

  const faqExternalLink = {
    href: "https://www.issa.com",
    label: "ISSA - The Worldwide Cleaning Industry Association",
    authorityName: "ISSA Commercial Quality Benchmarks",
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: tenFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header with Photographic Background */}
      <section className="relative overflow-hidden bg-navy-950 py-16 lg:py-20 border-b border-slate-800 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=85"
            alt="Commercial cleaning customer support in Deer Valley"
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
              <HelpCircle className="w-4 h-4 text-cyan-300" />
              <span>Answers to Common Commercial Questions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Frequently Asked Questions in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-emerald-300">
                Deer Valley, AZ
              </span>
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Find transparent answers regarding commercial cleaning costs, night schedules, healthcare disinfection standards, insurance credentials, and onboarding timelines for facilities in <strong className="text-white">Deer Valley, AZ</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search by keyword (e.g. cost, schedule, insurance, supplies)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm bg-white shadow-xs"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold px-3.5 py-1.5 rounded-full transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion FAQ List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 text-slate-500 text-sm">
            No questions matched your search. Call us directly at{' '}
            <a href={siteConfig.phoneHref} className="seo-link">
              {siteConfig.phoneDisplay}
            </a>{' '}
            for immediate answers.
          </div>
        ) : (
          filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-brand-300 transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 font-bold text-base sm:text-lg text-slate-900 focus:outline-none hover:text-brand-600 transition-colors"
                >
                  <span className="flex items-start gap-3">
                    <span className="text-brand-600 font-mono text-sm shrink-0 mt-0.5">
                      Q{index + 1}.
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 mt-1 ${
                      isOpen ? 'rotate-180 text-brand-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-1 pt-4 animate-in fade-in">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                      <span className="italic">Category: {faq.category}</span>
                      <Link href="/contact" className="seo-link font-semibold">
                        Ask about your building &rarr;
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}

        {/* Have more questions card */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 mt-10 text-center space-y-4">
          <div className="w-12 h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto">
            <Phone className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold">Have a Specific Question About Your Building?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Every commercial facility has unique square footage, surface types, and security protocols. Our team in Deer Valley is always available to discuss your requirements.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={siteConfig.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>Call Us: {siteConfig.phoneDisplay}</span>
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-brand-600 hover:bg-brand-500 transition-colors"
            >
              <span>Schedule Free Walkthrough</span>
            </Link>
          </div>
        </div>

        {/* Mandated SEO Links Section */}
        <SeoLinksSection
          title="Related Commercial Cleaning Pages & Industry Standards"
          description="Continue exploring related commercial cleaning services and local market pages:"
          internalLinks={faqInternalLinks}
          externalLink={faqExternalLink}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <CallToAction />
      </div>
    </div>
  );
}
