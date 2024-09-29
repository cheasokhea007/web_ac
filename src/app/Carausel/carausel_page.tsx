"use client";
import React, { useState, useEffect } from "react";
import carouselData from "@/Utils/Data/carausel_data"; // Importing the carousel data
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icons for navigation

const CarouselPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? carouselData.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === carouselData.length - 1 ? 0 : currentIndex + 1);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5000 milliseconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-auto sm:px-5 lg:px-20"> 
      <div className="overflow-hidden relative w-full h-full"> 
        {/* Carousel Content */}
        <div
          className="whitespace-nowrap transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselData.map((item) => (
            <div key={item.id} className="inline-block w-full h-auto relative"> 
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto max-h-screen object-cover rounded-md"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">{item.title}</h2>
                <p className="text-sm sm:text-base lg:text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-2 lg:left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute top-1/2 right-2 lg:right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button>

        {/* Large Dots Navigation with Image Previews for Desktop */}
        <div className="hidden sm:flex absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-2">
          {carouselData.map((item, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full cursor-pointer border-2 ${
                currentIndex === index ? "border-white" : "border-primary"
              }`}
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: currentIndex === index ? "primary" : "transparent"
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-full"
                style={{ opacity: currentIndex === index ? 1 : 0.5 }}
              />
            </div>
          ))}
        </div>

        {/* Small Dots for Mobile */}
        <div className="flex sm:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-1">
          {carouselData.map((item, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-white border border-primary" : "bg-primary border border-primary"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselPage;
