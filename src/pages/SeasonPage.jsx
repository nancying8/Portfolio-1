import React from 'react'; // Import React to use JSX
import { Link } from 'react-router-dom'; // Import Link for navigation between pages'
import IonIcon from "@reacticons/ionicons"; // Import IonIcons for the arrow icon
import "../styles/SeasonPage.css";
import { SiAdobephotoshop } from "react-icons/si";
import WaveTitle from "../components/WaveTitle"; // Importing WaveTitle component for animated titles

// Define the VioletPage component
// handleClick will scroll top the top in any link
// 'palette' is group of colours
// 'feature' are cards that show other projects

function SeasonPage () {

  const handleClick = () => {
    window.scrollTo(0, 150);
  };

  return (

    <section>
      <div className='blenzHero'>
        <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1734148914/summer_ww8iex.jpg" alt="" />
        <div className='heroText'>
          <h1>Design a Poster</h1>
          <h2> </h2> 
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
          <p> 27:00 hours</p>
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
          <div className='seaImg'>
              <img className='planetLogo' src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1734149795/Asset_6-8_futjjc.png" alt="planetLogo" />
          </div>
              <p> CFestival is an ficticos company create to project where the idea is create a summer poster for 2024. To celebrate the summer season what invoke reunion with music and foods. </p>
          </div>
          </div>
        <hr className='divider' />
        <div className='blenzCard2'>
          <div>
            <h2>Project Details</h2>
            <p> The project is redesign a existing printed poster while maintaining the main elements and highlight the concept. My idea is to incorporate rustic and refresh style.  </p>
            </div>
          <div className='blenzD'>
            <h3>Original Poster</h3>
            <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733799195/jdvphoucqjpk7uzziqfb.jpg" alt="" />
          </div>
      </div>
      <hr className='divider' />
      <div className='blenzCard4'>
        <div className='blenzIntro4'>
          <h2>Mood Board</h2>
          <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1734150882/Group_5_q272ni.png" alt="moodboard" />
        </div>
        <div>
          <h2>Colour Palette</h2>
          <div className="palette">
            <div className="color-swatch seaColor-1"><p>#5AC9E8</p></div>
            <div className="color-swatch seaColor-2"><p>#262262</p></div>
            <div className="color-swatch seaColor-3"><p>#FFFFFF</p></div>
            <div className="color-swatch seaColor-4"><p>#BD202E </p></div>
            <div className="color-swatch seaColor-5"><p>#FFC839</p></div>
            <div className="color-swatch seaColor-6"><p>#006838 </p></div>
          </div>
        </div>
      </div>
      <hr className='divider' />
      <div className='blenzCard5' >
        <h2>Mockup</h2>
        <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733786668/tk5el1j0t17m5jo3ex6n.jpg" alt="mockup" />
      </div>
      <hr className='divider' />
      <div className='blenzCard5'>
        <h2>Closing Statement</h2>
        <p> Design this poster was emotional and waeming since Summer represent enjoy and reunion where I want to implement this concept into this poster and I believe the messaje was delivered. </p>
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
                <img src='https://res.cloudinary.com/du7l1kfwn/image/upload/v1733786660/VIOLETCARD.jpg' alt='violet'/>
              </div>
              <div className="icon-intro">
                <Link className="iconBox" to="/violet"> 
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
                <img src='https://res.cloudinary.com/du7l1kfwn/image/upload/v1733907530/blenzPoster_tqhffu.jpg' alt='blenz'/>
              </div>
              <div className="icon-intro">
                <Link className="iconBox" to="/blenz"> 
                <IonIcon onClick={handleClick} className="icon" name="arrow-up-outline" />
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section> 
)}
      

export default SeasonPage;