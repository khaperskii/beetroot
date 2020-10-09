import React from "react";

import "./styles.scss";

import ContentWidthLimiter from "../../../components/ContentWidthLimiter";
import Button from "../../../components/Button";
import Title from "../Title";

import { whyList } from "../../../constants/whyData";

export default function WhySection() {
  return (
    <section className="why">
      <ContentWidthLimiter fullWidth>
        <div className="why__content-container">
          <div className="why__content-container--info">
            <div className="why__content-container--info-block">
              <Title title="Why choose us?" />
              <div className="why__content-container--info-text">
                <p>
                  We are an experienced provider of custom kitchen renovation
                  services for different kinds of properties. Therefore, we have
                  hands-on experience from previous kitchen remodel projects to
                  offer a high-quality service.
                  <br /> <br /> When you choose to work with Excalibur Kitchens,
                  you can expect premium custom renovation that offers the
                  following.
                  <br /> <br /> Here at Excalibur Kitchens, our philosophy is to
                  deliver high-quality custom kitchen renovations at competitive
                  prices. Our services are designed to fit into your budget
                  while providing unique, durable looks and the highest quality
                  of building standards.
                  <br /> <br />
                  High-end custom finishes, beautiful kitchen designs and work
                  that will stand out. With Excalibur Kitchens, luxury is
                  affordable.
                </p>
              </div>
              <Button name="Get free consultation" />
            </div>
          </div>

          <div className="why__content-container--list">
            <div className="why__content-container--list-overlay">
              <div className="why__content-container--list-overlay-block">
                {whyList.map(({ number, text }) => {
                  return (
                    <div className="why__content-container--list-item">
                      <div className="why__content-container--list-item-number">
                        {number}
                      </div>
                      <div className="why__content-container--list-item-text">
                        {text}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </ContentWidthLimiter>
    </section>
  );
}
