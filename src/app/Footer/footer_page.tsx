// src/components/Footer/FooterPage.tsx
import React from "react";
import { FaFacebook, FaTelegram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdPhoneEnabled, MdEmail, MdLocationOn } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
const FooterPage: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-6 md:px-12 lg:px-20">
        {/* Address Section */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Address</h3>
          <div className="flex mb-2">
            <MdLocationOn className="text-primary mr-2 text-xl" />
            <p className="flex-1 text-gray-400">
              The Gateway Building, Ground & 33rd floors, Russian Federation
              Blvd. Phsar Depou 3, Tuol Kork (St. 210) Phnom Penh, Cambodia.
            </p>
          </div>
          <p className="mt-4 flex items-start mb-2">
            <MdPhoneEnabled className="text-primary mr-2" />
            <a className="text-gray-400" href="tel:+85523886668">
              +85523 886 668
            </a>
          </p>
          <p className="flex items-center mb-4">
            <MdEmail className="text-primary mr-2" />
            <a className="text-gray-400" href="mailto:info@alphabank.com.kh">
              info@alphabank.com.kh
            </a>
          </p>
          {/* Social Icons Section */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 border border-primary rounded-full hover:bg-white transition duration-300"
            >
              <FaFacebook className="text-2xl  text-primary" />
            </a>
            <a
              href="https://www.telegram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 border border-primary rounded-full hover:bg-white transition duration-300"
            >
              <FaTelegram className="text-2xl  text-primary" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 border border-primary rounded-full hover:bg-white transition duration-300"
            >
              <FaLinkedin className="text-2xl  text-primary" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 border border-primary rounded-full hover:bg-white transition duration-300"
            >
              <FaYoutube className="text-2xl  text-primary" />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="mb-6 md:mb-0 pl-10">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="flex items-center mb-4">
              <FaAngleRight className="text-primary mr-2" />
              <a
                href="#"
                className="hover:text-primary transition duration-300 transform hover:scale-105"
              >
                About Us
              </a>
            </li>
            <li className="flex items-center mb-4">
              <FaAngleRight className="text-primary mr-2" />
              <a
                href="#"
                className="hover:text-primary transition duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
            </li>
            <li className="flex items-center mb-4">
              <FaAngleRight className="text-primary mr-2" />
              <a
                href="#"
                className="hover:text-primary transition duration-300 transform hover:scale-105"
              >
                Products & Services
              </a>
            </li>
            <li className="flex items-center mb-4">
              <FaAngleRight className="text-primary mr-2" />
              <a
                href="#"
                className="hover:text-primary transition duration-300 transform hover:scale-105"
              >
                Terms Of Use
              </a>
            </li>
            <li className="flex items-center">
              <FaAngleRight className="text-primary mr-2" />
              <a
                href="#"
                className="hover:text-primary transition duration-300 transform hover:scale-105"
              >
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Gallery Section */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Gallery</h3>
          {/* Add your gallery links or images here */}
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Newsletter</h3>
          <p className="mb-4">
            Need to receive upcoming events from the bank? Subscribe now!
          </p>
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 text-gray-900 rounded mb-2 w-full"
          />
          <button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 px-4 py-2 rounded w-full">
            Subscribe
          </button>
        </div>
      </div>

      <div className="copyright">
        {/* Full-width horizontal line */}
        <hr className="border-t border-primary my-4 w-full opacity-50" />

        <div className="flex flex-col-2 items-center justify-between mt-4 mb-2 px-48 ">
          <p className="text-start">
            <span className="text-[15px] text-gray-400">
              &copy; 2024 All Rights Reserved.
            </span>
            <br /> {/* This adds a line break */}
            <span>ALPHA COMMERCIAL BANK PLC</span>
          </p>

          <p className=" text-gray-400 text-[16px] mt-2">
            Development by: Alpha Bank Developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
