import React from "react";
import { NavLink } from "react-router-dom";
import HeaderLand from "./HeaderLand/HeaderLand";
import FooterLand from "./FooterLand/FooterLand";
import Reviews from "./Reviews/Reviews";
import Courses from "./Courses/Courses";

const LandingPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <HeaderLand></HeaderLand>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-black">
        <div className="bg-white rounded-lg shadow p-10">
          <div className="flex flex-col items-center py-12">
            <div className="bg-gray-200 rounded-full h-32 w-32 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-semibold mt-4">
              Speak with Confidence, Learn with Ease!
            </h2>
            <p className="text-gray-600 text-base mt-4">IMPROVE YOUR ENGLISH</p>
            <p className="text-gray-600 text-xs">
              Reading, Writing, Listening, Speaking
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="p-6 mt-6 flex flex-col items-center">
          <div className="space-y-4">
            {[
              {
                icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0l-9.52 6.25a2 2 0 01-2.22 0L3 8m0 0v10a2 2 0 002 2h14a2 2 0 002-2V8m0 0l-3-3",
                text: "Study on this website at your own pace",
              },
              {
                icon: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                text: "You will have your own teacher",
              },
              {
                icon: "M5 13l4 4L19 7",
                text: "Absolutely zero hassle",
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={feature.icon}
                  />
                </svg>
                <span className="ml-2">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Courses Section */}

        <Courses></Courses>

        {/* Review Section */}

        <Reviews></Reviews>
      </main>

      {/* Footer */}
      <FooterLand></FooterLand>
    </div>
  );
};

export default LandingPage;
