import { notFound } from "next/navigation";
import treatments from "@/data/pages.json";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import InsuranceCoverage from "@/components/sections/InsuranceCoverage";
import BreakTheAddiction from "@/components/sections/BreakTheAddiction";
import FacilitiesSlider from "@/components/sections/FacilitiesSlider";
import Accommodations from "@/components/sections/Accommodations";
import TreatmentCards from "@/components/sections/TreatmentCards";
import InsuranceLogos from "@/components/sections/InsuranceLogos";
import LeadForm from "@/components/sections/LeadForm";
import TestimonialQuote from "@/components/sections/TestimonialQuote";

export async function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const t = treatments.find((t) => t.slug === params.slug);
  if (!t) return {};
  return {
    title: t.page_title,
    description: t.page_description,
  };
}

export default function TreatmentPage({ params }: { params: { slug: string } }) {
  const t = treatments.find((t) => t.slug === params.slug);
  if (!t) notFound();

  return (
    <main>
      <Hero
        supertitle={t.hero_supertitle}
        h1={t.hero_h1}
        paragraph={t.hero_paragraph}
        imageDesktop={t.hero_image_desktop}
        imageMobile={t.hero_image_mobile}
      />
      <Process />
      <InsuranceCoverage
        eyebrow={t.insurance_eyebrow}
        h2={t.insurance_h2}
        bodyP1={t.insurance_body_p1}
        bodyP2={t.insurance_body_p2}
        eyebrow2={t.insurance_eyebrow_2}
        h2_2={t.insurance_h2_2}
        body2={t.insurance_body_2}
      />
      <TestimonialQuote />
      <BreakTheAddiction
        eyebrow={t.break_eyebrow}
        h2={t.break_h2}
        body={t.break_body}
      />
      <FacilitiesSlider />
      <Accommodations />
      <TreatmentCards
        h2={t.treatment_h2}
        card1Title={t.treatment_card1_title}
        card1Body={t.treatment_card1_body}
        card2Title={t.treatment_card2_title}
        card2Body={t.treatment_card2_body}
        card3Title={t.treatment_card3_title}
        card3Body={t.treatment_card3_body}
      />
      <InsuranceLogos />
      <LeadForm
        h2={t.form_h2}
        body={t.form_body}
      />
    </main>
  );
}
