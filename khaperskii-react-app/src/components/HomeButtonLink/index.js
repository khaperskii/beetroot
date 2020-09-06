import React from 'react';

import { FaChevronUp } from 'react-icons/fa';

import ReactIcon from '../ReactIcon';

import './styles.scss';

export default function HomeButtonLink() {
  return (
    <a className="home-link-button" href="#home">
      <ReactIcon size="xl">
        <FaChevronUp />
      </ReactIcon>
    </a>
  );
}
