import React from 'react';

import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import ServiceSection from './ServiceSection';
import WorksSection from './WorksSection';
import Project from './Project';
import BlogSection from './BlogSection';
import SponsorSection from './SponsorSection';
import Footer from './Footer';
import HomeButtonLink from '../../components/HomeButtonLink';

export default function LandingPage() {
  return (
    <div>
      <HomeButtonLink />
      <HomeSection />
      <ServiceSection />
      <AboutSection />
      <WorksSection />
      <Project />
      <BlogSection />
      <SponsorSection />
      <Footer />
    </div>
  );
}
