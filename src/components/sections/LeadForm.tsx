"use client";

export default function LeadForm() {
  return (
    <section
      id="verify-form"
      className="py-20 md:py-28 scroll-mt-24"
      style={{ backgroundColor: "#0a1f35" }}
    >
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h2 className="font-maistra text-3xl md:text-5xl text-white mb-4 text-center">
          Verify Insurance Benefits
        </h2>
        <hr className="border-t-2 border-gold w-20 mx-auto mb-6" />
        <p className="text-white/75 text-lg leading-relaxed text-center mb-12">
          Fill out the form below to schedule a call back from one of our
          admissions coordinators or verify insurance benefits. If you would
          like to speed up the process please fill out the insurance info
          section as well.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/60 text-sm mb-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition"
              />
            </div>
            <div>
              <label className="block text-white/60 text-sm mb-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/60 text-sm mb-2">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition"
              />
            </div>
            <div>
              <label className="block text-white/60 text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition"
              />
            </div>
          </div>
          <div>
            <label className="block text-white/60 text-sm mb-2">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="How can we help?"
              className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 rounded font-semibold text-lg btn-primary transition"
          >
            Submit
          </button>
        </form>
        <p className="text-center text-white/50 text-sm mt-6">
          100% Confidential &mdash; Same Day Response
        </p>
      </div>
    </section>
  );
}
