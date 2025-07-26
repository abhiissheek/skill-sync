// app/components/Header.jsx
"use client";

import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page has been scrolled down
      if (window.scrollY > 50) { // Adjust 50px as needed, this is the scroll threshold
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    // In a real app, you'd also clear user session/token from local storage/cookies here.
  };

  return (
    // Add position-fixed, top-0, w-full, z-50 for sticky behavior.
    // Conditionally apply backdrop-blur and bg-opacity classes based on scroll state.
    <header className={`
      fixed top-0 left-0 w-full z-50 py-4 px-4
      flex justify-between items-center
      transition-all duration-300 ease-in-out
      ${isScrolled ? 'bg-white/70 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'}
    `}>

      {/* Skill-Sync brand name - placed on the far left */}
      <div className="text-2xl font-bold text-gray-900">Skill-Sync</div>

      {/* Navigation links - will be positioned in the middle by justify-between */}
      <nav>
        <ul className="flex space-x-4 items-center">
          <li><a href="#features" className="text-gray-700 hover:text-gray-900">Features</a></li>
          <li><a href="#pricing" className="text-gray-700 hover:text-gray-900">Pricing</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a></li>
          {isLoggedIn ? (
            <li>
              <button
                onClick={handleLogoutClick}
                className="text-gray-700 hover:text-gray-900 font-semibold py-2 px-4 border rounded-full"
              >
                Sign Out
              </button>
            </li>
          ) : (
            <li>
              <button
                className="text-gray-700 hover:text-gray-900 font-semibold py-2 px-4 border rounded-full"
              >
                Sign In
              </button>
            </li>
          )}
        </ul>
      </nav>

      {/* Hamburger Menu Icon - placed on the far right by justify-between */}
      <button
        className="text-gray-700 text-2xl p-2 focus:outline-none"
        // This button would typically toggle the visibility of a mobile/responsive menu.
      >
        <FaBars />
      </button>

    </header>
  );
};

export default Header;