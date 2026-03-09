"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top row: Logo + Address */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
          {/* Left: Logo + certifications */}
          <div>
            <Image src="/images/logos/tru_dallas_logo_white.svg" alt="Tru Dallas Detox" width={250} height={50} quality={80} className="w-[200px] h-auto mb-6" />
            <p className="text-white/50 text-sm mb-2">Licensed and Certified by:</p>
            <p className="text-white/75 text-sm mb-1">The Joint Commission Accredited</p>
            <p className="text-white/75 text-sm mb-4">LegitScript Certified</p>
            <p className="text-white/50 text-sm">
              <span className="text-gold">Adults 18+</span> · All Major Insurance Accepted
            </p>
          </div>
          {/* Right: Address */}
          <a href="https://maps.google.com/maps?ll=32.819459,-97.120635&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=5158777768068562371" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:opacity-80 transition">
            <svg className="text-gold shrink-0 mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <div>
              <p className="text-white font-semibold text-sm">Tru Dallas Detox</p>
              <p className="text-white/60 text-sm">2219 West Euless Blvd Suite 200</p>
              <p className="text-white/60 text-sm">Euless, TX 76040</p>
              <p className="text-white/60 text-sm">United States</p>
            </div>
          </a>
        </div>

        {/* Certification seals */}
        <div className="flex items-center gap-6 mb-10">
          <Image src="/images/logos/jointcommission.webp" alt="Joint Commission Accredited" width={100} height={100} className="h-16 w-auto opacity-90" />
          <a href="https://www.legitscript.com/websites/?checker_keywords=dallasdetox.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/logos/45265114.png" alt="LegitScript Certified" width={100} height={100} className="h-16 w-auto opacity-90 hover:opacity-100 transition" />
          </a>
          <Image src="/images/logos/tx-dshs-logo-vertical_white.png" alt="Texas Department of State Health Services" width={100} height={100} className="h-16 w-auto opacity-90" />
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <nav className="flex flex-wrap gap-6 text-sm">
              <a href="/privacy-policy" className="text-white/60 hover:text-white transition-colors">Privacy Policy & HIPAA Notice</a>
            </nav>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1C6s9szv9s/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="http://www.youtube.com/@TruDallasDetoxRecoveryCenter" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
