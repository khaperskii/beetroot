import React from 'react';
import Slider from 'react-slick';

import ReactIcon from '..//..//..//..//components/ReactIcon';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import SponsorSliderCard from './SponsorSliderCard';

import './styles.scss';

const SampleNextArrow = props => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <ReactIcon size="xxxl">
        <BsChevronRight />
      </ReactIcon>
    </div>
  );
};

const SamplePrevArrow = props => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <ReactIcon size="xxxl">
        <BsChevronLeft />
      </ReactIcon>
    </div>
  );
};

export class SponsorSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,

      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <Slider className="sponsor-slider" {...settings}>
        <SponsorSliderCard
          info="Hvaing placeat facere possimus,
           omnis voluptas assumenda est, omnis dolor repellendus.
          Temporibus autem quibusdam et aut officiis debitis aut rerum"
          autor="John Doe, Google Inc."
        />
        <SponsorSliderCard
          info="Hvaing placeat facere possimus,
           omnis voluptas assumenda est, omnis dolor repellendus.
          Temporibus autem quibusdam et aut officiis debitis aut rerum"
          autor="John Doe, Google Inc."
        />
        <SponsorSliderCard
          info="Hvaing placeat facere possimus,
           omnis voluptas assumenda est, omnis dolor repellendus.
          Temporibus autem quibusdam et aut officiis debitis aut rerum"
          autor="John Doe, Google Inc."
        />
      </Slider>
    );
  }
}
