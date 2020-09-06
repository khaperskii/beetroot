import React from 'react';

import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';

import work1 from '../assets/images/works/work1.png';
import work2 from '../assets/images/works/work2.png';
import work3 from '../assets/images/works/work3.png';
import work4 from '../assets/images/works/work4.png';
import work5 from '../assets/images/works/work5.png';
import work6 from '../assets/images/works/work6.png';
import work7 from '../assets/images/works/work7.png';
import work8 from '../assets/images/works/work8.png';
import work9 from '../assets/images/works/work9.png';

import spons1 from '../assets/images/sponsors/spons1.png';
import spons2 from '../assets/images/sponsors/spons2.png';
import spons3 from '../assets/images/sponsors/spons3.png';
import spons4 from '../assets/images/sponsors/spons4.png';
import spons5 from '../assets/images/sponsors/spons5.png';

import {
  FaHome,
  FaTools,
  FaColumns,
  FaToolbox,
  FaBlog,
  FaUserPlus,
  FaPhone,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';

export const navbarList = [
  { name: 'Home', to: 'home' },
  { name: 'Services', to: 'services' },
  { name: 'About', to: 'about' },
  { name: 'Works', to: 'works' },
  { name: 'Blog', to: 'blog' },
  { name: 'Sponsors', to: 'sponsors' },
  { name: 'Contacts', to: 'contacts' },
];

export const sidebarList = [
  { name: 'Home', to: 'home', icon: () => <FaHome /> },
  { name: 'Services', to: 'services', icon: () => <FaTools /> },
  { name: 'About', to: 'about', icon: () => <FaColumns /> },
  { name: 'Works', to: 'works', icon: () => <FaToolbox /> },
  { name: 'Blog', to: 'blog', icon: () => <FaBlog /> },
  { name: 'Sponsors', to: 'sponsors', icon: () => <FaUserPlus /> },
  { name: 'Contacts', to: 'contacts', icon: () => <FaPhone /> },
];

export const sliderCardList = [
  {
    img: img3,
    name: 'Rubel Miah',
    position: 'Lead WordPress Developer',
  },
  {
    img: img4,
    name: 'Ml. Khalil Udin',
    position: 'Sr. Web Developer',
  },
  {
    img: img3,
    name: 'John Doe',
    position: 'Front-end Developer',
  },
  {
    img: img1,
    name: 'Shamim Mia',
    position: 'Head of Ideas',
  },
  {
    img: img2,
    name: 'Ml. Khalil Udin',
    position: 'Sr. Web Developer',
  },
];

export const brandingCardList = [
  { img: work1 },
  { img: work2 },
  { img: work3 },
  { img: work4 },
  { img: work5 },
  { img: work6 },
  { img: work7 },
  { img: work8 },
  { img: work9 },
];

export const designCardList = [
  { img: work2 },
  { img: work5 },
  { img: work7 },
  { img: work8 },
  { img: work3 },
  { img: work9 },
  { img: work1 },
  { img: work4 },
  { img: work6 },
];

export const devCardList = [
  { img: work3 },
  { img: work6 },
  { img: work8 },
  { img: work7 },
  { img: work2 },
  { img: work1 },
  { img: work9 },
  { img: work4 },
  { img: work5 },
];

export const strategyCardList = [
  { img: work4 },
  { img: work7 },
  { img: work1 },
  { img: work6 },
  { img: work2 },
  { img: work8 },
  { img: work5 },
  { img: work9 },
  { img: work3 },
];

export const sponsorList = [
  { img: spons1 },
  { img: spons2 },
  { img: spons3 },
  { img: spons4 },
  { img: spons5 },
];

export const socialsList = [
  { to: 'https://twitter.com/', icon: () => <FaTwitter /> },
  { to: 'https://www.facebook.com/', icon: () => <FaFacebookF /> },
  { to: 'https://www.linkedin.com/', icon: () => <FaLinkedinIn /> },
  { to: 'https://web.telegram.org/', icon: () => <FaTelegramPlane /> },
];
