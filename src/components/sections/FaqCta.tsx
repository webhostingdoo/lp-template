export default function FaqCta() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "#0e2a47" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-maistra text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 max-w-4xl mx-auto">
          You&apos;ve Already Done the Hardest Part. Making the Call Takes 15 Minutes.
        </h2>
        <hr className="border-t-2 border-gold w-16 mx-auto mt-6 mb-8" />
        <p className="text-white/75 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Our admissions team is standing by — not a call center, not a queue. Real people who&apos;ve been through this, ready to verify your insurance, answer your questions, and get you in today if that&apos;s what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a
            href="tel:+18669717393"
            className="inline-block px-8 py-4 text-center font-semibold rounded btn-primary transition"
          >
            <span className="text-sm uppercase tracking-widest">Call for Free Assessment</span>
            <br />
            <span className="text-xl font-bold">(866) 971-7393</span>
          </a>
          <a
            href="/#verify-form"
            className="inline-block px-8 py-4 text-center font-semibold rounded border-2 border-white text-white hover:bg-white/10 transition"
          >
            <span className="text-sm uppercase tracking-widest">Quick &amp; Confidential</span>
            <br />
            <span className="text-xl font-bold uppercase">Verify Your Benefits</span>
          </a>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-8 text-gold text-sm uppercase tracking-widest font-semibold">
          <span>&#10003; No Commitment Required</span>
          <span>|</span>
          <span>&#10003; Results in Under 15 Minutes</span>
        </div>
      </div>
    </section>
  );
}
