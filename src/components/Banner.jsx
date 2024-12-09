import React from "react"; // Import React to use JSX
import BackGroundAnimation from "./BackGroundAnimation"; // Importing the background animation component

function Banner () {
    
    // .flip bring the animaton <div> <div> to switch according to set of CSS external.

    return(
        <div>
        <BackGroundAnimation />
            <div className="banner">
                <h1 className="bannerTitle">Hello</h1> 
            <div className="flip">
                <div><div>Nancy Wu</div></div>
                <div><div>am</div></div>
                <div><div>I</div></div>
            </div>
            <p>A Graphic Designer based in Vancouver.</p>
            </div>
        </div> 
    );
}

export default Banner;