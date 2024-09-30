// src/Components/FixedDeposit.tsx

import React from 'react';
import { fixedDepositData } from '@/Utils/Data/fixed_deposit_data'; // Adjust the import path as necessary

const FixedDeposit: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start pt-4 md:pt-10 p-6 bg-white rounded-lg shadow-md px-4 md:px-20">
      
      {/* Mobile View (Text Left, Image Right) */}
      <div className="flex flex-col md:hidden mr-4">
        {/* Text Section */}
        <div className="text-left mb-4">
          <div className="flex items-center mb-2">
            <h2 className="text-2xl font-bold text-primary">{fixedDepositData.title}</h2>
            <div className="ml-4 line-decor"></div>
          </div>
          
          <h3 className="text-xl font-semibold text-secondary mb-4">{fixedDepositData.subtitle}</h3>
          <p className="text-gray-700 mb-4">{fixedDepositData.description}</p>

          <h4 className="text-lg font-semibold mb-2 text-black">Interest Rates</h4>
          <table className="min-w-full border border-gray-300 text-black text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="border px-1 py-1 text-center text-[10px]">Tenure</th>
                <th className="border px-1 py-1 text-center text-[10px]">Interest Rate (% p.a.)</th>
                <th className="border px-1 py-1 text-center text-[10px]">Customer (KHR)</th>
                <th className="border px-1 py-1 text-center text-[10px]">Customer (USD)</th>
              </tr>
            </thead>
            <tbody>
              {fixedDepositData.interestRates.map((rate, index) => (
                <tr key={index} className="border-b">
                  <td className="border px-1 py-1 text-center text-[10px]">{rate.tenure}</td>
                  <td className="border px-1 py-1 text-center text-[10px]">{rate.interestRate}</td>
                  <td className="border px-1 py-1 text-center text-[10px]">{rate.customerKHR}</td>
                  <td className="border px-1 py-1 text-center text-[10px]">{rate.customerUSD}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center pt-8">
          <div className="absolute inset-4 border-4 rounded-lg border-primary z-0" style={{ width: '92%', height: '90%' }}></div>
          <img
            src={fixedDepositData.imageSrc}
            alt="Savings Account"
            className="relative translate-x-5 w-[92%] h-auto object-fill rounded-md shadow-lg z-10"
          />
        </div>
      </div>

      {/* PC View (Text Right, Image Left) */}
      <div className="hidden md:flex md:w-full">
        {/* Image Section */}
        <div className="md:w-1/2 relative flex justify-center pt-8 md:pt-10">
          <div className="absolute inset-4 border-4 rounded-lg border-primary z-0" style={{ width: '92%', height: '90%' }}></div>
          <img
            src={fixedDepositData.imageSrc}
            alt="Savings Account"
            className="relative translate-x-5 md:translate-x-4 w-[92%] h-auto object-fill rounded-md shadow-lg z-10"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 text-left md:pl-10">
          <div className="flex items-center mb-2">
            <h2 className="text-2xl font-bold text-primary">{fixedDepositData.title}</h2>
            <div className="ml-4 line-decor"></div>
          </div>
          
          <h3 className="text-xl font-semibold text-secondary mb-4">{fixedDepositData.subtitle}</h3>
          <p className="text-gray-700 mb-4">{fixedDepositData.description}</p>

          <h4 className="text-lg font-semibold mb-2 text-black">Interest Rates</h4>
          <table className="min-w-full border border-gray-300 text-black text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="border px-4 py-2 text-left text-sm">Tenure</th>
                <th className="border px-4 py-2 text-left text-sm">Interest Rate (% p.a.)</th>
                <th className="border px-4 py-2 text-left text-sm">Customer (KHR)</th>
                <th className="border px-4 py-2 text-left text-sm">Customer (USD)</th>
              </tr>
            </thead>
            <tbody>
              {fixedDepositData.interestRates.map((rate, index) => (
                <tr key={index} className="border-b">
                  <td className="border px-2 py-1 text-sm">{rate.tenure}</td>
                  <td className="border px-2 py-1 text-sm">{rate.interestRate}</td>
                  <td className="border px-2 py-1 text-sm">{rate.customerKHR}</td>
                  <td className="border px-2 py-1 text-sm">{rate.customerUSD}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FixedDeposit;
