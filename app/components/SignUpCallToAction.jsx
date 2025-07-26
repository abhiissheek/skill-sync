// app/components/SignUpCallToAction.jsx
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const SignUpCallToAction = ({ onSignUpClick }) => {
  return (
    <div id="signup" className="py-20 px-4 bg-white text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-black">Ready to Land Your Dream Job?</h2>
        <p className="mt-4 text-lg text-gray-700">
          Create a free account to get started with your first resume analysis.
        </p>
        <button
          onClick={onSignUpClick}
          className="mt-8 inline-flex items-center space-x-2 py-3 px-8 rounded-full font-semibold bg-gray-900 text-white shadow-lg hover:bg-gray-700 transition"
        >
          <span>Sign Up Now</span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SignUpCallToAction;