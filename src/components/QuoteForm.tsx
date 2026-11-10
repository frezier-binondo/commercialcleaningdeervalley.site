'use client';

import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { siteConfig, nineSubServices } from '@/data/siteData';

interface QuoteFormProps {
  initialService?: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export default function QuoteForm({
  initialService = '',
  title = 'Request Your Free Walkthrough & Quote',
  subtitle = 'Get a comprehensive itemized written quote for your Deer Valley facility within 24 hours.',
  compact = false,
}: QuoteFormProps) {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    serviceType: initialService || 'Office Cleaning',
    facilityType: 'Office / Corporate Suite',
    approxSqFt: '2,500 - 5,000 sq ft',
    frequency: '3x per week',
    preferredTime: 'After Hours (Evening / Overnight)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate reliable submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 border border-emerald-200 shadow-xl text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Quote Request Received!</h3>
        <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
          Thank you, <strong className="text-slate-800">{formData.contactName || 'Valued Business'}</strong>. Our Deer Valley commercial estimator will review your details for <strong>{formData.businessName || 'your facility'}</strong> and contact you within 2 business hours to confirm your walkthrough.
        </p>
        <div className="pt-2 p-4 bg-slate-50 rounded-2xl border border-slate-100 max-w-sm mx-auto text-xs text-slate-600 space-y-1">
          <p><strong>Selected Service:</strong> {formData.serviceType}</p>
          <p><strong>Estimated Size:</strong> {formData.approxSqFt}</p>
          <p><strong>Frequency:</strong> {formData.frequency}</p>
        </div>
        <div className="pt-3">
          <p className="text-xs text-slate-500 mb-2">Need an immediate answer or same-day walkthrough?</p>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-md"
          >
            <Phone className="w-4 h-4 text-accent" />
            <span>Call Now: {siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-3xl ${compact ? 'p-6' : 'p-6 sm:p-10'} border border-slate-200/80 shadow-xl relative overflow-hidden`}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-bl-full pointer-events-none" />
      
      <div className="mb-6 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-50 text-brand-700">
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          <span>Zero Obligation • Fast Turnaround</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          {title}
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
          {subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Your Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Sarah Jenkins"
              value={formData.contactName}
              onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm bg-slate-50/50"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Company / Facility Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Deer Valley Tech Park Suite 200"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm bg-slate-50/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              placeholder="(602) 555-0199"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm bg-slate-50/50"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="manager@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm bg-slate-50/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Primary Cleaning Service
            </label>
            <select
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm bg-slate-50/50 font-medium text-slate-800"
            >
              {nineSubServices.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Commercial Cleaning">Commercial Cleaning (Comprehensive)</option>
              <option value="Commercial Floor Cleaning">Commercial Floor Scrub / Strip & Wax</option>
              <option value="Commercial Carpet Cleaning">Commercial Carpet Deep Extraction</option>
              <option value="Commercial Window Cleaning">Commercial Window Cleaning</option>
              <option value="Day Porter Services">Day Porter Services</option>
              <option value="Disinfection Services">Disinfection & Sanitizing</option>
              <option value="Gym & Fitness Cleaning">Gym & Fitness Center Cleaning</option>
              <option value="Green Commercial Cleaning">Green Commercial Cleaning</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Estimated Square Footage
            </label>
            <select
              value={formData.approxSqFt}
              onChange={(e) => setFormData({ ...formData, approxSqFt: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm bg-slate-50/50 font-medium text-slate-800"
            >
              <option value="Under 2,500 sq ft">Under 2,500 sq ft (Small Suite)</option>
              <option value="2,500 - 5,000 sq ft">2,500 - 5,000 sq ft (Mid Office / Clinic)</option>
              <option value="5,000 - 15,000 sq ft">5,000 - 15,000 sq ft (Corporate / Facility)</option>
              <option value="15,000 - 40,000 sq ft">15,000 - 40,000 sq ft (Large Facility)</option>
              <option value="40,000+ sq ft">40,000+ sq ft (Warehouse / Multi-tenant)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Desired Frequency
            </label>
            <select
              value={formData.frequency}
              onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm bg-slate-50/50 font-medium text-slate-800"
            >
              <option value="5x per week (Nightly Mon-Fri)">5x per week (Nightly Mon-Fri)</option>
              <option value="3x per week (Mon / Wed / Fri)">3x per week (Mon / Wed / Fri)</option>
              <option value="2x per week">2x per week</option>
              <option value="7x per week (Full Week)">7x per week (Full 7-Day)</option>
              <option value="1x Weekly Deep Clean">1x Weekly Deep Clean</option>
              <option value="One-Time Deep Clean / Post-Construction">One-Time Project / Deep Clean</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Preferred Cleaning Time
            </label>
            <select
              value={formData.preferredTime}
              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm bg-slate-50/50 font-medium text-slate-800"
            >
              <option value="After Hours (Evening 5:00 PM - 11:00 PM)">After Hours (Evening 5:00 PM - 11:00 PM)</option>
              <option value="Overnight (11:00 PM - 6:00 AM)">Overnight (11:00 PM - 6:00 AM)</option>
              <option value="Early Morning (6:00 AM - 8:30 AM)">Early Morning (6:00 AM - 8:30 AM)</option>
              <option value="Daytime (Day Porter Support)">Daytime (Day Porter)</option>
              <option value="Weekends Only">Weekends Only</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Additional Details or Specific Priorities (Optional)
          </label>
          <textarea
            rows={compact ? 2 : 3}
            placeholder="Tell us about special floor types, restrooms count, security access protocols, or target start date..."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm bg-slate-50/50"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 px-6 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 shadow-lg shadow-brand-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
        >
          {loading ? (
            <span>Processing Details...</span>
          ) : (
            <>
              <Send className="w-4 h-4 text-brand-200" />
              <span>Submit & Schedule Free Walkthrough</span>
            </>
          )}
        </button>

        <div className="pt-2 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
          <span className="flex items-center gap-1 text-emerald-600 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            100% Free • No Contracts Obligation
          </span>
          <span>Fast Written Quote in 24 Hours</span>
        </div>
      </form>
    </div>
  );
}
