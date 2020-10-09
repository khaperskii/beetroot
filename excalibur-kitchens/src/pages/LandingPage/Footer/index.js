import React from "react";

import ReactIcon from "../../../components/ReactIcon";

import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

import ContentWidthLimiter from "../../../components/ContentWidthLimiter";
import logo from "../../../assets/images/logo.png";
import Navbar from "../Navbar";

import { navbarList } from "../../../constants/headerData";

import "./styles.scss";

export default function Footer() {
  return (
    <header className="footer">
      <ContentWidthLimiter>
        <div className="footer__content">
          <div className="footer__content-logo">
            <a href="#">
              <img src={logo} />
            </a>
          </div>
          <div className="footer__nav-wrapper">
            <Navbar list={navbarList} />
          </div>
          <div className="footer__content-socials">
            <div className="footer__content-socials--icons">
              <a href="https://www.youtube.com/" target="blank">
                <ReactIcon size="lg">
                  <FaYoutube />
                </ReactIcon>
              </a>
              <a href="https://www.facebook.com/" target="blank">
                <ReactIcon size="lg">
                  <FaFacebookF />
                </ReactIcon>
              </a>
              <a href="https://twitter.com/" target="blank">
                <ReactIcon size="lg">
                  <FaTwitter />
                </ReactIcon>
              </a>
            </div>
          </div>
        </div>
      </ContentWidthLimiter>
    </header>
  );
}
