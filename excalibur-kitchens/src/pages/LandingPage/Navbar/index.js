import React from "react";

import "./styles.scss";

import { Link } from "react-scroll";

export default function Navbar(props) {
  const { list } = props;

  return (
    <nav className="navbar">
      {list.map((item, index) => {
        return (
          <Link
            className="navbar__item"
            key={index}
            to={`${item.to}`}
            smooth={true}
            duration={1000}
            offset={-80}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
