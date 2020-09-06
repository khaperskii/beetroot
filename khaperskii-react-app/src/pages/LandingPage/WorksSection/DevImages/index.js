import React from 'react';

import './styles.scss';
import { devCardList } from '../../../../constants/landingPage';

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
