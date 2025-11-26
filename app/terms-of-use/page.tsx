// app/terms-of-use/page.tsx
import SiteHeader from "../../components/layout/SiteHeader";
import SiteFooter from "../../components/layout/SiteFooter";
import HeroSection from "../../components/sections/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | RobotLoans",
  description:
    "Read the Terms of Use for RobotLoans.com, including usage restrictions, services we render, intellectual property rights, and more.",
};

export default function TermsOfUsePage() {
  return (
<div className="site-root">
  <SiteHeader />
    <main className="site-main">
     <HeroSection />
      <h1 className="legal-page__title">Terms of Use</h1>

      <section className="legal-page__section">
        <h2 className="legal-page__subtitle">Our Terms and Conditions</h2>
        <p>
          This page contains important information concerning our terms and
          conditions of your usage of the connecting platform RobotLoans.com.
          We encourage you to read it carefully and revisit this section once
          in a while because we have the right to modify and update the present
          Terms as we see fit. We also recommend that you read other sections
          of our website, such as the Privacy Policy.
        </p>
        <p>
          Please bear in mind that as soon as you start using RobotLoans.com,
          you admit that you agree to our Terms and Privacy Policy and are ready
          to abide by them. If you disagree with these Terms of Use, do not
          access our website in the first place.
        </p>
      </section>

      <section className="legal-page__section">
        <h3 className="legal-page__heading">1. Usage Restrictions</h3>
        <p>
          Foreigners and minors cannot use our platform and we do not
          deliberately collect any data from them. To access our website, you
          must be at least 18 years, have a steady source of income and be a
          legal resident of the United States.
        </p>
      </section>

      <section className="legal-page__section">
        <h3 className="legal-page__heading">2. What Services We Render</h3>
        <p>
          The purpose of RobotLoans.com is to give you quick access to a
          network of trustworthy lenders. We are not lenders ourselves; we are
          a free-of-charge platform that allows you to submit a funding request
          and get connected with a financial provider. We do not lend money, we
          do not participate in your communication with a lender and we do not
          represent or promote services of any particular lender. You are under
          no obligation to use our website, submit your personal details or
          agree to a loan offer made by a third-party lender.
        </p>
        <p>
          All questions regarding your loan approval, agreement, fees, APR and
          other conditions should be addressed to your lender as we ourselves
          are not involved in the lending process. We will not be liable for
          any damages, costs or misunderstanding that may arise from the
          communication between you and your lender.
        </p>
        <p>
          When you sign up, you acknowledge that you know our Terms of Use. You
          are aware that you need to enter some of your personal information to
          get access to our network of lenders. You understand that we may
          share this information with them and that they, in their turn, may
          also use it. Our policy of data management is clearly expressed in
          the section for Privacy Policy. By using RobotLoans.com, you consent
          to our Privacy Policy. You also consent to use our website only for
          its direct purposes and in full accordance with our Terms and the US
          legislation.
        </p>
        <p>
          Note that some lenders may verify your personal information to see
          your eligibility. They may address national databases and credit
          reporting agencies with such requests. Some of these inquiries may
          affect your credit score.
        </p>
      </section>

      <section className="legal-page__section">
        <h3 className="legal-page__heading">
          3. Intellectual Property Rights
        </h3>
        <p>
          Our website, its logo, trademark, software, content and other
          materials are protected by the US copyright laws. By giving you
          access to our website we do not delegate our intellectual property
          rights to you. Any reproduction, sale, copy or other misuse of
          RobotLoans.com without our written permission is a violation of our
          rights.
        </p>
      </section>

      <section className="legal-page__section">
        <h3 className="legal-page__heading">4. Marketing Practices</h3>
        <p>
          The page for Marketing Practices explains our views on marketing and
          its principles. By accessing RobotLoans.com, you confirm that you
          agree to our practices and that we and our third party partners may
          reach out to you via contacts you specified.
        </p>
      </section>

      <section className="legal-page__section">
        <h3 className="legal-page__heading">5. Links Provided by Third Parties</h3>
        <p>
          When browsing our website, you may come upon links to third parties&apos;
          websites. All these links are given to you only as a reference. You
          click them on your own will. We do not manage those websites;
          therefore, we cannot be held accountable for their content, privacy
          policy, terms and practices as their management is beyond our
          responsibility and control.
        </p>
      </section>

      <section className="legal-page__section">
        <h3 className="legal-page__heading">6. Dealing with Third Parties</h3>
        <p>
          You communicate and make deals with third parties at your own
          volition and risk, and we won&apos;t be liable for these dealings and
          their outcomes.
        </p>
      </section>

      <section className="legal-page__section">
        <h3 className="legal-page__heading">7. E-Consent</h3>
        <p>
          E-Consent is an electronic signature of yours. By clicking links like
          &quot;Submit&quot;, &quot;I Agree&quot;, &quot;E-Sign&quot;,
          &quot;Consent&quot;, etc. you give your electronic signature. You
          also consent that you are able to communicate with us and third
          parties electronically.
        </p>
      </section>

      <section className="legal-page__section">
        <h3 className="legal-page__heading">
          8. Disputes Solving and Class Action Waiver
        </h3>
        <p>
          All disputes that may arise between you and RobotLoans.com shall be
          resolved through arbitration only. By accessing RobotLoans.com you
          admit that you agree to solve any dispute through arbitration. You
          also agree that you waive your rights to represent yourself
          individually or through legal counsel in court.
        </p>
      </section>

      <section className="legal-page__section">
        <h3 className="legal-page__heading">9. Indemnification</h3>
        <p>
          If you choose to use RobotLoans.com, you confirm that you agree to
          indemnify RobotLoans.com and its parental company together with any
          subsidiaries and affiliates. You agree that we won&apos;t be
          responsible for any damages, costs and misunderstanding that may
          arise through your use of our website.
        </p>
      </section>

      <section className="legal-page__section">
        <h3 className="legal-page__heading">10. Violations</h3>
        <p>
          If you violate our Terms of Use, we reserve the right to terminate
          your account without notice and remove any content or materials you
          submitted to our website.
        </p>
      </section>

      <section className="legal-page__section">
        <h3 className="legal-page__heading">11. Severability</h3>
        <p>
          The provisions stated in the present Terms of Use won&apos;t cease to
          be in force even if we don&apos;t manage to fulfil one of their
          provisions. If one or several provisions of the Terms contradict the
          law, the remaining provisions will still be valid and the
          contradicting ones will be severed.
        </p>
      </section>

      <section className="legal-page__section">
        <h3 className="legal-page__heading">12. Modifications and Updates</h3>
        <p>
          We encourage you to read this information carefully and revisit this
          section once in a while as we have the right to modify and update the
          present Terms as we see fit without prior notice. If some changes or
          updates take place, we may notify you about them by email or through
          an announcement posted on our website.
        </p>
      </section>

      <section className="legal-page__section">
        <h3 className="legal-page__heading">13. How You Can Contact Us</h3>
        <p>
          If there is something you would like to discuss with us, please send
          us a message via our contact form.
        </p>
      </section>
    </main>
    <SiteFooter />
</div>
  );
}
