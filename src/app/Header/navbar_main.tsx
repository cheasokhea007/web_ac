"use client";
import React from "react";
import Link from "next/link";
import { FaClock, FaPhone, FaEnvelope } from "react-icons/fa"; // Importing icons
import images from "@/Utils/Data/image_data"; 

const NavbarMain: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white text-gray-500 text-sm px-20">
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
    </nav>
  );
};

export default NavbarMain;
