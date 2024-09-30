"use client";
import React, { useState } from 'react';
import productServicesAvailable from '@/Utils/Data/available_product_services';
import AvailableProductCard from '../../Components/AvailableProductServices/AvailableProductCard';

const AvailableProductBlock: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 4; // Number of services per page

  // Calculate indices for pagination
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = productServicesAvailable.slice(indexOfFirstService, indexOfLastService);

  // Pagination handler
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="px-4 md:px-60 pt-8">
      <div className="flex items-center justify-center mb-4">
        {/* Left Line Decor */}
        <div className="line-decor2 mr-4"></div>

        <h2 className="text-md md:text-md text-primary">
          Available Product & Services
        </h2>

        {/* Right Line Decor */}
        <div className="line-decor ml-4"></div>
      </div>

      {/* Title Text with Increased Font Size */}
      <h1 className="text-lg md:text-[28px] font-semibold text-center text-gray-700 mb-6">
        Available products and services
      </h1>

      {/* Cards Section */}
      {currentServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentServices.map((service) => (
            <AvailableProductCard key={service.id} service={service} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No available products or services.</p>
      )}

      {/* Pagination Section */}
      <Pagination
        totalServices={productServicesAvailable.length}
        servicesPerPage={servicesPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

// Pagination Component
interface PaginationProps {
  totalServices: number;
  servicesPerPage: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalServices,
  servicesPerPage,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalServices / servicesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-6 flex justify-center">
      <ul className="flex space-x-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-1 border ${
                number === currentPage
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-blue-500'
              } hover:bg-blue-600 hover:text-white transition duration-300 rounded-md`}
              aria-label={`Go to page ${number}`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AvailableProductBlock;
