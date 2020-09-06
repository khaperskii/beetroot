import React from 'react';
import Slider from 'react-slick';

import { AboutSliderCard } from '..//AboutSliderCard';
import ReactIcon from '..//..//..//..//components/ReactIcon';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { sliderCardList } from '../../../../constants/landingPage';

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

export class AboutSlider extends React.Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      centerMode: true,
      centerPadding: '-18px',
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: true,
            centerMode: true,
            centerPadding: '40px',
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            infinite: true,
            centerMode: true,
            centerPadding: '60px',
          },
        },
        {
          breakpoint: 675,
          settings: {
            slidesToShow: 2,
            infinite: true,
            centerMode: true,
            centerPadding: '10px',
          },
        },
        {
          breakpoint: 525,
          settings: {
            slidesToShow: 1,
            infinite: true,
            centerMode: true,
            centerPadding: '35px',
          },
        },
      ],
    };
    return (
      <Slider className="about-slider" {...settings}>
        {sliderCardList.map(({ img, name, position }) => {
          return <AboutSliderCard img={img} name={name} position={position} />;
        })}
      </Slider>
    );
  }
}
