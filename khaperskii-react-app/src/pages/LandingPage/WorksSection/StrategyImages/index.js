import React from 'react';

import { strategyCardList } from '../../../../constants/landingPage';

import './styles.scss';

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
