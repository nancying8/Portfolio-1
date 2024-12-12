import React from "react"; // Import React to use JSX
import AboutContent from "../components/AboutContent"; // Import AboutContent component
import HobbiesCard from "../components/HobbiesCard"; // Import HobbiesCard component
import "../styles/About.css";
import WaveTitle from "../components/WaveTitle"; // Importing WaveTitle component for animated titles
// <AboutContent> Displays personal information and skills
// <HooobiesCard> Displays hobbies with associated images

function About () {
    return (
        <section>
            <div className="projects-intro">
                <WaveTitle className="title" text="About Me" speed={149} />
                    <p> My creative works with graphic design and UI/ UX skills</p>
            </div>
            <AboutContent /> 
            <HobbiesCard/>

        </section>
    );
}

export default About;