import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-slate-900 h-screen flex items-center justify-center">
      <div className="text-center px-4 ">
        <h1 className="title-font sm:text-6xl text-4xl font-semibold text-slate-200 mb-6">
          One Step Closer To Your <br />
          <span className="text-indigo-500">Dream Job</span>
        </h1>
        <p className="mb-8 text-lg text-slate-400">
          Explore thousands of job opportunities with all the <br />
          information you need. It's your future. Come find it. Manage all
          <br /> your job applications from start to finish.
        </p>

        {/* Centered Button */}
        <div className="flex justify-center">
          <Link to="/jobs">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg transition duration-300 ease-in-out transform hover:scale-105">
              Browse Jobs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
