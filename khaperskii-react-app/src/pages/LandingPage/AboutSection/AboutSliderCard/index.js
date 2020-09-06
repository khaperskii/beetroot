import React from 'react';

import './styles.scss';

export const AboutSliderCard = props => {
  const { img, name, position } = props;

  return (
    <div className="about-slider-card">
      <img className="about-slider-card__img" src={img} alt={`${name}`} />

      <div className="about-slider-card__name">{name}</div>

      <div className="about-slider-card__position">{position}</div>
    </div>
  );
};
