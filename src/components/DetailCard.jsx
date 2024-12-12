import React, { useEffect } from "react"; 
// Importing React and the useEffect hook from React library for functional component behavior
// useEffect is used to perform side effects like initializing libraries after the component renders
import AOS from "aos"; // Import AOS library for scroll animations
import "aos/dist/aos.css"; // Import the AOS styles
import CardInfo from "../data/CardInfo.json" // Importing project data from the JSON file

function HomeCard() {
  // Initialize AOS when the component is mounted
  useEffect(() => {
    AOS.init({
      offset: 500, // Trigger animation when the element is 500px from the top of the screen
      duration: 1000, // Set animation duration to 1 second
    });
  }, []);

  return (
    <div className="cardD-container">
      {CardInfo.map((card) => (
        <div 
          key={card.id} 
          className={card.animation === "fade-down-left" ? "card-left" : "card-right"}
          data-aos={card.animation}
        >
          <img src={card.image} alt={card.alt} />
        </div>
      ))}
    </div>
  );
}

export default HomeCard;
