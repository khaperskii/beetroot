import React from 'react';

import Title from '..//Title';
import ServiceBlock from './ServiceBlock';
import ContentWidthLimiter from '..//..//..//components/ContentWidthLimiter';

import './styles.scss';

export default function ServiceSection() {
  return (
    <section className="service">
      <ContentWidthLimiter>
        <div className="service__section-content" id="services">
          <Title
            title="Services"
            subtitle="We offer ipsum dolor sit amet, 
                    consetetur sadipscing elitr amet"
          />
          <ServiceBlock />
        </div>
      </ContentWidthLimiter>
    </section>
  );
}
