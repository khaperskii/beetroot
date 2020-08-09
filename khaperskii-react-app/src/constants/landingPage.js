import React from 'react';

import {
  FaHome,
  FaTools,
  FaColumns,
  FaToolbox,
  FaBlog,
  FaUserPlus,
  FaPhone,

} from 'react-icons/fa' ;


export const navbarList = [
  { name: 'Home', to: 'home' },
  { name: 'Services', to: 'services' },
  { name: 'About', to: 'about' },
  { name: 'Works', to: 'works' },
  { name: 'Blog', to: 'blog' },
  { name: 'Clients', to: 'clients' },
  { name: 'Contacts', to: 'contacts' },
  
];

export const sidebarList = [
  { name: 'Home', to: 'home', icon: () => <FaHome /> },
  { name: 'Services', to: 'services', icon: () => <FaTools /> },
  { name: 'About', to: 'about', icon: () => <FaColumns /> },
  { name: 'Works', to: 'works', icon: () => <FaToolbox /> },
  { name: 'Blog', to: 'blog' , icon: () => <FaBlog />},
  { name: 'Clients', to: 'clients', icon: () => <FaUserPlus /> },
  { name: 'Contacts', to: 'contacts', icon: () => <FaPhone /> },
];