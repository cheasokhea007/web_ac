import React from "react";
import { creditData } from "@/Utils/Data/credit_data"; // Adjust the import path as necessary
import { FaCaretRight } from "react-icons/fa"; // Make sure to import FaCaretRight

const CreditDeposit: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start pt-4 md:pt-10 p-6 bg-white rounded-lg px-4 md:px-60">
      {/* Mobile View (Text Left, Image Right) */}
      <div className="flex flex-col md:hidden mr-4">
        {/* Text Section */}
        <div className="text-left mb-4">
          <div className="flex items-center mb-2">
            <h2 className="text-2xl font-bold text-primary">
              {creditData.title}
            </h2>
            <div className="ml-4 line-decor"></div>
          </div>

          <h3 className="text-xl font-semibold text-secondary mb-4">
            {creditData.subtitle}
          </h3>
          <p className="text-gray-700 mb-4">{creditData.description}</p>

          <h4 className="text-lg font-semibold mb-2 text-black">
            Features and Benefits
          </h4>
          <ul className="text-gray-700 mb-4 list-disc pl-5">
            {creditData.featuresAndBenefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <FaCaretRight className="mr-2 text-primary" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center pt-8">
          <div
            className="absolute inset-4 border-4 rounded-lg border-primary z-0"
            style={{ width: "92%", height: "90%" }}
          ></div>
          <img
            src={creditData.imageSrc}
            alt="Home Loan"
            className="relative translate-x-5 w-[92%] h-auto object-fill rounded-md shadow-lg z-10"
          />
        </div>
      </div>

      {/* PC View (Image Right, Text Left) */}
      <div className="hidden md:flex md:w-full">
        {/* Text Section */}
        <div className="md:w-1/2 text-left md:pr-10">
          <div className="flex items-center mb-2">
            <h2 className="text-2xl font-bold text-primary">
              {creditData.title}
            </h2>
            <div className="ml-4 line-decor"></div>
          </div>

          <h3 className="text-xl font-semibold text-secondary mb-4">
            {creditData.subtitle}
          </h3>
          <p className="text-gray-700 mb-4">{creditData.description}</p>

          <h4 className="text-lg font-semibold mb-2 text-black">
            Features and Benefits
          </h4>
          <ul className="text-gray-700 mb-4 list-disc pl-5">
            {creditData.featuresAndBenefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <FaCaretRight className="mr-2 text-primary" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 relative flex justify-center pt-8 md:pt-10">
          <div
            className="absolute inset-4 border-4 rounded-lg border-primary z-0"
            style={{ width: "92%", height: "90%" }}
          ></div>
          <img
            src={creditData.imageSrc}
            alt="Home Loan"
            className="relative translate-x-5 md:translate-x-4 w-[92%] h-auto object-fill rounded-md shadow-lg z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default CreditDeposit;
