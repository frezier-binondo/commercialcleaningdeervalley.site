import React from 'react';
import Link from 'next/link';
import { ExternalLink, Compass } from 'lucide-react';

export interface SeoLinkItem {
  href: string;
  label: string;
  context?: string;
}

export interface ExternalLinkItem {
  href: string;
  label: string;
  authorityName: string;
}

interface SeoLinksSectionProps {
  title?: string;
  description?: string;
  internalLinks: SeoLinkItem[];
  externalLink: ExternalLinkItem;
}

export default function SeoLinksSection({
  title = "Related Commercial Cleaning Services & Local Service Areas",
  description = "Explore specialized commercial maintenance programs and nearby market coverage across North Phoenix & the Deer Valley metro area:",
  internalLinks,
  externalLink,
}: SeoLinksSectionProps) {
  return (
    <section className="my-12 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm">
      <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-brand-700">
        <Compass className="w-4 h-4 text-accent" />
        <span>Directory & Silo Navigation</span>
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
        {title}
      </h3>
      <p className="text-slate-600 text-sm mb-6 leading-relaxed">
        {description}
      </p>

      {/* Internal Links (At least 5 internal links) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        {internalLinks.map((link, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-brand-300 transition-all flex items-start justify-between gap-3 shadow-xs"
          >
            <div>
              <Link href={link.href} className="seo-link text-sm font-semibold">
                {link.label}
              </Link>
              {link.context && (
                <p className="text-xs text-slate-500 mt-1">{link.context}</p>
              )}
            </div>
            <span className="text-xs text-slate-400 font-mono">0{idx + 1}</span>
          </div>
        ))}
      </div>

      {/* External Authority Link (1 required per page) */}
      <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold text-slate-700">Industry Authority Reference:</span>
          <a
            href={externalLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="seo-link inline-flex items-center gap-1 font-bold"
          >
            <span>{externalLink.label}</span>
            <ExternalLink className="w-3.5 h-3.5 text-accent" />
          </a>
        </div>
        <span className="text-slate-500 italic">
          Verified source: {externalLink.authorityName}
        </span>
      </div>
    </section>
  );
}
