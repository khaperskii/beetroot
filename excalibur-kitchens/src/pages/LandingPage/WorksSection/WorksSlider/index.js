import React from "react";

import Slider from "react-slick";

import ReactIcon from "../../../../components/ReactIcon";
import {
  HiOutlineArrowNarrowDown,
  HiOutlineArrowNarrowUp,
} from "react-icons/hi";

import "./styles.scss";

const SampleNextArrow = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <ReactIcon size="xxxxl">
        <HiOutlineArrowNarrowDown />
      </ReactIcon>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <ReactIcon size="xxxxl">
        <HiOutlineArrowNarrowUp />
      </ReactIcon>
    </div>
  );
};

export class WorksSlider extends React.Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      centerPadding: "0",
      vertical: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 575,
          settings: {
            arrows: false,
          },
        },
      ],
    };
    return (
      <Slider className="works-slider" {...settings}>
        <div className="works-slider__slide"></div>
        <div className="works-slider__slide"></div>
        <div className="works-slider__slide"></div>
        <div className="works-slider__slide"></div>
        <div className="works-slider__slide"></div>
        <div className="works-slider__slide"></div>
        <div className="works-slider__slide"></div>
        <div className="works-slider__slide"></div>
      </Slider>
    );
  }
}
