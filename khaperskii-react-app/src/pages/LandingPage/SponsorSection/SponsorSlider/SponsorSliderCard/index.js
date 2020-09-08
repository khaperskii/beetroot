import React from 'react';

import { sponsorList } from '../../../../../constants/landingPage';

import './styles.scss';

export default function SponsorSliderCard(props) {
  return (
    <div className="sponsor-slider-card">
      <div className="sponsor-slider-card__brands">
        {sponsorList.map(({ img }) => {
          return (
            <div className="sponsor-slider-card__brands--wrapper">
              {' '}
              <img src={img} alt="sponsors" />
            </div>
          );
        })}
      </div>
      <div className="sponsor-slider-card__text">
        <p>{props.info} </p>
        <p>{props.autor} </p>{' '}
      </div>
    </div>
  );
}
