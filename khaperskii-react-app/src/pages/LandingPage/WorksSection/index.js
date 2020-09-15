import React from 'react';

import ContentWidthLimiter from '../../../components/ContentWidthLimiter';
import Title from '../Title';
import { WorksTabs } from './WorksTabs';

import './styles.scss';

export default function WorksSection() {
  return (
    <section className="works">
      <ContentWidthLimiter>
        <div className="works__content-container" id="works">
          <Title
            title="Latest Works"
            subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet"
          />
          <WorksTabs />
        </div>
      </ContentWidthLimiter>
    </section>
  );
}
