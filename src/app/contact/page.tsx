import ContactHero from "@/components/sections/ContactHero";
import ContactContent from "@/components/sections/ContactContent";
import config from "@/data/site-config.json";

export const metadata = {
  title: `Contact Us | ${config.brand.name}`,
  description: `Get in touch with ${config.brand.name}. Call us, send a message, or visit our location.`,
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactContent />
    </main>
  );
}
