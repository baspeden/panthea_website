import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/Home';
/*import About from './components/About';
import HowToPlay from './components/HowToPlay';*/
import Ardanoan from './components/Ardanoan';
import Hederoth from './components/Hederoth';
import Ethubian from './components/Ethubian';
import Bitzantian from './components/Bitzantian';
import Binaanxi from './components/Binaanxi';
import Solcana from './components/Solcana';

import './NavbarStyles.css';
import './ButtonStyles.css';





const handleLogoClick = () => {
 /*   window.scrollTo({
        top: window.outerHeight / 4,
        left: 0,
        behavior: 'smooth'
    });*/


 /*   const navbar = document.querySelector('.navbar-container');
    navbar.style.transform = 'translateY(50vh)';
    window.scrollTo(0, window.innerHeight / 2);*/
   /* window.scrollTo(0, window.innerHeight / 2);*/
}


function App() {
 
    
    return (
        <Router>
            <div >
                <nav className="navbar-container">


                    <NavLink to="/" activeClassName="active-link" exact>
                        <button className="fantasy-button logo-button" onClick={handleLogoClick} ></button>
                    </NavLink>
                   
                    <div className="nav-content">
                        <NavLink to="/bitzantian" activeClassName="active-link">
                            <button className="fantasy-button bitzantian-button" aria-label="Bitzantian"></button>
                        </NavLink>

                        <NavLink to="/ardanoan" activeClassName="active-link">
                            <button className="fantasy-button ardanoan-button" aria-label="Ardanoan"></button>
                        </NavLink>

                        <NavLink to="/hederoth" activeClassName="active-link">
                            <button className="fantasy-button hederoth-button" aria-label="Hederoth"></button>
                        </NavLink>

                        <NavLink to="/ethubian" activeClassName="active-link">
                            <button className="fantasy-button ethubian-button" aria-label="Ethubian"></button>
                        </NavLink>
                        <NavLink to="/binaanxi" activeClassName="active-link">
                            <button className="fantasy-button binaanxi-button" aria-label="Binaanxi"></button>
                        </NavLink>
                        <NavLink to="/solcana" activeClassName="active-link">
                            <button className="fantasy-button solcana-button" aria-label="Solcana"></button>
                        </NavLink>

            

                        <NavLink to="/mint" activeClassName="active-link">
                            <button className="fantasy-button connectwallet-button">Connect Wallet</button>
                        </NavLink>


                    </div>

                    



                </nav>

                <div >
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/bitzantian" element={<Bitzantian />} />
                        <Route path="/ardanoan" element={<Ardanoan />} />
                        <Route path="/hederoth" element={<Hederoth />} />
                        <Route path="/ethubian" element={<Ethubian />} />

                        <Route path="/binaanxi" element={<Binaanxi />} />
                        <Route path="/solcana" element={<Solcana />} />

                    
                    </Routes>
                </div>
            </div>
        </Router>




    );
}

export default App;






/*handleLogoClick = () => {
    window.scrollTo(0, window.innerHeight / 2);
}*/


{/*   <NavLink to="/about" activeClassName="active-link">
                        <button className="fantasy-button">About</button>
                    </NavLink>
                    <NavLink to="/how-to-play" activeClassName="active-link">
                        <button className="fantasy-button">How to Play</button>
                    </NavLink>*/}

{/* <NavLink to="/mint" activeClassName="active-link">

                        <div className="mint-button-wrapper">
                            <button className="fantasy-button mint-button">Mint</button>
                        </div>

                    </NavLink>*/}


{/* <Route path="/about" element={<About />} />
                        <Route path="/how-to-play" element={<HowToPlay />} />*/}