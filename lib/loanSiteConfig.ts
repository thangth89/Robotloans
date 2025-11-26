// lib/loanSiteConfig.ts
export const heroConfig = {
  brandName: "Trusted Online Loans",
  headline: "A smarter way to borrow",
  subHeadline: "Get cash fast, deposited right to your bank.",
  amountLabel: "How much would you like to borrow? ($200 – $5,000)",
  amountOptions: [200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000, 4000, 5000],
  aprNote:
    "APR Ranges From 4.95% up to 35.95% For Qualified Customers 90 Day Minimum up to 84 Month Maximum Repayment Period",
};

export const statsConfig = {
  title:
    "We’ve helped over 2M+ people get the loans they need, with 7K+ successful connections every week with:",
  items: [
    "All credit types considered",
    "Absolutely no hidden fees",
    "Fast and secure process",
    "Connect with top US lenders",
  ],
};

export const howItWorksConfig = {
  title: "Getting the right loan has never been easier.",
  intro:
    "RobotLoans makes borrowing quick and easy, no matter your credit score. We connect you with trusted lenders for competitive rates, flexible terms, and fast approval—all from the comfort of home!",
  steps: [
    {
      title: "Fill out the form",
      body: "Our fast, safe and secure online form can be completed in just 2 quick minutes.",
    },
    {
      title: "All credit types considered",
      body: "You can fill out our online form with any level of credit rating, from no rating to excellent!",
    },
    {
      title: "Get your cash",
      body: "Our lenders will directly deposit funds to your account as fast as the next business day.",
    },
  ],
};

export const midCtaConfig = {
  title: "Need money now?",
  subtitle: "Our Lenders are Ready to Connect!",
  bullets: ["Quick approvals", "No hidden costs", "Available in most states"],
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Annual Percentage Rate (APR)",
answer:
  "Here at RobotLoans we offer APR rates ranging from 4.95% minimum to 35.95% maximum." +
  "The APR you may be offered depends on different factors, including your personal situation and financial standing. By completing our loan offer form you shall receive details of the APR and full terms of any loan offered to you." +
  "The actual interest rate you may be offered depends on several factors: your credit score, financial history, income, etc. Contact your lender for more information about the APR you may receive and the terms of your loan agreement.",
  },
  {
    question: "Loan Term (Repayment Period)",
    answer:
      "Loan terms vary by lender and state but typically range from 90 days up to 84 months. Be sure to review the repayment schedule from your lender carefully before signing your agreement.",
  },
  {
    question: "Representative Example of APR",
    answer:
      "If you borrow $2,500 over a term of 1 year with an APR of 10% and a fee of 3%, you will pay $219.79 each month. The total amount payable will be $2,637, with a total interest of $137.48.",
  },
  {
    question: "Financial Implications (Interest & Finance Charges)",
    answer:
      "RobotLoans is not a lender and we cannot predict what fees and interest rate will be applied to the loan you will be offered. It is your lender that will provide all the necessary information about the cost of the loan. It is your responsibility to peruse the loan agreement carefully and accept the offer only if you agree to all the terms. RobotLoans service is free of charge, and you are under no obligation to accept the terms that the lender offers you.",
  },
  {
    question: "Implications of Non-Payment",
    answer:
      "When you accept the terms and conditions for a loan, you enter into a commitment to repay the amount you owe according to the specific schedule outlined in the documents. In the event of non-payment, additional charges may be applied. Late payment penalties vary by lender, and as RobotLoans is not involved in the lending process, we cannot supply any information on the fees you will incur if any default occurs. For more information, please contact the lender directly if you have any issues relating to your loan repayment.",
  },
  {
    question: "Potential Impact on Credit Score",
    answer:
      "RobotLoans is not a lender and we do not check your credit standing and credit capacity. When you submit a request at our online platform, this is considered a soft inquiry and does not impact your credit score. However, some lenders may carry out a credit check to ascertain your eligibility for a loan. Most likely they will turn to any of the three major credit bureaus (Transunion, Experian, and Equifax) that is in most cases considered a hard inquiry and may affect your credit score.",
  },
  {
    question: "Collection Practices",
    answer:
      "RobotLoans is not a lender. As such, we are not involved in any debt collection practices and cannot make you aware of any of them. Your lender will specify their collection practices in your loan agreement. If you have any questions regarding the issue, please, address them to your lender. For more information visit our page for Responsible Lending. RobotLoans itself isn’t involved in debt collection.",
  },
  {
    question: "Loan Renewal Policies",
    answer:
      "Loan renewal options are not always available. It is therefore advisable to clarify whether the option is available with your lender. Be sure to carefully peruse the renewal policy presented in the agreement before you sign the documents.",
  },
];

export type RepaymentRow = {
  amount: number;
  apr: number;
  termMonths: number;
  prepaymentPenalty: string; 
  originationFees: string; 
  monthlyPayment: number;
  totalPayment: number;
};

export const repaymentRows: RepaymentRow[] = [
  { amount: 200, apr: 15, termMonths: 6, prepaymentPenalty: "NO", originationFees: "NO", monthlyPayment: 34.71, totalPayment: 208.28 },
  { amount: 1000, apr: 13, termMonths: 12, prepaymentPenalty: "NO", originationFees: "NO", monthlyPayment: 89.32, totalPayment: 1071.81 },
  { amount: 2000, apr: 11.5, termMonths: 24, prepaymentPenalty: "NO", originationFees: "NO", monthlyPayment: 93.68, totalPayment: 2248.34 },
  { amount: 3000, apr: 10.5, termMonths: 36, prepaymentPenalty: "NO", originationFees: "NO", monthlyPayment: 97.51, totalPayment: 3510.26 },
  { amount: 5000, apr: 10, termMonths: 48, prepaymentPenalty: "NO", originationFees: "NO", monthlyPayment: 126.81, totalPayment: 6087.02 },
];

export const footerConfig = {
  email: "contact@trustedonlineloans.com",
  links: [
    { href: "/", label: "Home" },
    { href: "/contact-us", label: "Contact us" },
    { href: "/terms-of-use", label: "Terms of Use" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/partners", label: "partners" },
    { href: "/rates-and-fees", label: "Rates and Fees" },
    { href: "/credit-authorization", label: "Credit Authorization" },
    { href: "/responsible-lending", label: "Responsible Lending" },
    { href: "/lending-goals", label: "Lending Goals" },
  ],
  disclaimer: `RobotLoans is not an offer or solicitation to lend. We do not make any loan or credit decisions and are not representatives, brokers or agents of any lender. Participating lenders offer loans from $200 up to $5,000. Not all lenders can offer you amounts up to $5,000. Our service is not available in all states. Submission of a request through this website does not guarantee that you will receive a loan offer or an offer you'll be satisfied with. Funds transfer time may vary depending on your lender and/or financial institution. Credit checks may be performed with the three reporting credit bureaus: Experian, Equifax, and TransUnion. Submission of a request means you are authorizing the lenders to check your creditworthiness and your personal details. This service is not a solicitation for loan products and does not constitute a loan offer for any loan products that are prohibited by state law. This service is void where prohibited.`,
};





