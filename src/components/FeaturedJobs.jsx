import React, { useState, useEffect } from "react";
import { FaCode, FaBullhorn, FaChartLine, FaBalanceScale, FaShoppingCart, FaHeadset } from "react-icons/fa";

const iconMap = {
  FaCode: FaCode,
  FaBullhorn: FaBullhorn,
  FaChartLine: FaChartLine,
  FaBalanceScale: FaBalanceScale,
  FaShoppingCart: FaShoppingCart,
  FaHeadset: FaHeadset
};

const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);

  useEffect(() => {
    fetch("/Jobs.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredJobs = data.filter((job) => job.featured);
        setFeaturedJobs(filteredJobs);
      })
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  return (
    <div className="bg-gray-900 text-white p-6">
     <div className="container mx-auto px-4">
     <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Featured Jobs</h1>
        <p className="text-gray-400">Explore top job opportunities curated just for you.</p>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredJobs.length > 0 ? (
          featuredJobs.map((job) => {
            const Icon = iconMap[job.icon] || FaCode;
            return (
              <div
                key={job.id}
                className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-between"
              >
                <div className="flex items-center">
                  <Icon className="text-4xl mr-4 text-yellow-400" />
                  <div>
                    <h2 className="text-lg font-bold">{job.title}</h2>
                    <p className="text-gray-400">{job.company}</p>
                    <p className="text-gray-500">{job.description}</p>
                    <p className="text-sm text-gray-400">
                      {job.date} • {job.location}
                    </p>
                  </div>
                </div>
                <button className="bg-indigo-600 px-4 py-2 rounded">Apply</button>
              </div>
            );
          })
        ) : (
          <p className="text-gray-400 text-center w-full">No featured jobs available</p>
        )}
      </div>
     </div>
    </div>
  );
};

export default FeaturedJobs;
