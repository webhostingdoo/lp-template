import { Suspense } from 'react';
import VerifyHero from "@/components/sections/VerifyHero";
import VerifyForm from "@/components/sections/VerifyForm";
import FaqCta from "@/components/sections/FaqCta";

export const metadata = {
  title: "Verify Insurance | Tru Dallas Detox",
  description: "Find out what your insurance covers in minutes. Verify your benefits, ask about FMLA, and get answers before you decide.",
};

export default function VerifyInsurancePage() {
  return (
    <main>
      <VerifyHero />
      <Suspense fallback={null}>
        <VerifyForm />
      </Suspense>
      <FaqCta />
    </main>
  );
}
