// components/layout/SiteFooter.tsx
import { footerConfig } from "../../lib/loanSiteConfig";
import Link from "next/link";


export default function SiteFooter() {
const year = new Date().getFullYear(); 
  return (
    <footer className="site-footer">
      {/* CTA trên footer */}
      <section className="footer-cta">
        <div className="page-container footer-cta__inner">
          <h2 className="footer-cta__title">Obtain your loan today</h2>
          <p className="footer-cta__subtitle">
            Complete our simple online form and get matched with trusted lenders.
          </p>
          <a href="#hero" className="button button--primary mid-cta__button">
  	   Request Now
	  </a>
        </div>
      </section>

      {/* Footer chính */}
      <section className="footer-main">
        <div className="page-container footer-main__inner">
          <div className="footer-main__left">
            <div className="footer-main__brand">Robot Loans</div>
			 <ul className="footer-main__links">
  				{footerConfig.links.map((link) => (
    			<li key={link.label}>
      			  <Link href={link.href} className="footer-main__link">
        			{link.label}
      			  </Link>
    			</li>
  				))}
			</ul>
          </div>

          <div className="footer-main__right">
            <p className="footer-main__disclaimer">{footerConfig.disclaimer}</p>
          </div>
        </div>
      </section>
      <section className="footer-bottom">
        <div className="page-container footer-bottom__inner">
          <hr className="footer-bottom__divider" />
          <p className="footer-bottom__copy">
            COPYRIGHT © {year} ROBOTLOANS.TOP ALL RIGHTS RESERVED.
          </p>
        </div>
      </section>
    </footer>
  );
}




