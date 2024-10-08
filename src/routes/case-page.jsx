import {motion, useInView, useTime, useTransform} from "framer-motion";
import BackgroundImg from "../assets/graphic-dark.png";
import {AnimatedHeadingWords} from "../animations";
import {Link, useLocation} from "react-router-dom";
import GetInTouchImg from "../assets/get-in-touch.png";
import React, {useLayoutEffect, useRef} from "react";
import Case1 from  '../assets/cases-page-1.png'
import Case2 from "../assets/cases-page-2.png";
import Case3 from "../assets/cases-page-3.png";
import {Footer} from "../App";

function TitleSection() {
    const container = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.06,
                ease: [0.01, 0.95, 0.98, 1]
            }
        }
    }

    const circle = {
        hidden: { x: '100%', opacity: 0 },
        visible: custom => ({
            x: `${custom * 30}%`,
            opacity: 1,
            transition: {
                ease: [0.01, 0.95, 0.98, 1],
                duration: 0.4,
            }
        }),
    }

    const time = useTime();
    const rotate = useTransform(time, [0, 12000], [0, 360], { clamp: false });

    return (
        <div>
            <div className='title-section container' style={{backgroundImage: `url(${BackgroundImg})`}}>
                <div className='inner' style={{width: 'auto'}}>
                    <div>
                        <AnimatedHeadingWords
                            text='OUR CASES'
                            inViewOn={false}
                            headingType='h1'
                        />
                        <AnimatedHeadingWords
                            text='/SHOT'
                            inViewOn={false}
                            headingType='h1'
                            className='border-text'
                        />
                    </div>
                    <motion.div className='cases-circle-row' variants={container} initial="hidden" animate="visible">
                        {[0, 1, 2, 3].map((index) => (
                            <motion.div
                                key={index}
                                className='cases-circle flex-center'
                                variants={circle}
                                custom={index}
                                style={{zIndex: 3 - index}}
                            >
                                {index === 0 ? (
                                    <div>
                                        <p>WEBBY RED DOT</p>
                                        <p style={{color: 'grey'}}>-X5</p>
                                    </div>
                                ) : (<></>)}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <div className='get-in-touch'>
                    <motion.p className='lower-text change-font'
                              style={{color: 'var(--border-light)'}}
                              transition={{duration: 0.7, ease: [0.01, 0.95, 0.98, 1]}}
                              initial={{y: '200%', opacity: 0}}
                              animate={{y: 0, opacity: 1}}
                    >
                        Take a look behind the scenes, and discover the untold stories behind our projects, lessons
                        learned, work culture, and business curiosities.
                    </motion.p>
                    <div>
                        <Link to='/contact'>
                            <motion.img
                                style={{rotate}}
                                transition={{duration: 0.7}}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                src={GetInTouchImg}
                                whileHover={{scale: 1.1}}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CasesSection(){
    const buttonTitles = {
        "ALL [9]": 'all',
        "DESIGN [2]": "design",
        "BUSINESS [2]": "business",
        "SPORT [1]": "sport",
        "ESTATE [1]": "estate",
        "OTHER [3]": 'other'
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

    const buttons = {
        hidden: {y: '-100%', opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                ease: [0.01, 0.95, 0.98, 1],
            }
        },
    }

    const ref = useRef();
    const isInView = useInView(ref, {once: false});
    const ref2 = useRef();
    const isInView2 = useInView(ref2, {once: false});
    const ref3 = useRef();
    const isInView3 = useInView(ref3, {once: false});
    const ref4 = useRef();
    const isInView4 = useInView(ref4, {once: false});
    const ref5 = useRef();
    const isInView5 = useInView(ref5, {once: false});
    const ref6 = useRef();
    const isInView6 = useInView(ref6, {once: false});

    return(
        <section className='cases-section container'>
            <div className='cases-buttons-flexbox'>
                {Object.entries(buttonTitles).map(([title, url], index) => (
                    <>
                        <motion.div
                            key={index}
                            variants={buttons}
                            className='cases-button-container'
                            whileHover={{
                                border: '1px solid var(--content-dark)',
                                backgroundColor: 'var(--content-light)',
                                color: 'var(--content-dark)'
                            }}
                        >
                            <Link to='/cases' className='cases-button change-font'>
                                <p>{title}</p>
                            </Link>
                        </motion.div>
                    </>
                ))}
            </div>
            <div className='cases-grid'>
                <div
                    className='cases-grid-item wide-item'
                >
                    <motion.div
                        transition={{duration: 0.7, ease: [0.01, 0.95, 0.98, 1]}}
                        initial={{opacity: 0}}
                        animate={isInView ? {opacity: 1} : {opacity: 0}}
                    >
                        <p>FEATURED</p>
                        <p className='change-font cases-item-desc'>
                            We build engaging user experience forearly-stage startups by connecting thedots between
                            users’
                            needs and theclient’s business model.
                        </p>
                    </motion.div>
                </div>
                <div className='cases-grid-item cases-right-border'>
                    <motion.div
                        ref={ref}
                        transition={{duration: 1, ease: [0.01, 0.95, 0.98, 1]}}
                        initial={{opacity: 0}}
                        animate={isInView ? {opacity: 1} : {opacity: 0}}
                    >
                        <div style={{display: 'flex', alignItems: 'center', gap: 5, flexDirection: 'row'}}>
                            <p>ELEKTRA</p>
                            <p className='change-font' style={{fontSize: 16}}>/2024</p>
                        </div>
                        <p className='change-font cases-item-desc'>
                            The Elektra Virtual Museum (EVM) goes far beyond the traditional definition of a museum,
                            as it is accessible everywhere, by everyone. By building this museum, ELEKTRA aims to share
                            its 20 years of expertise in the field of media arts and offer visitors a unique experience.
                        </p>
                        <img src={Case1} alt=""/>
                    </motion.div>
                </div>
                <div className='cases-grid-item'>
                    <motion.div
                        ref={ref4}
                        transition={{duration: 1, ease: [0.01, 0.95, 0.98, 1]}}
                        initial={{opacity: 0}}
                        animate={isInView4 ? {opacity: 1} : {opacity: 0}}
                    >
                        <div style={{display: 'flex', alignItems: 'center', gap: 5, flexDirection: 'row'}}>
                            <p>BALLIAT</p>
                            <p className='change-font' style={{fontSize: 16}}>/2023</p>
                        </div>
                        <p className='change-font cases-item-desc'>
                            The Elektra Virtual Museum (EVM) goes far beyond the traditional definition of a museum,
                            as it is accessible everywhere, by everyone. By building this museum, ELEKTRA aims to share
                            its 20 years of expertise in the field of media arts and offer visitors a unique experience.
                        </p>
                        <img src={Case2} alt=""/>
                    </motion.div>
                </div>
                <div className='cases-grid-item cases-right-border'>
                    <motion.div
                        ref={ref2}
                        transition={{duration: 1, ease: [0.01, 0.95, 0.98, 1]}}
                        initial={{opacity: 0}}
                        animate={isInView2 ? {opacity: 1} : {opacity: 0}}
                    >
                        <div style={{display: 'flex', alignItems: 'center', gap: 5, flexDirection: 'row'}}>
                            <p>STENGER</p>
                            <p className='change-font' style={{fontSize: 16}}>/2022</p>
                        </div>
                        <p className='change-font cases-item-desc'>
                            Admittedly, the purpose and technology of the "drahtesel" from 1927 - when the Zweirad
                            Stenger company was founded - can hardly be compared with the latest generation of bicycles,
                            but the experience that we have gained with two-wheelers for over 90 years is useful to our
                            customers and customers benefit.
                        </p>
                        <img src={Case3} alt=""/>
                    </motion.div>
                </div>
                <div className='cases-grid-item'>
                    <motion.div
                        ref={ref5}
                        transition={{duration: 1, ease: [0.01, 0.95, 0.98, 1]}}
                        initial={{opacity: 0}}
                        animate={isInView5 ? {opacity: 1} : {opacity: 0}}
                    >
                        <div style={{display: 'flex', alignItems: 'center', gap: 5, flexDirection: 'row'}}>
                            <p>ELEKTRA</p>
                            <p className='change-font' style={{fontSize: 16}}>/2023</p>
                        </div>
                        <p className='change-font cases-item-desc'>
                            The Elektra Virtual Museum (EVM) goes far beyond the traditional definition of a museum,
                            as it is accessible everywhere, by everyone. By building this museum, ELEKTRA aims to share
                            its 20 years of expertise in the field of media arts and offer visitors a unique experience.
                        </p>
                        <img src={Case1} alt=""/>
                    </motion.div>
                </div>
                <div className='cases-grid-item cases-right-border'>
                    <motion.div
                        ref={ref3}
                        transition={{duration: 1, ease: [0.01, 0.95, 0.98, 1]}}
                        initial={{opacity: 0}}
                        animate={isInView3 ? {opacity: 1} : {opacity: 0}}
                    >
                        <div style={{display: 'flex', alignItems: 'center', gap: 5, flexDirection: 'row'}}>
                            <p>ELEKTRA</p>
                            <p className='change-font' style={{fontSize: 16}}>/2023</p>
                        </div>
                        <p className='change-font cases-item-desc'>
                            The Elektra Virtual Museum (EVM) goes far beyond the traditional definition of a museum,
                            as it is accessible everywhere, by everyone. By building this museum, ELEKTRA aims to share
                            its 20 years of expertise in the field of media arts and offer visitors a unique experience.
                        </p>
                        <img src={Case1} alt=""/>
                    </motion.div>
                </div>
                <div className='cases-grid-item'>
                    <motion.div
                        ref={ref6}
                        transition={{duration: 1, ease: [0.01, 0.95, 0.98, 1]}}
                        initial={{opacity: 0}}
                        animate={isInView6 ? {opacity: 1} : {opacity: 0}}
                    >
                        <div style={{display: 'flex', alignItems: 'center', gap: 5, flexDirection: 'row'}}>
                            <p>ELEKTRA</p>
                            <p className='change-font' style={{fontSize: 16}}>/2023</p>
                        </div>
                        <p className='change-font cases-item-desc'>
                            The Elektra Virtual Museum (EVM) goes far beyond the traditional definition of a museum,
                            as it is accessible everywhere, by everyone. By building this museum, ELEKTRA aims to share
                            its 20 years of expertise in the field of media arts and offer visitors a unique experience.
                        </p>
                        <img src={Case1} alt=""/>
                    </motion.div>
                </div>
            </div>
            <div className='flex-center' style={{marginTop: '2rem'}}>
                <a className='primary-link' style={{color: 'var(--content-light)'}} href="#">VIEW ALL CASES</a>
            </div>
        </section>
    )
}

export default function CasePage() {
    const {pathname} = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <TitleSection/>
            <CasesSection/>
            <Footer/>
        </div>
    )
}
