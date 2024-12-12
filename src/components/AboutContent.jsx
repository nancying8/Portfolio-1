import React from "react"; // Import React to use JSX
import Photo from "/src/assets/logo.svg";
import AboutInfo from "../data/AboutInfo.json" // Importing project data from the JSON file
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiAdobepremierepro, SiHtml5, SiCss3, SiTailwindcss, SiFigma, SiReact } from "react-icons/si";

function AboutContent () {

    // skills-container for skills list, dynamically generated by mapping over the AboutInfo JSON
    // Rendering each skill item and assigning a unique key (index here)
    return (
        <div>
            <div className="about-content">
                <div className="about-intro">
                    <img src={Photo} />
                    <div className="about-text">
                        <h1>Hi , I am Nancy</h1>
                        <p> I am currenntly studend at BCIT in New Media design. I’m enhancing my skills at my course. I have been working with customer service for over 10 years, which bringing my core values of integrity, responsibility, and perseverance to every project. Beyond design, 
                            I love hiking, capturing stunning photos, and exploring new flavors as a dedicated foodie.
                        </p>
                    </div>
                </div>
            </div>

            <hr className='divider' />

            <h2 className="skill-title"> My Skills </h2>
            <div className="skills-container">
            <SiAdobephotoshop className="iconSkill"  />
            <SiAdobeillustrator className="iconSkill" />
            <SiAdobeindesign className="iconSkill" />
            <SiAdobepremierepro className="iconSkill" />
            <SiHtml5 className="iconSkill" />
            <SiCss3 className="iconSkill" />
            <SiTailwindcss className="iconSkill" />
            <SiFigma className="iconSkill" />
            <SiReact className="iconSkill" />
            </div>

            <hr className='divider' />

        </div>
            
    )
}

export default AboutContent;