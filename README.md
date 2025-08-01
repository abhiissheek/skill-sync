# Skill-Sync

### Instantly See How Your Resume Stacks Up.

Skill-Sync is a web application that helps job seekers by analyzing their resumes against job descriptions to find relevant job titles. It provides a modern dashboard where users can upload their resumes, get them instantly parsed, and receive a list of potential job matches.

-----

### ✨ Features

  * **User Authentication:** Secure login and sign-up with a sleek, multi-step modal.
  * **Resume Parsing:** Upload a `.docx` resume and get the raw text extracted in real-time.
  * **AI-Powered Job Matching:** Utilizes the Gemini API to analyze resume content and suggest highly relevant job titles.
  * **Responsive Dashboard:** A clean, modern dashboard UI that adapts to different screen sizes.
  * **Seamless User Experience:** A step-by-step flow from landing page to job search results.

### ⚙️ Tech Stack

  * **Framework:** [Next.js](https://nextjs.org/)
  * **Frontend:** [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/)
  * **Backend:** Next.js API Routes
  * **Resume Parsing:** [Mammoth.js](https://www.npmjs.com/package/mammoth)
  * **AI/LLM:** [Google Gemini API](https://ai.google.dev/)
  * **State Management:** React's `useState`

### 🚀 Getting Started

Follow these steps to set up the project locally.

#### Prerequisites

  * Node.js (v18 or higher)
  * npm or yarn

#### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/skill-sync.git
    cd skill-sync
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn
    ```

3.  **Set up your environment variables:**

      * Create a file named `.env.local` in the root directory.
      * Get a free API key from the [Google AI Studio](https://ai.google.dev/).
      * Add your API key to the `.env.local` file:

    <!-- end list -->

    ```
    GEMINI_API_KEY=YOUR_API_KEY_HERE
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser to see the result.

### 📁 File Structure

  * `app/`
      * `api/`
          * `find-jobs/` - API route for AI-powered job matching.
          * `upload-resume/` - API route for resume parsing.
      * `components/`
          * `Hero.jsx` - The main component that handles the user flow.

-----

### 📝 License

This project is licensed under the MIT License.
