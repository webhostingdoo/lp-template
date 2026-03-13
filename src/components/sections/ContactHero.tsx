export default function ContactHero() {
  return (
    <section
      className="relative flex items-center"
      style={{ background: "linear-gradient(135deg, #0a1f35 0%, #0e2a47 50%, #0a1f35 100%)" }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-36 pb-12">
        <h1 className="font-maistra text-4xl md:text-6xl text-white leading-tight mb-6">
          Get in Touch
        </h1>
        <hr className="border-t-2 border-accent w-16 mt-6 mb-8" />
        <p className="text-white/75 text-xl max-w-2xl leading-relaxed">
          Whether you have a question, need help understanding your options, or are ready to take the next step — we&apos;re here. A real person will respond quickly.
        </p>
      </div>
    </section>
  );
}
