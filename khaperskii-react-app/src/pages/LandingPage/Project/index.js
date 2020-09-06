import React from 'react';

import ContentWidthLimiter from '../../../components/ContentWidthLimiter';
import Button from '../../../components/Button';

import './styles.scss';

export default function Project() {
  return (
    <section className="project">
      <ContentWidthLimiter fullWidth>
        <div className="project__content-container">
          <div className="project__title">
            Do you like <span>our work </span>
            so far? Let's talk about
            <span> your project!</span>
          </div>
          <Button name="Get in touch" />
        </div>
      </ContentWidthLimiter>
    </section>
  );
}
