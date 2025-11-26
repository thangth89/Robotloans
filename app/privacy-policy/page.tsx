// app/privacy-policy/page.tsx
import SiteHeader from "../../components/layout/SiteHeader";
import SiteFooter from "../../components/layout/SiteFooter";
import HeroSection from "../../components/sections/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | RobotLoans",
  description:
    "Privacy Policy for RobotLoans – how we collect, use, share and protect your personal information when you use our loan-matching platform.",
};

const BRAND_NAME = "RobotLoans";
const BRAND_DOMAIN = "robotloans.com";

export default function PrivacyPolicyPage() {
  return (
 <div className="site-root">
  <SiteHeader />
    <main className="site-main">
     <HeroSection />
      <div className="page-container legal-page__inner">
        <h1 className="legal-page__title">Privacy Policy</h1>

        <section className="legal-section">
          <h2>Your privacy is safe with us</h2>
          <p>
            <strong>We address your privacy with care.</strong> We understand the importance of
            personal data safety. And we are also well aware of the pressure the
            modern world puts upon management of this information. To make our
            privacy protection principles clear, we established this Privacy Policy. We
            encourage you to read this section before you start using RobotLoas
          </p>
          <p>
            Please note that by using our platform you confirm that you agree with
            our Privacy Policy.
          </p>
        </section>

        <section className="legal-section">
          <h2>1. What kind of information we collect</h2>
          <p>
            We gather the following information from you, personally identifiable
            information and non-personally identifiable information.
          </p>
          <p>
            <strong>Personally identifiable information</strong> is the sort of data that allows to
            recognize you as an individual. You provide us with it when you sign up
            and start submitting a request. This information may include but is not
            limited to: your full name, date of birth, place of residence, phone and
            mobile phone number, driver’s license, social security number, relevant
            employment details, income, banking account, credit history, military
            status.
          </p>
          <p>
             <strong>Non-personally identifiable information</strong> relates to the data that doesn’t
            reveal anything about your identity. This information is anonymous and
            may include but is not limited to: IP address, Internet provider, browser,
            language, time of browsing session, clicks, links you followed, etc. Such
            kind of data is collected through cookies, web beacons and pixel tags.
          </p>
          <p>
             <strong>Cookies</strong> are tiny pieces of data sent by a website you visited and stored at
            your computer.
          </p>
          <p>
            The terms of <strong>web beacons</strong> and <strong>pixel tags</strong> are associated with small
            transparent graphic images that allow to track behavior of website visitors.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Why we collect this information</h2>
          <p>
            Collecting personal details of users is necessary for business management,
            technical support improvement and marketing research. We also need
            your private data to process your application and get you connected with
            one of our lenders.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. How we share your personally identifiable information</h2>
          <p>
            By providing your personally identifiable information, you allow us to
            process your application and connect you with a lender. That also means
            that we have the right to share this information with a third party because
            a lender cannot approve your loan without knowing anything about you.
          </p>
          <p>
            Please note that lenders may verify your personal information by sending
            requests to national databases and credit reporting agencies. Such
            inquiries may affect your credit score.
          </p>
          <p>
            We may share some of your data with our affiliates, partners and other
            accredited third parties for the purposes of business management,
            security, advertising, marketing, consumer behavior research, consumer
            support improvement.
          </p>
          <p>
            We reserve the right to share your information with another company that
            has acquired our business, a part of it, or fused with us. In case such a
            situation takes place, it’s possible that we will inform you about these
            changes by email or with an announcement posted on our website.
          </p>
          <p>
            We may share your personally identifiable information if it is required by
            the law and is necessary to proceed with a legal process or to protect our
            rights.
          </p>   
        </section>

        <section className="legal-section">
          <h2>4. How we share your non-personally identifiable information</h2>
          <p>
            By collecting and sharing your non-personally identifiable information
            with third parties, we improve our technical service, analyze the behavior
            of our customers and gather web statistics important to management of
            our business. We may share it with other third parties for these purposes.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Links provided by third parties</h2>
          <p>
            When browsing our website, you may come upon links to third parties’
            websites. All these links are given to you only as a reference. You click
            them on your own will. We do not manage those websites; therefore, we
            cannot be held accountable for their content, privacy policy, terms and
            practices as their management is beyond our responsibility and control.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Marketing practices</h2>
          <p>
            By accessing our website, you acknowledge that you know about our
            marketing practices and agree with them. You have nothing against
            receiving advertisements, newsletters, marketing messages and other
            promotional materials from us.
          </p>
          <p>
            Our third-party partners may also send you their marketing messages
            using all the contacts you’ve provided us with.
          </p>
          <p>
            When you start using our website, you acknowledge that you are aware of
            our marketing practices and that you agree to receive such kind of
            messages from us and our third-party partners. In case you don’t want to
            receive marketing messages from us, we give you an option to opt-out.
            Nevertheless, if you want to opt-out from third parties’ messages, you
            should contact them directly with this request.
          </p>
          <p>
            Please note, that we are not responsible for marketing practices of third
            parties as we do not control them.
          </p>          
        </section>

        <section className="legal-section">
          <h2>7. How we protect your information</h2>
          <p>
            To keep your personal information safe, we use safeguards and advanced
            security systems that correspond to the US law requirements regarding
            this matter. Only authorized personnel can access your data. They may do
            so only for business purposes allowed by the current US legislation.
          </p>
          <p>
            Despite our best efforts, we cannot guarantee total safety of your data. This
            is impossible due to the fact that we are not able to control law violators.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Notice for foreigners</h2>
          <p>
            We render our services exclusively to employed residents of the United States. If you are a foreigner, don’t access our website.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Notice for minors</h2>
          <p>
            We render our services exclusively to people over 18 years old. If you are a
            minor, don’t access our website.
          </p>
          <p>
            As seen above, we do not deliberately collect data from children. If you are
            a parent or a legal guardian of a child that accessed our website, please,
            inform us about the incident using our contacts.
          </p>          
        </section>

        <section className="legal-section">
          <h2>10. Changes to this Privacy Policy</h2>
          <p>
            We reserve the right to revise, modify, update this Privacy Policy when we
            find appropriate to do so. We can revise, modify, update the Privacy Policy
            without notice. For this reason we encourage you to reread this section
            from time to time. If you keep accessing our website after we’ve changed
            the Privacy Policy, then it will mean that you agree with the changes.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. Your rights under the CCPA (California residents)</h2>
          <p>
            11.1 General Information. If you are a California Resident, you are entitled to
            additional rights over your personal information under the California
            Consumer Privacy Act of 2018 (CCPA) and certain other privacy and data
            protection laws. This section summaries the categories of information we
            collect about you, why the information is collected, who we share your
            information with, and for what reason that information is shared.
          </p>
          <ul>
            <li>
              The right to know what categories of personal information we
              collect, use, disclose and sell;
            </li>
            <li>
              The right to request access to specific pieces of personal
              information we hold about you;
            </li>
            <li>
              The right to request deletion of your personal information,
              subject to certain exceptions;
            </li>
            <li>
              The right to opt out of the “sale” or certain sharing of your
              personal information, if applicable;
            </li>
            <li>
              The right not to be discriminated against for exercising any of
              these rights.
            </li>
          </ul>
          <p>
            To exercise your CCPA rights, you may contact us using the
            information provided below. We will verify your identity and process
            your request in accordance with applicable law. You may also
            designate an authorized agent to submit requests on your behalf,
            provided the agent can show appropriate authorization.
          </p>
        </section>

        {/* 11.1.10 Inferences drawn from other personal information */}
        <section className="legal-section">
          <h2>11.1.10 Category of information</h2>
          <p>Inferences drawn from other personal information.</p>

          <h3>Examples</h3>
          <p>
            Profiles that reflect a person&apos;s preferences, characteristics,
            trends, behavior, and abilities.
          </p>

          <h3>Source of information</h3>
          <p>Third-party data providers, marketing partners, and advertisers.</p>

          <h3>Purpose of collection</h3>
          <p>
            To provide services you request, to offer products on behalf of our
            lenders, non-lenders or intermediary service providers and to
            market to you, analyze your use of our services, conduct research,
            maintain the security of our systems and operations, and comply with
            legal requirements.
          </p>

          <h3>Who do we share with</h3>
          <p>
            Data processing providers, web analytics providers, and
            security/anti-fraud providers.
          </p>
        </section>

        {/* 11.2 – Your CCPA rights */}
        <section className="legal-section">
          <h2>11.2 Your rights under the CCPA</h2>

          <h3>Right to know</h3>
          <p>
            As a California resident, you have the right to know (i) the
            categories of personal information we collected about you in the
            preceding 12 months; (ii) the sources of that information; (iii) the
            business or commercial purpose for collecting or selling it; and
            (iv) the categories of third parties with whom we share the
            information.
          </p>

          <h3>Additional privacy rights</h3>
          <p>
            You also have the right (i) to request that we tell you what
            specific information we have about you; (ii) to request that we
            delete your information; (iii) to opt-out of the sale of your
            information; and (iv) not to be discriminated against for
            exercising these privacy rights. You may only submit a CCPA-related
            request twice in any 12-month period.
          </p>

          <h3>Right to non-discrimination</h3>
          <p>
            We will not discriminate against you for exercising any of your CCPA
            rights. Unless allowed by the CCPA, we will not (i) deny you goods
            or services; or (ii) provide you a different level or quality of
            goods or services.
          </p>

          <h3>Alternative format of this notice</h3>
          <p>
            If you have a disability that limits your ability to access this
            CCPA notice, please email us at{" "}
            <a href="mailto:contact@robotloans.com">
              contact@robotloans.com
            </a>{" "}
            and we will work with you to provide this notice in an alternative
            format.
          </p>

          <h3>Authorized agent</h3>
          <p>
            California residents can appoint an &quot;authorized agent&quot; to
            submit CCPA requests on their behalf. We will require the agent to
            provide written authorization confirming that they are allowed to
            act for you.
          </p>

          <h3>How to exercise your right to delete information</h3>
          <p>
            You may request deletion of the information we have on file by
            using the request form available on this website or by emailing us
            with the subject line “CCPA Right to Request or Delete Information”
            at{" "}
            <a href="mailto:contact@robotloans.com">
              contact@robotloans.com
            </a>
            . Please provide your full name, physical address, phone number,
            email address, proof of identity (for example, driver&apos;s license
            or passport), and a description of the right you wish to exercise.
            We will contact you within the time period required by law to verify
            your identity. After verification, we will send your information in
            an electronic format. Any personal information collected from you
            for verification will be used only for that purpose.
          </p>

          <h3>How to exercise your right to opt-out of sale</h3>
          <p>
            If you are 16 years of age or older, you have the right to direct us
            not to sell your personal information at any time. You may submit an
            opt-out request through the URL provided on our website or by
            emailing us with the subject line “CCPA Do Not Sell My Information”
            at{" "}
            <a href="mailto:contact@robotloans.com">
              contact@robotloans.com
            </a>
            . Please include your full name, address, phone number, email
            address, proof of identity, and a description of the right you want
            to exercise. After we verify your identity, we will send you a
            confirmation in electronic form.
          </p>

          <h3>Do not sell my personal information</h3>
          <p>
            Please note that if you choose to opt-out, we may be unable to help
            you find a loan or other products or services that might be of
            interest to you through our network partners. To opt-in again, you
            can resubmit your request through our form, letting us know that you
            want us to use your information to deliver the products and services
            you request.
          </p>
        </section>

        {/* 12. California Disclosures */}
        <section className="legal-section">
          <h2>12. California disclosures</h2>
          <p>
            California law requires us to provide certain disclosures to users
            of this website. Under the “Shine the Light” law (Civil Code
            Section 1798.83), residents of California who use this website to
            request services may ask us for information about our disclosure of
            personal information to third parties for their direct marketing
            purposes. To make such a request, please contact us at{" "}
            <a href="mailto:contact@robotloans.com">
              contact@robotloans.com
            </a>
            . This section does not apply to disclosures made for non-marketing
            purposes.
          </p>
          <p>
            California&apos;s Business and Professions Code Section 22575(b)
            requires websites to disclose their practices regarding the use of
            tracking technology by third parties and whether the website honors
            web browser “do-not-track” signals. No third parties are able to
            collect personally identifiable information about you on this
            website for their own purposes. At this time, RobotLoans.com does
            not respond to do-not-track browser settings or signals.
          </p>
        </section>

        {/* 13. How you can contact us */}
        <section className="legal-section">
          <h2>13. How you can contact us</h2>
          <p>
            If there is something you would like to discuss with us, please send
            us a message using the contact details or the form provided on the{" "}
            <strong>Contact Us</strong> page of this website.
          </p>
        </section>

        <section className="legal-section legal-section--disclaimer">
          <p>
            <strong>Disclaimer:</strong> This Privacy Policy is provided for
            informational purposes only and does not constitute legal advice.
            You should consult your own legal counsel to ensure that your
            privacy practices meet all applicable requirements.
          </p>
        </section>
      </div>
    </main>
     <SiteFooter />
</div>
  );
}
