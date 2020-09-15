import React from 'react';

import { socialsList } from '../../../../constants/landingPage';

import './styles.scss';

export const AboutSliderCard = props => {
  const { img, name, position } = props;

  return (
    <div className="about-slider-card">
      <div className="about-slider-card__img--wrapper">
        <img className="about-slider-card__img" src={img} alt={`${name}`} />
        <div className="about-slider-card__img--overlay">
          <div className="about-slider-card__img--overlay-socials">
            {socialsList.map(({ to, icon }) => {
              return (
                <div className="about-slider-card__img--overlay-socials-item">
                  <a href={to} target="blank">
                    {icon()}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="about-slider-card__name">{name}</div>

      <div className="about-slider-card__position">{position}</div>
    </div>
  );
};
