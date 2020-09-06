import React from 'react';

import ReactIcon from '..//..//..//..//components/ReactIcon';

import { FaAmilia } from 'react-icons/fa';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { FaHandsHelping } from 'react-icons/fa';

import './styles.scss';

export default function ServiceBlock() {
  return (
    <div className="serviceblock">
      <div className="serviceblock__item">
        <div className="serviceblock__item--icon">
          <ReactIcon size="xxxxl">
            <FaAmilia />
          </ReactIcon>
        </div>
        <div className="serviceblock__item--title">
          <p>Clean Typografy</p>
        </div>
        <div className="serviceblock__item--text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta impedit.
            Lorem ipsum.{' '}
          </p>
        </div>
      </div>

      <div className="serviceblock__item">
        <div className="serviceblock__item--icon">
          <ReactIcon size="xxxxl">
            <RiCodeSSlashLine />
          </ReactIcon>
        </div>
        <div className="serviceblock__item--title">
          <p>Rock Solid Code</p>
        </div>
        <div className="serviceblock__item--text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta impedit.
            Lorem ipsum.{' '}
          </p>
        </div>
      </div>

      <div className="serviceblock__item">
        <div className="serviceblock__item--icon">
          <ReactIcon size="xxxxl">
            <FaHandsHelping />
          </ReactIcon>
        </div>
        <div className="serviceblock__item--title">
          <p>Expert Support</p>
        </div>
        <div className="serviceblock__item--text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta impedit.
            Lorem ipsum.{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
