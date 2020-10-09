import React from "react";

import "./styles.scss";
import Button from "../Button";
import FieldLabel from "../FieldLabel";
import InputPhone from "../InputPhone";

export default function CallModal({ isOpen, onClick }) {
  return isOpen ? (
    <div className="modal__overlay" onClick={onClick}>
      <div className="modal__body">
        <div className="modal__body-container">
          <FieldLabel label="Your name">
            <InputPhone placeholder="" />
          </FieldLabel>
          <FieldLabel label="Your e-mail">
            <InputPhone placeholder="" />
          </FieldLabel>
          <FieldLabel label="Your phone">
            <InputPhone country="ua" placeholder="+380" />
          </FieldLabel>
          <Button small name="Call me" />
        </div>
      </div>
    </div>
  ) : null;
}
