import React from 'react';

import { devCardList } from '../../../../constants/landingPage';

import './styles.scss';

export const DevImages = props => {
  const { img } = props;
  return (
    <div className="dev-images">
      {devCardList.map(({ img }) => {
        return <img className="design-images__item" src={img} alt="dev" />;
      })}
    </div>
  );
};
