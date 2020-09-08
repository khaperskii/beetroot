import React from 'react';

import { brandingCardList } from '../../../../constants/landingPage';

import './styles.scss';

export const BrandingImages = props => {
  const { img } = props;
  return (
    <div className="branding-images">
      {brandingCardList.map(({ img }) => {
        return <img className="branding-images__item" src={img} alt="brand" />;
      })}
    </div>
  );
};
