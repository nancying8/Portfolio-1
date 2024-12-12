import React from "react"; // Import React to use JSX
import IonIcon from "@reacticons/ionicons"; // Import IonIcons for social media icons
import { Link } from "react-router-dom"; // Import Link for navigation
import Logo from "/src/assets/logo.svg"; // Import logo images
import "../styles/Footer.css";

function Footer () {

    const handleClick = () => {
        window.scrollTo(0, 100);
      };
     
    return (
       <div className="footer">
        <hr />
        <h2>Let's Grab a Pasta</h2>
        <p>Ready to bring your ideas to life!</p>
        <div className="footer-intro">
        
          <Link onClick={handleClick} to="/"> <img src={Logo} alt="logo" /> </Link>
            <div>         
            <a href="https://github.com/nancying8">
            <IonIcon className="footer-icon" name="logo-github" />
            </a>     
            <a href="https://www.linkedin.com/in/nancy-wuz/">
            <IonIcon className="footer-icon" name="logo-linkedin" />
            </a> 
            <IonIcon className="footer-icon" name="mail-outline" />
            </div>
            <p>All rights Reserved @ 2024 Nancy Wu</p>
        </div>

       </div>
    )
}

export default Footer;