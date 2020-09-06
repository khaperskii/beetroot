import React from 'react';

import './styles.scss';

import { Header } from '..//Header';
import HomeSectionCard from './HomeSectionCard';

export default function HomeSection() {
  return (
    <section className="home" id="home">
      <div className="home__content-container">
        <Header />
        <HomeSectionCard />
      </div>
    </section>
  );
}
