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
        <h2 className="legal-section__title">Our Lending Goals</h2>
        <p>
          At <strong>RobotLoans.com</strong> we do our best to make sure you, as a consumer,
          are protected from unfair lending practices. To achieve this, we:
        </p>
        <ul>
          <li>
            Share clear information about the loan industry, your responsibilities as a
            borrower, and the possible consequences of late or missed payments so you can
            make informed decisions.
          </li>
          <li>
            Present this information in a straightforward, easy-to-understand way so that
            important details are not overlooked.
          </li>
          <li>
            Treat every customer with respect and keep our communication transparent.
          </li>
          <li>
            Work hard to deliver high-quality service and support whenever you need help.
          </li>
          <li>
            Expect our lending partners to follow responsible and fair lending practices.
          </li>
        </ul>
      </section>

      {/* Lending Partners */}
      <section className="legal-section">
        <h2 className="legal-section__title">Lending Partners</h2>
        <p>
          Our policy at <strong>RobotLoans.com</strong> is simple: we work only with lenders
          that follow the law and are legally allowed to extend credit to consumers. We put
          effort into building a network of reputable partners so that you receive quality
          service.
        </p>
        <p>
          Once you are connected with a lender, you should review that lender’s
          information, including their contact details. We encourage you to reach out to
          them directly if you have any questions about your loan offer.
        </p>
        <p>
          Please remember that every lender has their own terms and conditions regarding
          interest rates, repayment schedules, late payments, missed payments and renewal
          options. To understand what applies to you, always read your loan agreement
          carefully or speak with your lender.
        </p>
      </section>

      {/* Impact on Credit Score */}
      <section className="legal-section">
        <h2 className="legal-section__title">Impact on Credit Score</h2>
        <p>
          Your credit score is a numerical representation of your creditworthiness based on
          information from major credit bureaus. It helps lenders estimate how likely you
          are to repay a loan on time.
        </p>
        <p>The following situations may negatively affect your credit score:</p>
        <ul>
          <li>Late payments;</li>
          <li>Missed payments;</li>
          <li>Loan rollovers or renewals;</li>
          <li>
            A credit check or multiple checks performed by lenders when assessing your
            eligibility.
          </li>
        </ul>
        <p>
          Having less-than-perfect credit does not automatically prevent you from being
          approved, but all loans are subject to the lender’s credit approval process.
        </p>
      </section>

      {/* Late Payments */}
      <section className="legal-section">
        <h2 className="legal-section__title">Late Payments</h2>
        <p>
          We encourage you to borrow responsibly and take out loans only when you believe
          you can repay them on time. If you make a payment after the due date, the lender
          may charge an additional late fee.
        </p>
        <p>
          Each lender has their own policy on late payments, including when a fee is
          applied and how much it may be. All relevant details are described in your loan
          agreement, so you should read it carefully before signing.
        </p>
        <p>
          If you think you might not be able to make a payment on time, contact your lender
          as soon as possible and explain your situation. In many cases, they may offer
          options to help you manage the problem.
        </p>
        <p>
          Keep in mind that personal loans are generally designed as short-term solutions
          and should not be used to manage long-term or major financial difficulties.
        </p>
      </section>

      {/* Missing a Payment */}
      <section className="legal-section">
        <h2 className="legal-section__title">Missing a Payment</h2>
        <p>
          We strongly recommend that borrowers pay off their loans on time. If you miss a
          payment, your credit score may suffer and your lender may begin collection
          efforts in line with their policies.
        </p>
        <p>
          Each lender has specific rules for missed payments, which are described in the
          loan agreement. Review this document thoroughly so that you understand what may
          happen if a payment is not made.
        </p>
        <p>
          If you are unable to make a payment, contact your lender as soon as possible to
          discuss your options and try to find a solution together.
        </p>
      </section>

      {/* Rollovers */}
      <section className="legal-section">
        <h2 className="legal-section__title">Rollovers</h2>
        <p>
          Some lenders may allow you to roll your debt over if you cannot repay the loan on
          the agreed due date. Rolling over a loan usually means that you will be charged an
          additional fee and that interest will continue to accrue.
        </p>
        <p>
          A rollover does not erase the missed payment. It may still affect your credit
          record, and the new payments may carry the same interest rate as the original
          loan. Always review the lender’s rollover policy before agreeing to this option.
        </p>
      </section>

      {/* Types of Renewal Policies */}
      <section className="legal-section">
        <h2 className="legal-section__title">Types of Renewal Policies</h2>
        <p>
          We cooperate with a number of lenders and lending partners, each with their own
          approach to loan renewals. In general, renewal policies fall into two categories:
        </p>
        <ul>
          <li>
            <strong>Unlimited renewals</strong> – allow borrowers to renew their debt many
            times. This can be very costly and is often considered a high-risk decision.
          </li>
          <li>
            <strong>Automatic or borrower-initiated renewals</strong> – allow borrowers to
            renew a loan only in limited situations or for a limited number of times.
          </li>
        </ul>
      </section>

      {/* Collection */}
      <section className="legal-section">
        <h2 className="legal-section__title">Collection</h2>
        <p>
          If you miss a payment and do not respond to your lender’s attempts to contact
          you, they may begin collection activities as described in your loan agreement.
          Typically, you will receive notice of the collection procedure by phone, mail or
          email.
        </p>
        <p>
          If you continue to ignore these notices, your lender may turn to a collection
          agency. In some cases, funds may be withdrawn automatically from your bank
          account on a date specified in your agreement with the lender or lending
          partner.
        </p>
        <p>
          The collection practices for a specific lender are fully described in your loan
          contract. Read this document carefully and contact your lender directly if you
          have any questions about their collection process.
        </p>
      </section>
      </div>
    </main>
    <SiteFooter />
</div>
  );
}
