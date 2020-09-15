import React, { useState } from 'react';

import ContentWidthLimiter from '../../../components/ContentWidthLimiter';
import { HamburgerButton } from './HamburgerButton';
import { LandingSidebar } from './LandingSidebar';
import { Navbar } from '../Navbar';

import { navbarList, sidebarList } from '../../../constants/landingPage';

import './styles.scss';

export const Header = () => {
  const [isSidebarShow, toggleSidebarShow] = useState(false);

  function toggleHandler() {
    toggleSidebarShow(!isSidebarShow);
  }

  return (
    <>
      <header className="header">
        <ContentWidthLimiter>
          <div className="header__content">
            <p>
              <a href="#">Startup</a>
            </p>

            <div className="header__nav-wrapper">
              <Navbar list={navbarList} />
              <HamburgerButton
                handleClick={toggleHandler}
                isOpen={isSidebarShow}
              />
            </div>
          </div>
        </ContentWidthLimiter>
      </header>

      <LandingSidebar isOpen={isSidebarShow} list={sidebarList} />
    </>
  );
};
