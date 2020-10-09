import React from "react";

import classnames from "classnames";

import "./styles.scss";

export default function ContentWidthLimiter(props) {
  const contentLimiterClass = classnames({
    "content-limiter": true,
    "content-limiter--full-width": props.fullWidth,
  });

  return <div className={contentLimiterClass}>{props.children}</div>;
}
