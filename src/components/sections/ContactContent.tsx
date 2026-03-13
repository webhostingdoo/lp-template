'use client';

import { useEffect, useState } from 'react';
import config from '@/data/site-config.json';

export default function ContactContent() {
  const [gclid, setGclid] = useState('');

  useEffect(() => {
    const stored = sessionStorage.getItem('gclid');
    if (stored) setGclid(stored);
  }, []);

  const inputClass = "w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-accent transition";
  const labelClass = "block text-white/60 text-sm mb-2";

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#0a1f35" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Left — Form */}
          <div>
            <form
              action={config.salesforce.actionUrl}
              method="POST"
            >
              <input type="hidden" name="oid" value={config.salesforce.oid} />
              <input type="hidden" name="retURL" value={config.salesforce.retUrl} />
              <input type="hidden" name="00NDn00000brX59" value="PPC - Google" />
              <input type="hidden" name="lead_source" value={config.salesforce.leadSource} />
              <input type="hidden" name="00NDn00000brX5E" value="Web" />
              <input type="hidden" id={config.salesforce.gclidFieldId} name={config.salesforce.gclidFieldId} value={gclid} />

              {/* Section 1 */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 rounded-full bg-accent text-primary text-sm font-bold flex items-center justify-center shrink-0">1</span>
                  <h2 className="font-maistra text-2xl text-white">Contact Person</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className={labelClass} htmlFor="first_name">First Name</label>
                    <input id="first_name" name="first_name" type="text" maxLength={40} required placeholder="First Name" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="last_name">Last Name</label>
                    <input id="last_name" name="last_name" type="text" maxLength={80} required placeholder="Last Name" className={inputClass} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className={labelClass} htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" maxLength={40} required placeholder="Phone Number" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" maxLength={80} required placeholder="Email Address" className={inputClass} />
                  </div>
                </div>
                <div className="max-w-xs">
                  <label className={labelClass} htmlFor="00NDn00000brX5n">Client&apos;s Date of Birth</label>
                  <input id="00NDn00000brX5n" name="00NDn00000brX5n" type="date" className={inputClass} />
                </div>
              </div>

              <div className="border-t border-white/10 mb-10" />

              {/* Section 2 */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-full bg-accent text-primary text-sm font-bold flex items-center justify-center shrink-0">2</span>
                  <h2 className="font-maistra text-2xl text-white">Policy Benefits Check</h2>
                </div>
                <p className="text-white/50 text-sm mb-6 ml-11">Optional — but helps us get you real numbers faster.</p>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className={labelClass} htmlFor="00NDn00000brX5x">Insurance Provider Name</label>
                    <input id="00NDn00000brX5x" name="00NDn00000brX5x" type="text" maxLength={255} placeholder="Insurance Provider Name" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="00NDn00000brX5Y">Insurance Policy #</label>
                    <input id="00NDn00000brX5Y" name="00NDn00000brX5Y" type="text" maxLength={255} placeholder="Insurance Policy #" className={inputClass} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className={labelClass} htmlFor="00NDn00000brX5d">Group Number</label>
                    <input id="00NDn00000brX5d" name="00NDn00000brX5d" type="text" maxLength={255} placeholder="Group Number" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="00NDn00000brX5i">Insurance Provider Phone</label>
                    <input id="00NDn00000brX5i" name="00NDn00000brX5i" type="tel" maxLength={40} placeholder="Insurance Provider Phone" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className={labelClass} htmlFor="00NDn00000brftN">Additional Comments</label>
                  <textarea id="00NDn00000brftN" name="00NDn00000brftN" rows={4} maxLength={220} placeholder="Additional Comments" className={`${inputClass} resize-none`} />
                </div>
              </div>

              <button type="submit" className="w-full py-4 rounded font-semibold text-lg btn-primary transition">
                Send Message
              </button>
              <p className="text-center text-white/50 text-sm mt-4">
                100% Confidential &mdash; We respond within the hour
              </p>
            </form>
          </div>

          {/* Right — Contact Info + Map */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="font-maistra text-2xl text-white mb-6">{config.brand.name}</h2>
              <div className="space-y-4 text-white/70 text-base leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="text-accent mt-1">📍</span>
                  <span>{config.brand.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent">📞</span>
                  <a href={`tel:${config.brand.phoneRaw}`} className="hover:text-white transition">{config.brand.phone}</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent">✉️</span>
                  <a href={`mailto:${config.brand.email}`} className="hover:text-white transition">{config.brand.email}</a>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-lg overflow-hidden border border-white/10 h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.2!2d-97.120635!3d32.819459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x479cfd77af7b87c3!2sTru%20Dallas%20Detox!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
