import React from "react"; // Import React to use JSX
import { Link } from 'react-router-dom'; // Import Link for navigation between pages
import IonIcon from "@reacticons/ionicons"; // Import IonIcons for the arrow icon
import { SiAdobephotoshop } from "react-icons/si";
import { LuFigma } from "react-icons/lu";
import { SiAdobeillustrator } from "react-icons/si";
// Card component takes props to display project details dynamically
// Section wrapper for the card
// {title, descroption, skills, design and tools} are redering on the projects

function Card({ title, description, skills, design, tools,}) { 

  const handleClick = () => {
    window.scrollTo(0, 100);
  };

  const ToolIcon = iconMap[tools];

  return (
    <section>
      <div className="card">
        <div className="card-inner"> 
          <div className="box">
            <div className="imgBox">
              <img src={design}/>
            </div>
            <div className="icon-intro">
              <Link className="iconBox" to="/blenz"> 
              <IonIcon onClick={handleClick} className="icon" name="arrow-up-outline" />
                </Link>
            </div>
          </div>
        </div>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <ul>
          <li className="card-skills" > {skills} </li>
          <li className="card-tools" > {ToolIcon && <ToolIcon />} </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Card;

const iconMap = {
  "SiAdobephotoshop": SiAdobephotoshop,
  "LuFigma": LuFigma,
  "SiAdobeillustrator": SiAdobeillustrator,
};



