"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image"; // Optimized image component from Next.js
import { FaClock, FaPhone, FaEnvelope } from "react-icons/fa"; // FontAwesome icons
import images from "@/Utils/Data/image_data"; // Importing images from a utility folder

const NavbarMain: React.FC = () => {
  return (
    <nav className=" w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between p-4 text-gray-500 text-sm px-20">
        {/* Left Side: Bank Logo */}
          <div className="hidden md:flex items-center">
            <Image
              src={images.logo} 
              alt="Bank Logo"
              width={340} 
              height={120} 
            />
          </div>

        {/* Right Side: Navigation Links */}
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
              <span className="text-xs md:text-sm">+885 616 668 11</span>
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

      {/* Lower Navigation Section */}
      <div className="bg-primary py-4">
        <div className="container px-20 flex justify-left space-x-8 text-white">
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
    </nav>
  );
};

export default NavbarMain;
