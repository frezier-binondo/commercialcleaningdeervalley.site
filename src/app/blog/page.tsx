import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
} from 'lucide-react';
import CallToAction from '@/components/CallToAction';
import SeoLinksSection from '@/components/SeoLinksSection';
import { blogPosts } from '@/data/siteData';

export const metadata: Metadata = {
  title: "Commercial Cleaning Blog | Deer Valley Facility Insights",
  description:
    "Expert commercial cleaning guides, OSHA infection control tips, and facility maintenance advice for Deer Valley & North Phoenix business managers.",
};

export default function BlogHubPage() {
  const blogInternalLinks = [
    {
      href: "/",
      label: "Commercial Cleaning Deer Valley Home",
      context: "Return to our central headquarters overview.",
    },
    {
      href: "/services/office-cleaning",
      label: "Office Cleaning in Deer Valley",
      context: "Nightly sanitization programs for corporate office suites.",
    },
    {
      href: "/services/medical-office-cleaning",
      label: "Medical Office Cleaning in Deer Valley",
      context: "Clinical-grade disinfection for healthcare clinics.",
    },
    {
      href: "/services/post-construction-cleaning",
      label: "Post-Construction Cleaning in Deer Valley",
      context: "Phased cleanup for commercial buildouts and remodels.",
    },
    {
      href: "/locations/deer-valley",
      label: "Deer Valley Commercial Service Area",
      context: "Local route details across 85024 and 85027.",
    },
    {
      href: "/faq",
      label: "Frequently Asked Questions (FAQ)",
      context: "10 detailed commercial cleaning questions and answers.",
    },
  ];

  const blogExternalLink = {
    href: "https://www.issa.com",
    label: "ISSA - The Worldwide Cleaning Industry Association",
    authorityName: "ISSA Cleaning Industry Insights",
  };

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="bg-white">
      {/* Blog Hero Header with Photographic Background */}
      <section className="relative overflow-hidden bg-navy-950 py-16 lg:py-20 border-b border-slate-800 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=85"
            alt="Commercial cleaning and facility operations blog"
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
              <BookOpen className="w-4 h-4 text-cyan-300" />
              <span>Facility Management & Hygiene Knowledge Base</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Commercial Cleaning Insights &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-emerald-300">
                Facility Guides
              </span>
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Stay ahead of workplace hygiene trends, OSHA compliance, healthcare infection control, and floor maintenance best practices in the Sonoran Desert environment. Written by the experienced team at <strong className="text-white">Brightcrest Commercial Cleaning Deer Valley</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Featured Post Card */}
        <div className="mb-14">
          <div className="p-6 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative h-72 sm:h-96 rounded-2xl overflow-hidden">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-brand-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                Featured Guide
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  {featuredPost.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-accent-emerald" />
                  {featuredPost.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight hover:text-brand-300 transition-colors">
                <Link href={`/blog/${featuredPost.slug}`}>
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="pt-2 flex items-center justify-between border-t border-slate-800 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-800 text-accent flex items-center justify-center font-bold text-xs">
                    {featuredPost.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{featuredPost.author}</div>
                    <div className="text-[10px] text-slate-400">{featuredPost.authorRole}</div>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-white transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Posts Grid */}
        <div className="space-y-6 mb-16">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Recent Articles & Operational Checklists
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col justify-between rounded-3xl bg-white border border-slate-200 overflow-hidden hover:border-brand-300 hover:shadow-xl transition-all group"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-bold bg-slate-900/80 backdrop-blur-md text-white px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-accent" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-brand-600 transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">By {post.author}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="seo-link text-xs font-bold inline-flex items-center gap-1"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Mandated SEO Links Section */}
        <SeoLinksSection
          title="Related Commercial Cleaning Topics & Directory Links"
          description="Continue exploring related commercial cleaning services and local market pages:"
          internalLinks={blogInternalLinks}
          externalLink={blogExternalLink}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <CallToAction />
      </div>
    </div>
  );
}
