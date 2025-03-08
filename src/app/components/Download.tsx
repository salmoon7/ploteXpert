"use client";
import { motion } from "framer-motion";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const DownloadApp = () => {
  return (
    <div className="bg-[#f8f9fa] py-16 px-6 md:px-16 lg:px-32 flex flex-col md:flex-row items-center justify-between  mx-6 my-10 rounded-lg shadow-md">
      {/* Left: App Image */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="/mobile.webp" // Replace with actual image path
          alt="Mobile App"
          className="w-80 md:w-[350px] lg:w-[400px]"
        />
      </div>

      {/* Right: Download Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2
          className="text-4xl font-bold text-[#1a1a1a] mb-6"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Download Our Mobile App
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Get the best experience on your mobile. Download our app for seamless
          access to properties, updates, and more.
        </p>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Google Play */}
          <motion.a
            whileTap={{ scale: 0.95 }}
            href="#"
            className="flex items-center justify-center bg-[#28a745] text-white px-6 py-3 rounded-[25px] text-lg shadow-lg hover:bg-[#218838] transition-all"
          >
            <FaGooglePlay size={24} className="mr-3" />
            <span>Google Play</span>
          </motion.a>

          {/* Apple Store */}
          <motion.a
            whileTap={{ scale: 0.95 }}
            href="#"
            className="flex items-center justify-center bg-[#5cb85c] text-white px-6 py-3 rounded-[25px] text-lg shadow-lg hover:bg-[#4cae4c] transition-all"
          >
            <FaApple size={28} className="mr-3" />
            <span>App Store</span>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
