import FaqHero from "@/components/sections/FaqHero";
import FaqContent from "@/components/sections/FaqContent";
import FaqCta from "@/components/sections/FaqCta";
import config from "@/data/site-config.json";

export const metadata = {
  title: `FAQ | ${config.brand.name}`,
  description: `Answers to the most common questions about detox, insurance coverage, and what to expect at ${config.brand.name}.`,
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
