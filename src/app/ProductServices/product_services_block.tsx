// src/components/ProductServicesBlock.tsx
import React from 'react';
import ProductServiceCard from '@/Components/ProductService/product_service_card'; // Corrected path
import ProductServiceData from '@/utils/data/product_service_data'; // Ensure the path is correct

// Define the structure of the card data
interface CardData {
  image: string;
  user: string;
  date: string;
  title: string;
  description: string;
  readMoreLink: string;
}

const ProductServicesBlock: React.FC = () => {
  return (
    <div className=" py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Our latest ongoing projects</h2>
      
      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4">
        {ProductServiceData.map((card: CardData, index: number) => (
          <ProductServiceCard
            key={index}
            image={card.image}
            user={card.user}
            date={card.date}
            title={card.title}
            description={card.description}
            readMoreLink={card.readMoreLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductServicesBlock;
