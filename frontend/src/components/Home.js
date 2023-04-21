import React from 'react';
import './Home.css';
/*import pyramidImage from '../images/TheGreatSilverPyramidofAnuberin.jpg';*/

import homeBackground from '../images/Home_Background.png';





// Home.js, About.js, and Contact.js
export default function Home() {
    // component code here

    return (
        <div className="home-page">
    
            <div className="home-bg">
               
                <img src={homeBackground} alt="Home Background" className="home-image" class="background-image" />
                <button className="home-mint-button home-minit-button">Mint Cards</button>


                <button className="panthea-title-button">PANTHEA</button>
                <button className="immortal-title-button">Immortal</button>
         
            </div>



           {/* <div className="home-buttons">*/}
               

         {/*   </div>*/}

        </div>
    );
}