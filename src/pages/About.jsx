import React from "react"; // Import React to use JSX
import AboutContent from "../components/AboutContent"; // Import AboutContent component
import HobbiesCard from "../components/HobbiesCard"; // Import HobbiesCard component

// <AboutContent> Displays personal information and skills
// <HooobiesCard> Displays hobbies with associated images

function About () {
    return (
        <div>
            <AboutContent /> 
            <HobbiesCard /> 
        </div>
    );
}

export default About;