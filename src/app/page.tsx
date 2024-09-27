
import Home_Page from "../app/Dashboard/home_page"; // Use lowercase
import CarouselPage from "./Carausel/carausel_page";
import NavbarMain from "./Header/navbar_main";
import NavbarTop from "./Header/navbar_top";
 // Adjust the path as necessary

const Home: React.FC = () => {
  return (
    <div>
      <NavbarTop />
      <NavbarMain />
      <CarouselPage />
      <Home_Page />
    </div>
  );
};

export default Home;
