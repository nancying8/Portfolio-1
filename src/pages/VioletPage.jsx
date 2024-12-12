import React from "react";
import WaveTitle from "../components/WaveTitle";
import { BsFillEmojiLaughingFill } from "react-icons/bs";


function VioletPage () {

    return (
        <section>
            <div className="projects-intro">
                <WaveTitle className="title" text="Coming Soon" speed={150} />
              
                    <BsFillEmojiLaughingFill className="emoji"/>
            
            </div>
        
        </section>

        
    )
}

export default VioletPage;