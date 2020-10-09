import React from "react";

import "./styles.scss";

import ContentWidthLimiter from "../../../components/ContentWidthLimiter";
import Title from "../Title";
import GoogleApiWrapper from "../../../components/GoogleApiWrapper";
import { MdPhoneInTalk, MdMail } from "react-icons/md";
import ReactIcon from "../../../components/ReactIcon";

export default function ContactSection() {
  return (
    <section className="contact" id="contacts">
      <ContentWidthLimiter fullWidth>
        <div className="contact__content-container">
          <div className="contact__content-container-map">
            <GoogleApiWrapper />
          </div>
          <div className="contact__content-container-contacts">
            <Title title="Contact" />
            <div className="contact__content-container-contacts-info">
              Sometimes, the best way to determine the best kitchen remodel
              design is to take a look at the kitchen space. As part of our
              detailed planning stage, we offer in-home consultations for custom
              kitchen renovation spaces.
            </div>
            <div className="contact__content-container-contacts-phone">
              <ReactIcon size="xl" color="brown">
                <MdPhoneInTalk />
              </ReactIcon>
              <div className="contacts__phone">+1 3456-3453-446</div>
            </div>

            <div className="contact__content-container-contacts-mail">
              <ReactIcon size="xl" color="brown">
                <MdMail />
              </ReactIcon>
              <div className="contacts__mail">test@gamil.com</div>
            </div>
          </div>
        </div>
      </ContentWidthLimiter>
    </section>
  );
}
