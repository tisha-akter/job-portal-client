import React from "react";
import { FaBriefcase, FaBuilding, FaGlobeAsia } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        {/* About Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">About BD Job Portal</h1>
          <p className="text-gray-400 max-w-3xl mx-auto mt-3">
            BD Job Portal is Bangladesh’s leading career platform, helping local
            job seekers connect with top companies. We work with businesses
            across industries to provide job opportunities and career growth for
            all Bangladeshis.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center">
            <FaBriefcase className="text-yellow-400 text-4xl mr-4" />
            <div>
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="text-gray-400">
                To empower Bangladeshi professionals by connecting them with the
                best local job opportunities.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center">
            <FaGlobeAsia className="text-green-400 text-4xl mr-4" />
            <div>
              <h2 className="text-2xl font-semibold">Our Vision</h2>
              <p className="text-gray-400">
                To become the most trusted career platform in Bangladesh,
                helping both businesses and job seekers thrive.
              </p>
            </div>
          </div>
        </div>

        {/* BD Companies Section */}
        <div className="text-center mt-14 mb-6">
          <h2 className="text-3xl font-bold">
            Bangladeshi Companies We Work With
          </h2>
          <p className="text-gray-400">
            Leading employers in Bangladesh trust us for hiring.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Grameenphone",
            "Robi",
            "bKash",
            "Pathao",
            "Walton",
            "Square Pharma",
            "PRAN-RFL",
            "Daraz",
          ].map((company, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg text-center shadow-lg"
            >
              <FaBuilding className="text-blue-400 text-3xl mx-auto mb-2" />
              <h3 className="text-xl font-semibold">{company}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
