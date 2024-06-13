import StarImg from '../assets/star.png';
import StarDarkImg from '../assets/star_dark.png';
import GetInTouchImg from '../assets/get-in-touch.png';
import BackgroundImg from '../assets/graphic.png';
import BackImgLower from '../assets/graphic_lower.png';
import ArrowButton from '../assets/arrow_button.svg';
import HomeCases1 from '../assets/haven.png';
import HomeCases2 from '../assets/case_2.png';
import HomeCases3 from '../assets/case_3.png';
import HomeCases4 from '../assets/case_4.jpg';
import HomeCases5 from '../assets/case_5.jpg';
import HomeCases6 from '../assets/case_6.jpg';
import HomeCases7 from '../assets/case_7.png';
import Vector1 from '../assets/vector.svg';
import Slider from "react-slick";
import ReviewSvg from '../assets/review.svg';
import ReviewImg from '../assets/mask-review.jpg';
import ReviewImg2 from '../assets/mask-review-2.png'
import {
    AnimatedHeading,
    AnimatedHeadingWords,
    ParallaxText,
    Separator,
    SeparatorWide
} from "../animations";
import {
    motion,
    useInView, useScroll,
    useTime,
    useTransform,
} from "framer-motion";
import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {ParallaxBanner, ParallaxBannerLayer, ParallaxProvider} from "react-scroll-parallax";

function TitleSection({title, desc, lowerText}) {
    const time = useTime();
    const rotate = useTransform(time, [0, 12000], [0, 360], {clamp: false});
    return (
        <div>
            <div className='title-section container' style={{backgroundImage: `url(${BackgroundImg})`}}>
                <div className='inner'>
                    <AnimatedHeadingWords
                        text={title}
                        inViewOn={false}
                        headingType='h1'
                    />
                    <p>{desc}</p>
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

                        {lowerText}
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

function ToAboutSection() {
    const ref = useRef();
    const isInView = useInView(ref, {once: false});

    return (
        <div>
            <Separator/>
            <img src={Vector1} id='vector1' draggable={false}/>
            <div className='to-about-section container'>
                <div className='flex-column' style={{maxWidth: '55rem', gap: '2rem'}}>
                    <AnimatedHeading
                        text='LET’S FIND YOUR DESIGN PRODUCT'
                        inViewOn={true}
                        headingType='h2'
                    />
                    <AnimatedHeading
                        text='SAFE AND BENEFICIAL DESIGN FOR HUMANITY'
                        inViewOn={true}
                        headingType='h4'
                    />
                </div>
                <motion.div ref={ref} className='merger change-font'
                            transition={{duration: 0.7, ease: [0.01, 0.95, 0.98, 1]}}
                            initial={{y: '100%', opacity: 0}}
                            animate={isInView ? {y: 0, opacity: 1} : {y: '100%', opacity: 0}}
                >
                    <p style={{maxWidth: '55rem'}}>
                        We build engaging user experience for early-stage startups by connecting the dots between users’
                        needs and the client’s business model
                    </p>
                    <Link className='primary-link' to='/about' style={{fontWeight: 500}}>See details</Link>
                </motion.div>
            </div>
        </div>
    )
}

const ServiceItem = ({title}) => {
    const ref = useRef();
    useInView(ref, { once: false });
    return (
        <div>
            <Link to='/error' className='item'>
                <div className='item-title' style={{ maxWidth: '55rem' }}>
                    <AnimatedHeading text={title} inViewOn={true} headingType='h3' />
                </div>
                <img src={ArrowButton}/>
            </Link>
            <SeparatorWide/>
        </div>
    );
};

function HomeServices(){
    const serviceTitles= [
        'Marketing and Communication Plan',
        'Branding',
        'Digital Campaigns',
        'Programmatic Advertising',
        'Marketing as a Service'
    ];

    return (
        <div>
            <Separator/>
            <div className='home-services container'>
                <div className='services-list'>
                    {serviceTitles.map((title, index) => (
                        <ServiceItem key={index} title={title} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function HavenSection() {
    const ref = useRef();
    const ref2 = useRef();
    const isInView = useInView(ref, {once: false});
    const isInView2 = useInView(ref2, {once: false});

    return (
        <ParallaxProvider>
            <div className='home-cases container'>
                <div style={{maxWidth: 1280, marginBottom: '2vh'}}>
                    <AnimatedHeading text='BEHOLD OUR GREATEST PROJECT EVER' inViewOn={true} headingType='h2'/>
                </div>
                <motion.div ref={ref}
                            transition={{duration: 0.7}}
                            initial={{opacity: 0, scale: 0.96}}
                            animate={isInView ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.96}}
                >
                    <ParallaxBanner className='image'>
                        <ParallaxBannerLayer image={HomeCases1} speed={-12}/>
                    </ParallaxBanner>
                </motion.div>
                <motion.div ref={ref2}
                            className='case-1'
                            transition={{duration: 0.4, delay: 0.1}}
                            initial={{opacity: 0}}
                            animate={isInView2 ? {opacity: 1} : {opacity: 0}}
                >
                    <div className='flex-column' style={{gap: 5}}>
                        <h4>Haven Studios</h4>
                        <p className='change-font' style={{color: '#484848'}}>Gaming</p>
                    </div>
                    <a href='https://havenstudios.com/en'
                       target="_blank"
                       className='change-font primary-link'
                       rel="noreferrer"
                    >
                        Visit website
                    </a>
                </motion.div>
            </div>
        </ParallaxProvider>
    )
}

function CasesSlider() {
    const images = [HomeCases3, HomeCases2, HomeCases4, HomeCases5, HomeCases6, HomeCases7]
    const titles = [
        'Elektra',
        'Baillat Studio',
        'Stenger Bike',
        'Carlton Villa',
        'Ethnocare',
        'Pangram'
    ];
    const subjects = [
        'Art and Culture',
        'Design',
        'Sport',
        'Estate',
        'Medical',
        'Typography'
    ]
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
                            <img src={images[i]}/>
                            <div className='merger'>
                                <a href='#' className='primary-link' style={{fontSize: 24}}>{title}</a>
                                <p className='change-font'>{subjects[i]}</p>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}

function HomeCases() {
    const slider = useRef();
    const sliderInView = useInView(slider, {once: false});

    return (
        <div className='home-cases-slider' style={{backgroundImage: `url(${BackImgLower})`}}>
            <div style={{padding: 'calc(36px + 5vw) 0'}}>
                <ParallaxText baseVelocity={3}>
                    <div className='flex-row' style={{alignItems: 'center', gap: '2rem'}}>
                        <h2>UNIXSTUDIO</h2>
                        <img className='star-dark' src={StarDarkImg} draggable={false}/>
                    </div>
                </ParallaxText>
                <ParallaxText baseVelocity={-3}>
                    <div className='flex-row' style={{alignItems: 'center', gap: '2rem', marginTop: 8}}>
                        <h2>UNIXSTUDIO</h2>
                        <img className='star-dark' src={StarDarkImg} draggable={false}/>
                    </div>
                </ParallaxText>
            </div>
            <div>
                <div className='container' style={{color: 'var(--content-light)'}}>
                    <AnimatedHeading text='WITNESS THE BEAUTY' inViewOn={true} headingType='h2'/>
                    <div style={{maxWidth: '55rem', marginTop: '2rem'}}>
                        <AnimatedHeading
                            text='SAFE AND BENEFICIAL DESIGN FOR HUMANITY'
                            inViewOn={true}
                            headingType='h4'
                        />
                    </div>
                </div>
                <motion.div
                    className='slider-wrap'
                    ref={slider}
                    transition={{duration: 1, type: 'spring', ease: [0.01, 0.95, 0.98, 1]}}
                    initial={{opacity: 0, x: '100%'}}
                    animate={sliderInView ? {opacity: 1, x: '0'} : {opacity: 0, x: '100%'}}
                >
                    <CasesSlider/>
                </motion.div>
            </div>
        </div>
    )
}

function ReviewSection() {
    const ref = useRef();
    const isInView = useInView(ref, {once: false});
    const ref2 = useRef();
    const isInView2 = useInView(ref, {once: false});
    const star = useRef();
    const starInView = useInView(star, {once: false});
    const footer1 = useRef();
    const f1InView = useInView(footer1, {once: false});
    const footer2 = useRef();
    const f2InView = useInView(footer2, {once: false});

    return (
        <div className='review-wrap flex-column'>
            <div className='review-section container'>
                <div className='flex-center'>
                    <AnimatedHeading text='ABOUT CEO' inViewOn={true} headingType='h2'/>
                </div>
                <div className='review-flexbox' style={{gap: '8vw', alignItems: 'center'}}>
                    <div className='star-position'>
                        <motion.img ref={star}
                                    initial={{scale: 0}}
                                    animate={starInView ? {rotate: 90, scale: 1} : {scale: 0}}
                                    transition={{duration: 1, type: 'spring'}}
                                    src={StarImg}
                                    draggable={false}/>
                    </div>
                    <div>
                        <div className='review-flexbox' style={{maxWidth: '55rem'}}>
                            <motion.img
                                id='review-1'
                                src={ReviewSvg}
                                draggable={false}
                                transition={{duration: 0.7, ease: [0.01, 0.95, 0.98, 1]}}
                                initial={{y: '80%', opacity: 0}}
                                animate={isInView ? {y: 0, opacity: 1} : {y: '80%', opacity: 0}}
                            />
                            <div className='flex-column' style={{gap: 'calc(32px + 1vw)'}}>
                                <motion.h4
                                    className='change-font'
                                    ref={ref}
                                    transition={{duration: 0.7, ease: [0.01, 0.95, 0.98, 1]}}
                                    initial={{y: '100%', opacity: 0}}
                                    animate={isInView ? {y: 0, opacity: 1} : {y: '100%', opacity: 0}}
                                >
                                    This is the highest level of professionalism I have ever encountered in the years
                                    that I
                                    have been hiring people in this field. You have the distinct impression that you are
                                    a
                                    part of a productive team.
                                </motion.h4>
                                <motion.div
                                    ref={ref2}
                                    transition={{duration: 0.7, ease: [0.01, 0.95, 0.98, 1], delay: 0.3}}
                                    initial={{y: '100%', opacity: 0}}
                                    animate={isInView2 ? {y: 0, opacity: 1} : {y: '100%', opacity: 0}}
                                    className='flex-row'
                                    style={{gap: '2rem', alignItems: 'center'}}
                                >
                                    <img src={ReviewImg} style={{width: 72, height: 72, borderRadius: '50%'}}
                                         draggable={false}/>
                                    <div>
                                        <p>RACHEL SMITH</p>
                                        <p className='change-font' style={{color: '#808080'}}>CEO of Unix Studio</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='review-footer change-font container'>
                    <motion.p
                        ref={footer1}
                        transition={{duration: 0.7, ease: [0.01, 0.95, 0.98, 1]}}
                        initial={{y: '100%', opacity: 0}}
                        animate={f1InView ? {y: 0, opacity: 1} : {y: '100%', opacity: 0}}
                        style={{maxWidth: '55rem'}}
                    >
                        Dont’t wait any longer, let’s unleash your imagination and create something extraordinary
                        together
                    </motion.p>
                    <motion.div
                        ref={footer2}
                        transition={{duration: 0.7, ease: [0.01, 0.95, 0.98, 1]}}
                        initial={{y: '100%', opacity: 0}}
                        animate={f2InView ? {y: 0, opacity: 1} : {y: '100%', opacity: 0}}
                    >
                        <Link to='/contact' className='primary-link'>Catch a glimse!</Link>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

function StatsItem({title, desc, height, hideBorder}){
    const ref = useRef();
    const isInView = useInView(ref, {once: false});

    return (
        <div
            className={hideBorder ? 'stats-item no-border' : 'stats-item'}
            style={{minHeight: height}}
        >
            <motion.p
                className='change-font'
                ref={ref}
                transition={{duration: 0.7, ease: [0.01, 0.95, 0.98, 1]}}
                initial={{y: '100%', opacity: 0}}
                animate={isInView ? {y: 0, opacity: 1} : {y: '100%', opacity: 0}}
            >
                {title}
            </motion.p>
            <motion.h3
                ref={ref}
                transition={{duration: 0.7, ease: [0.01, 0.95, 0.98, 1]}}
                initial={{y: '100%', opacity: 0}}
                animate={isInView ? {y: 0, opacity: 1} : {y: '100%', opacity: 0}}
            >
                {desc}
            </motion.h3>
        </div>
    )
}

function StatsSection() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [mobile, setMobile] = useState(window.innerWidth < 992 ? 0 : -173);
    const ref = useRef();
    const isInView = useInView(ref, {once: false});
    const ref2 = useRef();
    const isInView2 = useInView(ref2, {once: false});
    const ref3 = useRef();
    const isInView3 = useInView(ref3, {once: false});
    const ref5 = useRef();
    const isInView5 = useInView(ref5, {once: false});
    const ref6 = useRef();
    const isInView6 = useInView(ref6, {once: false});
    const titles = [
        'People on board',
        'Years of growth',
        'Successfully finished projects',
        'From small team of enthusiasts to one of the best digital agencies',
        'Design awards',
        'Monthly visit on E-Commerce we designed'
    ]
    const descs = ['60+', '9', '500+', '', '82', '25M']

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            setMobile(window.innerWidth < 992 ? 0 : -173);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='stats-section container'>
            <div>
                <div style={{overflow: 'hidden'}}>
                    <AnimatedHeadingWords headingType='h1' inViewOn={true} text='WE ARE'/>
                    <motion.div
                        initial={{translateX: mobile}}
                        transition={{duration: 0.5, ease: 'backInOut'}}
                        animate={isInView ? {translateX: 0} : {translateX: mobile}}
                        style={{display: 'flex', alignItems: 'flex-end', gap: '1rem'}}
                    >
                        <motion.p
                            className='change-font stats-desc'
                            transition={{duration: 0.7}}
                            style={{marginBottom: 10, minWidth: 120}}
                            initial={{opacity: 0}}
                            animate={isInView ? {opacity: 1} : {opacity: 0}}
                        >
                            Born in UNIX
                        </motion.p>
                        <AnimatedHeadingWords headingType='h1' inViewOn={true} text='WORTHY'/>
                    </motion.div>
                </div>
            </div>
            <div className='stats-grid' style={{borderTop: '1px solid var(--border-dark)'}}>
                <div className='stats-item large-stats-item'>
                    <p></p>
                    <a className='change-font primary-link'>Get in touch</a>
                </div>
                <div className='stats-item no-border' style={{minHeight: 'calc(130px + 10vw)'}}>
                    <motion.p
                        className='change-font'
                        ref={ref}
                        transition={{duration: 0.7, ease: [0.01, 0.95, 0.98, 1]}}
                        initial={{y: '100%', opacity: 0}}
                        animate={isInView ? {y: 0, opacity: 1} : {y: '100%', opacity: 0}}
                    >
                        Active users on marketplaces we’ve created
                    </motion.p>
                    <motion.h3
                        ref={ref}
                        transition={{duration: 0.7, ease: [0.01, 0.95, 0.98, 1]}}
                        initial={{y: '100%', opacity: 0}}
                        animate={isInView ? {y: 0, opacity: 1} : {y: '100%', opacity: 0}}
                    >
                        1M</motion.h3>
                </div>
                <div className='stats-item two-cell' style={{minHeight: 'calc(130px + 10vw)'}}>
                    <motion.p
                        className='change-font'
                        ref={ref2}
                        transition={{duration: 0.7, ease: [0.01, 0.95, 0.98, 1]}}
                        initial={{y: '100%', opacity: 0}}
                        animate={isInView2 ? {y: 0, opacity: 1} : {y: '100%', opacity: 0}}
                    >
                        Our clients raised owning to our design work
                    </motion.p>
                    <motion.h3
                        ref={ref2}
                        transition={{duration: 0.7, ease: [0.01, 0.95, 0.98, 1]}}
                        initial={{y: '100%', opacity: 0}}
                        animate={isInView2 ? {y: 0, opacity: 1} : {y: '100%', opacity: 0}}
                    >
                        $500M
                    </motion.h3>
                </div>
                {
                    titles.map((title, i) => {
                        if (i % 2 === 0){
                            return(
                                <StatsItem title={title} desc={descs[i]} hideBorder={true}/>
                            )
                        } else {
                            return(
                                <StatsItem title={title} desc={descs[i]} hideBorder={false}/>
                            )
                        }
                    })
                }
            </div>
            <div className='clients-flexbox'>
                <div style={{width: 'min-content'}}>
                    <AnimatedHeading headingType='h1' inViewOn={true} text='OUR CLIENTS'/>
                </div>
                <motion.p
                    ref={ref3}
                    className='change-font'
                    transition={{duration: 0.7, ease: [0.01, 0.95, 0.98, 1]}}
                    initial={{y: '100%', opacity: 0}}
                    animate={isInView3 ? {y: 0, opacity: 1} : {y: '100%', opacity: 0}}
                >
                    ALL AROUND THE GLOBE
                </motion.p>
            </div>
            <div className='reviews-grid'>
                <div className='placeholder'/>
                <div className='review-flexbox stats-ed'>
                    <div>
                        <div className='review-flexbox' style={{maxWidth: '55rem'}}>
                            <motion.img
                                id='review-1'
                                src={ReviewSvg}
                                draggable={false}
                                transition={{duration: 0.7, ease: [0.01, 0.95, 0.98, 1]}}
                                initial={{y: '80%', opacity: 0}}
                                animate={isInView5 ? {y: 0, opacity: 1} : {y: '80%', opacity: 0}}
                            />
                            <div className='flex-column' style={{gap: 'calc(32px + 1vw)'}}>
                                <motion.h4
                                    ref={ref5}
                                    className='change-font'
                                    transition={{duration: 0.7, ease: [0.01, 0.95, 0.98, 1]}}
                                    initial={{y: '100%', opacity: 0}}
                                    animate={isInView5 ? {y: 0, opacity: 1} : {y: '100%', opacity: 0}}
                                >
                                    I have been hiring people in this space for a number of years and I have never seen
                                    this level of professionalism. It really feels like you are working with a team that
                                    can get the job done.
                                </motion.h4>
                                <motion.div
                                    ref={ref6}
                                    transition={{duration: 0.7, ease: [0.01, 0.95, 0.98, 1], delay: 0.3}}
                                    initial={{y: '100%', opacity: 0}}
                                    animate={isInView6 ? {y: 0, opacity: 1} : {y: '100%', opacity: 0}}
                                    className='flex-row'
                                    style={{gap: '2rem', alignItems: 'center'}}
                                >
                                    <img
                                        className='stats-review-img'
                                        src={ReviewImg2}
                                        draggable={false}/>
                                    <div>
                                        <p>PETER VISSER</p>
                                        <p className='change-font' style={{color: '#808080', fontSize: 16}}>VISSER CONSULTING</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default function HomePage() {
    const {scrollYProgress} = useScroll();
    console.log(scrollYProgress);
    return (
        <div>
            <TitleSection title='UNIXSTUDIO DIGITAL AGENCY' desc=''
                          lowerText='We won 50+ design awards in 2022 stand alone, some of which had us share the stage
                          with Google, Netflix, and Spotify'
            />
            <ToAboutSection/>
            <HomeServices/>
            <HavenSection/>
            <HomeCases/>
            <ReviewSection/>
            <StatsSection/>
        </div>
    )
}