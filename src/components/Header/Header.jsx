import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-900 text-white fixed w-full z-20">
      <div className="container mx-auto px-4 py-3">
        <header className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex justify-between items-center w-full">
            <div>
              <h1 className="text-xl font-semibold">JobPortal</h1>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden ml-2">
              <button
                type="button"
                className="text-white"
                onClick={handleMenuClick}
              >
                {isMenuOpen ? (
                  <span className="text-2xl">X</span>
                ) : (
                  <span className="text-2xl">☰</span>
                )}
              </button>
            </div>
          </div>

          {/* Main Navigation */}
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center w-full mt-4 md:mt-0`}
          >
            <div className="px-4 py-2">
              <Link
                to="/"
                className="text-lg text-white hover:text-indigo-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </div>
            <div className="px-4 py-2">
              <Link
                to="/jobs"
                className="text-lg text-white hover:text-indigo-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Jobs
              </Link>
            </div>
            <div className="px-4 py-2">
              <Link
                to="/contact"
                className="text-lg text-white hover:text-indigo-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
            <div className="px-4 py-2">
              <Link
                to="/about"
                className="text-lg text-white hover:text-indigo-400"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </nav>

          {/* Register and Login Buttons */}
          <div className="hidden md:flex mt-4 md:mt-0">
            <Link
              to="/login"
              className="text-sm px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-700 text-white mr-2"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-sm px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white"
            >
              Register
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
