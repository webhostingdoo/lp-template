"use client";

import config from '@/data/site-config.json';

interface TestimonialQuoteProps {
  quote?: string;
  author?: string;
  authorTitle?: string;
}

export default function TestimonialQuote(props: TestimonialQuoteProps) {
  const {
    quote = config.testimonial.quote,
    author = config.testimonial.author,
    authorTitle = config.testimonial.role,
  } = props;

  return (
    <div className="quote-section">
      <div className="quote-watermark" aria-hidden="true">&ldquo;</div>
      <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
        <blockquote className="quote-text">
          {quote}
        </blockquote>
        <div>
          <div className="quote-name">{author}</div>
          <div className="quote-title">{authorTitle}</div>
        </div>
      </div>
    </div>
  );
}
