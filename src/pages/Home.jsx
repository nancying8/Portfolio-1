import React  from "react"; // Import React to use JSX
import Banner from "../components/Banner"; // Importing the Banner component to display the banner section
import { Link } from "react-router-dom"; // Importing Link from react-router-dom for navigation
import WaveTitle from "../components/WaveTitle"; // Importing the WaveTitle component for animated titles
import DetailCard from "../components/DetailCard"; // Importing the DetailCard component to display project details
import IonIcon from "@reacticons/ionicons"; // Importing IonIcon for icon usage
import { motion } from "framer-motion"; // Importing motion for animations

function Home() {
  
  // handleClick function to scroll to the top page when the "Read More" link is clicked
  // so it will appear on top of the page

  // <WaveTitle> is a Framer-Motion that animate the text and by adding 'speed 150' 

  // button is <Link> navigate to go to the Projects page 
  // adding on the side an arrow icon that move by using <motion>
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

    return (

      <section>
        <Banner />
        <div className="home-sub">
        <WaveTitle text="My Works" speed={150} />
        <h3>2024</h3>
        </div>
        <DetailCard />
        <div className="sub-button">
        <Link 
          to="/projects" 
          onClick={handleClick}>
          Read More
        </Link>
        <motion.div
        animate={{
          x: [0,-5, 5, 0], 
        }}
        transition={{
          duration: 1, 
          repeat: Infinity, 
          repeatType: 'loop',
          ease: 'easeInOut', 
        }}
        >
        <IonIcon className="button-arrow" name="arrow-up-outline" />
        </motion.div>
        </div>
    </section>
    );
}

export default Home;