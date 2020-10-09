import React from "react";

import "./styles.scss";

import ContentWidthLimiter from "../../../components/ContentWidthLimiter";
import Button from "../../../components/Button";
import Title from "../Title";

import kitch1 from "../../../assets/images/kitchen/kitch1.png";
import kitch2 from "../../../assets/images/kitchen/kitch2.png";

export default function KitchenSection() {
  return (
    <section className="kitchen">
      <ContentWidthLimiter>
        <div className="kitchen__content-container">
          <div className="kitchen__content-container--images">
            <div className="kitchen__content-container--images-left">
              <img src={kitch1} />
            </div>
            <div className="kitchen__content-container--images-right">
              <img src={kitch2} />
            </div>
          </div>

          <div className="kitchen__content-container--info">
            <Title title="Kitcen model" />
            <div className="kitchen__content-container--info-text">
              <p>
                What ideas do you have for your custom kitchen renovation?
                Sometimes, it is possible that you may not have a design in mind
                for your custom kitchen remodel. All you know is that you want a
                new kitchen space but there is no exact picture in your mind.
                The creativity of our kitchen designers can help you remodel
                your kitchen
                <br /> <br /> Whether you want a small kitchen remodel idea or a
                grand renovation, we have numerous complete kitchen remodel
                ideas that you can check in our portfolio.
                <br /> <br />
                How do you want your kitchen to feel after a custom renovation
                job? Do you want a homely traditional feel to the heart of your
                home? Perhaps you want a custom kitchen that will look right at
                home on the center page of a magazine. We have multiple kitchen
                remodel ideas that you can check for inspiration.
                <br /> <br />
                Our kitchen remodel designs cut across the board. We offer
                industrial, modern, Scandinavian and mid-century designs.
              </p>
            </div>
            <Button name="Chek out our portfolio" />
          </div>
        </div>
      </ContentWidthLimiter>
    </section>
  );
}
