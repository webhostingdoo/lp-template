"use client";

import Image from "next/image";
import config from '@/data/site-config.json';

const insuranceLogos = config.insuranceLogos.providers.map((name) => ({
  name,
  src: `/images/insurance/${name.toLowerCase().replace(/\s+/g, '-')}.png`,
}));

export default function InsuranceLogos() {
  return (
    <section className="bg-primary py-20 md:py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-12">
          {config.insuranceLogos.heading && (
            <h2 className="font-maistra text-3xl md:text-5xl text-white mb-4">
              {config.insuranceLogos.heading}
            </h2>
          )}
          <hr className="border-t-2 border-accent w-20 mb-6" />
          {config.insuranceLogos.body && (
            <p className="text-white/75 text-lg leading-relaxed">
              {config.insuranceLogos.body}
            </p>
          )}
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 items-center">
          {insuranceLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center p-4"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} Insurance`}
                width={200}
                height={80}
                quality={80}
                className="w-full max-w-[180px] h-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
