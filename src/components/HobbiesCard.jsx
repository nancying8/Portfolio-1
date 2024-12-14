import React from "react"; // Import React to use JSX
import IonIcon from "@reacticons/ionicons"; // Import IonIcon for icons
import { FaCameraRetro } from "react-icons/fa"; //Import camera icon from react icon
import { GiHiking } from "react-icons/gi"; //Import hiking icon from react icon
import { MdFoodBank } from "react-icons/md"; //Import food icon from react icon


// .hoobiesCard wraps the entire hobbies section 

function HobbiesCard() {
  return (
    <section>
        <div className="hobbies">
            <h2>My Hobbies</h2>
            <p> On my free time, I like to do my favourite activities. </p>
            <div className="hoobies-icon">
                <div>
                <FaCameraRetro className="iconSkill" />
                {/* <p>I will call myself as amateur of photography. I like to caught the special random and spontanous moments.</p> */}
                </div>    
                <GiHiking className="iconSkill" />
                {/* <p>Hiking is my favourites activitiesin Summer time.</p> */}
                
                <MdFoodBank className="iconSkill" />
                {/* <p>Living in Vancouver with multicultural, I will like to try all diversity of foods.</p> */}
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
                <img src="" alt="Photography" />
                </div>
            </div>
            <div className="hobby-card">
                <IonIcon className="icon-pin" name="pin-outline" />
                <h3>Joe's Italian Deli</h3>
                <div className="image-wrapper">
                <img src="" alt="Foodie" />
                </div>
            </div>
            <div className="hobby-card">
                <IonIcon className="icon-pin" name="pin-outline" />
                <h3>Squamish - Third Peak</h3>
                <div className="image-wrapper">
                <img src="" alt="Hiking" />
                </div>
            </div>
            </div>
        </div>
    </section>
  );
}

export default HobbiesCard;
