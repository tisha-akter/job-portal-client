import React, { useState, useEffect } from "react";
import {
  FaCode,
  FaBullhorn,
  FaChartLine,
  FaBalanceScale,
  FaShoppingCart,
  FaHeadset,
} from "react-icons/fa";

const categoryList = [
  "All",
  "Technology",
  "Marketing",
  "Finance",
  "Legal",
  "Sales",
  "Customer Care",
];

const iconMap = {
  FaCode: FaCode,
  FaBullhorn: FaBullhorn,
  FaChartLine: FaChartLine,
  FaBalanceScale: FaBalanceScale,
  FaShoppingCart: FaShoppingCart,
  FaHeadset: FaHeadset,
};

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;

  useEffect(() => {
    fetch("/Jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setFilteredJobs(data);
      })
      .catch((err) => console.error("Error loading jobs:", err));
  }, []);

  useEffect(() => {
    let filtered = jobs;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((job) => job.category === selectedCategory);
    }

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredJobs(filtered);
    setCurrentPage(1);
  }, [selectedCategory, searchTerm, jobs]);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-3 ">
        <div className="mt-16 md:mt-32 mb-5 md:mb-20">
        <h1 className="text-3xl text-center font-bold mb-6 text-white">
          Find Your Dream Job
        </h1>
          <div className="flex justify-center mb-6">
            <input
              type="text"
              placeholder="Search Jobs"
              className="p-2 w-2/3 md:w-1/3 bg-gray-800 text-white border border-gray-700 rounded-l"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-indigo-500 px-4 py-2 rounded-r">
              Search
            </button>
          </div>
        </div>
       

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/4">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <ul>
              {categoryList.map((cat) => (
                <li
                  key={cat}
                  className={`cursor-pointer mb-2 ${
                    selectedCategory === cat ? "text-yellow-400" : ""
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-3/4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Available Jobs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {currentJobs.length > 0 ? (
                  currentJobs.map((job) => {
                    const Icon = iconMap[job.icon] || FaCode;
                    return (
                      <div
                        key={job.id}
                        className="bg-gray-700 p-4 rounded shadow flex items-center justify-between"
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
                        <button className="bg-indigo-500 px-4 py-2 rounded">
                          Apply
                        </button>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-gray-400">No jobs found</p>
                )}
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button
                className="bg-gray-700 px-4 py-2 mx-2 rounded disabled:opacity-50"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="px-4 py-2">{currentPage}</span>
              <button
                className="bg-gray-700 px-4 py-2 mx-2 rounded disabled:opacity-50"
                onClick={() =>
                  setCurrentPage((prev) =>
                    prev < Math.ceil(filteredJobs.length / jobsPerPage)
                      ? prev + 1
                      : prev
                  )
                }
                disabled={
                  currentPage >= Math.ceil(filteredJobs.length / jobsPerPage)
                }
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
