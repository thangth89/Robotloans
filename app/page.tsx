// app/page.tsx
import SiteHeader from "../components/layout/SiteHeader";
import SiteFooter from "../components/layout/SiteFooter";

import HeroSection from "../components/sections/HeroSection";
import StatsSection from "../components/sections/StatsSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import MidCtaSection from "../components/sections/MidCtaSection";
import FaqSection from "../components/sections/FaqSection";
import RepaymentTableSection from "../components/sections/RepaymentTableSection";

export default function HomePage() {
  return (
    <div className="site-root">
      <SiteHeader />

      <main className="site-main">
        <HeroSection />
        <StatsSection />
        <HowItWorksSection />
        <MidCtaSection />
        <FaqSection />
        <RepaymentTableSection />
      </main>

      <SiteFooter />
    </div>
  );
}
