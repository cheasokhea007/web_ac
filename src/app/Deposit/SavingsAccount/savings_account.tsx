import React from 'react';
import { savingsAccountData } from '@/Utils/Data/savings_data'; // Adjust the import path as necessary
import { FaCaretRight } from "react-icons/fa";

// Define the SavingsAccount component
const SavingsAccount: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start pt-4 md:pt-10 p-6 bg-white rounded-lg shadow-md px-4 md:px-40">
      {/* Text Section */}
      <div className="md:w-1/2 mb-4 md:mb-0 text-left md:pr-10 ">
        <div className="flex items-center mb-2">
          <h2 className="text-2xl font-bold text-primary">{savingsAccountData.title}</h2>
          <div className="ml-4 line-decor"></div>
        </div>
        
        <h3 className="text-xl font-semibold text-secondary mb-4">{savingsAccountData.subtitle}</h3>

        {/* Description (hidden on mobile) */}
        <p className="text-gray-700 mb-4 hidden md:block ">{savingsAccountData.description}</p>

        <h4 className="text-lg font-semibold mb-2 text-black">Features and Benefits</h4>
        <ul className="list-disc list-inside text-gray-700">
          {savingsAccountData.features.map((feature, index) => (
            <li key={index} className="flex items-start mb-2">
              <FaCaretRight className="mr-2 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 relative flex justify-center pt-8 md:pt-10 mr-4">
        {/* Border element behind the image */}
        <div className="absolute inset-4 border-4 rounded-lg border-primary z-0" style={{ width: '92%', height: '90%' }}></div>
        
        {/* Image */}
        <img
          src={savingsAccountData.imageSrc}
          alt="Savings Account"
          className="relative translate-x-5 md:translate-x-4 w-[92%] h-auto object-fill rounded-md shadow-lg z-10" 
        />
      </div>
    </div>
  );
};

export default SavingsAccount;
