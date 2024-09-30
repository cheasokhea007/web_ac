import Home_Page from "../app/Dashboard/home_page"; // Ensure correct path
import { Blinker } from 'next/font/google'; // Import the font

// Configure the Blinker font
const blinker = Blinker({
  subsets: ['latin'], // Add other subsets if needed
  weight: ['400', '700'], // Define weights you are using
});

const Home: React.FC = () => {
  return (
    <div className={blinker.className}> 
      <Home_Page />
    </div>
  );
};

export default Home;
