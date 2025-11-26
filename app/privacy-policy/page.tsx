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
            11.1.3
          </p>
          <p className="underline-title">
            Category of Information
          </p>
          <p>
            Protected classification characteristics under California or federal law
          </p>
          <p className="underline-title">
            Examples
          </p>          
          <p>
            Age, military status
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
            providers, data processing providers
          </p>
          <p>
            11.1.4
          </p>
          <p className="underline-title">
            Category of Information
          </p>
          <p>
            Commercial information
          </p>
          <p className="underline-title">
            Examples
          </p>          
          <p>
            Product or service provider sites you choose to navigate to
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
            systems and operations
          </p>
           <p className="underline-title">
            Who Do We Share With
          </p>           
          <p>
            Lenders, non-lenders or intermediary service providers, marketing
            partners, advertising partners, service providers, customer support
            providers, data processing providers
          </p>          
          <p>
            11.1.5
          </p>
          <p className="underline-title">
            Category of Information
          </p>
          <p>
            Biometric data
          </p>
          <p className="underline-title">
            Examples
          </p>          
          <p>
            Keystroke or other behavioral or biological characteristics
          </p>
           <p className="underline-title">
            Source of Information
          </p>           
          <p>
            N/A
          </p>
           <p className="underline-title">
            Purpose of Collection
          </p>            
          <p>
            N/A
          </p>
           <p className="underline-title">
            Who Do We Share With
          </p>           
          <p>
            N/A
          </p>          
          <p>
            11.1.6
          </p>
          <p className="underline-title">
            Category of Information
          </p>
          <p>
            Internet or similar network activity
          </p>
          <p className="underline-title">
            Examples
          </p>          
          <p>
            Browsing history, search history, information on a consumer’s interaction
            with a website, application, or advertisement
          </p>
           <p className="underline-title">
            Source of Information
          </p>           
          <p>
            Consumer, web browsers, marketing partners, and advertising partners
          </p>
           <p className="underline-title">
            Purpose of Collection
          </p>            
          <p>
            For us to perform services you requested or to offer products on behalf of
            our lenders, non-lenders or intermediary services providers and for us to
            market to you, analyze your use, conduct research, maintain security of our
            systems and operations
          </p>
           <p className="underline-title">
            Who Do We Share With
          </p>           
          <p>
            Marketing partners, advertising partners, web analytics providers,
            security/anti-fraud providers
          </p>
          <p>
            11.1.7
          </p>
          <p className="underline-title">
            Category of Information
          </p>
          <p>
            Geolocation data
          </p>
          <p className="underline-title">
            Examples
          </p>          
          <p>
            Physical location or movements
          </p>
           <p className="underline-title">
            Source of Information
          </p>           
          <p>
            Consumer, web browsers, marketing partners, and advertising partners
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
            Marketing partners, advertising partners, web analytics providers,
            security/anti-fraud providers
          </p>          
          <p>
            11.1.8
          </p>
          <p className="underline-title">
            Category of Information
          </p>
          <p>
            Sensory data
          </p>
          <p className="underline-title">
            Examples
          </p>          
          <p>
            Audio, electronic, visual, or similar information
          </p>
           <p className="underline-title">
            Source of Information
          </p>           
          <p>
            N/A
          </p>
           <p className="underline-title">
            Purpose of Collection
          </p>            
          <p>
            N/A
          </p>
           <p className="underline-title">
            Who Do We Share With
          </p>           
          <p>
            N/A
          </p>          
          <p>
            11.1.9
          </p>
          <p className="underline-title">
            Category of Information
          </p>
          <p>
            Professional or employment-related information
          </p>
          <p className="underline-title">
            Examples
          </p>          
          <p>
            Current employer, length of employment
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
            systems and operations
          </p>
           <p className="underline-title">
            Who Do We Share With
          </p>           
          <p>
            Lenders, non-lenders or intermediary service providers, marketing
            partners, advertising partners, service providers, customer support
            providers, data processing providers
          </p>          
          <p>
            11.1.10
          </p>
          <p className="underline-title">
            Category of Information
          </p>
          <p>
            Inferences drawn from other personal information
          </p>
          <p className="underline-title">
            Examples
          </p>          
          <p>
            Profile reflecting a person’s preferences, characteristics, trends, behavior, and abilities
          </p>
           <p className="underline-title">
            Source of Information
          </p>           
          <p>
            Third-party data providers, marketing partners, and advertising partners
          </p>
           <p className="underline-title">
            Purpose of Collection
          </p>            
          <p>
            For us to perform services you requested or to offer products on behalf of
            our lenders, non-lenders or intermediary services providers and for us to
            market to you, analyze your use, conduct research, maintain security of our
            systems and operations
          </p>
           <p className="underline-title">
            Who Do We Share With
          </p>           
          <p>
            Data processing providers, web analytics providers, and security/anti-fraud providers
          </p>          
          <p>
            11.2 Right to Know. As a California resident, you have the right to know (i) the
            categories of personal information we collected about you in the
            preceding 12 months; (ii) the sources from which the personal information
            was collected; (iii) the business or commercial purpose for which it
            collected or sold the personal information; and (iv) the categories of third
            parties with which the business shares personal information.
          </p>
          <p>
            Additional Privacy Rights. You also have the right (i) to request that we tell
            you what specific information we have about you; (ii) to request that we
            delete your information; (iii) to opt-out of having your information sold;
            and (iv) for us not to discrimination against you for exercising these privacy
            rights. Please note that you may only make a CCPA-related request twice
            within a 12-month period.
          </p>
          <p>
            Right to Non-Discrimination. We will not discriminate against you for
            exercising any of your CCPA rights. Unless otherwise permitted by the
            CCPA, we will not (i) deny you goods or services; or (ii) provide you a
            different level or quality of good or service.
          </p>
          <p>
            Alternative Format of CCPA Notice. If you have a disability that prevents or
            limits your ability to access this CCPA Notice, please email us at
            contact@trustedonlineloans.com. We will work with you to provide this
            notice in an alternative format.
          </p>
          <p>
            Authorized Agent. California residents can empower an “authorized agent”
            to submit requests on their behalf. We will require the authorized agent to
            have a written authorization confirming that authority.
          </p>
          <p>
            How to Submit Your Request for Specific Information. You can request access
            to specific information we have about you by sending an email with the
            Subject Line “CCPA Right to Know” to contact@trustedonlineloans.com or
            you can make your request for information here. In your request, please
            provide us with enough information to identify you, including (i) your full
            name; (ii) physical address; (iii) phone number; (iv) email address; (v) proof
            of your identity (e.g. driver’s license or passport); and (vi) a description of
            what right you want to exercise. Once your request is submitted, we will
            reach out to you within the timeframe required by law to verify your
            identity. After we verify your identity, we will send your information to you
            via an electronic format. Any personal information we collect from you to
            verify your identity in connection with your request will be used solely for
            the purposes of verification.
          </p>
          <p>
            How to Exercise Your Right to Delete Information. You can request the
            categories of information we have on file or deletion of information
            available on our request form available here. You may also submit this
            request by sending an email with the Subject Line “CCPA Right to Request
            or Delete Information” to contact@trustedonlineloans.com. In your
            request, please provide us with enough information to identify you,
            including (i) your full name; (ii) physical address; (iii) phone number; (iv)
            email address; (v) proof of your identity (e.g. driver’s license or passport);
            and (vi) a description of what right you want to exercise. Once your
            request is submitted, we will reach out to you within the timeframe
            required by law to verify your identity. After we verify your identity, we will
            send your information to you via an electronic format. Any personal
            information we collect from you to verify your identity in connection with
            your request will be used solely for the purposes of verification.
          </p>         
          <p>
            How to Exercise Your Right to Opt-Out of Sale of Your Information. Under the
            CCPA, if you are 16 years of age or older, you have the right to direct us not
            to sell your personal information at any time. You may submit your request
            through the URL provided below. You may also submit this request by
            sending an email with the Subject Line “CCPA Do Not Sell My Information”
            to contact@trustedonlineloans.com. In your request, please provide us
            with enough information to identify you, including (i) your full name; (ii)
            physical address; (iii) phone number; (iv) email address; (v) proof of your
            identity (e.g. driver’s license or passport); and (vi) a description of what
            right you want to exercise. Once your request is submitted, we will reach
            out to you within the timeframe required by law to verify your identity.
            After we verify your identity, we will send your information to you via an
            electronic format. Any personal information we collect from you to verify
            your identity in connection with your request will be used solely for the
            purposes of verification.   
          </p> 
          <p>
            DO NOT SELL MY PERSONAL INFORMATION
          </p> 
          <p>
            However, if you opt-out, please note that we will be unable to help you find
            a loan or other product or services that may be of interest to you through
            our Network Partners. In order to opt-in, please submit the completed
            form or resubmit your request, which lets us know that you want to sell
            your information to deliver the products and services you requested.
          </p> 
        </section>

        <section className="legal-section">
          <h2>12. California disclosures</h2>
          <p>
            California Law requires us to provide certain disclosures to users of this
            Website. Shine the Light Disclosure. Civil Code Section 1798.83 permits
            California residents that use this Website to request certain information
            regarding our disclosure of personal information to third parties for their
            direct marketing purposes. To make such a request, please contact us at
            contact@robotloans.com. Please note that this section does not
            prohibit disclosure made for non-marketing purposes. Do Not Track
            Disclosures. Business and Professions Code Section 22575(b) requires
            websites to disclose their practices with respect to the use of tracking
            technology made by third parties and whether this Website honors web
            browser do-not-track signals. No third parties are able to collect personally
            identifiable information you provide on this Website. At this time,
            trustedonlineloans.com does not respond to do-not-track browser settings
            or signals.
          </p>
        <section className="legal-section">
          <h2>13. How you can contact us</h2>
          <p>
            If there is something you would like to discuss with us, please, send us a message via our contact form.
          </p>
        </section>
      </div>
    </main>
     <SiteFooter />
</div>
  );
}
