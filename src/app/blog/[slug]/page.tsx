import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Calendar,
  Clock,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';
import CallToAction from '@/components/CallToAction';
import SeoLinksSection from '@/components/SeoLinksSection';
import { blogPosts, siteConfig } from '@/data/siteData';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.metaTitle,
    description: post.metaDesc,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDesc,
      type: 'article',
      images: [{ url: post.image }],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const internalLinks = [
    {
      href: "/blog",
      label: "Commercial Cleaning Blog Hub",
      context: "Return to our complete facility management insights directory.",
    },
    {
      href: "/services/office-cleaning",
      label: "Office Cleaning in Deer Valley",
      context: "Nightly commercial office cleaning programs and checklists.",
    },
    {
      href: "/services/medical-office-cleaning",
      label: "Medical Office Cleaning in Deer Valley",
      context: "Disinfection-focused clinical cleaning for outpatient practices.",
    },
    {
      href: "/locations/deer-valley",
      label: "Commercial Cleaning in Deer Valley (85024 & 85027)",
      context: "Our direct local service area along the Loop 101 corridor.",
    },
    {
      href: "/contact",
      label: "Request a Free Commercial Cleaning Quote",
      context: "Get an itemized written quote after an on-site walkthrough.",
    },
  ];

  const externalLink = {
    href: "https://www.issa.com",
    label: "ISSA - The Worldwide Cleaning Industry Association",
    authorityName: "ISSA Industry Clean Standard Protocols",
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200 py-3 px-4 sm:px-6 text-xs text-slate-500">
        <div className="max-w-4xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-brand-600">Blog</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold truncate">{post.title}</span>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-600 hover:text-brand-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((t, i) => (
              <span
                key={i}
                className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200"
              >
                {t}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 text-xs text-slate-500">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-sm">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">{post.author}</div>
                <div className="text-slate-500">{post.authorRole} • Brightcrest</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-accent" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-accent-emerald" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-72 sm:h-96 md:h-112 rounded-3xl overflow-hidden shadow-xl border border-slate-200 my-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Body Content */}
          <div className="prose prose-lg max-w-none text-slate-700 space-y-6 leading-relaxed">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-xl sm:text-2xl font-bold text-slate-900 mt-8 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('#### ')) {
                return (
                  <h4 key={idx} className="text-lg font-bold text-slate-800 mt-6 mb-2">
                    {paragraph.replace('#### ', '')}
                  </h4>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={idx} className="list-disc pl-6 space-y-1 my-3 text-slate-700">
                    {paragraph.split('\n').map((item, itemIdx) => (
                      <li key={itemIdx}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.startsWith('1. ')) {
                return (
                  <ol key={idx} className="list-decimal pl-6 space-y-1 my-3 text-slate-700">
                    {paragraph.split('\n').map((item, itemIdx) => (
                      <li key={itemIdx}>{item.replace(/^\d+\.\s*/, '')}</li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={idx} className="text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Key Takeaways Box */}
          <div className="p-6 rounded-2xl bg-brand-50 border border-brand-200 space-y-2 mt-8">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Key Operational Summary for Deer Valley Facilities</span>
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              Consistently enforcing written cleaning scopes and inspecting high-contact touchpoints protects physical building assets and keeps workforce absenteeism low. For professional facility evaluations across Deer Valley and North Phoenix, contact{' '}
              <a href={siteConfig.phoneHref} className="seo-link">
                {siteConfig.phoneDisplay}
              </a>.
            </p>
          </div>

          {/* Mandated SEO Links Section */}
          <SeoLinksSection
            title="Related Commercial Guides & Regional Hubs"
            description="Explore additional facility sanitation checklists and local commercial service areas:"
            internalLinks={internalLinks}
            externalLink={externalLink}
          />
        </div>
      </article>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <CallToAction />
      </div>
    </div>
  );
}
