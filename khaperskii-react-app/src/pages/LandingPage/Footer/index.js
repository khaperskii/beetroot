import React from 'react';

import ContentWidtLimiter from '../../../components/ContentWidthLimiter';
import { socialsList } from '../../../constants/landingPage';

import './styles.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <ContentWidtLimiter>
        <div className="footer__content-container">
          <div className="footer__socials">
            {socialsList.map(({ to, icon }) => {
              return (
                <div className="footer__socials-item">
                  <a href={to} target="blank">
                    {icon()}
                  </a>
                </div>
              );
            })}
          </div>
          <div className="footer__line"> </div>
          <div className="footer__rights">
            {' '}
            &#169; 2015 startup, designed by shapedtheme{' '}
          </div>
        </div>
      </ContentWidtLimiter>
    </footer>
  );
}
