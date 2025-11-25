// components/sections/RepaymentTableSection.tsx
import { repaymentRows } from "../../lib/loanSiteConfig";

const formatAmount = (value: number) =>
  `$${value.toLocaleString("en-US")}`; // $1,000

const formatCurrency = (value: number) =>
  `$${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`; // $1,071.81

export default function RepaymentTableSection() {
  return (
    <section className="repayment">
      <div className="page-container">
        <p className="repayment__label">Representative Example</p>
        <h2 className="repayment__title">
          Repayment Plan For Various Loan Amounts and Terms
        </h2>

        <div className="repayment__table-wrapper">
          <table className="repayment__table">
            <thead>
              <tr>
                <th>Loan Amount</th>
                {repaymentRows.map((row) => (
                  <th key={row.amount}>{formatAmount(row.amount)}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Interest Rate (APR)</td>
                {repaymentRows.map((row) => (
                  <td key={row.amount}>{row.apr}%</td>
                ))}
              </tr>

              <tr>
                <td>Loan Term</td>
                {repaymentRows.map((row) => (
                  <td key={row.amount}>{row.termMonths} Months</td>
                ))}
              </tr>

              <tr>
                <td>Prepayment Penalty</td>
                {repaymentRows.map((row) => (
                  <td key={row.amount}>{row.prepaymentPenalty}</td>
                ))}
              </tr>

              <tr>
                <td>Origination Fees</td>
                {repaymentRows.map((row) => (
                  <td key={row.amount}>{row.originationFees}</td>
                ))}
              </tr>

              <tr>
                <td>Monthly Payments</td>
                {repaymentRows.map((row) => (
                  <td key={row.amount}>{formatCurrency(row.monthlyPayment)}</td>
                ))}
              </tr>

              <tr>
                <td>Total Payments</td>
                {repaymentRows.map((row) => (
                  <td key={row.amount}>{formatCurrency(row.totalPayment)}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <p className="repayment__note">
          Each lender has their terms, fees, and policies. Loan details, such as
          fees, rates, APR, nonpayment rules, and renewal policy, vary by lender
          and state and are outlined in your agreement. This table is for
          illustration only and does not constitute an actual loan offer.
        </p>
      </div>
    </section>
  );
}
