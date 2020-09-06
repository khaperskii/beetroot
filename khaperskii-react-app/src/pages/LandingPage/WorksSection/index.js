import React from 'react';

import ContentWidthLimiter from '..//..//..//components/ContentWidthLimiter';
import Title from '..//Title';
import { TabsPage } from './TabsPage';

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
          <TabsPage />
        </div>
      </ContentWidthLimiter>
    </section>
  );
}
