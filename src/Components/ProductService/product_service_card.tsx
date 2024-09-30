// src/components/ProductService/ProductServiceCard.tsx
import React from 'react';
import { BiCalendar } from "react-icons/bi";
import { FiUser } from "react-icons/fi";

interface ProductServiceCardProps {
  image: string;
  user: string;
  date: string;
  title: string;
  description: string;
  readMoreLink: string;
}

const ProductServiceCard: React.FC<ProductServiceCardProps> = ({ image, user, date, title, description, readMoreLink }) => {
  return (
    <div className="bg-cyan-50 shadow-lg rounded-lg overflow-hidden max-w-sm">
      {/* Image Section */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Card Content */}
      <div className="p-4 ">
        {/* User and Date Info */}
        <div className="flex items-center text-gray-600 text-sm mb-2 justify-between">
          <span className="flex items-center mr-2">
            <FiUser className='text-primary mr-2' />
            {user}
          </span>
          <span className="flex items-center">
            <BiCalendar className='text-primary mr-2' />
            {date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 ">{title}</h3>

        {/* Description with 2 lines limit */}
        <p className="text-gray-600 mt-4 mb-4 line-clamp-2 ">
          {description}
        </p>
        


        {/* Read More Button */}
        <a href={readMoreLink} className="text-blue-500 hover:underline text-sm">
          Read more...
        </a>
      </div>
    </div>
  );
};

export default ProductServiceCard;
