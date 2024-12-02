import React from "react"; // Import React to use JSX
import IonIcon from "@reacticons/ionicons"; // Import IonIcons for social media icons
import Logo from "/src/assets/logo.svg"; // Import logo image


function Footer () {
    return (
       <div className="footer">
        <hr />
        <h2>Let's Talk</h2>
        <p>Ready to bring your ideas to life!</p>
        <div className="footer-intro">
            <img src={Logo} alt="logo" />
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