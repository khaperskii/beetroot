import React, { Fragment } from 'react';

import { Link } from 'react-scroll';
import classNames from 'classnames';
import types from 'prop-types';

import ReactIcon from '../../../../components/ReactIcon';

import './styles.scss';

export default function Sidebar({ isOpen, list, handleClick }) {
  const sidebarClass = classNames({
    sidebar: true,
    'sidebar--open': isOpen,
  });

  return (
    <aside className={sidebarClass}>
      {list.map(item => (
        <Fragment key={item.to}>
          <Link
            activeClass="sidebar__list-item--active"
            className="sidebar__list-item"
            to={item.to}
            isDynamic
            duration={500}
            smooth
            spy
            to={item.to}
            onClick={handleClick}
          >
            <p>{item.name}</p>
            <ReactIcon size="lg" color="red">
              {item.icon()}
            </ReactIcon>
          </Link>
        </Fragment>
      ))}
    </aside>
  );
}

Sidebar.propTypes = {
  isOpen: types.bool.isRequired,
  list: types.arrayOf(types.object).isRequired,
};
