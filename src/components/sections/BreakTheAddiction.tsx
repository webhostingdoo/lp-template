"use client";

import Image from "next/image";
import config from '@/data/site-config.json';

const amenities = [
  {
    label: "Outdoor Activities",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="1.5"/><path d="M7 22l2.5-7 2.5 3 2.5-3L17 22"/><path d="M8 12l1.5-4h5L16 12"/>
      </svg>
    )
  },
  {
    label: "Medical Detox Services",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    )
  },
  {
    label: "Wellness & Spa",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a9 9 0 0 1 6 2.5c-2 1-4 1.5-6 1.5s-4-.5-6-1.5A9 9 0 0 1 12 2z"/><path d="M12 6c0 4-3 7-7 9"/><path d="M12 6c0 4 3 7 7 9"/><path d="M8 21h8"/><path d="M12 15v6"/>
      </svg>
    )
  },
  {
    label: "Private Rooms",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/>
      </svg>
    )
  },
  {
    label: "Chef-Prepared Meals",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6z"/><line x1="6" y1="17" x2="18" y2="17"/>
      </svg>
    )
  },
  {
    label: "FMLA Assistance",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    )
  }
];

interface BreakTheAddictionProps {
  eyebrow?: string;
  h2?: string;
  body?: string;
}

export default function BreakTheAddiction(props: BreakTheAddictionProps) {
  const {
    eyebrow = "We Handle the Hard Part",
    h2 = "One Call. We Take It From There.",
    body = "From verifying your insurance to coordinating your admission and medical intake \u2014 our team has done this thousands of times. You make the decision to get help. We handle everything else.",
  } = props;

  return (
    <section
      id="amenities"
      className="py-20 md:py-28 scroll-mt-24"
      style={{ backgroundColor: "#0a1f35" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Two-column: image left, text right */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <Image
            src={`/images/gallery/${config.breakTheAddiction.image}`}
            alt="Insurance covered detox and addiction treatment"
            width={800}
            height={600}
            quality={80}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-lg w-full h-auto object-cover"
          />
          <div>
            <span className="text-accent text-sm uppercase tracking-[0.2em] mb-4 block">
              {eyebrow}
            </span>
            <h2 className="font-maistra text-3xl md:text-5xl text-white mb-6">
              {h2}
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              {body}
            </p>
          </div>
        </div>

        {/* Amenities subheading + list */}
        <h3 className="text-xl md:text-2xl text-white mb-8">
          Everything you need for a smooth, supported start to recovery:
        </h3>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {amenities.map((item) => (
            <li key={item.label} className="flex items-center gap-3 text-white text-lg">
              <span className="text-accent shrink-0">{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Dr. Chaghouri Quote */}
      <div className="quote-section">
        <div className="quote-watermark" aria-hidden="true">&ldquo;</div>
        <div className="relative max-w-3xl mx-auto px-4 md:px-8 text-center">
          <blockquote className="quote-text">
            &ldquo;The hardest part of recovery isn&rsquo;t{" "}
            <strong>detox</strong>. It&rsquo;s the{" "}
            <strong>Tuesday afternoon six months later</strong> when life gets hard. That&rsquo;s exactly what our{" "}
            <strong>aftercare</strong> is built for.&rdquo;
          </blockquote>
          <div>
            <div className="quote-name">James Saunders</div>
            <div className="quote-title">Program Director</div>
          </div>
        </div>
      </div>
    </section>
  );
}
