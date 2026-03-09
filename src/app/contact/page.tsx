import { Suspense } from 'react';
import ContactHero from "@/components/sections/ContactHero";
import ContactContent from "@/components/sections/ContactContent";

export const metadata = {
  title: "Contact Us | Tru Dallas Detox",
  description: "Get in touch with Tru Dallas Detox. Call us, send a message, or find us at our Euless, TX location.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <Suspense fallback={null}>
        <ContactContent />
      </Suspense>
    </main>
  );
}
