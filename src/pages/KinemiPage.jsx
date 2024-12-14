import React from 'react'; // Import React to use JSX
import { Link } from 'react-router-dom'; // Import Link for navigation between pages'
import IonIcon from "@reacticons/ionicons"; // Import IonIcons for the arrow icon
import "../styles/KinemiPage.css";
import WaveTitle from "../components/WaveTitle"; // Importing WaveTitle component for animated titles
import { LuFigma } from "react-icons/lu";

// Define the VioletPage component
// handleClick will scroll top the top in any link
// 'palette' is group of colours
// 'feature' are cards that show other projects

function KinemiPage () {

    const handleClick = () => {
        window.scrollTo(0, 150);
      };
      return (
        <section>
          <div className='kinHero'>
            <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733994677/Screenshot_2024-12-12_at_1.10.58_AM_hdjsxp.png" alt="" />
            <div className='heroText'>
              <h1> Redesign a Webiste</h1>
              <h2>Kinemi's Kitchen</h2> 
            </div>
          </div>
          <div className='kinSection'>
            <div>
              <h3>Role</h3>
              <p> UI/ UX</p>
            </div>
            <hr />
            <div>
              <h3>Time</h3>
              <p> 37:00 hours</p>
            </div>
            <hr />
            <div>
              <h3>Year</h3>
              <p> 2024</p>
            </div>
            <hr />
            <div>
              <h3>Software</h3>
              <LuFigma className='software' />
            </div>
          </div>
          <hr className='divider' />
          <div className='kinCard1'>
              <h2>Description</h2>
            <div className='kinInfo' >
                <div className='kinImg'>
                      <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733996324/logo-red--2_e7pggr.png" alt="blenzLogo" />    
                </div>
                  <p>Kinemi’s Kitchen, established in 2015, is a small family-owned restaurant located in the Champlain Heights neighbourhood of Vancouver. It is known for its fusion of Japanese and Italian cuisine. The restaurant has earned a reputation as “The Hidden Gem in Champlain Heights” among locals. </p>
              </div>
              </div>
            <hr className='divider' />
            <div className='kinCard2'>
              <div>
                <h2>Project Details</h2>
                <p> The project is redesign a existing printed poster while maintaining the main elements and highlight the concept. My idea is to incorporate rustic and refresh style.  </p>
                </div>
              <div className='kinD'>
                <h3>Original Website</h3>
                <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733996629/Screenshot_2024-07-22_at_10.58.38_AM_wziaqy.png" alt="" />
              </div>
          </div>
          <hr className='divider' />
            <div className='kinCard5'>
              <h2>User Persona</h2>
              <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733996914/5_u0ht9l.png" alt="user persona" />
          </div>
          <hr className='divider' />
            <div className='kinCard5'>
              <h2>User Scnerario </h2>
              <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733996916/7_arqcvf.png" alt="user persona" />
          </div>
          <hr className='divider' />
            <div className='kinCard5'>
              <h2>Empathy Map</h2>
              <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733996916/9_yizr2d.png" alt="user persona" />
          </div>
          <hr className='divider' />
            <div className='kinCard5'>
              <h2>Journey Map</h2>
              <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733996917/11_wjvsyx.png" alt="user persona" />
          </div>
          <hr className='divider' />
            <div className='kinCard5'>
              <h2>Flow Chart</h2>
              <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733996919/13_ngvgb5.png" alt="user persona" />
          </div>
          <hr className='divider' />
            <div className='kinCard5'>
              <h2>Low Fidelity Wireframe</h2>
              <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733997207/Group_62_cqrv0u.png" alt="low fidelity" />
          </div>
          <hr className='divider' />
            <div className='kinCard5'>
              <h2>High Fidelity Wireframe</h2>
              <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733997399/Group_60_1_yvc1um.png" alt="high fidelity" />
          </div>
          <hr className='divider' />
          <div className='kinCard4'>
            <div className='kinIntro4'>
              <h2>Typography</h2>
              <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733995984/Group_62_1_hkwgpn.png" alt="fonts" />
            </div>
            <div>
              <h2>Colour Palette</h2>
              <div className="kinPalette">
                <div className="kinColor-swatch kinColor-1"><p> #8E0403</p></div>
                <div className="kinColor-swatch kinColor-2"><p> #00000</p></div>
                <div className="kinColor-swatch kinColor-3"><p>#FFFFFF</p></div>
                <div className="kinColor-swatch kinColor-4"><p>#FFFAFA </p></div>
                <div className="kinColor-swatch kinColor-5"><p>#FD9D9D9</p></div>
              </div>
            </div>
          </div>
          <hr className='divider' />
          <div className='kinCard5' >
            <h2>Mockup</h2>
            <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733994454/kinemimock_squoxa.jpg" alt="mockup" />
          </div>
          <hr className='divider' />
          <div className='kinCard5'>
            <h2>Closing Statement</h2>
            <p>Redesigning The Kinemi's Kitchen website combines user-friendly design with a seamless UX/UI experience, making it easier for customers to explore the menu, make reservations, and connect with the restaurant.</p>
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
    )
}

export default KinemiPage;