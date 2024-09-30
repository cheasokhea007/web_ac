import React from 'react';

interface ProductServiceProps {
  service: {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
  };
}

const AvailableProductCard: React.FC<ProductServiceProps> = ({ service }) => {
  const handleReadMore = () => {
    // Implement your read more functionality here (e.g., navigate to a details page)
  };

  const handleImageClick = () => {
    // Implement image preview functionality (e.g., open in modal or lightbox)
    console.log(`Previewing image for ${service.title}`);
  };

  return (
    <div key={service.id} className="bg-white border border-gray-300 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img
        src={service.imageSrc}
        alt={service.title}  // Ensure this is descriptive
        className="w-full h-48 object-cover rounded-3xl p-4 cursor-pointer" // Make image round and add cursor pointer
        onClick={handleImageClick} // Handle image click
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/path/to/fallback/image.jpg'; // Fallback image
        }}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-1 text-gray-800">{service.title}</h2> {/* Reduced bottom margin for title */}
        <p className="text-gray-600 mb-3 line-clamp-3">{service.description}</p> {/* Added line-clamp for three lines */}
        <button 
          onClick={handleReadMore} 
          className="text-blue-500 hover:underline transition duration-300 mt-2 float-right" // Added margin-top to move it up
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default AvailableProductCard;
