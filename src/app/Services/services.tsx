"use client";
import React from "react";
import { FaChevronRight } from "react-icons/fa"; // Importing the chevron icon
import Image from 'next/image'; // Import Image from next/image
import { services } from "@/Utils/Data/services_data"; // Importing services data
import { HiChevronDoubleRight } from "react-icons/hi";

// Card component for mobile
const MobileCard: React.FC<{ service: typeof services[0] }> = ({ service }) => (
  <div
    className="bg-cyan-50 rounded-lg flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg pb-6"
    style={{ minHeight: '180px', maxWidth: '200px' }} // Mobile card size
  >
    <div className="flex flex-col items-center p-4 grow justify-between">
      <div className="flex flex-col items-center ">
        <Image
          src={service.icon} 
          alt={service.title} 
          width={64} 
          height={64} 
          className="text-primary mb-2" // Icon size for mobile
        />
        <h3 className="text-[14px] text-black font-semibold text-center truncate whitespace-nowrap overflow-hidden">{service.title}</h3> {/* Truncate title to one line */}
      </div>
    </div>

    <a
      href={`/services/${service.title.toLowerCase().replace(/ & /g, "-")}`} 
      className="text-[12px] flex items-center justify-center text-cyan-500 border border-cyan-500 py-1 rounded-md text-sm transition-all hover:bg-cyan-500 hover:text-white mx-10"
    >
      Read More <HiChevronDoubleRight className="ml-1" />
    </a>
  </div>
);

// Card component for desktop
const PcCard: React.FC<{ service: typeof services[0] }> = ({ service }) => (
  <div
    className="bg-cyan-50 p-4 shadow-md rounded-lg flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg"
    style={{ minHeight: '320px', maxWidth: '350px' }} // Desktop card size
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
        <h3 className="text-xl text-black font-semibold text-center">{service.title}</h3> {/* Title size for desktop */}
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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-40 lg:px-40 pt-4 md:pt-10"> {/* Updated padding for larger screens */}
      {services.map((service) => (
        <div key={service.id}>
          {/* Show mobile card only on mobile screens */}
          <div className="block md:hidden"> {/* Visible only on small screens */}
            <MobileCard service={service} />
          </div>
          
          {/* Show PC card only on larger screens */}
          <div className="hidden md:block"> {/* Visible only on medium and larger screens */}
            <PcCard service={service} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
