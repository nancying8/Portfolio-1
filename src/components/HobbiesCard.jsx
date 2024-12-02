import React from "react"; // Import React to use JSX
import IonIcon from "@reacticons/ionicons"; // Import IonIcon for icons
import Flower from "../assets/flower.jpg"; // Import image of flower (Nature hobby)
import Food from "../assets/food.jpg"; // Import image of food (Foodie hobby)
import Hiking from "../assets/hiking.png"; // Import image of hiking (Hiking hobby)

// .hoobiesCard wraps the entire hobbies section 

function HobbiesCard() {
  return (
    <div className="hobbies">
        <h2>My Hobbies</h2>
        <p>Showcases my photography skills through my hobbies</p>
        <div className="hobby-intro">
        <div className="hobby-card">
            <IonIcon className="icon-pin" name="pin-outline" />
            <h3>Photos</h3>
            <div className="image-wrapper">
            <img src={Flower} alt="Photography" />
            </div>
        </div>
        <div className="hobby-card">
            <IonIcon className="icon-pin" name="pin-outline" />
            <h3>Foods</h3>
            <div className="image-wrapper">
            <img src={Food} alt="Foodie" />
            </div>
        </div>
        <div className="hobby-card">
            <IonIcon className="icon-pin" name="pin-outline" />
            <h3>Hiking</h3>
            <div className="image-wrapper">
            <img src={Hiking} alt="Hiking" />
            </div>
        </div>
        </div>
    </div>
  );
}

export default HobbiesCard;
