"use client";

import Image from "next/image";
import config from '@/data/site-config.json';

export default function FacilitiesSlider() {
  return (
    <section id="our-facilities" className="bg-primary py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-maistra text-3xl md:text-5xl text-white mb-4">
          Where You Recover Matters
        </h2>
        <hr className="border-t-2 border-accent w-20 mb-6" />
        <p className="text-white/75 text-lg max-w-3xl leading-relaxed mb-12">
          Every facility in our network is hand-selected for clinical excellence, comfort, and proven outcomes. Whether you need medically supervised detox or full residential care, we&rsquo;ll match you to the right environment for your recovery.
        </p>

        {/* Cards — horizontal scroll on mobile, 3-col on desktop */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {config.facilities.map((card) => (
            <div
              key={card.name}
              className="min-w-[300px] md:min-w-0 snap-start flex flex-col rounded-lg overflow-hidden border border-white/10"
              style={{ backgroundColor: "#0a1f35" }}
            >
              <Image
                src={`/images/gallery/${card.image}`}
                alt={card.name}
                width={1080}
                height={1080}
                quality={80}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-maistra text-xl text-white mb-1">
                  {card.name}
                </h3>
                <p className="text-accent text-sm mb-4">{card.location}</p>
                <p className="text-white/70 text-sm leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>
                <a
                  href={`tel:${config.brand.phoneRaw}`}
                  className="inline-block text-center px-6 py-3 rounded border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition"
                >
                  Contact Admissions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
