import React from "react";
import NavbarTop from "../Header/navbar_top";
import NavbarMain from "../Header/navbar_main";
import CarouselPage from "../Carausel/carausel_page";
import ServicesCard from "../Services/services";
import SavingsAccount from "../Deposit/SavingsAccount/savings_account";


const Home_Page: React.FC = () => {
  return (
    <div className="bg-white">
    
      <NavbarTop />
      <NavbarMain />
      <CarouselPage />
      <ServicesCard />
      <SavingsAccount />
      
    </div>
  );
};

export default Home_Page;
