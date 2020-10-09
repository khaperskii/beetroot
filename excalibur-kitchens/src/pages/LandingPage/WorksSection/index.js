import React from "react";

import "./styles.scss";

import ContentWidthLimiter from "../../../components/ContentWidthLimiter";
import Button from "../../../components/Button";
import Title from "../Title";

import { WorksSlider } from "./WorksSlider";

export default function WorksSection() {
  return (
    <section className="works" id="blog">
      <ContentWidthLimiter>
        <div className="works__content-container">
          <div className="works__content-container--info">
            <Title title="Our works" />
            <div className="works__content-container--info-text">
              <p>
                A custom kitchen renovation project should result in a new
                kitchen that fulfills every single one of your needs. It doesn’t
                matter what your kitchen remodel needs are. Here at Excalibur
                Kitchens, we can turn your personal kitchen into a space that
                truly feels like a sanctuary.
                <br /> <br />
                Alternatively, we can provide you with a state-of-the-art
                kitchen design that will boost the value of your real estate
                property. Our custom kitchen service is all-inclusive. From
                concept to completion, we offer technical expertise, creative
                input and skilled artistry that guarantees impressive results.
              </p>
            </div>
            <Button small name="See all works" />
          </div>

          <div className="works__content-container--slider">
            <div className="works__content-container--slider-overlay"></div>
            <WorksSlider />
          </div>
        </div>
      </ContentWidthLimiter>
    </section>
  );
}
