import React from 'react';

import './styles.scss';
import { designCardList } from '../../../../constants/landingPage';

export const DesignImages = props => {
  const { img } = props;

  return (
    <div className="design-images">
      {designCardList.map(({ img }) => {
        return <img className="design-images__item" src={img} alt="design" />;
      })}
    </div>
  );
};
