import CookieBanner from './components/layout/CookieBanner';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import LogoWallSection from './components/sections/LogoWallSection';
import ChargebacksSection from './components/sections/ChargebacksSection';
import AutomationSection from './components/sections/AutomationSection';
import PerformanceSection from './components/sections/PerformanceSection';
import IndustryLeadingSection from './components/sections/IndustryLeadingSection';
import BentoSection from './components/sections/BentoSection';
import GlobalScaleSection from './components/sections/GlobalScaleSection';
import AlertsSection from './components/sections/AlertsSection';
import InsightsSection from './components/sections/InsightsSection';
import IntegrationsMarqueeSection from './components/sections/IntegrationsMarqueeSection';
import DataSection from './components/sections/DataSection';
import CustomerSpotlightSection from './components/sections/CustomerSpotlightSection';
import BadgesSection from './components/sections/BadgesSection';
import SolutionRoleSection from './components/sections/SolutionRoleSection';
import CtaSection from './components/sections/CtaSection';
import { useSiteEffects } from './hooks/useSiteEffects';
import ExternalScripts from './components/layout/ExternalScripts';

export default function App() {
  useSiteEffects();

  return (
    <>
      <div className="global">
        <CookieBanner />
      </div>
      <Navbar />
      <main className="c-main">
        <HeroSection />
        <LogoWallSection />
        <ChargebacksSection />
        <AutomationSection />
        <PerformanceSection />
        <div className="sections-flex">
          <IndustryLeadingSection />
          <BentoSection />
        </div>
        <GlobalScaleSection />
        <div section-theme="light">
          <AlertsSection />
          <InsightsSection />
          <IntegrationsMarqueeSection />
        </div>
        <DataSection />
        <CustomerSpotlightSection />
        <BadgesSection />
        <SolutionRoleSection />
        <CtaSection />
      </main>
      <Footer />
      <ExternalScripts />
    </>
  );
}
