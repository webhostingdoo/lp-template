import PrivacyHero from "@/components/sections/PrivacyHero";
import PrivacyContent from "@/components/sections/PrivacyContent";
import config from "@/data/site-config.json";

export const metadata = {
  title: `Privacy Policy & HIPAA Notice | ${config.brand.name}`,
  description: `Privacy Policy and HIPAA Notice of Privacy Practices for ${config.brand.legalName}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyHero />
      <PrivacyContent />
    </main>
  );
}
