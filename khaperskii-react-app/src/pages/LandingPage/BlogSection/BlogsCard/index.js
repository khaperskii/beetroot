import React from 'react';

import './styles.scss';

export default function BlogsCard(props) {
  return (
    <div className="blogs-card">
      <div className="blogs-card__img--wrapper">
        <img className="blogs-card__img" src={props.image} alt="blog-img" />
      </div>
      <div className="blogs-card__info">
        <div className="blogs-card__info-header">
          <div className="blogs-card__info-header--date">{props.date}</div>
          <div className="blogs-card__info-header-block">
            <div className="blogs-card__info-header-block--title">
              {props.title}
            </div>
            <div className="blogs-card__info-header-block--subtitle">
              {props.subtitle}
            </div>
          </div>
        </div>
        <div className="blogs-card__info-news">{props.news}</div>
        <p>Read more</p>
      </div>
    </div>
  );
}
