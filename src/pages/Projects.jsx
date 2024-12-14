import React  from "react"; // Import React to use JSX
import ProjectCard from "../components/ProjectCard"; // Importing ProjectCard component to display individual project details
import IonIcon from "@reacticons/ionicons"; // Importing IonIcon for arrow icons
import WaveTitle from "../components/WaveTitle"; // Importing WaveTitle component for animated titles
import "../styles/Project.css";

function Projects () {

    // Using useState hook to store and manage project card data
    // Using Chevron-down icons to visually indicate more content like a button
    
    // cardsData array each element into "card"
    // map > Displaying all the project cards dynamically 
    // the object "card" by adding proper properties from the projectInfo.json like (id, tittle, description...)
    
    return (
        <div>
            <div className="projects-intro">
                <WaveTitle className="title" text="My Projects" speed={149} />
                    <p> My creative works with graphic design and UI/ UX skills</p>
            </div>
                <div className="ion-arrow-container">
                    <IonIcon className="ion-arrow" name="chevron-down-outline"/>
                    <IonIcon className="ion-arrow" name="chevron-down-outline"/>
                    <IonIcon className="ion-arrow" name="chevron-down-outline"/>
                </div>   
            <div className="card-container">
                    <ProjectCard />
            </div>
        </div>
    );
}

export default Projects;