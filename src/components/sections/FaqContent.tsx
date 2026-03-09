const faqs = [
  {
    category: "Medical & Financial Assessment",
    questions: [
      {
        q: "What actually happens when I reach out for the first time?",
        a: "Someone answers \u2014 a real person, not a queue. They\u2019ll ask you a handful of questions: what you\u2019re dealing with, how long, and what insurance you have. It takes about 15 minutes, and it gives us everything we need to move quickly on your behalf. You\u2019re not committing to anything. You\u2019re just letting us understand your situation so we can actually help.",
      },
      {
        q: "Do I need to have it all figured out before I call?",
        a: "No. The people on our team have heard every version of \u2018I don\u2019t know where to start.\u2019 You don\u2019t need a plan, a diagnosis, or even certainty. You just need to make one call. We\u2019ll handle the thinking from there.",
      },
      {
        q: "Is what I share kept completely private?",
        a: "Completely. What you tell us stays with us, protected under HIPAA. Your employer won\u2019t know. Your family won\u2019t know unless you choose to tell them. The conversation you have with us is yours \u2014 no echoes, no paperwork leaking anywhere it shouldn\u2019t.",
      },
    ],
  },
  {
    category: "Paying for Treatment with Insurance",
    questions: [
      {
        q: "Will my insurance actually cover this?",
        a: "Most PPO plans cover medically supervised detox \u2014 and in many cases, cover it fully. We verify your benefits before you walk through the door, so you know exactly what to expect. No vague estimates. No \u2018we\u2019ll figure it out later.\u2019 You\u2019ll have real numbers before you make any decision.",
      },
      {
        q: "What if I don\u2019t know what my plan covers?",
        a: "That\u2019s the whole reason this call exists. Hand us your insurance information and we\u2019ll do the work \u2014 contacting your provider, running a full benefits check, and translating what we find into plain language. By the time we\u2019re done, you\u2019ll know more about your coverage than most people ever do.",
      },
      {
        q: "What if there\u2019s still a gap in coverage?",
        a: "We\u2019ve helped people in tighter situations than yours get into care. Our team knows how to maximize what you have, and where real gaps exist, we\u2019ll walk you through what\u2019s honest and what\u2019s possible. We\u2019re not here to sell you something you can\u2019t afford. We\u2019re here to get you in.",
      },
    ],
  },
  {
    category: "Detox & Phases",
    questions: [
      {
        q: "What does medical detox actually feel like?",
        a: "Not like what you\u2019re imagining. Medical detox at Dallas Detox means you\u2019re monitored around the clock, medicated when your body needs it, and never left alone with your worst moments. The goal isn\u2019t to white-knuckle through withdrawal \u2014 it\u2019s to make the process as medically safe and as physically manageable as it can possibly be. You\u2019re in a bed, with people watching over you, in a building designed specifically for this.",
      },
      {
        q: "How long will detox take?",
        a: "Most people stabilize within 5 to 10 days. The timeline depends on what you\u2019ve been using, how long, and what your body needs. Your clinical team will give you an honest answer on day one \u2014 not a range designed to make you feel better, but an actual picture of what to expect.",
      },
      {
        q: "What happens when detox is over?",
        a: "This is where a lot of people get left behind \u2014 and we don\u2019t let that happen here. When you\u2019re medically stable, we build a clear next step with you: residential, partial hospitalization, or intensive outpatient, depending on what your situation calls for. You won\u2019t be discharged with a pamphlet and a phone number. You\u2019ll leave with a plan already in motion and people already expecting you.",
      },
    ],
  },
];

export default function FaqContent() {
  return (
    <section className="pt-12 pb-20 md:pt-16 md:pb-28" style={{ backgroundColor: "#0a1f35" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {faqs.map((section, i) => (
          <div key={i} className="mb-16">
            <h2 className="font-maistra text-3xl md:text-4xl text-white mb-10 pb-4 border-b border-white/10">
              {section.category}
            </h2>
            <div className="space-y-10">
              {section.questions.map((item, j) => (
                <div key={j}>
                  <h3 className="text-gold text-lg font-semibold mb-3">{item.q}</h3>
                  <p className="text-white/75 text-lg leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
