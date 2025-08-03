




// // // // app/components/Hero.jsx
// // // "use client";

// // // import React, { useState, useRef, useEffect } from 'react'; // Added useRef and useEffect
// // // import { FaArrowRight, FaUpload } from 'react-icons/fa';

// // // const Hero = ({ isLoggedIn, setIsLoggedIn }) => {
// // //   const [showLoginForm, setShowLoginForm] = useState(false);
// // //   const [showSignupForm, setShowSignupForm] = useState(false);
// // //   const [signupStep, setSignupStep] = useState(1);
// // //   const [signupEmail, setSignupEmail] = useState('');
// // //   const [signupPassword, setSignupPassword] = useState('');
// // //   const [showCongrats, setShowCongrats] = useState(false);

// // //   // New states and ref for file upload functionality
// // //   const fileInputRef = useRef(null); // Ref for the hidden file input element
// // //   const [message, setMessage] = useState(''); // State for user messages (e.g., "Uploading...")
// // //   const [isLoading, setIsLoading] = useState(false); // State to manage loading indicator
// // //   const [hasMounted, setHasMounted] = useState(false); // State to track client-side mount for hydration

// // //   // useEffect to set hasMounted after component mounts on client
// // //   useEffect(() => {
// // //     setHasMounted(true);
// // //   }, []);

// // //   // Function to handle the file selection and upload process
// // //   const handleFileSelectionAndProcess = async (event) => {
// // //     const file = event.target.files[0]; // Get the selected file
// // //     if (!file) {
// // //       setMessage('No file selected.');
// // //       return;
// // //     }

// // //     setIsLoading(true); // Start loading state
// // //     setMessage(`Uploading and processing "${file.name}"...`); // Update message

// // //     const formData = new FormData();
// // //     formData.append('resume', file); // 'resume' is the field name your backend expects

// // //     try {
// // //       // Make the API call to your backend endpoint (e.g., /api/upload-resume)
// // //       const response = await fetch('/api/upload-resume', {
// // //         method: 'POST',
// // //         body: formData,
// // //       });

// // //       if (!response.ok) {
// // //         // If the server response is not OK (e.g., 4xx, 5xx status)
// // //         const errorData = await response.json();
// // //         throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
// // //       }

// // //       const data = await response.json(); // Parse the JSON response from backend
// // //       setMessage('Resume processed successfully! Ready for analysis.');
// // //       console.log('Extracted Text:', data.extractedText); // Log the extracted text

// // //       // Here you would typically use data.extractedText for your actual resume analysis
// // //       // e.g., trigger a function that compares it with a job description.

// // //     } catch (error) {
// // //       console.error('Error during file upload/processing:', error);
// // //       setMessage(`Error: ${error.message}. Please try again.`);
// // //     } finally {
// // //       setIsLoading(false); // End loading state
// // //       // Clear the file input's value so the same file can be selected again if needed
// // //       if (fileInputRef.current) {
// // //         fileInputRef.current.value = '';
// // //       }
// // //     }
// // //   };

// // //   // Function to programmatically click the hidden file input when the visible button is clicked
// // //   const handleUploadButtonClick = () => {
// // //     if (fileInputRef.current) {
// // //       fileInputRef.current.click();
// // //     }
// // //   };

// // //   const handleTryItNowClick = () => {
// // //     setShowLoginForm(true);
// // //     setShowCongrats(false);
// // //   };

// // //   const handleCloseLoginModal = () => {
// // //     setShowLoginForm(false);
// // //   };

// // //   const handleLoginSubmit = (e) => {
// // //     e.preventDefault();
// // //     // In a real application, you'd send login credentials to your backend here
// // //     // and only setIsLoggedIn(true) upon successful authentication.
// // //     setIsLoggedIn(true); // Simulate successful login
// // //     setShowLoginForm(false);
// // //   };

// // //   const handleOpenSignupForm = (e) => {
// // //     e.preventDefault();
// // //     setShowLoginForm(false);
// // //     setShowSignupForm(true);
// // //     setSignupStep(1);
// // //     setShowCongrats(false);
// // //   };

// // //   const handleCloseSignupModal = () => {
// // //     setShowSignupForm(false);
// // //     setSignupStep(1);
// // //     setSignupEmail('');
// // //     setSignupPassword('');
// // //   };

// // //   const handleSignupNext = (e) => {
// // //     e.preventDefault();
// // //     if (signupEmail.trim() === '') {
// // //       alert('Please enter your email.');
// // //       return;
// // //     }
// // //     setSignupStep(2);
// // //   };

// // //   const handleCreateAccount = (e) => {
// // //     e.preventDefault();
// // //     if (signupPassword.trim() === '') {
// // //       alert('Please create a password.');
// // //       return;
// // //     }
// // //     // In a real application, you'd send signup data to your backend here
// // //     // and only setIsLoggedIn(true) upon successful account creation.
// // //     setShowSignupForm(false);
// // //     setShowCongrats(true); // Show congrats modal briefly
// // //     setIsLoggedIn(true); // Simulate successful signup/login
// // //     setSignupEmail('');
// // //     setSignupPassword('');
// // //     setSignupStep(1);
// // //   };

// // //   const handleLogout = () => { // Using existing handleLogout for consistency
// // //     setIsLoggedIn(false); // Update state via prop
// // //     // In a real app, clear user session/token from local storage/cookies here.
// // //     if (typeof window !== 'undefined') {
// // //       localStorage.removeItem('userToken'); // Example
// // //     }
// // //   };

// // //   // Render a loading state during server-side rendering and initial client load
// // //   // to prevent hydration mismatches if content changes drastically based on client-side state.
// // //   if (!hasMounted) {
// // //     return (
// // //       <main className="flex flex-col items-center justify-center text-center px-4 py-20 max-w-4xl mx-auto min-h-screen">
// // //         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-4xl leading-tight text-black">
// // //           Loading Skill-Sync...
// // //         </h1>
// // //       </main>
// // //     );
// // //   }

// // //   return (
// // //     <>
// // //       {/* Hero Section Content (changes based on login status) */}
// // //       <main className="flex flex-col items-center justify-center text-center px-4 py-20 max-w-4xl mx-auto">
// // //         {!isLoggedIn ? (
// // //           // --- Landing Page Content ---
// // //           <>
// // //             <div className="space-y-2 mb-8 pt-4">
// // //               <p className="text-gray-900">
// // //                 Hi! Welcome to SkillSync 👋
// // //               </p>
// // //             </div>

// // //             <div className="space-y-4">
// // //               <h1
// // //                 className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-4xl leading-tight text-black"
// // //               >
// // //                 Instantly See How Your Resume <br /> Stacks Up.
// // //               </h1>
// // //               <p
// // //                 className="mt-6 text-lg text-gray-900 max-w-2xl mx-auto"
// // //               >
// // //                 Analyze your resume against any job description and get personalized tips to land your next interview.
// // //               </p>
// // //             </div>

// // //             <div
// // //               className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center"
// // //             >
// // //               <button
// // //                 onClick={handleTryItNowClick}
// // //                 className="flex items-center justify-center space-x-2 bg-gray-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105"
// // //               >
// // //                 <span>Try It Now</span>
// // //                 <FaArrowRight />
// // //               </button>
// // //             </div>
// // //           </>
// // //         ) : (
// // //           // --- After Login (Dashboard) Content ---
// // //           <>
// // //             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
// // //               Welcome to Your Skill-Sync Dashboard!
// // //             </h1>
// // //             <p className="text-lg text-gray-700 max-w-2xl mb-10">
// // //               Get ready to optimize your resume and land your dream job.
// // //             </p>

// // //             <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
// // //               {/* Hidden file input element */}
// // //               <input
// // //                 type="file"
// // //                 ref={fileInputRef} // Attach the ref
// // //                 onChange={handleFileSelectionAndProcess} // This function handles both selection and immediate processing
// // //                 accept=".pdf,.docx" // Specify accepted file types
// // //                 style={{ display: 'none' }} // Keep it hidden from the UI
// // //               />

// // //               {/* The main "Upload Resume & Job Description" button */}
// // //               <button
// // //                 onClick={handleUploadButtonClick} // Clicks the hidden file input
// // //                 disabled={isLoading} // Disable button while uploading/processing
// // //                 className="flex items-center justify-center space-x-2 bg-gray-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105"
// // //               >
// // //                 <FaUpload />
// // //                 <span>{isLoading ? 'Uploading...' : 'Upload Resume & Job Description'}</span>
// // //               </button>

// // //               <button
// // //                 onClick={handleLogout}
// // //                 className="flex items-center justify-center space-x-2 border border-gray-900 text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all hover:scale-105"
// // //               >
// // //                 <span>Logout</span>
// // //                 <FaArrowRight />
// // //               </button>
// // //             </div>

// // //             {/* Display messages to the user */}
// // //             {message && <p className="text-lg text-gray-600 mt-4">{message}</p>}

// // //             <div className="mt-12 text-gray-600 text-sm">
// // //               <p>Your previous analyses will appear here soon...</p>
// // //             </div>
// // //           </>
// // //         )}
// // //       </main>

// // //       {/* Congrats Pop-up Message (Modal) */}
// // //       {showCongrats && (
// // //         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
// // //           <video
// // //             autoPlay loop muted playsInline
// // //             className="absolute inset-0 w-full h-full object-cover z-0 hero-video-bg"
// // //           >
// // //             <source src="/videos/your-background-video.mp4" type="video/mp4" />
// // //             Your browser does not support the video tag.
// // //           </video>
// // //           <div className="absolute inset-0 bg-gray-900 opacity-60 z-10"></div>

// // //           <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative z-20 text-center">
// // //             <button
// // //               onClick={() => setShowCongrats(false)}
// // //               className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
// // //             >
// // //               &times;
// // //             </button>
// // //             <h2 className="text-2xl font-bold mb-4 text-black">Congratulations!</h2>
// // //             <p className="text-lg text-gray-800">You're a step closer to your dream job!</p>
// // //             <button
// // //               onClick={() => setShowCongrats(false)}
// // //               className="mt-6 py-2 px-4 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
// // //             >
// // //               Continue
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* Login Pop-up Form (Modal) */}
// // //       {showLoginForm && (
// // //         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
// // //           <video
// // //             autoPlay loop muted playsInline
// // //             className="absolute inset-0 w-full h-full object-cover z-0 hero-video-bg"
// // //           >
// // //             <source src="/videos/your-background-video.mp4" type="video/mp4" />
// // //             Your browser does not support the video tag.
// // //           </video>
// // //           <div className="absolute inset-0 bg-gray-900 opacity-60 z-10"></div>

// // //           <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative z-20">
// // //             <button
// // //               onClick={handleCloseLoginModal}
// // //               className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
// // //             >
// // //               &times;
// // //             </button>
// // //             <h2 className="text-2xl font-bold mb-6 text-center text-black">Login or Sign Up</h2>
// // //             <form className="space-y-4" onSubmit={handleLoginSubmit}>
// // //               <div>
// // //                 <label htmlFor="loginEmail" className="block text-sm font-medium text-gray-700">Email</label>
// // //                 <input
// // //                   type="email"
// // //                   id="loginEmail"
// // //                   name="loginEmail"
// // //                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder:text-black"
// // //                   placeholder="you@example.com"
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <label htmlFor="loginPassword" className="block text-sm font-medium text-gray-700">Password</label>
// // //                 <input
// // //                   type="password"
// // //                   id="loginPassword"
// // //                   name="loginPassword"
// // //                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder:text-black"
// // //                   placeholder="********"
// // //                 />
// // //               </div>
// // //               <button
// // //                 type="submit"
// // //                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
// // //               >
// // //                 Login
// // //               </button>
// // //               <p className="text-center text-sm text-gray-600 mt-4">
// // //                 Don't have an account?{' '}
// // //                 <button
// // //                   type="button"
// // //                   onClick={handleOpenSignupForm}
// // //                   className="font-medium text-gray-900 hover:text-gray-700 cursor-pointer"
// // //                 >
// // //                   Sign Up
// // //                 </button>
// // //               </p>
// // //             </form>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* Multi-step Signup Pop-up Form (Modal) */}
// // //       {showSignupForm && (
// // //         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
// // //           <video
// // //             autoPlay loop muted playsInline
// // //             className="absolute inset-0 w-full h-full object-cover z-0 hero-video-bg"
// // //           >
// // //             <source src="/videos/your-background-video.mp4" type="video/mp4" />
// // //             Your browser does not support the video tag.
// // //           </video>
// // //           <div className="absolute inset-0 bg-gray-900 opacity-60 z-10"></div>

// // //           <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative z-20">
// // //             <button
// // //               onClick={handleCloseSignupModal}
// // //               className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
// // //             >
// // //               &times;
// // //             </button>
// // //             <h2 className="text-2xl font-bold mb-6 text-center text-black">Sign Up</h2>

// // //             {signupStep === 1 && (
// // //               <form className="space-y-4" onSubmit={handleSignupNext}>
// // //                 <div>
// // //                   <label htmlFor="signupEmail" className="block text-sm font-medium text-gray-700">Email</label>
// // //                   <input
// // //                     type="email"
// // //                     id="signupEmail"
// // //                     name="signupEmail"
// // //                     value={signupEmail}
// // //                     onChange={(e) => setSignupEmail(e.target.value)}
// // //                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder:text-black"
// // //                     placeholder="your-email@example.com"
// // //                     required
// // //                   />
// // //                 </div>
// // //                 <button
// // //                   type="submit"
// // //                   className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
// // //                 >
// // //                   Next
// // //                 </button>
// // //               </form>
// // //             )}

// // //             {signupStep === 2 && (
// // //               <form className="space-y-4" onSubmit={handleCreateAccount}>
// // //                 <div>
// // //                   <label htmlFor="signupPassword" className="block text-sm font-medium text-gray-700">Create your password</label>
// // //                   <input
// // //                     type="password"
// // //                     id="signupPassword"
// // //                     name="signupPassword"
// // //                     value={signupPassword}
// // //                     onChange={(e) => setSignupPassword(e.target.value)}
// // //                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder:text-black"
// // //                     placeholder="********"
// // //                     required
// // //                   />
// // //                 </div>
// // //                 <button
// // //                   type="submit"
// // //                   className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
// // //                 >
// // //                   Create Account
// // //                 </button>
// // //               </form>
// // //             )}
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* Styles for the video animation - These styles are applied whenever a modal is open */}
// // //       <style jsx>{`
// // //         .hero-video-bg {
// // //           filter: grayscale(80%);
// // //           animation: zoomInOut 30s ease-in-out infinite alternate;
// // //         }

// // //         @keyframes zoomInOut {
// // //           0% {
// // //             transform: scale(1);
// // //           }
// // //           100% {
// // //             transform: scale(1.15);
// // //           }
// // //         }
// // //       `}</style>
// // //     </>
// // //   );
// // // };

// // // export default Hero;


// // app/components/Hero.jsx
// "use client";

// import React, { useState } from 'react';
// import ResumeUpload from './ResumeUpload'; // Assuming you have this component
// import JobList from './JobList'; // You will create this component in the next step

// const Hero = () => {
//   // State to manage the extracted resume text after a successful upload
//   const [resumeText, setResumeText] = useState(null);
  
//   // State to manage the job search loading state
//   const [isSearching, setIsSearching] = useState(false);
  
//   // State to store the jobs returned from the API
//   const [jobs, setJobs] = useState([]);
  
//   const handleFileProcessed = (data) => {
//     // This function is called by ResumeUpload.jsx when a file is processed
//     setResumeText(data.text);
//     console.log('Resume text received in Hero:', data.text.substring(0, 50) + '...');
//   };

//   const handleFindJobs = async () => {
//     if (!resumeText) return;

//     setIsSearching(true);
//     setJobs([]); // Clear previous jobs
    
//     try {
//       const response = await fetch('/api/find-jobs', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ resumeText: resumeText }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       setJobs(data.jobs); // Set the jobs from the dummy API response
      
//     } catch (error) {
//       console.error('❌ Error finding jobs:', error);
//       // You can add an error message state here if you want
//     } finally {
//       setIsSearching(false);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4 max-w-4xl">
//       <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
//         Welcome to Your Skill-Sync Dashboard!
//       </h1>
      
//       <p className="text-lg text-center text-gray-600 mb-8">
//         Get ready to optimize your resume and land your dream job.
//       </p>

//       {/* Conditionally render the ResumeUpload component or the Job search button */}
//       {!resumeText ? (
//         <ResumeUpload onFileProcessed={handleFileProcessed} />
//       ) : (
//         <div className="text-center">
//           <p className="text-xl font-semibold mb-4 text-green-700">✅ Resume uploaded successfully!</p>
//           <button
//             onClick={handleFindJobs}
//             disabled={isSearching}
//             className="w-full sm:w-auto py-3 px-8 rounded-lg font-semibold transition-colors
//               bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800
//               disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
//           >
//             {isSearching ? '🔄 Finding Jobs...' : 'Next: Find Relevant Jobs'}
//           </button>
//         </div>
//       )}

//       {/* Conditionally render the list of jobs */}
//       {isSearching && (
//         <div className="text-center mt-8 text-blue-600 font-semibold">
//           <p>Finding the perfect jobs for you...</p>
//         </div>
//       )}

//       {jobs.length > 0 && (
//         <div className="mt-8">
//           <h2 className="text-2xl font-bold mb-4 text-center">Relevant Jobs Found:</h2>
//           <JobList jobs={jobs} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Hero;





// "use client"

// import React, { useState, useRef, useEffect } from 'react';
// import { FaArrowRight, FaUpload } from 'react-icons/fa';
// import ResumeUpload from './ResumeUpload'; // Make sure this component exists
// import JobList from './JobList'; // Make sure this component exists

// const Hero = ({ isLoggedIn, setIsLoggedIn }) => {
//   // State for login/signup modals
//   const [showLoginForm, setShowLoginForm] = useState(false);
//   const [showSignupForm, setShowSignupForm] = useState(false);
//   const [signupStep, setSignupStep] = useState(1);
//   const [signupEmail, setSignupEmail] = useState('');
//   const [signupPassword, setSignupPassword] = useState('');
//   const [showCongrats, setShowCongrats] = useState(false);

//   // States for the dashboard functionality
//   const [resumeText, setResumeText] = useState(null);
//   const [isSearching, setIsSearching] = useState(false);
//   const [jobs, setJobs] = useState([]);
//   const [message, setMessage] = useState(''); // Unified message state
//   const [hasMounted, setHasMounted] = useState(false);

//   useEffect(() => {
//     setHasMounted(true);
//   }, []);

//   const handleTryItNowClick = () => {
//     setShowLoginForm(true);
//     setShowCongrats(false);
//   };

//   const handleCloseLoginModal = () => {
//     setShowLoginForm(false);
//   };

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     setIsLoggedIn(true);
//     setShowLoginForm(false);
//   };

//   const handleOpenSignupForm = (e) => {
//     e.preventDefault();
//     setShowLoginForm(false);
//     setShowSignupForm(true);
//     setSignupStep(1);
//     setShowCongrats(false);
//   };

//   const handleCloseSignupModal = () => {
//     setShowSignupForm(false);
//     setSignupStep(1);
//     setSignupEmail('');
//     setSignupPassword('');
//   };

//   const handleSignupNext = (e) => {
//     e.preventDefault();
//     if (signupEmail.trim() === '') {
//       alert('Please enter your email.');
//       return;
//     }
//     setSignupStep(2);
//   };

//   const handleCreateAccount = (e) => {
//     e.preventDefault();
//     if (signupPassword.trim() === '') {
//       alert('Please create a password.');
//       return;
//     }
//     setShowSignupForm(false);
//     setShowCongrats(true);
//     setIsLoggedIn(true);
//     setSignupEmail('');
//     setSignupPassword('');
//     setSignupStep(1);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setResumeText(null); // Clear resume text on logout
//     setJobs([]); // Clear jobs on logout
//   };
  
//   // This function receives the extracted text from the ResumeUpload component
//   const handleFileProcessed = (data) => {
//     // Correctly access the 'extractedText' property from the API response
//     setResumeText(data.extractedText);
    
//     // Use a safety check before trying to use substring
//     if (data.extractedText) {
//         console.log('Resume text received in Hero:', data.extractedText.substring(0, 100) + '...');
//     }
// };
//   const handleFindJobs = async () => {
//     if (!resumeText) {
//       setMessage('Please upload a resume first.');
//       return;
//     }

//     setIsSearching(true);
//     setJobs([]);
//     setMessage('🔄 Finding relevant jobs for you...');
    
//     try {
//       const response = await fetch('/api/find-jobs', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ resumeText }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       setJobs(data.jobs);
//       setMessage('✅ Job search complete!');
      
//     } catch (error) {
//       console.error('❌ Error finding jobs:', error);
//       setMessage(`❌ Error finding jobs: ${error.message}`);
//     } finally {
//       setIsSearching(false);
//     }
//   };

//   if (!hasMounted) {
//     return (
//       <main className="flex flex-col items-center justify-center text-center px-4 py-20 max-w-4xl mx-auto min-h-screen">
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-black">
//           Loading Skill-Sync...
//         </h1>
//       </main>
//     );
//   }

//   return (
//     <>
//       <main className="flex flex-col items-center justify-center text-center px-4 py-20 max-w-4xl mx-auto">
//         {!isLoggedIn ? (
//           // --- Landing Page Content ---
//           <>
//             <div className="space-y-2 mb-8 pt-4">
//               <p className="text-gray-900">
//                 Hi! Welcome to SkillSync 👋
//               </p>
//             </div>
//             <div className="space-y-4">
//               <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-4xl leading-tight text-black">
//                 Instantly See How Your Resume <br /> Stacks Up.
//               </h1>
//               <p className="mt-6 text-lg text-gray-900 max-w-2xl mx-auto">
//                 Analyze your resume against any job description and get personalized tips to land your next interview.
//               </p>
//             </div>
//             <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
//               <button
//                 onClick={handleTryItNowClick}
//                 className="flex items-center justify-center space-x-2 bg-gray-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105"
//               >
//                 <span>Try It Now</span>
//                 <FaArrowRight />
//               </button>
//             </div>
//           </>
//         ) : (
//           // --- Dashboard Content (after login) ---
//           <>
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//               Welcome to Your Dashboard!
//             </h1>
//             <p className="text-lg text-gray-700 max-w-2xl mb-10">
//               Get ready to optimize your resume and land your dream job.
//             </p>
            
//             {!resumeText ? (
//               <ResumeUpload onFileProcessed={handleFileProcessed} />
//             ) : (
//               <div className="flex flex-col items-center">
//                 <p className="text-xl font-semibold mb-4 text-green-700">{message}</p>
//                 <button
//                   onClick={handleFindJobs}
//                   disabled={isSearching}
//                   className="w-full sm:w-auto py-3 px-8 rounded-lg font-semibold transition-colors
//                     bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800
//                     disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
//                 >
//                   {isSearching ? '🔄 Finding Jobs...' : 'Next: Find Relevant Jobs'}
//                 </button>
//               </div>
//             )}
            
//             {jobs.length > 0 && (
//               <div className="mt-8 w-full">
//                 <h2 className="text-2xl font-bold mb-4 text-center">Relevant Jobs Found:</h2>
//                 <JobList jobs={jobs} />
//               </div>
//             )}
//           </>
//         )}
//       </main>

//       {/* Congrats Pop-up Message (Modal) */}
//       {showCongrats && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="absolute inset-0 bg-gray-900 opacity-60 z-10"></div>
//           <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative z-20 text-center">
//             <button
//               onClick={() => setShowCongrats(false)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
//             >
//               &times;
//             </button>
//             <h2 className="text-2xl font-bold mb-4 text-black">Congratulations!</h2>
//             <p className="text-lg text-gray-800">You're a step closer to your dream job!</p>
//             <button
//               onClick={() => setShowCongrats(false)}
//               className="mt-6 py-2 px-4 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
//             >
//               Continue
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Login Pop-up Form (Modal) */}
//       {showLoginForm && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="absolute inset-0 bg-gray-900 opacity-60 z-10"></div>
//           <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative z-20">
//             <button
//               onClick={handleCloseLoginModal}
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
//             >
//               &times;
//             </button>
//             <h2 className="text-2xl font-bold mb-6 text-center text-black">Login or Sign Up</h2>
//             <form className="space-y-4" onSubmit={handleLoginSubmit}>
//               <div>
//                 <label htmlFor="loginEmail" className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   id="loginEmail"
//                   name="loginEmail"
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder:text-black"
//                   placeholder="you@example.com"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="loginPassword" className="block text-sm font-medium text-gray-700">Password</label>
//                 <input
//                   type="password"
//                   id="loginPassword"
//                   name="loginPassword"
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder:text-black"
//                   placeholder="********"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
//               >
//                 Login
//               </button>
//               <p className="text-center text-sm text-gray-600 mt-4">
//                 Don't have an account?{' '}
//                 <button
//                   type="button"
//                   onClick={handleOpenSignupForm}
//                   className="font-medium text-gray-900 hover:text-gray-700 cursor-pointer"
//                 >
//                   Sign Up
//                 </button>
//               </p>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Multi-step Signup Pop-up Form (Modal) */}
//       {showSignupForm && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="absolute inset-0 bg-gray-900 opacity-60 z-10"></div>
//           <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative z-20">
//             <button
//               onClick={handleCloseSignupModal}
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
//             >
//               &times;
//             </button>
//             <h2 className="text-2xl font-bold mb-6 text-center text-black">Sign Up</h2>
//             {signupStep === 1 && (
//               <form className="space-y-4" onSubmit={handleSignupNext}>
//                 <div>
//                   <label htmlFor="signupEmail" className="block text-sm font-medium text-gray-700">Email</label>
//                   <input
//                     type="email"
//                     id="signupEmail"
//                     name="signupEmail"
//                     value={signupEmail}
//                     onChange={(e) => setSignupEmail(e.target.value)}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder:text-black"
//                     placeholder="your-email@example.com"
//                     required
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
//                 >
//                   Next
//                 </button>
//               </form>
//             )}
//             {signupStep === 2 && (
//               <form className="space-y-4" onSubmit={handleCreateAccount}>
//                 <div>
//                   <label htmlFor="signupPassword" className="block text-sm font-medium text-gray-700">Create your password</label>
//                   <input
//                     type="password"
//                     id="signupPassword"
//                     name="signupPassword"
//                     value={signupPassword}
//                     onChange={(e) => setSignupPassword(e.target.value)}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder:text-black"
//                     placeholder="********"
//                     required
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
//                 >
//                   Create Account
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Hero;







// app/components/Hero.jsx
// "use client";

// import React, { useState, useRef, useEffect } from 'react';
// import { FaArrowRight, FaUpload } from 'react-icons/fa';
// import ResumeUpload from './ResumeUpload'; // Make sure this component exists
// import JobList from './JobList'; // Make sure this component exists

// const Hero = ({ isLoggedIn, setIsLoggedIn }) => {
//   // State for login/signup modals
//   const [showLoginForm, setShowLoginForm] = useState(false);
//   const [showSignupForm, setShowSignupForm] = useState(false);
//   const [signupStep, setSignupStep] = useState(1);
//   const [signupEmail, setSignupEmail] = useState('');
//   const [signupPassword, setSignupPassword] = useState('');
//   const [showCongrats, setShowCongrats] = useState(false);

//   // States for the dashboard functionality
//   const [resumeText, setResumeText] = useState(null);
//   const [isSearching, setIsSearching] = useState(false);
//   const [jobs, setJobs] = useState([]);
//   const [message, setMessage] = useState(''); // Unified message state
//   const [hasMounted, setHasMounted] = useState(false);

//   useEffect(() => {
//     setHasMounted(true);
//   }, []);

//   const handleTryItNowClick = () => {
//     setShowLoginForm(true);
//     setShowCongrats(false);
//   };

//   const handleCloseLoginModal = () => {
//     setShowLoginForm(false);
//   };

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     setIsLoggedIn(true);
//     setShowLoginForm(false);
//   };

//   const handleOpenSignupForm = (e) => {
//     e.preventDefault();
//     setShowLoginForm(false);
//     setShowSignupForm(true);
//     setSignupStep(1);
//     setShowCongrats(false);
//   };

//   const handleCloseSignupModal = () => {
//     setShowSignupForm(false);
//     setSignupStep(1);
//     setSignupEmail('');
//     setSignupPassword('');
//   };

//   const handleSignupNext = (e) => {
//     e.preventDefault();
//     if (signupEmail.trim() === '') {
//       alert('Please enter your email.');
//       return;
//     }
//     setSignupStep(2);
//   };

//   const handleCreateAccount = (e) => {
//     e.preventDefault();
//     if (signupPassword.trim() === '') {
//       alert('Please create a password.');
//       return;
//     }
//     setShowSignupForm(false);
//     setShowCongrats(true);
//     setIsLoggedIn(true);
//     setSignupEmail('');
//     setSignupPassword('');
//     setSignupStep(1);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setResumeText(null); // Clear resume text on logout
//     setJobs([]); // Clear jobs on logout
//   };
  
//   const handleFileProcessed = (data) => {
//     setResumeText(data.extractedText);
//     if (data.extractedText) {
//       setMessage('✅ Resume uploaded successfully!');
//       console.log('Resume text received in Hero:', data.extractedText.substring(0, 100) + '...');
//     }
//   };
  
//   const handleFindJobs = async () => {
//     if (!resumeText) {
//       setMessage('Please upload a resume first.');
//       return;
//     }

//     setIsSearching(true);
//     setJobs([]);
//     setMessage('🔄 Finding relevant jobs for you...');
    
//     try {
//       const response = await fetch('/api/find-jobs', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ resumeText }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       setJobs(data.jobs);
//       setMessage('✅ Job search complete!');
      
//     } catch (error) {
//       console.error('❌ Error finding jobs:', error);
//       setMessage(`❌ Error finding jobs: ${error.message}`);
//     } finally {
//       setIsSearching(false);
//     }
//   };

//   if (!hasMounted) {
//     return (
//       <main className="flex flex-col items-center justify-center text-center px-4 py-20 max-w-4xl mx-auto min-h-screen">
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-black">
//           Loading Skill-Sync...
//         </h1>
//       </main>
//     );
//   }

//   return (
//     <>
//       <main className="flex flex-col items-center justify-center text-center px-4 py-20 max-w-4xl mx-auto">
//         {!isLoggedIn ? (
//           // --- Landing Page Content ---
//           <>
//             <div className="space-y-2 mb-8 pt-4">
//               <p className="text-gray-900">
//                 Hi! Welcome to SkillSync 👋
//               </p>
//             </div>
//             <div className="space-y-4">
//               <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-4xl leading-tight text-black">
//                 Instantly See How Your Resume <br /> Stacks Up.
//               </h1>
//               <p className="mt-6 text-lg text-gray-900 max-w-2xl mx-auto">
//                 Analyze your resume against any job description and get personalized tips to land your next interview.
//               </p>
//             </div>
//             <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
//               <button
//                 onClick={handleTryItNowClick}
//                 className="flex items-center justify-center space-x-2 bg-gray-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105"
//               >
//                 <span>Try It Now</span>
//                 <FaArrowRight />
//               </button>
//             </div>
//           </>
//         ) : (
//           // --- Dashboard Content (after login) ---
//           <>
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//               Welcome to Your Dashboard!
//             </h1>
//             <p className="text-lg text-gray-700 max-w-2xl mb-10">
//               Get ready to optimize your resume and land your dream job.
//             </p>
            
//             {!resumeText ? (
//               // Show the upload component if no resume is uploaded
//               <div className="flex flex-col items-center">
//                 <ResumeUpload onFileProcessed={handleFileProcessed} />
//                 <button
//                   onClick={handleLogout}
//                   className="mt-4 flex items-center justify-center space-x-2 border border-gray-900 text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all hover:scale-105"
//                 >
//                   <span>Logout</span>
//                   <FaArrowRight />
//                 </button>
//               </div>
//             ) : (
//               // Show the find jobs button if a resume is uploaded
//               <div className="flex flex-col items-center">
//                 <p className="text-xl font-semibold mb-4 text-green-700">{message}</p>
//                 <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//                     <button
//                         onClick={handleFindJobs}
//                         disabled={isSearching}
//                         className="w-full sm:w-auto py-3 px-8 rounded-lg font-semibold transition-colors
//                           bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800
//                           disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
//                     >
//                       {isSearching ? '🔄 Finding Jobs...' : 'Next: Find Relevant Jobs'}
//                     </button>
//                     <button
//                         onClick={handleLogout}
//                         className="w-full sm:w-auto flex items-center justify-center space-x-2 border border-gray-900 text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all hover:scale-105"
//                     >
//                       <span>Logout</span>
//                       <FaArrowRight />
//                     </button>
//                 </div>
//               </div>
//             )}
            
//             {jobs.length > 0 && (
//               <div className="mt-8 w-full">
//                 <h2 className="text-2xl font-bold mb-4 text-center">Relevant Jobs Found:</h2>
//                 <JobList jobs={jobs} />
//               </div>
//             )}
//           </>
//         )}
//       </main>

//       {/* Congrats Pop-up Message (Modal) */}
//       {showCongrats && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="absolute inset-0 bg-gray-900 opacity-60 z-10"></div>
//           <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative z-20 text-center">
//             <button
//               onClick={() => setShowCongrats(false)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
//             >
//               &times;
//             </button>
//             <h2 className="text-2xl font-bold mb-4 text-black">Congratulations!</h2>
//             <p className="text-lg text-gray-800">You're a step closer to your dream job!</p>
//             <button
//               onClick={() => setShowCongrats(false)}
//               className="mt-6 py-2 px-4 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
//             >
//               Continue
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Login Pop-up Form (Modal) */}
//       {showLoginForm && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="absolute inset-0 bg-gray-900 opacity-60 z-10"></div>
//           <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative z-20">
//             <button
//               onClick={handleCloseLoginModal}
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
//             >
//               &times;
//             </button>
//             <h2 className="text-2xl font-bold mb-6 text-center text-black">Login or Sign Up</h2>
//             <form className="space-y-4" onSubmit={handleLoginSubmit}>
//               <div>
//                 <label htmlFor="loginEmail" className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   id="loginEmail"
//                   name="loginEmail"
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder:text-black"
//                   placeholder="you@example.com"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="loginPassword" className="block text-sm font-medium text-gray-700">Password</label>
//                 <input
//                   type="password"
//                   id="loginPassword"
//                   name="loginPassword"
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder:text-black"
//                   placeholder="********"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
//               >
//                 Login
//               </button>
//               <p className="text-center text-sm text-gray-600 mt-4">
//                 Don't have an account?{' '}
//                 <button
//                   type="button"
//                   onClick={handleOpenSignupForm}
//                   className="font-medium text-gray-900 hover:text-gray-700 cursor-pointer"
//                 >
//                   Sign Up
//                 </button>
//               </p>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Multi-step Signup Pop-up Form (Modal) */}
//       {showSignupForm && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="absolute inset-0 bg-gray-900 opacity-60 z-10"></div>
//           <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative z-20">
//             <button
//               onClick={handleCloseSignupModal}
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
//             >
//               &times;
//             </button>
//             <h2 className="text-2xl font-bold mb-6 text-center text-black">Sign Up</h2>
//             {signupStep === 1 && (
//               <form className="space-y-4" onSubmit={handleSignupNext}>
//                 <div>
//                   <label htmlFor="signupEmail" className="block text-sm font-medium text-gray-700">Email</label>
//                   <input
//                     type="email"
//                     id="signupEmail"
//                     name="signupEmail"
//                     value={signupEmail}
//                     onChange={(e) => setSignupEmail(e.target.value)}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder:text-black"
//                     placeholder="your-email@example.com"
//                     required
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
//                 >
//                   Next
//                 </button>
//               </form>
//             )}
//             {signupStep === 2 && (
//               <form className="space-y-4" onSubmit={handleCreateAccount}>
//                 <div>
//                   <label htmlFor="signupPassword" className="block text-sm font-medium text-gray-700">Create your password</label>
//                   <input
//                     type="password"
//                     id="signupPassword"
//                     name="signupPassword"
//                     value={signupPassword}
//                     onChange={(e) => setSignupPassword(e.target.value)}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder:text-black"
//                     placeholder="********"
//                     required
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
//                 >
//                   Create Account
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Hero;


// app/components/Hero.jsx
// app/components/Hero.jsx
// app/components/Hero.jsx

// "use client";

// import React, { useState, useEffect } from 'react';
// import { FaArrowRight, FaUpload, FaSearch } from 'react-icons/fa';
// import mammoth from 'mammoth';

// const ResumeUpload = ({ onFileProcessed }) => {
//   const [file, setFile] = useState(null);
//   const [isProcessing, setIsProcessing] = useState(false);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
    
//     if (selectedFile) {
//       setIsProcessing(true);
      
//       const fileExtension = selectedFile.name.split('.').pop();
      
//       if (fileExtension === 'docx') {
//         const reader = new FileReader();
//         reader.onload = (event) => {
//           mammoth.extractRawText({ arrayBuffer: event.target.result })
//             .then((result) => {
//               onFileProcessed({
//                 extractedText: result.value,
//                 fileName: selectedFile.name
//               });
//               setIsProcessing(false);
//             })
//             .catch((error) => {
//               console.error('Error reading docx file:', error);
//               onFileProcessed({
//                 extractedText: null,
//                 fileName: selectedFile.name
//               });
//               setIsProcessing(false);
//             });
//         };
//         reader.readAsArrayBuffer(selectedFile);
//       } else if (fileExtension === 'txt') {
//         const reader = new FileReader();
//         reader.onload = (event) => {
//           const text = event.target.result;
//           onFileProcessed({
//             extractedText: text,
//             fileName: selectedFile.name
//           });
//           setIsProcessing(false);
//         };
//         reader.readAsText(selectedFile);
//       } else {
//         setIsProcessing(false);
//         console.error('Unsupported file type');
//       }
//     }
//   };

//   return (
//     <div className="w-full p-6 border-2 border-dashed border-gray-300 rounded-lg text-center">
//       <input
//         type="file"
//         accept=".docx,.txt"
//         onChange={handleFileChange}
//         className="hidden"
//         id="resume-upload"
//       />
//       <label
//         htmlFor="resume-upload"
//         className="cursor-pointer flex flex-col items-center space-y-2"
//       >
//         <FaUpload className="text-4xl text-gray-400" />
//         <span className="text-lg font-medium text-gray-700">
//           {isProcessing ? 'Processing...' : 'Upload your resume'}
//         </span>
//         <span className="text-sm text-gray-500">
//           DOCX or TXT files supported.
//         </span>
//       </label>
//       {file && (
//         <p className="mt-2 text-sm text-green-600">
//           Selected: {file.name}
//         </p>
//       )}
//     </div>
//   );
// };

// const JobList = ({ jobs }) => (
//   <div className="space-y-4">
//     {jobs.map((job, index) => (
//       <div key={index} className="p-4 border rounded-lg bg-white shadow">
//         <h3 className="font-bold text-lg">{job.title}</h3>
//         <p className="text-gray-600">{job.company}</p>
//         <p className="text-sm text-gray-500">{job.location}</p>
//       </div>
//     ))}
//   </div>
// );

// const Hero = ({ isLoggedIn = true, setIsLoggedIn }) => {
//   const [showLoginForm, setShowLoginForm] = useState(false);
//   const [showSignupForm, setShowSignupForm] = useState(false);
//   const [signupStep, setSignupStep] = useState(1);
//   const [signupEmail, setSignupEmail] = useState('');
//   const [signupPassword, setSignupPassword] = useState('');
//   const [showCongrats, setShowCongrats] = useState(false);

//   const [resumeText, setResumeText] = useState(null);
//   const [isSearching, setIsSearching] = useState(false);
//   const [jobs, setJobs] = useState([]);
//   const [message, setMessage] = useState('');
//   const [hasMounted, setHasMounted] = useState(false);

//   useEffect(() => {
//     setHasMounted(true);
//   }, []);

//   const handleFileProcessed = (data) => {
//     console.log('handleFileProcessed called with:', data);
    
//     if (data && data.extractedText) {
//       setResumeText(data.extractedText);
//       setMessage('✅ Resume uploaded successfully! Ready to find relevant jobs.');
//       console.log('Resume text set:', data.extractedText.substring(0, 100) + '...');
//     } else {
//       setMessage('❌ Failed to extract text from resume.');
//       console.log('No extracted text found in data:', data);
//     }
//   };

//   const handleFindJobs = async () => {
//     if (!resumeText) {
//       setMessage('❌ Please upload a resume first.');
//       return;
//     }

//     setIsSearching(true);
//     setJobs([]);
//     setMessage('🔄 Searching for relevant jobs...');

//     try {
//       const response = await fetch('/api/find-jobs', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ resumeText }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to fetch jobs from API.');
//       }

//       const data = await response.json();
      
//       if (data.jobs && data.jobs.length > 0) {
//         setJobs(data.jobs);
//         setMessage(`✅ Found ${data.jobs.length} relevant jobs!`);
//       } else {
//         setJobs([]);
//         setMessage('ℹ️ No jobs found matching your skills. Try updating your resume!');
//       }
//     } catch (error) {
//       console.error('API integration error:', error);
//       setMessage(`❌ Error: ${error.message}`);
//     } finally {
//       setIsSearching(false);
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setResumeText(null);
//     setJobs([]);
//     setMessage('');
//   };

//   if (!hasMounted) {
//     return (
//       <main className="flex flex-col items-center justify-center text-center px-4 py-20 max-w-4xl mx-auto min-h-screen">
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-black">
//           Loading Skill-Sync...
//         </h1>
//       </main>
//     );
//   }

//   return (
//     <>
//       <main className="flex flex-col items-center justify-center text-center px-4 py-20 max-w-4xl mx-auto">
//         {!isLoggedIn ? (
//           <>
//             <div className="space-y-2 mb-8 pt-4">
//               <p className="text-gray-900">Hi! Welcome to SkillSync 👋</p>
//             </div>
//             <div className="space-y-4">
//               <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-4xl leading-tight text-black">
//                 Instantly See How Your Resume <br /> Stacks Up.
//               </h1>
//               <p className="mt-6 text-lg text-gray-900 max-w-2xl mx-auto">
//                 Analyze your resume against any job description and get personalized tips to land your next interview.
//               </p>
//             </div>
//             <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
//               <button
//                 onClick={() => setIsLoggedIn(true)}
//                 className="flex items-center justify-center space-x-2 bg-gray-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105"
//               >
//                 <span>Try It Now</span>
//                 <FaArrowRight />
//               </button>
//             </div>
//           </>
//         ) : (
//           <>
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//               Welcome to Your Dashboard!
//             </h1>
//             <p className="text-lg text-gray-700 max-w-2xl mb-10">
//               Get ready to optimize your resume and land your dream job.
//             </p>

//             <div className="w-full max-w-2xl mb-8">
//               <ResumeUpload onFileProcessed={handleFileProcessed} />
//             </div>

//             {message && (
//               <div className="mb-6 p-4 rounded-lg bg-gray-50 border max-w-2xl w-full">
//                 <p className="text-lg font-medium text-gray-800 text-center">{message}</p>
//               </div>
//             )}

//             {resumeText && (
//               <div className="w-full max-w-2xl flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
//                 <button
//                   onClick={handleFindJobs}
//                   disabled={isSearching}
//                   className="flex items-center justify-center space-x-3 bg-blue-600 text-white font-bold py-4 px-10 rounded-lg shadow-lg transition-all hover:bg-blue-700 hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:scale-100 text-lg min-w-[280px]"
//                 >
//                   <FaSearch className={isSearching ? 'animate-spin' : ''} />
//                   <span>{isSearching ? 'Finding Jobs...' : 'Find Relevant Jobs'}</span>
//                 </button>

//                 {jobs.length > 0 && (
//                   <button
//                     onClick={() => {
//                       const jobListElement = document.getElementById('job-list');
//                       if (jobListElement) {
//                         jobListElement.scrollIntoView({ behavior: 'smooth' });
//                       }
//                     }}
//                     className="flex items-center justify-center space-x-3 bg-green-600 text-white font-bold py-4 px-10 rounded-lg shadow-lg transition-all hover:bg-green-700 hover:scale-105 text-lg min-w-[280px]"
//                   >
//                     <span>View Relevant Jobs ({jobs.length})</span>
//                   </button>
//                 )}
//               </div>
//             )}

//             {jobs.length > 0 && (
//               <div id="job-list" className="w-full max-w-4xl">
//                 <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
//                   Relevant Jobs Found
//                 </h2>
//                 <JobList jobs={jobs} />
//               </div>
//             )}
//           </>
//         )}
//       </main>
//     </>
//   );
// };

// export default Hero;


"use client";

import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaUpload, FaSearch } from 'react-icons/fa';
import * as mammoth from 'mammoth';

const ResumeUpload = ({ onFileProcessed }) => {
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setError('');
    
    if (!selectedFile) return;
    
    const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
    
    if (fileExtension !== 'docx') {
      setError('Please upload a DOCX file only');
      setFile(null);
      return;
    }
    
    setFile(selectedFile);
    setIsProcessing(true);
    
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const arrayBuffer = event.target.result;
        const result = await mammoth.extractRawText({ arrayBuffer });
        
        if (result.value && result.value.trim().length > 0) {
          onFileProcessed({
            extractedText: result.value,
            fileName: selectedFile.name
          });
        } else {
          setError('Could not extract text from the document. Please ensure it contains text.');
          onFileProcessed({
            extractedText: null,
            fileName: selectedFile.name
          });
        }
      } catch (error) {
        console.error('Error reading docx file:', error);
        setError('Error reading the document. Please try again.');
        onFileProcessed({
          extractedText: null,
          fileName: selectedFile.name
        });
      } finally {
        setIsProcessing(false);
      }
    };
    
    reader.onerror = () => {
      setError('Error reading the file. Please try again.');
      setIsProcessing(false);
    };
    
    reader.readAsArrayBuffer(selectedFile);
  };

  return (
    <div className="w-full p-6 border-2 border-dashed border-gray-300 rounded-lg text-center">
      <input
        type="file"
        accept=".docx"
        onChange={handleFileChange}
        className="hidden"
        id="resume-upload"
      />
      <label
        htmlFor="resume-upload"
        className="cursor-pointer flex flex-col items-center space-y-2"
      >
        <FaUpload className="text-4xl text-gray-400" />
        <span className="text-lg font-medium text-gray-700">
          {isProcessing ? 'Processing...' : 'Upload your resume'}
        </span>
        <span className="text-sm text-gray-500">
          DOCX files only
        </span>
      </label>
      {file && !error && (
        <p className="mt-2 text-sm text-green-600">
          Selected: {file.name}
        </p>
      )}
      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

const JobList = ({ jobs }) => (
  <div className="space-y-4">
    {jobs.map((job, index) => (
      <div key={index} className="p-4 border rounded-lg bg-white shadow">
        <h3 className="font-bold text-lg">{job.title}</h3>
        <p className="text-gray-600">{job.company}</p>
        <p className="text-sm text-gray-500">{job.location}</p>
      </div>
    ))}
  </div>
);

const Hero = ({ isLoggedIn = true, setIsLoggedIn }) => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [signupStep, setSignupStep] = useState(1);
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [showCongrats, setShowCongrats] = useState(false);

  const [resumeText, setResumeText] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [message, setMessage] = useState('');
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleFileProcessed = (data) => {
    console.log('handleFileProcessed called with:', data);
    
    if (data && data.extractedText) {
      setResumeText(data.extractedText);
      setMessage('✅ Resume uploaded successfully! Ready to find relevant jobs.');
      console.log('Resume text set:', data.extractedText.substring(0, 100) + '...');
    } else {
      setMessage('❌ Failed to extract text from resume.');
      console.log('No extracted text found in data:', data);
    }
  };

  const handleFindJobs = async () => {
    if (!resumeText) {
      setMessage('❌ Please upload a resume first.');
      return;
    }

    setIsSearching(true);
    setJobs([]);
    setMessage('🔄 Searching for relevant jobs...');

    try {
      const response = await fetch('/api/find-jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resumeText }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch jobs from API.');
      }

      const data = await response.json();
      
      if (data.jobs && data.jobs.length > 0) {
        setJobs(data.jobs);
        setMessage(`✅ Found ${data.jobs.length} relevant jobs!`);
      } else {
        setJobs([]);
        setMessage('ℹ️ No jobs found matching your skills. Try updating your resume!');
      }
    } catch (error) {
      console.error('API integration error:', error);
      setMessage(`❌ Error: ${error.message}`);
    } finally {
      setIsSearching(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setResumeText(null);
    setJobs([]);
    setMessage('');
  };

  if (!hasMounted) {
    return (
      <main className="flex flex-col items-center justify-center text-center px-4 py-20 max-w-4xl mx-auto min-h-screen">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-black">
          Loading Skill-Sync...
        </h1>
      </main>
    );
  }

  return (
    <>
      <main className="flex flex-col items-center justify-center text-center px-4 py-20 max-w-4xl mx-auto">
        {!isLoggedIn ? (
          <>
            <div className="space-y-2 mb-8 pt-4">
              <p className="text-gray-900">Hi! Welcome to SkillSync 👋</p>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-4xl leading-tight text-black">
                Instantly See How Your Resume <br /> Stacks Up.
              </h1>
              <p className="mt-6 text-lg text-gray-900 max-w-2xl mx-auto">
                Analyze your resume against any job description and get personalized tips to land your next interview.
              </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
              <button
                onClick={() => setIsLoggedIn(true)}
                className="flex items-center justify-center space-x-2 bg-gray-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105"
              >
                <span>Try It Now</span>
                <FaArrowRight />
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Your Dashboard!
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mb-10">
              Get ready to optimize your resume and land your dream job.
            </p>

            <div className="w-full max-w-2xl mb-8">
              <ResumeUpload onFileProcessed={handleFileProcessed} />
            </div>

            {message && (
              <div className="mb-6 p-4 rounded-lg bg-gray-50 border max-w-2xl w-full">
                <p className="text-lg font-medium text-gray-800 text-center">{message}</p>
              </div>
            )}

            {resumeText && (
              <div className="w-full max-w-2xl flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <button
                  onClick={handleFindJobs}
                  disabled={isSearching}
                  className="flex items-center justify-center space-x-3 bg-blue-600 text-white font-bold py-4 px-10 rounded-lg shadow-lg transition-all hover:bg-blue-700 hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:scale-100 text-lg min-w-[280px]"
                >
                  <FaSearch className={isSearching ? 'animate-spin' : ''} />
                  <span>{isSearching ? 'Finding Jobs...' : 'Find Relevant Jobs'}</span>
                </button>

                {jobs.length > 0 && (
                  <button
                    onClick={() => {
                      const jobListElement = document.getElementById('job-list');
                      if (jobListElement) {
                        jobListElement.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="flex items-center justify-center space-x-3 bg-green-600 text-white font-bold py-4 px-10 rounded-lg shadow-lg transition-all hover:bg-green-700 hover:scale-105 text-lg min-w-[280px]"
                  >
                    <span>View Relevant Jobs ({jobs.length})</span>
                  </button>
                )}
              </div>
            )}

            {jobs.length > 0 && (
              <div id="job-list" className="w-full max-w-4xl">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
                  Relevant Jobs Found
                </h2>
                <JobList jobs={jobs} />
              </div>
            )}
          </>
        )}
      </main>
    </>
  );
};

export default Hero;