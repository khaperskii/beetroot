import React from "react";

import "./styles.scss";

import ContentWidthLimiter from "../../../components/ContentWidthLimiter";
import Button from "../../../components/Button";
import Title from "../Title";

import { servicesList } from "../../../constants/servicesData";

export default function ServicesSection() {
  return (
    <section className="services" id="services">
      <ContentWidthLimiter fullWidth>
        <div className="services__content-container">
          <div className="services__content-container--list">
            <div className="services__content-container--list-overlay">
              {servicesList.map(({ text }) => {
                return (
                  <div className="services__content-container--list-item">
                    <div className="services__content-container--list-item-text">
                      {text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="services__content-container--info">
            <div className="services__content-container--info-block">
              <Title title="Our services" />
              <div className="services__content-container--info-text">
                <p>
                  Whatever the design needs for your custom kitchen are, we have
                  the expertise and the creativity to bring it to life. Our
                  kitchen design experts will take the time to ask the right
                  question so that your custom kitchen will turn out the way you
                  imagined it.
                  <br /> <br /> Getting a complete kitchen remodel can be a
                  dream come true. Our job is to make sure that every feature,
                  appliance, design and colour is exactly the way you want it.
                  You can check through our extensive portfolio of previous
                  designs for kitchen remodel ideas.
                  <br /> <br /> Alternatively, you can sit down with our design
                  team and discuss your custom kitchen renovation ideas. Whether
                  you want a traditional or modern look, a softly lit or bright
                  kitchen space, our design team is made up of experts with the
                  skills to bring your vision to life.
                  <br /> <br />
                  As part of our complete kitchen remodel service, we offer the
                  following features.
                </p>
              </div>
              <Button name="Get free consultation" />
            </div>
          </div>
        </div>
      </ContentWidthLimiter>
    </section>
  );
}
