"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaFacebook, FaTelegram, FaLinkedin, FaYoutube, FaChevronDown } from "react-icons/fa"; // Importing icons including YouTube and LinkedIn
import Flag from "react-world-flags"; // Importing flags
import { FaHome, FaBriefcase, FaPhone } from 'react-icons/fa';

const NavbarTop: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle dropdown
  const [currentLanguage, setCurrentLanguage] = useState('en'); // State to track selected language

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  const changeLanguage = (locale: string) => {
    setCurrentLanguage(locale); // Update the current language state
    setIsDropdownOpen(false);   // Close the dropdown after selection
  };

  return (
    <nav className="flex items-center justify-between p-1 bg-thirdcolor px-4 md:px-20 text-gray-400 text-sm">
      {/* Left Side: Home, Careers, Contact Us */}
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center hover:text-cyan-500">
          <FaHome className="mr-1" /> Home
        </Link>
        <span>/</span>
        <Link href="/careers" className="flex items-center hover:text-cyan-500">
          <FaBriefcase className="mr-1" /> Careers
        </Link>
        <span>/</span>
        <Link href="/contact" className="flex items-center hover:text-cyan-500">
          <FaPhone className="mr-1" /> Contact Us
        </Link>
      </div>

      {/* Right Side: Follow Us with Social Media Icons and Language Button */}
      <div className="flex items-center space-x-2 md:space-x-4">
        {/* Hide this section on responsive view */}
        <div className="hidden md:flex items-center ">
          <span className="mr-1">Follow Us: </span>
          <Link href="https://www.facebook.com" target="_blank">
            <FaFacebook className="text-primary hover:text-secondary rounded-full text-xl mr-2 " />
          </Link>
          <Link href="https://t.me" target="_blank">
            <FaTelegram className="text-primary hover:text-secondary rounded-full text-xl mr-2"  />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank">
            <FaLinkedin className="text-primary hover:text-secondary rounded-full text-xl mr-2" />
          </Link>
          <Link href="https://www.youtube.com" target="_blank">
            <FaYoutube className="text-primary hover:text-secondary rounded-full text-xl mr-2" />
          </Link>
        </div>

        {/* Language Dropdown Button */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="ml-2 md:ml-4 bg-primary text-white px-2 py-1 rounded hover:bg-secondary flex items-center text-sm"
          >
            {currentLanguage === 'en' && (
              <>
                <Flag code="GB" className="w-5 h-5 mr-2 text-sm" /> English
              </>
            )}
            {currentLanguage === 'Ch' && (
              <>
                <Flag code="CN" className="w-5 h-5 mr-2 text-sm" /> Chinese
              </>
            )}
            {currentLanguage === 'kh' && (
              <>
                <Flag code="KH" className="w-5 h-5 mr-2 text-sm" /> Khmer
              </>
            )}
            <FaChevronDown className="ml-1" style={{ fontSize: '0.75rem' }} />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg">
              <li
                className="px-4 py-2 hover:bg-gray-200 flex items-center text-sm"
                onClick={() => changeLanguage('en')}
              >
                <Flag code="GB" className="w-5 h-5 mr-2 text-sm" />
                <Link href="/" locale="en">
                  English
                </Link>
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-200 flex items-center text-sm"
                onClick={() => changeLanguage('Ch')}
              >
                <Flag code="CN" className="w-5 h-5 mr-2 text-sm" />
                <Link href="/" locale="Ch">
                  Chinese
                </Link>
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-200 flex items-center text-sm"
                onClick={() => changeLanguage('kh')}
              >
                <Flag code="KH" className="w-5 h-5 mr-2 text-sm" />
                <Link href="/" locale="kh">
                  Khmer
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarTop;
