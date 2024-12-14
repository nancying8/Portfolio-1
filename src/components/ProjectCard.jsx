import React from "react"; // Import React to use JSX
import { Link } from 'react-router-dom'; // Import Link for navigation between pages
import IonIcon from "@reacticons/ionicons"; // Import IonIcons for the arrow icon
import { SiAdobephotoshop } from "react-icons/si";
import { LuFigma } from "react-icons/lu";
import { SiAdobeillustrator } from "react-icons/si";
// Card component takes props to display project details dynamically
// Section wrapper for the card
// {title, descroption, skills, design and tools} are redering on the projects

function Card() { 

  const handleClick = () => {
    window.scrollTo(0, 150);
  };

 

  return (
    <section>
         <div className="card">
        <div className="card-inner"> 
          <div className="box">
            <div className="imgBox">
              <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733907530/blenzPoster_tqhffu.jpg"/>
            </div>
            <div className="icon-intro">
              <Link className="iconBox" to="/blenz"> 
              <IonIcon onClick={handleClick} className="icon" name="arrow-up-outline" />
                </Link>
            </div>
          </div>
        </div>
        <div className="card-content">
          <h3>Redesign a Poster</h3>
          <p>Blenz Coffee and Planet Bee Honey Farm have collaborated to create new beverages.</p>
          <ul>
          <li className="card-skills" > Graphic Design </li>
          <li className="card-tools" > <SiAdobephotoshop/> </li>
          </ul>
        </div>
      </div>
      <div className="card">
        <div className="card-inner"> 
          <div className="box">
            <div className="imgBox">
              <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733786682/okmv4ro3gan47xgzn3sj.jpg"/>
            </div>
            <div className="icon-intro">
              <Link className="iconBox" to="/kinemi"> 
              <IonIcon onClick={handleClick} className="icon" name="arrow-up-outline" />
                </Link>
            </div>
          </div>
        </div>
        <div className="card-content">
          <h3>Redesign a Website</h3>
          <p>Kinemi's Kitchen a Japanese-Italian Restaurant in Vancouver}</p>
          <ul>
          <li className="card-skills" >Graphic Design </li>
          <li className="card-tools" > <LuFigma/> </li>
          </ul>
        </div>
      </div>
      <div className="card">
        <div className="card-inner"> 
          <div className="box">
            <div className="imgBox">
              <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733786660/VIOLETCARD.jpg"/>
            </div>
            <div className="icon-intro">
              <Link className="iconBox" to="/violet"> 
              <IonIcon onClick={handleClick} className="icon" name="arrow-up-outline" />
                </Link>
            </div>
          </div>
        </div>
        <div className="card-content">
          <h3>Design Business Card</h3>
          <p>Violet Cosmetics a small business in Vancouver</p>
          <ul>
          <li className="card-skills" > Graphic Design </li>
          <li className="card-tools" > <SiAdobephotoshop/> </li>
          </ul>
        </div>
      </div>
      <div className="card">
        <div className="card-inner"> 
          <div className="box">
            <div className="imgBox">
              <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733786668/tk5el1j0t17m5jo3ex6n.jpg"/>
            </div>
            <div className="icon-intro">
              <Link className="iconBox" to="/season"> 
              <IonIcon onClick={handleClick} className="icon" name="arrow-up-outline" />
                </Link>
            </div>
          </div>
        </div>
        <div className="card-content">
          <h3>Design a Poster</h3>
          <p>CFestival promo a Summer Event in Central Park</p>
          <ul>
          <li className="card-skills" >Graphic Design </li>
          <li className="card-tools" > <SiAdobeillustrator/> </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Card;

