"use client";

export default function TestimonialQuote() {
  return (
    <div className="quote-section">
      <div className="quote-watermark" aria-hidden="true">&ldquo;</div>
      <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
        <blockquote className="quote-text">
          &ldquo;Discharge is not the end; it is a clinical transition. We
          secure your <strong>sobriety</strong> through seamless{" "}
          <strong>IOP integration</strong>, a trusted nationwide network, and{" "}
          <strong>24/7 crisis support</strong>, ensuring professional safety
          follows you home.&rdquo;
        </blockquote>
        <div>
          <div className="quote-name">Althea Walters, M.A.</div>
          <div className="quote-title">Primary Therapist</div>
        </div>
      </div>
    </div>
  );
}
