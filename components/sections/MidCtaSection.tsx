// components/sections/MidCtaSection.tsx
import { midCtaConfig } from "../../lib/loanSiteConfig";

export default function MidCtaSection() {
  const { title, subtitle, bullets } = midCtaConfig;

  return (
    <section className="mid-cta">
      <div className="page-container mid-cta__inner">
        <div className="mid-cta__image">
          <div className="mid-cta__image-box" />
        </div>

        <div className="mid-cta__content">
          <h2 className="mid-cta__title">{title}</h2>
          <p className="mid-cta__subtitle">{subtitle}</p>
          <p className="mid-cta__text">
            With our simple online form, you get matched to trusted lenders in
            minutes with no long waits, no hidden fees.
          </p>

          <ul className="mid-cta__list">
            {bullets.map((b) => (
              <li key={b} className="mid-cta__list-item">
                <span className="mid-cta__list-dot" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

	<a href="#hero" className="button button--primary mid-cta__button">
  	   Request Now
	</a>
        </div>
      </div>
    </section>
  );
}
