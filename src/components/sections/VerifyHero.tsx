export default function VerifyHero() {
  return (
    <section
      className="relative flex items-center"
      style={{ background: "linear-gradient(135deg, #0a1f35 0%, #0e2a47 50%, #0a1f35 100%)" }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-36 pb-12">
        <h1 className="font-maistra text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-4xl">
          One Form. Every Answer You Need Before You Decide.
        </h1>
        <hr className="border-t-2 border-accent w-16 mt-6 mb-8" />
        <p className="text-white/75 text-xl max-w-2xl leading-relaxed">
          Fill out the form below and one of our admissions coordinators will reach out to verify your insurance benefits, walk you through FMLA options, explain your treatment choices, and answer any question you&apos;re not ready to ask out loud yet. Adding your insurance details helps us get you a full picture faster.
        </p>
      </div>
    </section>
  );
}
