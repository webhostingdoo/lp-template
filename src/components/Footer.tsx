"use client";

import Image from "next/image";
import config from '@/data/site-config.json';

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top row: Logo + Address */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
          {/* Left: Logo */}
          <div>
            <Image src={`/images/logos/${config.logos.footer}`} alt={config.brand.name} width={250} height={50} quality={80} className="w-[200px] h-auto mb-6" />
          </div>
          {/* Right: Address */}
          <a href={config.brand.mapsUrl || "#"} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:opacity-80 transition">
            <svg className="text-accent shrink-0 mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <div>
              <p className="text-white font-semibold text-sm">{config.brand.name}</p>
              <p className="text-white/60 text-sm">{config.brand.address}</p>
            </div>
          </a>
        </div>

        {/* Certification seals */}
        <div className="flex items-center gap-6 mb-10">
          {config.footer.certificationSeals.map((seal) =>
            seal.href ? (
              <a key={seal.src} href={seal.href} target="_blank" rel="noopener noreferrer">
                <Image src={`/images/logos/${seal.src}`} alt={seal.alt} width={seal.width} height={seal.height} className="h-16 w-auto opacity-90 hover:opacity-100 transition" />
              </a>
            ) : (
              <Image key={seal.src} src={`/images/logos/${seal.src}`} alt={seal.alt} width={seal.width} height={seal.height} className="h-16 w-auto opacity-90" />
            )
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <nav className="flex flex-wrap gap-6 text-sm">
              <a href={config.footer.legalLinkUrl} className="text-white/60 hover:text-white transition-colors">{config.footer.legalLinkText}</a>
            </nav>
            <div className="flex gap-4">
              {config.social.facebook && (
                <a href={config.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              )}
              {config.social.youtube && (
                <a href={config.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
