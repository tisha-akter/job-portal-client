import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-8 mt-10">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-gray-400">
            We’d love to hear from you! Reach out to us for any queries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
              <button className="w-full bg-indigo-600 py-3 rounded font-bold hover:bg-indigo-700">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-400 mb-4">
              Feel free to visit or contact us through the details below.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-yellow-400 text-2xl mr-3" />
                <p>123 Business Avenue, Dhaka, Bangladesh</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-green-400 text-2xl mr-3" />
                <p>+880 1433 567 890</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-red-400 text-2xl mr-3" />
                <p>jobportalbd@gmail.com</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-blue-500 text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-blue-400 text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-blue-600 text-2xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-10 px-8">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902646111353!2d90.41251837499298!3d23.7509590786915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b897fcdde5ff%3A0x1f9140d23f9a2b9e!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1710484875281!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
