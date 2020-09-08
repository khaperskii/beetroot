import React from 'react';

import { FaChevronUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

import ReactIcon from '../ReactIcon';

import './styles.scss';

export default function HomeButtonLink() {
  return (
    <a
      className="home-link-button"
      href="#home"
      onClick={() => scroll.scrollToTop()}
    >
      <ReactIcon size="xl">
        <FaChevronUp />
      </ReactIcon>
    </a>
  );
}
