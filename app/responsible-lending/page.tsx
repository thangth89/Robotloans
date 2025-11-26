// app/responsible-lending/page.tsx
import type { Metadata } from "next";

const siteName = "RobotLoans";
const baseUrl = "https://robotloans.com";

export const metadata: Metadata = {
  title: "Responsible Lending | RobotLoans",
  description:
    "Learn how RobotLoans promotes responsible lending, explains the impact on your credit score, late payments, rollovers, renewal policies and collection practices.",
  alternates: {
    canonical: `${baseUrl}/responsible-lending`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ResponsibleLendingPage() {
  return (
    <main className="legal-page">
      <div className="page-container legal-page__inner">
        <h1>Responsible Lending</h1>

        <section className="legal-section">
          <p>
            We at <strong>{siteName}.com</strong> do our best to protect you
            against unfair lending practices. In order to achieve this goal as
            effectively as possible, we resort to the following actions:
          </p>

          <ul>
            <li>
              We supply you with significant information about the current state
              of the loan industry, details concerning responsible lending and
              the consequences of non-payments or missed payments;
            </li>
            <li>
              We cover these issues in a clear way so you can easily understand
              important details;
            </li>
            <li>
              We treat every customer with respect, adhering to transparent
              relationships;
            </li>
            <li>
              We apply energy to provide a high-quality service and support;
            </li>
            <li>
              We demand from our partners to abide by Fair Lending practices.
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Lending Partners</h2>
          <p>
            We work only with those lenders who abide by law and are legally
            authorized to lend money to consumers. We take every effort to build
            a network of only reliable partners to ensure that you, our
            customer, get the services of high quality and risk nothing.
          </p>
          <p>
            Once you are connected with a financial provider, please check
            details on that lender so you can ask them questions if any occur.
          </p>
          <p>
            It’s important to remember that every lender has their own terms and
            conditions. Interest rates, repayments, late payments, missed
            payments, and loan renewals vary by lender. To know what to expect,
            contact your financial provider.
          </p>
        </section>

        <section className="legal-section">
          <h2>Impact on Credit Score</h2>
          <p>
            Information on your financial background is translated into a
            three-digit score that serves to express your credit worthiness and
            predict how likely you are to handle the debt in the future. The
            higher your score, the more chances you have to be approved for a
            loan with better terms. Things that may negatively affect your
            credit score are listed below:
          </p>
          <ul>
            <li>late payments,</li>
            <li>missed payments,</li>
            <li>hard credit check,</li>
            <li>loan renewal.</li>
          </ul>
          <p>
            However, if your credit is less than perfect you still can be
            approved. All loans are subject to credit approval.
          </p>
        </section>

        <section className="legal-section">
          <h2>Late Payments</h2>
          <p>
            We strongly recommend that you have a responsible attitude to
            borrowing and take a loan only when you can afford it. It is
            important to understand the consequences of making late payments. If
            you make a late payment, you&apos;ll have to pay a fee. We do not
            possess information on the amount of penalty. It only becomes
            available when a financial provider reaches you to finalize the loan
            process.
          </p>
          <p>
            Always review all the documentation before signing the loan
            agreement to understand any potential fees that may result from late
            payment.
          </p>
          <p>
            If you feel that you can’t repay on time, get in touch with your
            lender as soon as possible and warn them about your situation.
          </p>
          <p>
            Please remember that a personal loan is a short-time solution and
            should not be seen as a tool to cope with major financial struggles.
          </p>
        </section>

        <section className="legal-section">
          <h2>Missing a Payment</h2>
          <p>
            We encourage borrowers to pay off their debt on time. Missing a
            payment may result in additional fees and collection activities
            which may negatively affect your credit score. Each lender has their
            own policy regarding missed payments. We recommend that you
            thoroughly peruse your loan agreement as it contains all the
            significant information about the lender’s policy towards missed
            payments.
          </p>
          <p>
            If you aren’t able to repay the loan on the due date, please contact
            your provider found via <strong>{siteName}</strong> to settle the
            issue.
          </p>
        </section>

        <section className="legal-section">
          <h2>Rollovers</h2>
          <p>
            Some financial providers offer the opportunity to roll your debt
            over if you are unable to repay on the due date. Note that renewing
            a loan is not free: you have to pay a fee to delay the repayment.
            The fee does not reduce the amount you owe and the rollover payments
            have the same interest rate as the missed payment.
          </p>
        </section>

        <section className="legal-section">
          <h2>Types of Renewal Policies</h2>
          <p>
            We work with a considerable number of lenders, and each of them has
            their own renewal policy. Typically, they offer two types of
            renewals:
          </p>
          <ul>
            <li>
              <strong>Unlimited renewals.</strong> They allow you to renew your
              debt on numerous occasions and are very expensive decisions.
            </li>
            <li>
              <strong>Automatic and borrower-initiated renewals.</strong> They
              allow you to renew your debt but on a limited basis.
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Collection</h2>
          <p>
            In extreme cases when you have a delinquent payment and are
            reluctant to contact your lender to discuss the issue, they can
            resort to collection activities. Typically, they inform you about
            the intention to begin the collection procedure by phone, mail or
            email. If you still avoid communication, your lender may turn to a
            collection agency.
          </p>
          <p>
            The collection practices of a particular lender are stated in the
            loan agreement. We encourage borrowers to read it carefully to be
            aware of the lender’s policy regarding the collection practices. For
            more information, please get in touch with your lender.
          </p>
        </section>

        <section className="legal-section legal-section--disclaimer">
          <p>
            <strong>Disclaimer:</strong> The information on this page is
            provided for informational purposes only and does not constitute
            legal advice. You should consult your own legal counsel to ensure
            that your borrowing and repayment decisions are appropriate for your
            situation.
          </p>
        </section>
      </div>
    </main>
  );
}
