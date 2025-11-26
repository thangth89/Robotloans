import SiteHeader from "../../components/layout/SiteHeader";
import SiteFooter from "../../components/layout/SiteFooter";
import HeroSection from "../../components/sections/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Practices | RobotLoans",
  description:
    "Information about how RobotLoans and its partners communicate with you and what marketing practices we use.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function MarketingPracticesPage() {
  return (
   <div className="site-root">
  <SiteHeader />
    <main className="site-main">
     <HeroSection />
      <div className="page-container legal-page__inner">
        <h1 className="legal-page__title">Marketing Practices</h1>

        {/* Our approach to marketing */}
        <section className="legal-section">
          <h2>Our approach to marketing</h2>
          <p>
            Marketing practices are a vital part of business, allowing it to
            grow, promote its services, and stay in touch with the audience.
            They are carried out in several forms, such as the mailout of
            advertisements, newsletters, important notifications, news and other
            promotional materials.
          </p>
          <p>
            To deliver all these communications, we may use the following tools:
          </p>
          <ul>
            <li>Email messages;</li>
            <li>Letters sent by post;</li>
            <li>Phone and cell-phone calls;</li>
            <li>SMS texts;</li>
            <li>
              Messages in any other media you specified while signing up.
            </li>
          </ul>
          <p>
            Please note that we have the right to share some of your
            information with our third-party partners. As a result, our
            partners may also send you their promotional materials using all the
            contacts you&apos;ve provided us with.
          </p>
          <p>
            As soon as you start using <strong>RobotLoans</strong>, you
            acknowledge that you are aware of our marketing practices and that
            you agree to receive messages from us and our third-party partners.
          </p>
          <p>
            If you feel overwhelmed with correspondence, you can always use the
            option to <strong>unsubscribe</strong> from us.
          </p>
          <p>
            However, we need to state that we are not liable for the messages
            our partners may send you and that you need to reach out to them if
            you have any questions regarding their marketing practices. You will
            also have to contact them directly if you want to unsubscribe from
            their correspondence.
          </p>
        </section>

        {/* Our marketing partners */}
        <section className="legal-section">
          <h2>Our Marketing Partners</h2>
          <p>
            RobotLoans works with a wide network of marketing partners and
            service providers. These partners may help us deliver offers and
            information that may be relevant to you. The list below is provided
            for transparency and may change over time.
          </p>

          {/* 
            Gợi ý: bạn dán full danh sách đối tác của bạn vào đoạn <p> này
            (hoặc chuyển thành <ul><li>...</li></ul> nếu muốn).
            Mình để sẵn một ví dụ cấu trúc bên dưới:
          */}
          <p className="legal-partners-list">
            AlumAds, Solution BPO, XI Info Tech, JG Wentworth, Stop Go Networks,
            Dot818, Lead Network, Round Sky, Leap Theory, Tapcot, ITMEDIA,
            LeadsMarket, PingLogix, UpAds, Intimate Interactive, Teapot Media,
            and many other licensed marketing and lead-generation partners.
          </p>

          {/* Nếu bạn có danh sách rất dài, có thể dùng dạng danh sách: */}
          {/*
          <ul className="legal-partners-list">
            <li>AlumAds</li>
            <li>Solution BPO</li>
            <li>XI Info Tech</li>
            <li>JG Wentworth</li>
            ...
          </ul>
          */}
        </section>
      </div>
    </main>
  );
}
