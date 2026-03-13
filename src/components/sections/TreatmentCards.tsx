"use client";

import Image from "next/image";

interface TreatmentCardsProps {
  h2?: string;
  card1Title?: string;
  card1Body?: string;
  card2Title?: string;
  card2Body?: string;
  card3Title?: string;
  card3Body?: string;
}

export default function TreatmentCards(props: TreatmentCardsProps) {
  const {
    h2 = "Full-Spectrum Addiction Treatment \u2014 From Detox to Long-Term Recovery",
    card1Title = "Medical Drug & Alcohol Detox",
    card1Body = "The safest way to begin. Our medical team provides 24/7 supervised detox, managing withdrawal symptoms so you can stabilize comfortably and move forward with a clear foundation.",
    card2Title = "Inpatient Treatment",
    card2Body = "Structured, immersive care that goes beyond stabilization. Evidence-based therapies, daily clinical support, and a community built around recovery \u2014 everything you need to build lasting change.",
    card3Title = "Alumni Aftercare & Relapse Prevention",
    card3Body = "Recovery doesn\u2019t end at discharge. Regular check-ins, personalized relapse prevention planning, and an alumni network that keeps you connected \u2014 because long-term success needs long-term support.",
  } = props;

  const treatmentCards = [
    {
      title: card1Title,
      image: "/images/gallery/drug-and-alcohol-detox.jpg",
      alt: "Drug and Alcohol Detox - Dallas, TX",
      description: card1Body,
    },
    {
      title: card2Title,
      image: "/images/gallery/inpatient-treatment-center.jpg",
      alt: "Inpatient Residential Treatment in Florida and California",
      description: card2Body,
    },
    {
      title: card3Title,
      image: "/images/gallery/alumni.jpg",
      alt: "Alumni Aftercare & Relapse Prevention",
      description: card3Body,
    },
  ];

  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-maistra text-3xl md:text-5xl text-white mb-12">
          {h2}
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {treatmentCards.map((card) => (
            <div
              key={card.title}
              className="min-w-[300px] md:min-w-0 snap-start flex flex-col rounded-lg overflow-hidden border border-white/10"
              style={{ backgroundColor: "#0a1f35" }}
            >
              <Image
                src={card.image}
                alt={card.alt}
                width={800}
                height={600}
                quality={80}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-maistra text-xl text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>
                <a
                  href="/verify-insurance"
                  className="inline-block text-center px-6 py-3 rounded border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition"
                >
                  Verify Insurance
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
