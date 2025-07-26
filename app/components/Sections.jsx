// app/components/Sections.jsx
import React from 'react';
import { FaClipboardCheck, FaDollarSign, FaEnvelope, FaUpload } from 'react-icons/fa';

const Sections = () => {
  return (
    <>
      {/* Features Section */}
      <div id="features" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black">
            Powerful Features to Land Your Next Job
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Our tools analyze your resume and optimize it for any job description, so you can stand out from the crowd.
          </p>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="p-8 bg-gray-50 rounded-lg shadow-md">
              <FaClipboardCheck className="text-5xl text-indigo-600 mx-auto" />
              <h3 className="mt-6 text-xl font-bold text-gray-900">Resume Matching</h3>
              <p className="mt-2 text-gray-600">
                Instantly see how well your resume matches a job description with a clear percentage score.
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg shadow-md">
              <FaDollarSign className="text-5xl text-indigo-600 mx-auto" />
              <h3 className="mt-6 text-xl font-bold text-gray-900">Keyword Optimization</h3>
              <p className="mt-2 text-gray-600">
                We identify missing keywords and suggest improvements to pass automated screening systems.
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg shadow-md">
              <FaUpload className="text-5xl text-indigo-600 mx-auto" />
              <h3 className="mt-6 text-xl font-bold text-gray-900">Actionable Feedback</h3>
              <p className="mt-2 text-gray-600">
                Get personalized tips on how to improve your bullet points, phrasing, and overall resume strength.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Choose a plan that fits your job search needs, from a single analysis to unlimited optimizations.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-lg shadow-md border-t-4 border-indigo-500">
              <h3 className="text-xl font-bold text-gray-900">Starter</h3>
              <p className="mt-4 text-4xl font-extrabold text-black">₹0</p>
              <p className="text-sm text-gray-600">for a single use</p>
              <ul className="mt-6 text-left space-y-2 text-gray-700">
                <li>✓ 10 Resume Analysis per day</li>
                <li>✓  Advanced Keyword Suggestions</li>
                <li>✓ Limited Job Matches</li>
              </ul>
              <button className="mt-8 w-full py-3 px-6 rounded-full font-semibold border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
                Start Free
              </button>
            </div>
            {/* Pro Plan */}
            <div className="p-8 bg-gray-50 rounded-lg shadow-md border-t-4 border-indigo-500">
              <h3 className="text-xl font-bold text-gray-900">Pro</h3>
              <p className="mt-4 text-4xl font-extrabold text-black">₹149</p>
              <p className="text-sm text-gray-600">monthly</p>
              <ul className="mt-6 text-left space-y-2 text-gray-700">
                <li>✓ Unlimited Analysis</li>
                <li>✓ Advanced Keyword Suggestions</li>
                <li>✓ Unlimited Job Matches</li>
                <li>✓ Cover Letter Feedback</li>
              </ul>
              <button className="mt-8 w-full py-3 px-6 rounded-full font-semibold bg-gray-900 text-white shadow-lg hover:bg-gray-700 transition">
                Go Pro
              </button>
            </div>
            {/* Enterprise Plan */}
            <div className="p-8 bg-gray-50 rounded-lg shadow-md border-t-4 border-indigo-500">
              <h3 className="text-xl font-bold text-gray-900">Enterprise</h3>
              <p className="mt-4 text-4xl font-extrabold text-black">Custom</p>
              <p className="text-sm text-gray-600">for teams</p>
              <ul className="mt-6 text-left space-y-2 text-gray-700">
                <li>✓ Team Dashboards</li>
                <li>✓ API Access</li>
                <li>✓ Dedicated Support</li>
                <li>✓ Custom Features</li>
              </ul>
              <button className="mt-8 w-full py-3 px-6 rounded-full font-semibold border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-20 px-4 bg-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-black">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-700">
            Have a question or want to learn more? Send us a message and we'll get back to you.
          </p>
          <a href="mailto:contact@skillsync.com" className="mt-8 inline-flex items-center space-x-2 py-3 px-8 rounded-full font-semibold bg-gray-900 text-white shadow-lg hover:bg-gray-700 transition">
            <span>Contact Us</span>
            <FaEnvelope />
          </a>
        </div>
      </div>
    </>
  );
};

export default Sections;