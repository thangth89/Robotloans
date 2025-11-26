// app/rates-and-fees/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rates and Fees | RobotLoans",
  description:
    "Information about rates, fees, APR, non-payment rules and renewal policy when using the RobotLoans lender-matching service.",
};

export default function RatesAndFeesPage() {
  return (
    <main className="legal-page">
      <div className="page-container">
        <header className="legal-page__header">
          <h1 className="legal-page__title">Rates and Fees</h1>
        </header>

        <section className="legal-section">
          <p>
            RobotLoans.com streamlines the loan process from start to finish,
            although we do not lend money ourselves. We do not make any
            decisions on your request, cannot influence a lender&apos;s
            decision, and are not privy to the exact fees, rates, APR,
            non-payment rules, or renewal policies that may apply to your loan.
          </p>

          <p>
            Our website is an online service that connects borrowers with
            reliable lenders who are ready to consider your current financial
            needs.
          </p>

          <p>
            All details such as fees, interest rates, APR, non-payment rules and
            renewal options are specified in your loan agreement and depend on
            local regulations in your state. On our side, we aim to provide
            enough general information to help you better understand what a loan
            is, how it works and how to use it wisely.
          </p>

          <p>
            Our matching service is free for you. We never pressure you to
            accept the first offer you receive, and you are free to decline any
            offer that does not meet your expectations. Our goal is simple:
            helping users find options that support their financial interests.
          </p>

          <p>
            Once your request is approved, the lender will present you with an
            offer that includes the APR, fees, repayment terms and any renewal
            options available. We strongly encourage you to read the agreement
            carefully, weigh the pros and cons and make sure you understand all
            conditions before signing so you do not end up in an uncomfortable
            financial situation.
          </p>

          <p>
            Pay special attention to what may happen if you miss a payment.
            Delinquency can lead to additional fees, a negative impact on your
            credit score and, in some cases, collection activities. If you are
            unable to make a payment on time, contact your lender immediately to
            discuss possible solutions.
          </p>

          <p>
            Some lenders may offer loan renewals. Each lender has its own
            renewal policy, so you should carefully review those terms before
            accepting a renewal offer.
          </p>

          <p>
            If you need detailed information about a specific loan agreement,
            please direct all questions to your lender. RobotLoans can only
            answer questions related to our matching service and general
            information.
          </p>

          <p>
            The disclosures on this page are provided for informational purposes
            only and should not be treated as legal advice.
          </p>
        </section>
      </div>
    </main>
  );
}
