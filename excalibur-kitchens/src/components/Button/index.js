import React, { useState } from "react";

import classnames from "classnames";
import CallModal from "../CallModal";

import "./styles.scss";

export default function Button(props) {
  const buttonClass = classnames({
    button: true,
    "button--small": props.small,
  });

  const [isModalOpen, openModal] = useState(false);

  const handleOpenModal = () => {
    openModal(true);
  };

  const handleCloseModal = () => {
    openModal(false);
  };

  return (
    <>
      <button className={buttonClass} onClick={handleOpenModal}>
        {props.name}
      </button>
      <CallModal isOpen={isModalOpen} onClick={handleCloseModal} />
    </>
  );
}
