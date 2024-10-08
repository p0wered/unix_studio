import {motion, useInView, useTime, useTransform} from "framer-motion";
import BackgroundImg from "../assets/graphic.png";
import {AnimatedHeading, AnimatedHeadingWords} from "../animations";
import StarImg from "../assets/star.png";
import {Link, useLocation} from "react-router-dom";
import GetInTouchImg from "../assets/get-in-touch.png";
import React, {useLayoutEffect, useRef} from "react";
import {Footer} from "../App";
import AiImage from '../assets/ai.jpg';
import BackImgLower from "../assets/graphic_lower.png";
import AboutImg from "../assets/about-img.jpg";
import HomeCases3 from "../assets/case_3.png";
import HomeCases2 from "../assets/case_2.png";
import HomeCases4 from "../assets/case_4.jpg";
import HomeCases5 from "../assets/case_5.jpg";
import HomeCases6 from "../assets/case_6.jpg";
import HomeCases7 from "../assets/case_7.png";

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
                <div className='ai-grid-item' id='ai-1'>
                    <p style={{fontWeight: 700, marginBottom: 6}}>MEET UNIX AI</p>
                    <p className='change-font'>
                        Check the health of your business processes with advanced AI-powered approaches. Compare your
                        current settings with the optimal ones. No free lunch theorem! Even though, we offer free
                        health-checks
                    </p>
                </div>
                <div className='ai-grid-item' id='image-ai'
                     style={{borderRight: '1px solid var(--border-light)', borderLeft: '1px solid var(--border-light)'}}>
                    <img src={AiImage} alt="" style={{width: '100%'}}/>
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
            <div className='flex-center' style={{padding: '5rem 0 0 0'}}>
                <p className='change-font' style={{textAlign: "center", maxWidth: 840}}>
                    User-oriented design has proved to bring lucrative business benefits. From improving brand awareness
                    to increasing customer acquisition & retention to gaining market share – UX directly impacts business
                </p>
            </div>
        </section>
    )
}

function ImageSection(){
    return(
        <section
            className='container'
            style={{backgroundImage: `url(${BackImgLower})`, backgroundColor: 'var(--content-dark)'}}>
            <div className='flex-center'>
                <img className='about-image' src={AboutImg} alt="" style={{maxWidth: 1200}}/>
            </div>
        </section>
    )
}

function QuoteSection(){
    return(
        <section className='container' style={{backgroundColor: 'var(--content-dark)', color: 'var(--content-light)', paddingTop: 0}}>
            <div className='flex-center' style={{flexDirection: 'column', gap: '4vw'}}>
                <AnimatedHeadingWords text='TESTIMONAL' inViewOn={true} headingType='h2'/>
                <h3 className='change-font' style={{maxWidth: 1200, textAlign: 'center'}}>
                    I have been hiring people in this space for a number of years
                </h3>
                <h3 className='change-font' style={{maxWidth: 1200, textAlign: 'center'}}>
                    And I have never seen this level of professionalism. It really feels like
                    you are working with a team that can get the job done</h3>
            </div>
        </section>
    )
}

function CasesSlider() {
    const images = [HomeCases3, HomeCases2, HomeCases4, HomeCases5, HomeCases6, HomeCases7]
    const titles = [
        'Eugene Massy',
        'Eugene Massy',
        'Eugene Massy',
        'Eugene Massy',
        'Eugene Massy',
        'Eugene Massy',
    ];
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        variableWidth: true,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
        focusOnSelect: true,
    };

    return (
        <div className="slider-container home-slider">
            <Slider {...settings}>
                {
                    titles.map((title, i) => (
                        <div className='h-item' key={title}>
                            <img src={images[i]} alt={`image ${i}`}/>
                            <div className='merger'>
                                <a href='#' className='primary-link' style={{fontSize: 24}}>{title}</a>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}

function Slider(){
    const slider = useRef();
    const sliderInView = useInView(slider, {once: false});

    return (
        <motion.div
            className='slider-wrap'
            ref={slider}
            transition={{duration: 1, type: 'spring', ease: [0.01, 0.95, 0.98, 1]}}
            initial={{opacity: 0, x: '100%'}}
            animate={sliderInView ? {opacity: 1, x: '0'} : {opacity: 0, x: '100%'}}
        >
            <CasesSlider/>
        </motion.div>
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
            <ImageSection/>
            <QuoteSection/>
            <Footer/>
        </>
    )
}
