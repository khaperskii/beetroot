import React, { useState } from "react";

import ReactIcon from "../../../components/ReactIcon";

import { FaFacebookF, FaTwitter } from "react-icons/fa";

import ContentWidthLimiter from "../../../components/ContentWidthLimiter";
import { HamburgerButton } from "./HamburgerButton";
import Sidebar from "./Sidebar";
import logo from "../../../assets/images/logo.png";
import Navbar from "../Navbar";

import { navbarList, sidebarList } from "../../../constants/headerData";

import "./styles.scss";

export default function Header() {
  const [isSidebarShow, toggleSidebarShow] = useState(false);

  function toggleHandler() {
    toggleSidebarShow(!isSidebarShow);
  }

  return (
    <>
      <header className="header">
        <ContentWidthLimiter>
          <div className="header__content">
            <div className="header__content-logo">
              <a href="header" id="header">
                <img src={logo} />
              </a>
            </div>
            <div className="header__nav-wrapper">
              <Navbar list={navbarList} />
              <HamburgerButton
                handleClick={toggleHandler}
                isOpen={isSidebarShow}
              />
            </div>
            <div className="header__content-socials">
              <div className="header__content-socials--text">Follow us</div>
              <div className="header__content-socials--line"></div>
              <div className="header__content-socials--icons">
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
      <Sidebar
        isOpen={isSidebarShow}
        list={sidebarList}
        handleClick={toggleHandler}
      />
    </>
  );
}
