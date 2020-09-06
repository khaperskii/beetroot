import React from 'react';

import ContentWidthLimiter from '../../../components/ContentWidthLimiter';
import { SponsorSlider } from './SponsorSlider';

import './styles.scss';

export default function SponsorSection() {
  return (
    <section className="sponsors" id="sponsors">
      <ContentWidthLimiter>
        <div className="sponsors__content-container">
          <SponsorSlider />
        </div>
      </ContentWidthLimiter>
    </section>
  );
}
