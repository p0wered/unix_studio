import React, {useRef, useState} from 'react';
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import HomePage from "./routes/home-page";
import ServicesPage from "./routes/services-page";
import ContactPage from "./routes/contact-page";
import AboutPage from "./routes/about-page";
import CasePage from "./routes/case-page";
import {motion, useInView, useTime, useTransform} from "framer-motion";
import AnimatedCursor from "react-animated-cursor";
import FooterImg from './assets/footer.png';
import FooterArrow from './assets/footer-arrow.svg';
import ArrowUp from './assets/arrow_up.svg';
import {ParallaxBanner, ParallaxBannerLayer, ParallaxProvider} from "react-scroll-parallax";
import {Twirl as Hamburger} from 'hamburger-react'
import {SeparatorWide} from "./animations";

function NavBar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const linkTitles = {
        "HOME": "/",
        "CASES": "/cases",
        "ABOUT": "/about",
        "SERVICES": "/services",
        "CONTACT": "/contact",
    }

    const container = {
        hidden: {y: '-100%', opacity: 0.5},
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delayChildren: 0.15,
                staggerChildren: 0.06,
                ease: [0.01, 0.95, 0.98, 1]
            }
        }
    }

    const mobileLink = {
        hidden: {y: '-100%', opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                ease: [0.01, 0.95, 0.98, 1],
            }
        },
    }

    return(
        <>
            <motion.nav initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, type: 'spring'}}>
                <div>
                    <NavLink className='logo primary-link' to='/'>UNIXSTUDIO</NavLink>
                </div>
                <div className='links change-font'>
                    <NavLink className='primary-link' to='/'>HOME</NavLink>
                    <NavLink className='primary-link' to='/cases'>CASES</NavLink>
                    <NavLink className='primary-link' to='/about'>ABOUT</NavLink>
                    <NavLink className='primary-link' to='/services'>SERVICES</NavLink>
                    <NavLink className='primary-link' to='/contact'>CONTACT</NavLink>
                </div>
                <div className='menu-icon'>
                    <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={26} duration={0.3}/>
                </div>
            </motion.nav>
            <motion.div
                variants={container}
                initial="hidden"
                animate={menuOpen ? "visible" : "hidden"}
                className='mobile-menu'
            >
                {Object.entries(linkTitles).map(([title, url], index) => (
                    <>
                        <motion.div
                            key={index}
                            variants={mobileLink}
                        >
                            <NavLink className='mobile-link' to={url} onClick={() => setMenuOpen(false)}>
                                <h2>{title}</h2>
                            </NavLink>
                        </motion.div>
                        <SeparatorWide/>
                    </>
                ))}
            </motion.div>
        </>
    )
}

export function Footer() {
    const linksRef = useRef();
    const locationRef = useRef();
    const emailRef = useRef();
    const btnRef = useRef();
    const copyRef = useRef();
    const linksInView = useInView(linksRef, {once: false});
    const locationInView = useInView(locationRef, {once: false});
    const emailInView = useInView(emailRef, {once: false});
    const btnInView = useInView(btnRef, {once: false});
    const copyInView = useInView(copyRef, {once: false});
    const time = useTime();
    const rotate = useTransform(time, [0, 12000], [0, 360], {clamp: false});

    const container = {
        hidden: {opacity: 1},
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.06,
                ease: [0.01, 0.95, 0.98, 1]
            }
        }
    }

    const link = {
        hidden: {y: '100%', opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                ease: [0.01, 0.95, 0.98, 1],
            }
        },
    }

    const mediaItems = {
        "Facebook": "https://www.facebook.com",
        "Instagram": "https://www.instagram.com",
        "Dribble": "https://www.dribble.com",
        "Linkedin": "https://www.linkedin.com",
        "Behance": "https://www.behance.com",
        "Telegram": "https://www.telegram.com",
    }

    return(
        <footer>
            <div className='footer-container'>
                <div className='inner'>
                    <motion.div
                        ref={linksRef}
                        className='footer-grid'
                        variants={container}
                        initial="hidden"
                        animate={linksInView ? "visible" : "hidden"}
                    >
                        {Object.entries(mediaItems).map(([label, url], index) => (
                            <motion.a
                                href={url}
                                key={index}
                                variants={link}
                                whileHover={{
                                    border: '1px solid transparent',
                                    backgroundColor: 'var(--content-dark)',
                                    color: 'var(--content-light)'
                                }}
                            >
                                {label}
                            </motion.a>
                        ))}
                    </motion.div>
                    <motion.div
                        ref={locationRef}
                        transition={{duration: 0.7, ease: [0.01, 0.95, 0.98, 1]}}
                        initial={{y: '100%', opacity: 0}}
                        animate={locationInView ? {y: 0, opacity: 1} : {y: '100%', opacity: 0}}
                    >
                        <p className='change-font' style={{color: '#7c7c7c', fontSize: 16}}>OUR TEAM IS</p>
                        <h4>IN NEW YORK, USA</h4>
                    </motion.div>
                    <motion.div
                        ref={emailRef}
                        transition={{duration: 0.7, ease: [0.01, 0.95, 0.98, 1], delay: 0.1}}
                        initial={{y: '100%', opacity: 0}}
                        animate={emailInView ? {y: 0, opacity: 1} : {y: '100%', opacity: 0}}
                    >
                        <p className='change-font' style={{color: '#7c7c7c', fontSize: 16}}>DROP US A LINE</p>
                        <h4 className='change-font' style={{fontWeight: 500}}>contact@unixstudio.agency</h4>
                    </motion.div>
                    <motion.div
                        className='footer-btn-container'
                        ref={btnRef}
                        transition={{duration: 0.7, ease: [0.01, 0.95, 0.98, 1]}}
                        initial={{y: '100%', opacity: 0}}
                        animate={btnInView ? {y: 0, opacity: 1} : {y: '100%', opacity: 0}}
                        whileHover={{
                            border: '1px solid var(--content-dark)',
                            backgroundColor: 'var(--content-light)',
                            color: 'var(--content-dark)'
                        }}
                    >
                        <Link to='/contact' className='footer-btn change-font'>
                            <p>BECOME A CLIENT</p>
                            <img src={FooterArrow} alt='arrow'/>
                        </Link>
                    </motion.div>
                    <motion.div
                        ref={copyRef}
                        transition={{duration: 0.7, ease: [0.01, 0.95, 0.98, 1]}}
                        initial={{y: '100%', opacity: 0}}
                        animate={copyInView ? {y: 0, opacity: 1} : {y: '100%', opacity: 0}}
                        className='merger'
                    >
                        <a href='#'><img src={ArrowUp} alt='arrow-up'/></a>
                        <p className='change-font' style={{fontSize: 16}}>© 2023 Unix Studio. — Product Design
                            Agency</p>
                    </motion.div>
                </div>
            </div>
            <ParallaxProvider>
                <ParallaxBanner>
                    <div className='footer-bg'>
                        <ParallaxBannerLayer image={FooterImg} speed={-15}/>
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
                <Route path='/cases' element={<CasePage/>}/>
            </Routes>
      </BrowserRouter>
  );
}

export default App;
