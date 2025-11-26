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
          <p>
            11.1.1
          </p>
          <p className="underline-title">
           Category of Information
          </p>
          <p>
            Identifiers
          </p>
          <p className="underline-title">
            Examples
          </p>
          <p>
            Name, internet protocol address, email address, or other similar identifiers
          </p>
          <p className="underline-title">
            Source of Information
          </p>
          <p>
            Consumer, third-party data providers, marketing partners, and advertising partners
          </p>
          <p className="underline-title">
            Purpose of Collection
          </p>
          <p>
            For us to provide services, market to you, analyze your use, conduct
            research, maintain security of our systems and operations, and to meet our
            legal compliance requirements
          </p>
          <p className="underline-title">
           Who Do We Share With
          </p>
           <p>
            Lenders, non-lenders or intermediary service providers, marketing
            partners, advertising partners, web analytics providers, service providers,
            vendors, customer support providers, data processing providers, law
            enforcement, government authorities, parties that legally compel us to
            share your information
          </p>  
          <p>
           11.1.2
          </p>
          <p className="underline-title">
           Category of Information
          </p>
          <p>
           Personal information categories listed in the California Customer Records statute
          </p>
          <p className="underline-title">
           Examples
          </p>
          <p>
            Name, signature, address, telephone number, driver’s license or state
            identification number, employment, social security number, bank account
            number
          </p>
          <p className="underline-title">
            Source of Information
          </p>
          <p>
            Consumer and third-party data providers
          </p>
          <p className="underline-title">
            Purpose of Collection
          </p>
          <p>
            For us to perform services you requested or to offer products on behalf of
            our lenders, non-lenders or intermediary services providers and for us to
            market to you, analyze your use, conduct research, maintain security of our
            systems and operations, and to meet our legal compliance requirements
          </p>
          <p className="underline-title">
            Who Do We Share With
          </p>
          <p>
            Lenders, non-lenders or intermediary service providers, marketing
            partners, advertising partners, service providers, customer support
            providers, data processing providers, law enforcement, government
            authorities, parties that legally compel us to share your information
          </p>
          <p>
            Who Do We Share With
          </p>
          <p>
            Who Do We Share With
          </p>
          <p>
            Who Do We Share With
          </p>
          <p>
            Who Do We Share With
          </p>
          <p>
            Who Do We Share With
          </p>
          <p>
            Who Do We Share With
          </p>
          <p>
            Who Do We Share With
          </p>
          <p>
            Who Do We Share With
          </p>
          <p>
            Who Do We Share With
          </p>
          <p>
            Who Do We Share With
          </p>
          <p>
            Who Do We Share With
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
