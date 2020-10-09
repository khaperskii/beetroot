import React from "react";

import "./styles.scss";

import ContentWidthLimiter from "../../../components/ContentWidthLimiter";
import Button from "../../../components/Button";
import Title from "../Title";

import lamp from "../../../assets/images/who/lamp.png";
import table from "../../../assets/images/who/table.png";

export default function WhoSection() {
  return (
    <section className="who">
      <ContentWidthLimiter>
        <div className="who__content-container">
          <div className="who__content-container--info">
            <Title title="Who we are?" />
            <div className="who__content-container--info-text">
              <p>
                A custom kitchen renovation is all you need to revitalize your
                kitchen space. Most people will tell you that the kitchen is the
                heart of the home. However, they won’t tell you that after a few
                years, even the heart of the home can start to look tacky and
                outdated. In these cases, a kitchen remodel is the right course
                of action.
                <br /> <br /> Excalibur Kitchens is the number one provider of
                custom kitchen renovations in Toronto. We offer experience and
                one of a kind dedication to satisfying each and every one of our
                clients. We have multiple years of experience doing complete
                kitchen remodels. Depending on the design you want, we have the
                expertise and the creativity to bring your dream kitchen to
                life.
                <br /> <br /> What specific features do you want from your
                custom kitchen renovation? Do you have a specific countertop
                design in mind? Excalibur Kitchens is your one-stop for all of
                your custom kitchen remodel needs.
              </p>
            </div>
            <Button name="Get free consultation" />
          </div>

          <div className="who__content-container--images">
            <div className="who__content-container--images-top">
              <img src={lamp} />
            </div>
            <div className="who__content-container--images-bottom">
              <img src={table} />
            </div>
          </div>
        </div>
      </ContentWidthLimiter>
    </section>
  );
}
