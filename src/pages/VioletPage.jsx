import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation between pages'
import IonIcon from "@reacticons/ionicons"; // Import IonIcons for the arrow icon
import "../styles/VioletPage.css";
import { SiAdobephotoshop } from "react-icons/si";
import WaveTitle from "../components/WaveTitle"; // Importing WaveTitle component for animated titles



function VioletPage () {

    const handleClick = () => {
        window.scrollTo(0, 150);
      };

    return (
        <section>
            <div className='violetHero'>
                <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1734144274/Screenshot_2024-12-13_at_6.43.48_PM_d5xqs2.png" alt="violet" />
                <div className='heroText'>
                    <h1> Desgin a </h1>
                    <h1> Business Card</h1>
                    <h2> Violet Cosmetic</h2> 
                </div>
            </div>

            <div className='blenzSection'>
                <div>
                <h3>Role</h3>
                <p> Graphic Desginer</p>
                </div>
                <hr />
                <div>
                <h3>Time</h3>
                <p> 30:00 hours</p>
                </div>
                <hr />
                <div>
                <h3>Year</h3>
                <p> 2024</p>
                </div>
                <hr />
                <div>
                <h3>Software</h3>
                <SiAdobephotoshop className='software' />
                </div>
            </div>

            <hr className='divider' />

            <div className='blenzCard1'>
                <h2>Description</h2>
                <div className='blenzInfo' >
                    <p>This project was to create a logo and business card. Violet Cosmetic is a ficticios was created for this project where this client will provide the company details such a name, phone number, email and detial waht are they are selling. They chose main colour (deep purple #77278F) to create the artworks. </p>
                </div>
                </div>
                <hr className='divider' />

                <div className='blenzCard2'>
                <div>
                    <h2>Inspirations</h2>
                    <p> I want to create a unique and classic logo where represent the concept of 'cosmetic' where I got the inspirtation a technic one line draw. </p>
                    </div>
                <div className='blenzD'>
                    <h3>By sil_b_illustration </h3>
                    <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1734145108/Screenshot_2024-12-13_at_6.57.58_PM_mzwf44.png" alt="" />
                </div>
            </div>

            <hr className='divider' />
            

                <div className='blenzCard3'>
        
                <div className='violetLogo'>
                <h2>Sketch</h2>
                <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1734146234/WuZheng_LogoSketch_bzf4iu.jpg" alt="sketch" />
                </div>

                <div className='violetLogo' >
                <h2>Final Artwork</h2>

                <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1734152195/newlogo_wpc9jq.png" alt="mockup" />
            </div>
                
            </div>
            <hr className='divider' />

            <div className='blenzCard4'>
                <div className='blenzIntro4'>
                <h2>Mood Board</h2>
                <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1734147191/Group_4_j770h4.png" alt="moodboard" />
                </div>
                <div>
                <h2>Colour Palette</h2>
                
                <div className="palette">
                    <div className="color-swatch violeColor-1"><p>#77278F</p></div>
                    <div className="color-swatch violeColor-2"><p>#00000</p></div>
                    <div className="color-swatch violeColor-3"><p>#FFFFFF</p></div>
                    <div className="color-swatch violeColor-4"><p>#895AA5 </p></div>
                    <div className="color-swatch violeColor-5"><p>#FAA41E</p></div>
                    <div className="color-swatch violeColor-6"><p>#D7AFD2 </p></div>
                </div>
                </div>
            </div>

            <hr className='divider' />

            <div className='blenzCard5' >
                <h2>Mockup</h2>

                <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733786660/VIOLETCARD.jpg" alt="mockup" />
            </div>
            

            <div className='blenzCard5'>
                <h2>Closing Statement</h2>
                <p>Redesigning this poster was a journey by ensuring every element communicates the essence of Blenz Coffee’s collaboration with Planet Bee. Each adjustment, from typography to imagery, was made with careful consideration of aesthetics, messaging, and audience appeal. The final design not only highlights the uniqueness of the seasonal offering but also strengthens the connection between the brand and its community.</p>
            </div>

            <hr className='divider' />

            <div className="featuresIntro">
                        <WaveTitle className="title" text="More    Projects" speed={150} />
                            
                    </div>

            <div className='featuresCard'>

                <div className="blenzCard">
                <div className="blenzInner"> 
                    <div className="blenzBox">
                    <div className="imgBox">
                        <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/f_auto,q_auto/g7hwjojjdf3e4kwuulzg" alt="blenz"/>
                    </div>
                    <div className="icon-intro">
                        <Link className="iconBox" to="/blenz"> 
                        <IonIcon onClick={handleClick} className="icon" name="arrow-up-outline" />
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
                <div className="blenzCard">
                <div className="blenzInner"> 
                    <div className="blenzBox">
                    <div className="imgBox">
                        <img src='https://res.cloudinary.com/du7l1kfwn/image/upload/v1733786682/okmv4ro3gan47xgzn3sj.jpg' alt='kinemi'/>
                    </div>
                    <div className="icon-intro">
                        <Link className="iconBox" to="/kinemi"> 
                        <IonIcon onClick={handleClick} className="icon" name="arrow-up-outline" />
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
                <div className="blenzCard">
                <div className="blenzInner"> 
                    <div className="blenzBox">
                    <div className="imgBox">
                        <img src='https://res.cloudinary.com/du7l1kfwn/image/upload/v1733786668/tk5el1j0t17m5jo3ex6n.jpg' alt='season'/>
                    </div>
                    <div className="icon-intro">
                        <Link className="iconBox" to="/season"> 
                        <IonIcon onClick={handleClick} className="icon" name="arrow-up-outline" />
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            
    
        </section>

        
    )
}

export default VioletPage;