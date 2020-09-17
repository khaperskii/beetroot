import React from 'react';

import ContentWidthLimiter from '../../../components/ContentWidthLimiter';
import Button from '../../../components/Button';

import './styles.scss';

export default function ProjectSection() {
  return (
    <section className="project">
      <div className="project__content-container">
        <ContentWidthLimiter>
          <div className="project__block">
            <div className="project__block-title">
              Do you like <span>our work </span>
              so far? Let's talk about
              <span> your project!</span>
            </div>
            <Button name="Get in touch" />
          </div>
        </ContentWidthLimiter>
      </div>
    </section>
  );
}
