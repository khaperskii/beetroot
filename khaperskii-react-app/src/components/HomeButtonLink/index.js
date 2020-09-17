import React from 'react';

import classNames from 'classnames';
import { FaChevronUp } from 'react-icons/fa';
import types from 'prop-types';

import ReactIcon from '../ReactIcon';

import { useCurrentPosition } from '../../hooks/useCurrentPosition';

import './styles.scss';

export const HomeButtonLink = ({ visiblePosition, className }) => {
  const currentPosition = useCurrentPosition();

  const scrollTo = top =>
    window.scrollTo({
      behavior: 'smooth',
      top,
    });

  const buttonUpClass = classNames(
    'button-up',
    {
      'button-up--visible': currentPosition >= visiblePosition,
    },
    className
  );

  return (
    <div className={buttonUpClass} onClick={() => scrollTo(0)}>
      <ReactIcon size="xl">
        <FaChevronUp />
      </ReactIcon>
    </div>
  );
};

HomeButtonLink.propTypes = {
  visiblePosition: types.number,
  className: types.string,
};

HomeButtonLink.defaultProps = {
  visiblePosition: 300,
};
