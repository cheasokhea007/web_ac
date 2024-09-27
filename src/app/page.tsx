
import Home_Page from "../app/Dashboard/home_page"; // Use lowercase
import NavbarMain from "./Header/navbar_main";
import NavbarTop from "./Header/navbar_top";
 // Adjust the path as necessary

const Home: React.FC = () => {
  return (
    <div>
      <NavbarTop />
      <NavbarMain />
      <Home_Page />
    </div>
  );
};

export default Home;
