import React, {useState} from "react"; // Import React to use JSX
import ProjectInfo from "../data/ProjectInfo.json"; // Importing project data from the JSON file
import ProjectCard from "../components/ProjectCard"; // Importing ProjectCard component to display individual project details
import IonIcon from "@reacticons/ionicons"; // Importing IonIcon for arrow icons
import WaveTitle from "../components/WaveTitle"; // Importing WaveTitle component for animated titles

function Projects () {

    // Using useState hook to store and manage project card data
    // Using Chevron-down icons to visually indicate more content like a button
    
    // cardsData array each element into "card"
    // map > Displaying all the project cards dynamically 
    // the object "card" by adding proper properties from the projectInfo.json like (id, tittle, description...)

    const [cardsData, setCardsData] = useState(ProjectInfo);
    
    return (
        <div>
            <div className="projects-intro">
                <WaveTitle className="title" text="My Projects" speed={150} />
                    <p> My creative works with graphic design and UI/ UX skills</p>
            </div>
                <div className="ion-arrow-container">
                    <IonIcon className="ion-arrow" name="chevron-down-outline"/>
                    <IonIcon className="ion-arrow" name="chevron-down-outline"/>
                    <IonIcon className="ion-arrow" name="chevron-down-outline"/>
                </div>   
            <div className="card-container">
                    {cardsData.map((card) => (
                        <ProjectCard
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        skills={card.skills}
                        tools={card.tools}
                        design={card.design}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Projects;