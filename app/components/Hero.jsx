// app/components/Hero.jsx
"use client";

import React, { useState } from 'react';
import { FaArrowRight, FaUpload } from 'react-icons/fa';

const Hero = ({ isLoggedIn, setIsLoggedIn }) => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [signupStep, setSignupStep] = useState(1);
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [showCongrats, setShowCongrats] = useState(false);

  const handleTryItNowClick = () => {
    setShowLoginForm(true);
    setShowCongrats(false);
  };

  const handleCloseLoginModal = () => {
    setShowLoginForm(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // In a real application, you'd send login credentials to your backend here
    // and only setIsLoggedIn(true) upon successful authentication.
    setIsLoggedIn(true); // Simulate successful login
    setShowLoginForm(false);
  };

  const handleOpenSignupForm = (e) => {
    e.preventDefault();
    setShowLoginForm(false);
    setShowSignupForm(true);
    setSignupStep(1);
    setShowCongrats(false);
  };

  const handleCloseSignupModal = () => {
    setShowSignupForm(false);
    setSignupStep(1);
    setSignupEmail('');
    setSignupPassword('');
  };

  const handleSignupNext = (e) => {
    e.preventDefault();
    if (signupEmail.trim() === '') {
      alert('Please enter your email.');
      return;
    }
    setSignupStep(2);
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    if (signupPassword.trim() === '') {
      alert('Please create a password.');
      return;
    }
    // In a real application, you'd send signup data to your backend here
    // and only setIsLoggedIn(true) upon successful account creation.
    setShowSignupForm(false);
    setShowCongrats(true); // Show congrats modal briefly
    setIsLoggedIn(true); // Simulate successful signup/login
    setSignupEmail('');
    setSignupPassword('');
    setSignupStep(1);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Update state via prop
    // In a real app, clear user session/token from local storage/cookies here.
  };

  return (
    <>
      {/* Hero Section Content (changes based on login status) */}
      <main className="flex flex-col items-center justify-center text-center px-4 py-20 max-w-4xl mx-auto">
        {!isLoggedIn ? (
          // --- Landing Page Content ---
          <>
            {/* Added pt-4 here to push the text down more */}
            <div className="space-y-2 mb-8 pt-4">
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
                className="mt-6 text-lg text-gray-900 max-w-2xl mx-auto"
              >
                Analyze your resume against any job description and get personalized tips to land your next interview.
              </p>
            </div>

            <div
              className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center"
            >
              <button
                onClick={handleTryItNowClick}
                className="flex items-center justify-center space-x-2 bg-gray-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105"
              >
                <span>Try It Now</span>
                <FaArrowRight />
              </button>
            </div>
          </>
        ) : (
          // --- After Login (Dashboard) Content - Now with similar styling ---
          <>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Your Skill-Sync Dashboard!
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mb-10">
              Get ready to optimize your resume and land your dream job.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="flex items-center justify-center space-x-2 bg-gray-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105"
              >
                <FaUpload />
                <span>Upload Resume & Job Description</span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center justify-center space-x-2 border border-gray-900 text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all hover:scale-105"
              >
                <span>Logout</span>
                <FaArrowRight />
              </button>
            </div>

            <div className="mt-12 text-gray-600 text-sm">
              <p>Your previous analyses will appear here soon...</p>
            </div>
          </>
        )}
      </main>

      {/* Congrats Pop-up Message (Modal - appears over any content) */}
      {showCongrats && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          {/* Video and overlay */}
          <video
            autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 hero-video-bg"
          >
            <source src="/videos/your-background-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gray-900 opacity-60 z-10"></div>

          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative z-20 text-center">
            <button
              onClick={() => setShowCongrats(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-black">Congratulations!</h2>
            <p className="text-lg text-gray-800">You're a step closer to your dream job!</p>
            <button
              onClick={() => setShowCongrats(false)}
              className="mt-6 py-2 px-4 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Login Pop-up Form (Modal - appears over any content) */}
      {showLoginForm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          {/* Video and overlay */}
          <video
            autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 hero-video-bg"
          >
            <source src="/videos/your-background-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gray-900 opacity-60 z-10"></div>

          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative z-20">
            <button
              onClick={handleCloseLoginModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center text-black">Login or Sign Up</h2>
            <form className="space-y-4" onSubmit={handleLoginSubmit}>
              <div>
                <label htmlFor="loginEmail" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="loginEmail"
                  name="loginEmail"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder:text-black"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="loginPassword" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="loginPassword"
                  name="loginPassword"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder:text-black"
                  placeholder="********"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Login
              </button>
              <p className="text-center text-sm text-gray-600 mt-4">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={handleOpenSignupForm}
                  className="font-medium text-gray-900 hover:text-gray-700 cursor-pointer"
                >
                  Sign Up
                </button>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Multi-step Signup Pop-up Form (Modal - appears over any content) */}
      {showSignupForm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          {/* Video and overlay */}
          <video
            autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 hero-video-bg"
          >
            <source src="/videos/your-background-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gray-900 opacity-60 z-10"></div>

          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative z-20">
            <button
              onClick={handleCloseSignupModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center text-black">Sign Up</h2>

            {signupStep === 1 && (
              <form className="space-y-4" onSubmit={handleSignupNext}>
                <div>
                  <label htmlFor="signupEmail" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="signupEmail"
                    name="signupEmail"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder:text-black"
                    placeholder="your-email@example.com"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  Next
                </button>
              </form>
            )}

            {signupStep === 2 && (
              <form className="space-y-4" onSubmit={handleCreateAccount}>
                <div>
                  <label htmlFor="signupPassword" className="block text-sm font-medium text-gray-700">Create your password</label>
                  <input
                    type="password"
                    id="signupPassword"
                    name="signupPassword"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder:text-black"
                    placeholder="********"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  Create Account
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Styles for the video animation - These styles are applied whenever a modal is open */}
      <style jsx>{`
        .hero-video-bg {
          filter: grayscale(80%);
          animation: zoomInOut 30s ease-in-out infinite alternate;
        }

        @keyframes zoomInOut {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.15);
          }
        }
      `}</style>
    </>
  );
};

export default Hero;