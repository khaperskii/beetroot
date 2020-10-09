import React from "react";

import Header from "./Header";
import HomeSection from "./HomeSection";
import WhoSection from "./WhoSection";
import KitchenSection from "./KitchenSection";
import WhySection from "./WhySection";
import ServicesSection from "./ServicesSection";
import Footer from "./Footer";
import CallSection from "./CallSection";
import ContactSection from "./ContactSection";
import WorksSection from "./WorksSection";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <HomeSection />
      <WhoSection />
      <KitchenSection />
      <WhySection />
      <ServicesSection />
      <CallSection />
      <WorksSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
