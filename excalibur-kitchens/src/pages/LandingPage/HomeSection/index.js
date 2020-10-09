import React from "react";

import ContentWidthLimiter from "../../../components/ContentWidthLimiter";
import { HomeSlider } from "./HomeSlider";
import Button from "../../../components/Button";

import "./styles.scss";

export default function HomeSection() {
  return (
    <section className="home">
      <ContentWidthLimiter fullWidth>
        <div className="home__content-container">
          <HomeSlider />
          <div className="home__content-container-overlay">
            <div className="home__overlay-content">
              <div className="home__content-container-overlay-title">
                Best Kitchen{" "}
              </div>
              <div className="home__content-container-overlay-sub">
                Here at Excalibur Kitchens, we guarantee excellence at every
                turn. From planning a design to material selection and
                execution, your custom kitchen is in the best possible hands.{" "}
              </div>
              <Button small name="Consultation" />
            </div>
          </div>
        </div>
      </ContentWidthLimiter>
    </section>
  );
}
