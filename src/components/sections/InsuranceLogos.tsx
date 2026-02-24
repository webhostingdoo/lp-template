"use client";

import Image from "next/image";

const insuranceLogos = [
  { name: "Aetna", src: "/images/insurance/aetna.png" },
  { name: "Cigna", src: "/images/insurance/cigna.png" },
  { name: "GEHA", src: "/images/insurance/geha.png" },
  { name: "Anthem", src: "/images/insurance/anthem.png" },
  { name: "UnitedHealthcare", src: "/images/insurance/unitedhealthcare.png" },
  {
    name: "Blue Cross Blue Shield",
    src: "/images/insurance/bluecross-blueshield.png",
  },
  { name: "HealthPartners", src: "/images/insurance/healthpartners.png" },
  { name: "ComPsych", src: "/images/insurance/compsych.png" },
];

export default function InsuranceLogos() {
  return (
    <section className="bg-navy py-20 md:py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="font-maistra text-3xl md:text-5xl text-white mb-4">
            Making Treatment Accessible
          </h2>
          <hr className="border-t-2 border-gold w-20 mb-6" />
          <p className="text-white/75 text-lg leading-relaxed">
            Unsure about your coverage? We can help! We partner with many
            insurance companies and offer a free benefits check to help you
            understand your coverage options. Find your provider below or
            contact us today.
          </p>
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
