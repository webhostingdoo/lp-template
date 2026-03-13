import config from '@/data/site-config.json';

export default function PrivacyContent() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#0a1f35" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl prose-privacy">

          <p className="text-white/60 text-sm mb-12 leading-relaxed">
            <strong className="text-white/80">Entity:</strong> {config.brand.legalName} &nbsp;&bull;&nbsp;
            <strong className="text-white/80">Website:</strong> {config.brand.domain.replace(/^https?:\/\//, '')} &nbsp;&bull;&nbsp;
            <strong className="text-white/80">Email:</strong> {config.brand.email} &nbsp;&bull;&nbsp;
            <strong className="text-white/80">Address:</strong> {config.brand.address}
          </p>

          {[
            {
              title: "1) Who We Are",
              content: `${config.brand.name} (\u201C${config.brand.name},\u201D \u201Cwe,\u201D \u201Cour,\u201D \u201Cus\u201D) is a ${config.brand.stateFullName}-licensed behavioral health provider. Protecting your privacy\u2014and especially your health information\u2014is a core obligation. This combined policy governs how we collect, use, disclose, and protect general website data and Protected Health Information (\u201CPHI\u201D). It consolidates all unique provisions from our HIPAA Policy, our Website Privacy Policy, and our internal Notice contained in our compliance binder.`,
            },
            {
              title: "2) Scope & Applicability",
              content: null,
              bullets: [
                `Website & Digital Services: Applies to information collected through ${config.brand.domain.replace(/^https?:\/\//, '')} (forms, chat, analytics, and embedded content).`,
                "Patients & PHI: Applies to PHI we create or receive in connection with treatment, payment, and healthcare operations.",
                "Substance Use Disorder Records: In addition to HIPAA, certain substance use disorder treatment records are protected by 42 C.F.R. Part 2. When applicable, we comply with Part 2\u2019s heightened confidentiality rules, including restrictions on redisclosure without your written consent, except where permitted or required by law.",
                `Conflicts of Law: Where federal or ${config.brand.stateFullName} law provides stronger protections, those controls.`,
              ],
            },
            {
              title: "3) Information We Collect via the Website (Non-PHI)",
              content: "We do not sell, rent, or trade your personal information to third parties.",
              bullets: [
                "Personal Information you submit (e.g., name, email, message content).",
                "Technical Information (e.g., IP address, device and browser data) used for security, spam detection, and performance.",
                "Uploaded Media: Avoid uploading files with embedded location metadata (e.g., EXIF GPS data).",
              ],
            },
            {
              title: "4) Cookies & Similar Technologies",
              content: "We may use cookies and similar technologies for session management, site performance and analytics, and convenience features. You may disable cookies in your browser; some site features may not function properly without them. Cookies on our site do not contain PHI.",
            },
            {
              title: "5) Embedded Content & Third-Party Services",
              content: `Our site may include embedded content or links (e.g., videos, articles, social media, chat widgets). These third parties may collect data, use cookies, and apply their own tracking in accordance with their privacy policies. ${config.brand.name} does not control third-party practices; review their policies before interacting with their content.`,
            },
            {
              title: "6) How We Use and Disclose Website (Non-PHI) Information",
              content: "We may use or share website information to respond to your inquiries, secure our systems, detect fraud/abuse, maintain site performance, and comply with legal and regulatory obligations. If you become a patient, PHI handling is governed by the HIPAA sections below.",
            },
            {
              title: "7) Data Security & Retention",
              content: "We use administrative, technical, and physical safeguards designed to protect information we maintain. We retain information only as long as necessary for the purposes described in this policy, for legitimate business needs, or as required by law and regulation.",
            },
            {
              title: "8) HIPAA Notice of Privacy Practices (PHI)",
              content: "8.1 \u2014 We may use and disclose your PHI without written authorization for treatment, payment, healthcare operations, public health and safety, research, legal requirements, organ donation, workers\u2019 compensation, and with business associates who sign HIPAA-compliant agreements.\n\n8.2 \u2014 Certain uses require your prior written authorization, including psychotherapy notes, marketing, and sale of PHI. You may revoke authorization at any time in writing.\n\n8.3 \u2014 Subject to law, you may direct us regarding sharing information with family, friends, or others involved in your care.\n\n8.4 \u2014 Your rights include: access to your records (usually within 30 days), amendment of incorrect records, restrictions on use/sharing, confidential communications, accounting of disclosures, and copies of this notice.\n\n8.5 \u2014 SUD Records: When applicable under 42 C.F.R. Part 2, we do not disclose substance use disorder treatment records without your written consent except as expressly permitted by law.\n\n8.6 \u2014 We are required by law to maintain the privacy and security of your PHI, provide this notice, and notify you promptly in the event of a breach.",
            },
            {
              title: "9) Website User Choices (Non-PHI)",
              content: "You can opt out of non-transactional emails by following unsubscribe instructions in those messages. You can control or disable cookies using your browser or device settings.",
            },
            {
              title: "10) Children\u2019s Privacy",
              content: "Our website is not intended for children under 13, and we do not knowingly collect personal information online from children under 13 without appropriate consent as required by law.",
            },
            {
              title: "11) Complaints or Questions",
              content: `You may file a complaint or ask questions without fear of retaliation. Contact our Privacy Official at: ${config.brand.address} or ${config.brand.email}. You may also file a complaint with the U.S. Department of Health & Human Services, Office for Civil Rights (OCR) at hhs.gov/ocr/privacy/hipaa/complaints.`,
            },
            {
              title: "12) Updates to this Policy",
              content: "We may revise this combined Privacy Policy & HIPAA Notice from time to time to reflect changes in law or our practices. The updated version will include a new effective date and will be posted on our website and available upon request.",
            },
          ].map((section, i) => (
            <div key={i} className="mb-12">
              <h2 className="font-maistra text-2xl md:text-3xl text-white mb-4 pb-3 border-b border-white/10">
                {section.title}
              </h2>
              {section.bullets && (
                <ul className="space-y-2 mb-4">
                  {section.bullets.map((b, j) => (
                    <li key={j} className="text-white/70 text-base leading-relaxed pl-4 border-l border-accent/40">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {section.content && (
                <p className="text-white/70 text-base leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
