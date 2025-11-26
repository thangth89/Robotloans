
import SiteHeader from "../../components/layout/SiteHeader";
import SiteFooter from "../../components/layout/SiteFooter";
import HeroSection from "../../components/sections/HeroSection";

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Credit Authorization Agreement | RobotLoans",
  description:
    "Credit Authorization Agreement explaining how your information may be used when you submit a loan request through RobotLoans.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function CreditAuthorizationAgreementPage() {
  return (
<div className="site-root">
  <SiteHeader />
    <main className="site-main">
     <HeroSection />
      <div className="page-container legal-page__inner">
        <h1 className="legal-page__title">Credit Authorization Agreement</h1>

        <section className="legal-section">
          <p>
            By submitting a debt solution loan request on this site, you
            understand, agree, and authorize that:
          </p>

          <ol>
            <li>
              You are submitting a request for a loan and
              this request is a business transaction initiated by you;
            </li>
            <li>
              Your request and all information in it may be
              shown to multiple lenders, lending partners, and marketing
              partners in our network or in other financial networks (together{" "}
              &quot;Partners*&quot;) in real time or over time so that one or
              more of them can decide whether to offer you a loan or otherwise
              advertise their loan or other financial products to you;
            </li>
            <li>
              You are providing written instruction under
              the Fair Credit Reporting Act and other applicable laws for
              Liftup&nbsp;Capital, Inc. and its{" "}
              <Link href="/partners">partners*</Link> to obtain consumer
              credit reporting and other related information about you from one
              or more consumer reporting agencies (including, but not limited
              to, TransUnion, Experian, and Equifax) for the purposes of
              verifying your identity, determining whether to offer you a loan,
              determining how much debt you currently have in order to determine
              your debt-to-income ratio, and to make other prequalification or
              credit decisions;
            </li>
            <li>
              Many users of this site do not qualify for the
              loan types or amounts they request;
            </li>
            <li>
              Some lenders may only offer loans in an amount
              below the amount you requested;
            </li>
            <li>
              Any loan terms you may be offered are
              determined solely by your lender and not by us; and
            </li>
            <li>
              You will closely review your loan offer(s) and
              research various loan options and alternatives available to you.
            </li>
          </ol>
        </section>
      </div>
    </main>
  <SiteFooter />
</div>
  );
}
