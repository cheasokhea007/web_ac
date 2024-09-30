import React from "react";
import NavbarTop from "../Header/navbar_top";
import NavbarMain from "../Header/navbar_main";
import CarouselPage from "../Carausel/carausel_page";
import ServicesCard from "../Services/services";
import SavingsAccount from "../Deposit/SavingsAccount/savings_account";
import FixedDeposit from "../Deposit/Fixed Deposit/fixed_deposit";
import CreditDeposit from "../Deposit/Credits/credit_deposit";
import ProductServicesBlock from "../ProductServices/product_services_block";
import FooterPage from "../Footer/footer_page";


const Home_Page: React.FC = () => {
  return (
    <div className="bg-white ">
    
      <NavbarTop />
      <NavbarMain />
      <CarouselPage />
      <ServicesCard />
      <SavingsAccount />
      <FixedDeposit />
      <CreditDeposit />
      <ProductServicesBlock />
      <FooterPage />
      
    </div>
  );
};

export default Home_Page;
