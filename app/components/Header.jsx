import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm">
      <div className="py-6 px-8 flex justify-between items-center max-w-5xl mx-auto">
        <div className="py-2 px-4 rounded-full bg-white shadow-sm">
          <span className="text-xl font-bold text-gray-900">
            <span className="text-indigo-600">Skill</span>Sync
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium py-2 px-6 rounded-full bg-white shadow-sm border border-gray-200">
          <a href="#features" className="text-gray-900 hover:text-indigo-600 transition">Features</a>
          <a href="#pricing" className="text-gray-900 hover:text-indigo-600 transition">Pricing</a>
          <a href="#contact" className="text-gray-900 hover:text-indigo-600 transition">Contact</a>
          <a href="#signup" className="text-gray-900 hover:text-indigo-600 transition">Sign Up</a>
        </nav>

        <button className="py-2 px-6 border border-gray-900 rounded-full text-sm font-semibold text-gray-900 hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;