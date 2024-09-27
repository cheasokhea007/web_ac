"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaClock, FaPhone, FaEnvelope } from "react-icons/fa"; // Importing icons
import images from "@/Utils/Data/image_data"; 

const NavbarMain: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between p-4 text-gray-500 text-sm px-20">
        {/* Left Side: Bank Logo */}
        <div className="flex items-center">
          <img
            src={images.logo} // This should correctly refer to the logo image
            alt="Bank Logo"
            className="h-14 w-auto"
          />
        </div>
        
        {/* Right Side: Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/open-house" className="flex items-center hover:text-cyan-500">
            <FaClock className="mr-1" /> Open House
          </Link>
          <Link href="/call-us" className="flex items-center hover:text-cyan-500">
            <FaPhone className="mr-1" /> Call Us
          </Link>
          <Link href="/email" className="flex items-center hover:text-cyan-500">
            <FaEnvelope className="mr-1" /> Email
          </Link>
        </div>
      </div>

      {/* Navigation Section Below Navbar */}
      <div className="bg-cyan-500 py-4">
        <div className="container px-20 flex justify-left space-x-8 text-white ">
          <div className="relative group">
            <Link href="/personal" className="hover:text-secondary">Personal</Link>
            {/* Dropdown Menu */}
            <div
              className={`absolute left-0 hidden mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg group-hover:block`}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link href="/personal/account" className="block px-4 py-2 hover:bg-cyan-500 hover:text-white">My Account</Link>
              <Link href="/personal/services" className="block px-4 py-2 hover:bg-cyan-500 hover:text-white">Services</Link>
            </div>
          </div>

          <div className="relative group">
            <Link href="/business" className="hover:text-secondary">Business</Link>
            {/* Dropdown Menu */}
            <div
              className={`absolute left-0 hidden mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg group-hover:block`}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link href="/business/accounts" className="block px-4 py-2 hover:bg-cyan-500 hover:text-white">Business Accounts</Link>
              <Link href="/business/services" className="block px-4 py-2 hover:bg-cyan-500 hover:text-white">Business Services</Link>
            </div>
          </div>

          <Link href="/digital-banking" className="hover:text-secondary">Digital Banking</Link>
          <Link href="/news-media" className="hover:text-secondary">News & Media</Link>
          <Link href="/about-us" className="hover:text-secondary">About Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
