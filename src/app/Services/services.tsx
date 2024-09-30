"use client";
import React from "react";
import { FaChevronRight } from "react-icons/fa"; // Importing the chevron icon
import Image from "next/image"; // Import Image from next/image
import { services } from "@/Utils/Data/services_data"; // Importing services data
import { HiChevronDoubleRight } from "react-icons/hi";

// Card component for mobile
const MobileCard: React.FC<{ service: (typeof services)[0] }> = ({ service }) => (
  <div
    className="pt-4 bg-cyan-50 rounded-lg flex flex-col items-center justify-start transition-transform transform hover:scale-105 hover:shadow-lg"
    style={{ minHeight: "80px", maxWidth: "80px" }} // Adjusted mobile card size
  >
    <div className="flex items-center justify-center" style={{ height: "30px" }}>
      <Image
        src={service.icon}
        alt={service.title}
        width={22}
        height={22}
        className="text-primary" // Fixed icon size for mobile
      />
    </div>
    <h3 className="text-[10px] text-black font-semibold text-center overflow-hidden text-ellipsis whitespace-normal">
      {service.title}
    </h3>
  </div>
);


// Card component for desktop
const PcCard: React.FC<{ service: (typeof services)[0] }> = ({ service }) => (
  <div
    className="bg-cyan-50 p-4 shadow-md rounded-lg flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg "
    style={{ minHeight: "280px", maxWidth: "300px" }} // Adjusted sizes for PC card
  >
    <div className="flex flex-col items-center p-6 grow justify-between">
      <div className="flex flex-col items-center mb-4 mt-10">
        <Image
          src={service.icon}
          alt={service.title}
          width={80}
          height={80}
          className="text-primary mb-2" // Icon size for desktop
        />
        <h3 className="text-xl text-black font-semibold text-center">
          {service.title}
        </h3>{" "}
        {/* Title size for desktop */}
      </div>
    </div>

    <a
      href={`/services/${service.title.toLowerCase().replace(/ & /g, "-")}`} // Adjust link based on service title
      className="flex items-center justify-center text-primary hover:text-secondary border border-primary py-2 px-4 mx-auto rounded-md text-sm transition-colors mt-auto whitespace-nowrap" // Ensures single line
    >
      Read More <FaChevronRight className="ml-1" />
    </a>
  </div>
);

// Main component rendering service cards
const ServicesCard: React.FC = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-4 gap-6 px-4 md:px-40 lg:px-60 pt-4 md:pt-10">
      {/* Updated padding for larger screens */}
      {services.map((service) => (
        <div key={service.id}>
          {/* Show mobile card only on mobile screens */}
          <div className="block md:hidden">
            {/* Visible only on small screens */}
            <MobileCard service={service} />
          </div>

          {/* Show PC card only on larger screens */}
          <div className="hidden md:block">
            {/* Visible only on medium and larger screens */}
            <PcCard service={service} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
