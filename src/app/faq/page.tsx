import FaqHero from "@/components/sections/FaqHero";
import FaqContent from "@/components/sections/FaqContent";
import FaqCta from "@/components/sections/FaqCta";

export const metadata = {
  title: "FAQ | Tru Dallas Detox",
  description: "Answers to the most common questions about detox, insurance coverage, and what to expect at Tru Dallas Detox.",
};

export default function FaqPage() {
  return (
    <main>
      <FaqHero />
      <FaqContent />
      <FaqCta />
    </main>
  );
}
