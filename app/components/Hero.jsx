import React from 'react';
import { FaArrowRight, FaDownload, FaUpload } from 'react-icons/fa';

const Hero = () => {
  return (
    <main className="flex flex-col items-center justify-center text-center px-4 py-20 max-w-4xl mx-auto">
      <div className="space-y-2 mb-8">
        <p className="text-gray-900">
          Hi! Welcome to SkillSync 👋
        </p>
      </div>

      <div className="space-y-4">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-4xl leading-tight text-black"
        >
          Instantly See How Your Resume <br /> Stacks Up.
        </h1>
        <p
          className="mt-6 text-lg text-gray-900 max-w-2xl mx-auto" // Added mx-auto here for explicit centering
        >
          Analyze your resume against any job description and get personalized tips to land your next interview.
        </p>
      </div>

      <div
        className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
      >
        <button
          className="flex items-center justify-center space-x-2 bg-gray-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105"
        >
          <span>Try It for Free</span>
          <FaArrowRight />
        </button>

        <button
          className="flex items-center justify-center space-x-2 border border-gray-900 text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all hover:scale-105"
        >
          <span>Upload your Resume</span>
          <FaUpload />
        </button>
      </div>
    </main>
  );
};

export default Hero;



