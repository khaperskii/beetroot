import React from "react";

import "./styles.scss";

export default function Title(props) {
  return (
    <div className="title-block">
      <div className="title-block__logo">
        <p />
        <p />
      </div>

      <div className="title-block__title">{props.title}</div>
    </div>
  );
}
