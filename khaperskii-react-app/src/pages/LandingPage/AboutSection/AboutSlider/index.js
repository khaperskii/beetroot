import React from "react"
import Slider from "react-slick"

import AboutSliderCard from '..//AboutSliderCard'
import ReactIcon from '..//..//..//..//components/ReactIcon'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

import img1 from '..//..//..//..//assets/images/img1.png'
import img2 from '..//..//..//..//assets/images/img2.png'
import img3 from '..//..//..//..//assets/images/img3.png'
import img4 from '..//..//..//..//assets/images/img4.png'

import './styles.scss'

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
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode:true,
      centerPadding:-20,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <Slider className='about-slider' {...settings}>
        <div className='about-slider__slide'>
            <AboutSliderCard
            image={<img src={img1}/>}
            name='Ml. Khalil Udin'
            position='Head of Ideas'
            />
        </div>
        <div>
            <AboutSliderCard 
            image={<img src={img2}/>}
            name='Rubel Miah'
            position='Lead WordPress Developer'
            />
        </div>
            <div>
            <AboutSliderCard 
            image={<img src={img3}/>}
            name='Shamim Mia'
            position='Sr. Web Developer'
            />
        </div>
        <div>
        <AboutSliderCard 
            image={<img src={img4}/>}
            name='John Doe'
            position='Front-end Developer'
            />
        </div>
        <div>
            <AboutSliderCard 
            image={<img src={img3}/>}
            name='Ml. Khalil Udin'
            position='Head of Ideas'
            />
        </div>
      </Slider>
    );
  }
}