import React from 'react'; // Import React to use JSX
import { Link } from 'react-router-dom'; // Import Link for navigation between pages'
import IonIcon from "@reacticons/ionicons"; // Import IonIcons for the arrow icon
import "../styles/BlenzPage.css";
import { SiAdobephotoshop } from "react-icons/si";
import WaveTitle from "../components/WaveTitle"; // Importing WaveTitle component for animated titles

// Define the VioletPage component
// handleClick will scroll top the top in any link
// 'palette' is group of colours
// 'feature' are cards that show other projects

function BlenzPage () {

  const handleClick = () => {
    window.scrollTo(0, 150);
  };

  return (

    <section>
      <div className='blenzHero'>
        <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/f_auto,q_auto/g7hwjojjdf3e4kwuulzg" alt="" />
        <div className='heroText'>
          <h1> Redesign a Poster</h1>
          <h2> BLENZ COFFEE</h2> 
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
            <div className='blenzImg'>
                  <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733958654/blenzLogo_h7fpy0.webp" alt="blenzLogo" />
                  <img className='planetLogo' src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733958642/PlanetBee-Logo-2018_359x_r7nq4e.avif" alt="planetLogo" />
            </div>
              <p>Blenz Coffee is a Canadian coffee chain known for its focus on quality ingredients and supporting local businesses. They partnered with Planet Bee Honey Farm in Vernon to create a special range of beverages featuring coffee, tea, oat, and honey for Spring Season 2024. </p>
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
        <div className='blenzCard3'>
          <div>
            <h2> Target Audience  </h2>
            <ul>
              <li>Coffee and Tea Enthusiasts</li>
              <li>Young Professionals and students</li>
              <li>Seasonal Shoppers</li>
            </ul>
            </div>
          <div>
            <h2> Target Age </h2>
            <ul>
              <li>( 18-28 ) </li>
            </ul>
            </div>
          <div>
            <h2>Location Display</h2>
            <ul>
              <li> Urban and Suburban Areas </li>
              <li> Central Mall</li>
              <li> Social Media</li>
            </ul>
          </div>
      </div>
      <hr className='divider' />
      <div className='blenzCard4'>
        <div className='blenzIntro4'>
          <h2>Mood Board</h2>
          <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733978297/Group_3_tvihyr.png" alt="moodboard" />
        </div>
        <div>
          <h2>Colour Palette</h2>
          <div className="palette">
            <div className="color-swatch color-1"><p> #472616</p></div>
            <div className="color-swatch color-2"><p> #00000</p></div>
            <div className="color-swatch color-3"><p>#FFFFFF</p></div>
            <div className="color-swatch color-4"><p>#FFD96E </p></div>
            <div className="color-swatch color-5"><p>#FAA41E</p></div>
            <div className="color-swatch color-6"><p>#D7AFD2 </p></div>
          </div>
        </div>
      </div>
      <hr className='divider' />
      <div className='blenzCard5' >
        <h2>Mockup</h2>
        <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733802155/radjgn7ntxpmqjhgyeuj.jpg" alt="mockup" />
      </div>
      <hr className='divider' />
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
  );
};

export default BlenzPage;
