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
              <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p className="text-sm">{item.description}</p>
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
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4">
        {carouselData.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 mx-1 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-primary" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CarouselPage;
