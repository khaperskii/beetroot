import React from 'react';

import Button from '../../../../components/Button';

import './styles.scss';

export default function HomeSectionCard() {
  return (
    <div className="homesectioncard">
      <h1>Welcome to startup</h1>
      <p>Your Favourite Creative Agency Template</p>
      <Button name="Get started" />
    </div>
  );
}
