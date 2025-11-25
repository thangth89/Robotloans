// components/sections/HowItWorksSection.tsx
import { howItWorksConfig } from "../../lib/loanSiteConfig";

export default function HowItWorksSection() {
  const { title, intro, steps } = howItWorksConfig;

  return (
    <section className="hiw">
      <div className="page-container">
        <div className="hiw__header">
          <h2 className="hiw__title">{title}</h2>
          <p className="hiw__intro">{intro}</p>
        </div>

        <div className="hiw__grid">
          {steps.map((step, index) => (
            <div key={step.title} className="hiw-step">
              <div className="hiw-step__number">{index + 1}</div>
              <h3 className="hiw-step__title">{step.title}</h3>
              <p className="hiw-step__body">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
