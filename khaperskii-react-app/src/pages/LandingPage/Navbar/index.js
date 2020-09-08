import React from 'react';

import { Link } from 'react-scroll';

import './styles.scss';

export const Navbar = props => {
  const { list } = props;

  return (
    <nav className="navbar">
      {list.map((item, index) => {
        return (
          <Link
            key={index}
            to={`${item.to}`}
            className="navbar__item"
            smooth={true}
            duration={1000}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};
