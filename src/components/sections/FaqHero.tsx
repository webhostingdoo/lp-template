export default function FaqHero() {
  return (
    <section
      className="relative min-h-[50vh] flex items-center"
      style={{ background: "linear-gradient(135deg, #0a1f35 0%, #0e2a47 50%, #0a1f35 100%)" }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pt-36 pb-8">
        <h1 className="font-maistra text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
          The First Step Is Yours to Take.<br />
          <span className="text-white">We&apos;ll Carry Everything After That.</span>
        </h1>
        <hr className="border-t-2 border-gold w-16 mt-6 mb-8" />
        <p className="text-white/75 text-xl max-w-2xl leading-relaxed">
          Most of the people who pick up when you call have sat exactly where you&apos;re sitting right now. They&apos;ve lived this. That changes everything about the conversation — and everything about how fast we can move you from where you are right now, to somewhere safe.
        </p>
      </div>
    </section>
  );
}
