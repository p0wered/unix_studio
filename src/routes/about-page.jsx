import {motion, useTime, useTransform} from "framer-motion";
import BackgroundImg from "../assets/graphic.png";
import {AnimatedHeading, AnimatedHeadingWords} from "../animations";
import StarImg from "../assets/star.png";
import {Link, useLocation} from "react-router-dom";
import GetInTouchImg from "../assets/get-in-touch.png";
import React, {useLayoutEffect} from "react";
import {Footer} from "../App";
import AiImage from '../assets/ai.jpg';

function TitleSection() {
    const time = useTime();
    const rotate = useTransform(time, [0, 12000], [0, 360], {clamp: false});
    return (
        <div>
            <motion.div className='title-section container' style={{backgroundImage: `url(${BackgroundImg})`}}>
                <div className='inner' style={{width: 'auto'}}>
                    <div>
                        <AnimatedHeadingWords
                            text='ABOUT US'
                            inViewOn={false}
                            headingType='h1'
                        />
                        <AnimatedHeading
                            text='WE LIVE BY THE CODE OF PASSION'
                            inViewOn={false}
                            headingType='p'
                        />
                    </div>
                    <div className='star-position'>
                        <motion.img
                            initial={{scale: 0}}
                            animate={{rotate: 90, scale: 1}}
                            transition={{duration: 1, type: 'spring'}}
                            src={StarImg}
                            draggable={false}/>
                    </div>
                </div>
                <div className='get-in-touch'>
                    <motion.p className='lower-text change-font'
                              transition={{duration: 0.7, ease: [0.01, 0.95, 0.98, 1]}}
                              initial={{y: '200%', opacity: 0}}
                              animate={{y: 0, opacity: 1}}
                    >

                        We combine human empathy and intelligent data to provide the
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
            </motion.div>
        </div>
    )
}

function AiSection(){
    return(
        <section className='container'>
            <div className='ai-grid'>
                <div className='ai-grid-item'>
                    <p style={{fontWeight: 700, marginBottom: 6}}>MEET UNIX AI</p>
                    <p className='change-font'>
                        Check the health of your business processes with advanced AI-powered approaches. Compare your
                        current settings with the optimal ones. No free lunch theorem! Even though, we offer free
                        health-checks
                    </p>
                </div>
                <div className='ai-grid-item'
                     style={{borderRight: '1px solid var(--border-light)', borderLeft: '1px solid var(--border-light)'}}>
                    <img src={AiImage} alt=""/>
                    <p style={{textAlign: 'center', fontSize: 18, marginTop: 12}}>BOOST YOUR BUSINESS</p>
                </div>
                <div className='ai-grid-item'>
                    <p style={{fontWeight: 700, marginBottom: 6}}>OPTIMIZATION</p>
                    <p className='change-font'>
                        Learning to Solve Problems Without Human Knowledge. It has been a dream until the emergence of
                        Deep Learning and Reinforcement Learning.
                    </p>
                </div>
            </div>
            <div style={{padding: '5rem 0'}}>
                <p className='change-font' style={{textAlign: "center"}}>
                    User-oriented design has proved to bring lucrative business benefits. From improving brand awareness
                    to increasing customer acquisition & retention to gaining market share – UX directly impacts business
                </p>
            </div>
        </section>
    )
}

function ImageSection(){
    return(
        <div>
            //TODO
        </div>
    )
}

export default function AboutPage() {
    const {pathname} = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <TitleSection/>
            <AiSection/>
            <Footer/>
        </>
    )
}
