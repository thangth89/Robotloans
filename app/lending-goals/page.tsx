// app/lending-goals/page.tsx
import SiteHeader from "../../components/layout/SiteHeader";
import SiteFooter from "../../components/layout/SiteFooter";
import HeroSection from "../../components/sections/HeroSection";


export default function LendingGoalsPage() {
  return (
    <div className="site-root">
  <SiteHeader />
    <main className="site-main">
     <HeroSection />
    <div className="page-container legal-page__inner">
      <h1 className="legal-page__title">Lending Goals</h1>

      {/* Lending Goals */}
      <section className="legal-section">
        <p>
          RobotLoans.com does its best to ensure that you, our consumer, are
          protected against unfair lending practices. In order to achieve this goal, we
          do the following:
        </p>
        <ul>
          <li>
            Provide you with relevant data about loan industry, your responsibility as
            a borrower, the consequences of loan non-payments or missed
            payments so that you’re able to make a well-informed decision;
          </li>
          <li>
            We provide this information in a clear, understandable way;
          </li>
          <li>
            We treat every customer with respect;
          </li>
          <li>
            We work hard to give you a high-quality service;
          </li>
          <li>
            We demand from the lending partners we work with to abide by Fair
            Lending practices.
          </li>
        </ul>
      </section>

      {/* Lending Partners */}
      <section className="legal-section">
        <h2 className="legal-section__title">Lending Partners</h2>
        <p>
          The policy trustedonlineloans.com is very simple: we cooperate only with
          those lenders who abide by law and are legally authorized to lend funds to
          consumers. We spare no effort to ensure that we work with the best in the
          industry.
        </p>
        <p>
          As soon as you get a connection with your lender, make sure to check
          details on that lender. We recommend to do that so that you’re able to get
          in touch with the lender if you have questions.
        </p>
        <p>
          Please note that every lender has his/her own terms and conditions when
          it comes to interest rates, repayments, late payments, missed payments
          and/or loan renewals.
        </p>
      </section>

      {/* Impact on Credit Score */}
      <section className="legal-section">
        <h2 className="legal-section__title">Impact on Credit Score</h2>
        <p>
          Your credit score serves to express your credit worthiness in a numerical
          value. It’s based on the credit report data from major credit bureaus.
        </p>
        <p>The following things may affect your credit score:</p>
        <ul>
          <li>Late payments;</li>
          <li>Missed payments;</li>
          <li>Loan rollovers;</li>
          <li>
            A credit check or numerous checks carried out by lenders who are
            defining your eligibility for a loan product.
          </li>
        </ul>
        <p>
          Please note that while less than perfect credit will not necessarily prevent
          you from being able to get a loan, all loans are subject to credit approval.
        </p>
      </section>

      {/* Late Payments */}
      <section className="legal-section">
        <h2 className="legal-section__title">Late Payments</h2>
        <p>
          We encourage all borrowers to treat their loans responsibly and make sure
          to repay them on time. If you make a late payment, you must understand
          that you’ll have to pay an additional fee for being late. Each lender has
          his/her own policy regarding late payments. If you feel that you may be
          late with your payment, get in touch with your lender to warn about your
          situation and work a way out of it together.
        </p>
        <p>
          Always read your loan agreement carefully as it contains all the relevant
          information about lender’s policy towards late payments.
        </p>
        <p>
          Please remember that a personal loan is a short-time solution and should
          not be used to overcome major financial struggles.
        </p>
      </section>

      {/* Missing a Payment */}
      <section className="legal-section">
        <h2 className="legal-section__title">Missing a Payment</h2>
        <p>
          We encourage consumers to pay all their loans on time. If you miss a
          payment, your credit score may be hurt and your lender may start the
          procedure of collecting a debt from you. Each lender has his/her own
          policy regarding missed payments. Please read your loan agreement
          carefully as it contains all the relevant information about lender’s policy
          towards missed payments. If you feel that you aren’t able to repay the loan,
          contact your lender to warn about your situation and work a way out of it
          together.
        </p>
      </section>

      {/* Rollovers */}
      <section className="legal-section">
        <h2 className="legal-section__title">Rollovers</h2>
        <p>
          Some lenders may roll your debt over if you are unable to repay the loan
          on time. However, rollovers come with a price: a missed payment still
          affects your credit score, and the rollover payments has the same interest
          rate as the missed payment.
        </p>
      </section>

      {/* Types of Renewal Policies */}
      <section className="legal-section">
        <h2 className="legal-section__title">Types of Renewal Policies</h2>
        <p>
          We cooperate with a number of lenders and lending partners, and each of
          them has his/her own renewal policy. However, in general there are two
          types of renewals:
        </p>
        <ul>
          <li>
            Unlimited renewals. They allow you to renew your debt on numerous
            occasions. Unlimited renewals are a very expensive and risky decision.
          </li>
          <li>
            Automatic and borrower-initiated renewals. This type allows you to
            renew your debt but on a limited basis.
          </li>
        </ul>
      </section>

      {/* Collection */}
      <section className="legal-section">
        <h2 className="legal-section__title">Collection</h2>
        <p>
          If you miss a payment and avoid communication with your lender, your
          has the right to start collecting a debt from you. As a rule, you’ll be
          informed about the beginning of the collection procedure by phone, mail
          or email. If you ignore the warnings, your lender may turn to a collection
          agency for help. You may be able to have funds withdrawn automatically
          from your bank account on the date agreed upon with your lender or
          lending partner. The collection practices of a particular lender are stated in
          the loan agreement. Therefore, make sure to read it carefully. If you have
          any questions regarding the collection practices, contact your lender.
        </p>
      </section>
      </div>
    </main>
    <SiteFooter />
</div>
  );
}
