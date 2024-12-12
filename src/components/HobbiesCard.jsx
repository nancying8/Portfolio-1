import React from "react"; // Import React to use JSX
import IonIcon from "@reacticons/ionicons"; // Import IonIcon for icons
import Flower from "/src/assets/flower.jpg"; // Import image of flower (Nature hobby)
import Food from "/src/assets/food.jpg"; // Import image of food (Foodie hobby)
import Hiking from "/src/assets/hiking.png"; // Import image of hiking (Hiking hobby)
import { FaCameraRetro } from "react-icons/fa";
import { GiHiking } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";


// .hoobiesCard wraps the entire hobbies section 

function HobbiesCard() {
  return (

    <div>


    <div className="hobbies">
        <h2>My Hobbies</h2>
        <p> On my free time, I like to do my favourites activities. </p>
        <div className="hoobies-icon">
        <div>
        <FaCameraRetro />
        <p>I will call myself as amateur of photography. I like to caught the special random and spontanous moments.</p>
        </div>    
        <GiHiking />
        <p>Hiking is my favourites activitiesin Summer time.</p>
        <p></p>
        <MdFoodBank />
        <p>Living in Vancouver with multicultural, I will like to try all diversity of foods.</p>

        </div>
        <p>Showcases my photography skills through my hobbies</p>

        <div className="hobby-intro">
        <div className="hobby-card">
            <IonIcon className="icon-pin" name="pin-outline" />
            <h3>NY - Rockefeller Center</h3>
            <div className="image-wrapper">
            <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733996244/IMG_8780_rkxgix.jpg" alt="Photography" />
            </div>
        </div>
        <div className="hobby-card">
            <IonIcon className="icon-pin" name="pin-outline" />
            <h3>Montreal - La Grande Roue de Montréal</h3>
            <div className="image-wrapper">
            <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733996240/IMG_9121_xb0trl.jpg" alt="Foodie" />
            </div>
        </div>
        <div className="hobby-card">
            <IonIcon className="icon-pin" name="pin-outline" />
            <h3>Ottawa - Parlament </h3>
            <div className="image-wrapper">
            <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733996240/IMG_8968_ssnx5a.jpg" alt="Hiking" />
            </div>
        </div>
        </div>
        <div className="hobby-intro">
        <div className="hobby-card">
            <IonIcon className="icon-pin" name="pin-outline" />
            <h3>Purple Orchird</h3>
            <div className="image-wrapper">
            <img src={Flower} alt="Photography" />
            </div>
        </div>
        <div className="hobby-card">
            <IonIcon className="icon-pin" name="pin-outline" />
            <h3>Joe's Italian Deli</h3>
            <div className="image-wrapper">
            <img src={Food} alt="Foodie" />
            </div>
        </div>
        <div className="hobby-card">
            <IonIcon className="icon-pin" name="pin-outline" />
            <h3>Squamish - Third Peak</h3>
            <div className="image-wrapper">
            <img src={Hiking} alt="Hiking" />
            </div>
        </div>
        </div>
    </div>

    </div>
  );
}

export default HobbiesCard;
