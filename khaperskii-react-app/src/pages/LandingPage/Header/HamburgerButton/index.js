import React from 'react'

import classNames from 'classnames'

import './styles.scss'

export const HamburgerButton = props => {
  const { handleClick, isOpen, mirror } = props;

  const modifyButton = classNames({
    'hamburger-btn': true,
    'hamburger-btn--mirror-open': mirror && isOpen,
    'hamburger-btn--mirror': mirror,
    'hamburger-btn--open': isOpen,
  });

  return (
    <button className={modifyButton} onClick={handleClick}>
      <p />
      <p />
      <p />
    </button>
  );
};
