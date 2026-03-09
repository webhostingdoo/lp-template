'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function VerifyForm() {
  const searchParams = useSearchParams();
  const [gclid, setGclid] = useState('');

  useEffect(() => {
    const urlGclid = searchParams.get('gclid');
    if (urlGclid) {
      sessionStorage.setItem('gclid', urlGclid);
      setGclid(urlGclid);
    } else {
      const stored = sessionStorage.getItem('gclid');
      if (stored) setGclid(stored);
    }
  }, [searchParams]);

  const inputClass = "w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold";
  const labelClass = "block text-white/60 text-sm mb-1";

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#0a1f35" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          <form
            action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DDn00000CYDfk"
            method="POST"
          >
            {/* Hidden fields */}
            <input type="hidden" name="oid" value="00DDn00000CYDfk" />
            <input type="hidden" name="retURL" value="https://admissions.dallasdetox.com/" />
            <input type="hidden" name="00NDn00000brX59" value="PPC - Google" />
            <input type="hidden" name="lead_source" value="Tru Dallas Detox" />
            <input type="hidden" name="00NDn00000brX5E" value="Web" />
            <input type="hidden" id="00NDn00000bssdB" name="00NDn00000bssdB" value={gclid} />

            {/* Section 1 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-gold text-navy text-sm font-bold flex items-center justify-center shrink-0">1</span>
                <h2 className="font-maistra text-2xl text-white">Contact Person</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelClass} htmlFor="first_name">First Name</label>
                  <input id="first_name" name="first_name" type="text" maxLength={40} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="last_name">Last Name</label>
                  <input id="last_name" name="last_name" type="text" maxLength={80} required className={inputClass} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelClass} htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" maxLength={80} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" maxLength={40} required className={inputClass} />
                </div>
              </div>
              <div className="max-w-xs">
                <label className={labelClass} htmlFor="00NDn00000brX5n">Client&apos;s Date of Birth</label>
                <input id="00NDn00000brX5n" name="00NDn00000brX5n" type="date" className={`${inputClass} text-white/60`} />
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 mb-10" />

            {/* Section 2 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-gold text-navy text-sm font-bold flex items-center justify-center shrink-0">2</span>
                <h2 className="font-maistra text-2xl text-white">Policy Benefits Check</h2>
              </div>
              <p className="text-white/50 text-sm mb-6 ml-11">Optional — but helps us get you real numbers faster.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelClass} htmlFor="00NDn00000brX5x">Insurance Provider Name</label>
                  <input id="00NDn00000brX5x" name="00NDn00000brX5x" type="text" maxLength={255} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="00NDn00000brX5Y">Insurance Policy #</label>
                  <input id="00NDn00000brX5Y" name="00NDn00000brX5Y" type="text" maxLength={255} className={inputClass} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelClass} htmlFor="00NDn00000brX5d">Group Number</label>
                  <input id="00NDn00000brX5d" name="00NDn00000brX5d" type="text" maxLength={255} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="00NDn00000brX5i">Insurance Provider Phone</label>
                  <input id="00NDn00000brX5i" name="00NDn00000brX5i" type="tel" maxLength={40} className={inputClass} />
                </div>
              </div>
              <div>
                <label className={labelClass} htmlFor="00NDn00000brftN">Additional Comments</label>
                <textarea id="00NDn00000brftN" name="00NDn00000brftN" maxLength={220} rows={4} className={inputClass} />
              </div>
            </div>

            <button type="submit" className="w-full py-4 btn-primary font-semibold text-lg uppercase tracking-widest rounded">
              Check My Coverage
            </button>
            <p className="text-center text-white/40 text-sm mt-4">100% Confidential — Responses Within the Hour</p>
          </form>
        </div>
      </div>
    </section>
  );
}
