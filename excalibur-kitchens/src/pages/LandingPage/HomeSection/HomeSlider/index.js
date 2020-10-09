import React from "react";

import Slider from "react-slick";

import "./styles.scss";

export class HomeSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      centerMode: true,
      centerPadding: "0",
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            dots: false,
          },
        },
      ],
    };
    return (
      <Slider className="home-slider" {...settings}>
        <div className="home-slider__slide"></div>
        <div className="home-slider__slide"></div>
        <div className="home-slider__slide"></div>
        <div className="home-slider__slide"></div>
        <div className="home-slider__slide"></div>
      </Slider>
    );
  }
}
