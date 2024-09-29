"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Optimized image component from Next.js
import { FaClock, FaPhone, FaEnvelope, FaBars, FaTimes } from "react-icons/fa"; // FontAwesome icons
import images from "@/Utils/Data/image_data"; // Importing images from a utility folder
import { FaHome } from "react-icons/fa";
const NavbarMain: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-white shadow-md z-50">
      {/* Upper section with contact info */}
      <div className="flex items-center justify-between px-2 text-gray-500 text-sm px-4 md:px-20">
        {/* Left Side: Bank Logo for Desktop */}
        <div className="hidden md:flex items-center">
          <Image src={images.logo} alt="Bank Logo" width={340} height={120} />
        </div>

        {/* Right Side: Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-4 md:space-x-6">
          {/* Links with icons */}
          <Link href="/open-house" className="group flex items-center hover:text-secondary">
            <div className="border border-primary rounded-full p-2 md:p-4 flex items-center justify-center">
              <FaClock className="text-sm md:text-lg text-primary group-hover:text-secondary" />
            </div>
            <div className="ml-2 flex flex-col">
              <span className="text-sm md:text-base text-primary">Opening Hour</span>
              <span className="text-xs md:text-sm">Mon - Fri, 8:00am - 3:30pm</span>
            </div>
          </Link>

          <Link href="/call-us" className="group flex items-center hover:text-secondary">
            <div className="border border-primary rounded-full p-2 md:p-4 flex items-center justify-center">
              <FaPhone className="text-sm md:text-lg text-primary group-hover:text-secondary" />
            </div>
            <div className="ml-2 flex flex-col">
              <span className="text-sm md:text-base text-primary">Call Us</span>
              <span className="text-xs md:text-sm">+855 616 668 11</span>
            </div>
          </Link>

          <Link href="/email" className="group flex items-center hover:text-secondary">
            <div className="border border-primary rounded-full p-2 md:p-4 flex items-center justify-center">
              <FaEnvelope className="text-sm md:text-lg text-primary group-hover:text-secondary" />
            </div>
            <div className="ml-2 flex flex-col">
              <span className="text-sm md:text-base text-primary">Email</span>
              <span className="text-xs md:text-sm">info@alphabank.com.kh</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Lower section with main navigation */}
      <div className="bg-primary py-4">
       {/* Logo and hamburger menu for mobile */}
      <div className="md:hidden flex justify-between items-center px-4">
        <Image src={images.logo} alt="Bank Logo" width={160} height={80} />
        <button
          onClick={toggleMenu}
          className="text-white border border-white rounded-md p-1 focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

        {/* Navigation Links */}
        <div className={`md:flex justify-left space-x-8 text-white px-4 md:px-20 ${isOpen ? "block" : "hidden"} md:block`}>
         {/* Add Home Icon here */}
          <Link href="/" className="flex items-center hover:text-secondary">
            <FaHome className="mr-4 text-2xl" />

          </Link>

          {/* Dropdowns for navigation */}
          <div className="relative group">
            <Link href="/personal" className="hover:text-secondary">Personal</Link>
            <div className="absolute left-0 hidden mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg group-hover:block">
              <Link href="/personal/account" className="block px-4 py-2 hover:bg-cyan-500 hover:text-white">My Account</Link>
              <Link href="/personal/services" className="block px-4 py-2 hover:bg-cyan-500 hover:text-white">Services</Link>
            </div>
          </div>

          <div className="relative group">
            <Link href="/business" className="hover:text-secondary">Business</Link>
            <div className="absolute left-0 hidden mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg group-hover:block">
              <Link href="/business/accounts" className="block px-4 py-2 hover:bg-cyan-500 hover:text-white">Business Accounts</Link>
              <Link href="/business/services" className="block px-4 py-2 hover:bg-cyan-500 hover:text-white">Business Services</Link>
            </div>
          </div>

          {/* Remaining navigation links */}
          <Link href="/digital-banking" className="hover:text-secondary">Digital Banking</Link>
          <Link href="/news-media" className="hover:text-secondary">News & Media</Link>
          <Link href="/about-us" className="hover:text-secondary">About Us</Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarMain;
