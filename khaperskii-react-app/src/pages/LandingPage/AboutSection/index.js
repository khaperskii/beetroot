import React from 'react';

import Title from '..//Title';
import AboutTextBlock from './AboutTextBlock';
import ContentWidthLimiter from '..//..//..//components/ContentWidthLimiter';

import './styles.scss';

import { AboutSlider } from './AboutSlider';

export default function AboutSection() {
  return (
    <section className="about" id="about">
      <ContentWidthLimiter>
        <div className="about__section-content">
          <Title
            title="About Us"
            subtitle="We offer ipsum dolor sit amet, 
                        consetetur sadipscing elitr amet"
          />
          <AboutTextBlock />
          <AboutSlider />
        </div>
      </ContentWidthLimiter>
    </section>
  );
}
