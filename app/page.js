import React from "react";
import { FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <div className="h-[84vh] w-[100%] flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        {/* Rating badge */}
        <div className="flex justify-center items-center mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar/>
            ))}
          </div>
          <span className="ml-2 text-gray-600">Trusted by 500,000+ creators</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
          Fund your creative work.
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-600 mb-8">
          Showcase your projects. Monetize your skills. Grow your audience. All in one place.
        </p>

        {/* CTA button */}
        <div className="mt-10">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition duration-150 cursor-pointer">
            Start My Page
          </button>
          <p className="mt-3 text-sm text-gray-500">
            No credit card required • Setup in under 5 minutes
          </p>
        </div>
      </div>
    </div>
  );
}
