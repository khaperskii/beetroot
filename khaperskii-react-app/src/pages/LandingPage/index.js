import React from 'react';

import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import ServiceSection from './ServiceSection';
import WorksSection from './WorksSection';
import ProjectSection from './ProjectSection';
import BlogSection from './BlogSection';
import SponsorSection from './SponsorSection';
import Footer from './Footer';
import { HomeButtonLink } from '../../components/HomeButtonLink';

import './styles.scss';

export default function LandingPage() {
  return (
    <div className="landing">
      <HomeSection />
      <ServiceSection />
      <AboutSection />
      <WorksSection />
      <ProjectSection />
      <BlogSection />
      <SponsorSection />
      <Footer />
      <HomeButtonLink className="landing__button-up" />
    </div>
  );
}
