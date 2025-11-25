// components/sections/FaqSection.tsx
import { faqItems } from "../../lib/loanSiteConfig";

export default function FaqSection() {
  return (
    <section className="faq">
      <div className="page-container faq__inner">
        <div className="faq__left">
          <p className="faq__label">We are here to answer your questions</p>
          <h2 className="faq__title">Frequently Asked Questions</h2>
          <p className="faq__intro">
            When applying for a loan, you may have questions about the process
            or requirements. To make it easier, we&apos;ve compiled answers to
            the most frequently asked questions.
          </p>
        </div>

        <div className="faq__right">
          {faqItems.map((faq, index) => (
            <details
              key={faq.question}
              className="faq-item"
              open={index === 0}
            >
              <summary className="faq-item__summary">
                <span>{faq.question}</span>
                <span className="faq-item__chevron">▾</span>
              </summary>
              <p className="faq-item__content">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
