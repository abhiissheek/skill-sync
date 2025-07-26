// app/page.js
"use client";

import React, { useState } from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sections from "./components/Sections";
import SignUpCallToAction from "./components/SignUpCallToAction"; // Import the new component

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {/* Pass isLoggedIn and setIsLoggedIn to Header */}
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      {/* Pass isLoggedIn and setIsLoggedIn to Hero */}
      <Hero isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      {/* Sections component which includes Features, Pricing, Contact */}
      <Sections />

      {/* Conditionally render the SignUpCallToAction section */}
      {!isLoggedIn && (
        <SignUpCallToAction
        // Note: The "Sign Up Now" button in this component will not directly open Hero's modal
        // without additional setup (e.g., passing a function from HomePage to Header/SignUpCallToAction
        // that then controls Hero's modal state). The "Try It Now" button in Hero still works for login/signup.
        />
      )}
    </>
  );
}
