import React from 'react';
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import HomePage from "./routes/home-page";
import ServicesPage from "./routes/services-page";
import ContactPage from "./routes/contact-page";
import AboutPage from "./routes/about-page";
import NewsPage from "./routes/news-page";
import CasePage from "./routes/case-page";
import {motion} from "framer-motion";
import AnimatedCursor from "react-animated-cursor";
import FooterImg from './assets/footer.png';
import FooterArrow from './assets/footer-arrow.svg';
import {ParallaxBanner, ParallaxBannerLayer, ParallaxProvider} from "react-scroll-parallax";

function NavBar(){
  return(
    <motion.nav initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, type: 'spring'}}>
        <div>
            <NavLink className='logo primary-link' to='/'>UNIXSTUDIO</NavLink>
        </div>
        <div className='links change-font'>
            <NavLink className='primary-link' to='/cases'>CASES</NavLink>
            <NavLink className='primary-link' to='/services'>SERVICES</NavLink>
            <NavLink className='primary-link' to='/about'>ABOUT</NavLink>
            <NavLink className='primary-link' to='/contact'>CONTACT</NavLink>
            <NavLink className='primary-link' to='/news'>NEWS</NavLink>
        </div>
        <div className='menu-icon'></div>
    </motion.nav>
  )
}


//TODO animations
function Footer(){
    return(
        <footer>
            <div className='footer-container'>
                <div className='inner'>
                    <div className='footer-grid'>
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                        <a href="#">Dribble</a>
                        <a href="#">Linkedin</a>
                        <a href="#">Behance</a>
                        <a href="#">Telegram</a>
                    </div>
                    <div>
                        <p className='change-font' style={{color: '#7c7c7c', fontSize: 16}}>OUR TEAM IS</p>
                        <h4>IN NEW YORK, USA</h4>
                    </div>
                    <div>
                        <p className='change-font' style={{color: '#7c7c7c', fontSize: 16}}>DROP US A LINE</p>
                        <h4 className='change-font' style={{fontWeight: 500}}>contact@unixstudio.agency</h4>
                    </div>
                    <Link to='/contact' className='footer-btn change-font'>
                        <p>BECOME A CLIENT</p>
                        <img src={FooterArrow}/>
                    </Link>
                </div>
            </div>
            <ParallaxProvider>
                <ParallaxBanner>
                    <div className='footer-bg'>
                        <ParallaxBannerLayer image={FooterImg} speed={-10}/>
                    </div>
                </ParallaxBanner>
            </ParallaxProvider>
        </footer>
    )
}

function App() {
    return (
        <BrowserRouter>
            <AnimatedCursor
                innerSize={8}
                outerSize={34}
                innerScale={1.1}
                outerScale={2}
                outerAlpha={1}
                innerStyle={{
                    backgroundColor: 'var(--cursor-color)'
                }}
                outerStyle={{
                    backgroundColor: 'var(--cursor-color)',
                    mixBlendMode: 'exclusion'
                }}
            />
            <NavBar/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/services' element={<ServicesPage/>}/>
                <Route path='/contact' element={<ContactPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/news' element={<NewsPage/>}/>
                <Route path='/cases' element={<CasePage/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
