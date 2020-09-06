import React from 'react';

import './styles.scss';
import { strategyCardList } from '../../../../constants/landingPage';

export const StrategyImages = props => {
  const { img } = props;

  return (
    <div className="strategy-images">
      {strategyCardList.map(({ img }) => {
        return <img className="branding-images__item" src={img} alt="brand" />;
      })}
    </div>
  );
};
