import React from "react"; // Import React to use JSX
import AboutContent from "../components/AboutContent"; // Import AboutContent component
import HobbiesCard from "../components/HobbiesCard"; // Import HobbiesCard component
import "../styles/About.css";
import WaveTitle from "../components/WaveTitle"; // Importing WaveTitle component for animated titles
import IonIcon from "@reacticons/ionicons"; // Importing IonIcon for arrow icons

function About () {
    return (
        <section>
            <div className="projects-intro">
                <WaveTitle className="title" text="About  Me" speed={149} />
                <div className="ion-arrow-container">
                    <IonIcon className="ion-arrow" name="chevron-down-outline"/>
                    <IonIcon className="ion-arrow" name="chevron-down-outline"/>
                    <IonIcon className="ion-arrow" name="chevron-down-outline"/>
                </div>  
            </div>
            <AboutContent /> 
            <HobbiesCard/>

        </section>
    );
}

export default About;