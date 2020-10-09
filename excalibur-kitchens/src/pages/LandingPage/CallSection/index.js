import React from "react";

import "./styles.scss";

import ContentWidthLimiter from "../../../components/ContentWidthLimiter";
import Button from "../../../components/Button";

export default function CallSection() {
  return (
    <>
      <section className="call">
        <ContentWidthLimiter fullWidth>
          <div className="call__content-container">
            <div className="call__content-container-overlay">
              <div className="call__content-container-overlay-block">
                <div className="overlay__title">Call us </div>
                <div className="overlay__title-sub">
                  Allow our experts to take a look at your kitchen today — free
                  of charge!{" "}
                </div>
                <div className="call__button">
                  <Button small name="Request a call" />
                </div>
              </div>
            </div>
          </div>
        </ContentWidthLimiter>
      </section>
    </>
  );
}
