import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Sections from './Sections';

const Layout = () => {
  return (
    <div className="bg-white text-gray-900 font-sans" id="top">
      <Header />
      <Hero />
      <Sections />
    </div>
  );
};

export default Layout;