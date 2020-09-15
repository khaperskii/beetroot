import React from 'react';

import { Header } from '../Header';
import HomeSectionCard from './HomeSectionCard';

import './styles.scss';

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
