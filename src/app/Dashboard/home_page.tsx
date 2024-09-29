import React from "react";
import NavbarTop from "../Header/navbar_top";
import NavbarMain from "../Header/navbar_main";
import CarouselPage from "../Carausel/carausel_page";


const Home_Page: React.FC = () => {
  return (
    <div className="bg-white">
    
      <NavbarTop />
      <NavbarMain />
      <CarouselPage />
      
    </div>
  );
};

export default Home_Page;
