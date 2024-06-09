import StarImg from '../assets/star.png';
import GetInTouchImg from '../assets/get-in-touch.png';
import BackgroundImg from '../assets/graphic.png';
import BackImgLower from '../assets/graphic_lower.png';
import Vector1 from '../assets/vector.svg';
import ArrowButton from '../assets/arrow_button.svg';
import HomeCases1 from '../assets/haven.png';
import Slider from "react-slick";
import {AnimatedHeading} from "../animations";
import {motion, useInView, useTime, useTransform} from "framer-motion";
import {Link} from "react-router-dom";
import {useRef} from "react";
import {ParallaxBanner, ParallaxBannerLayer, ParallaxProvider} from "react-scroll-parallax";

function TitleSection({title, desc, lowerText}) {
    const time = useTime();
    const rotate = useTransform(time, [0, 12000], [0, 360], {clamp: false});
    return (
        <div className='title-section container' style={{backgroundImage: `url(${BackgroundImg})`}}>
            <div className='inner'>
                <AnimatedHeading
                    text={title}
                    inViewOn={false}
                    onHoverOn={true}
                    headingType='h1'
                />
                <p>{desc}</p>
                <div className='star-position'>
                    <motion.img
                        initial={{scale: 0}}
                        animate={{rotate: 90, scale: 1}}
                        transition={{duration: 1, type: 'spring'}}
                        whileHover={{rotate: -45}}
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
    )
}

function ToAboutSection(){
    const ref = useRef();
    const isInView = useInView(ref, { once: true });

    return (
        <div>
            <div className='separator'/>
            <div className='to-about-section container' style={{backgroundImage: `url(${Vector1})`}}>
                <div className='flex-column' style={{maxWidth: '55rem', gap: '2rem'}}>
                    <AnimatedHeading
                        text='LET’S FIND YOUR DESIGN PRODUCT'
                        inViewOn={true}
                        onHoverOn={false}
                        headingType='h2'
                    />
                    <AnimatedHeading
                        text='SAFE AND BENEFICIAL DESIGN FOR HUMANITY'
                        inViewOn={true}
                        onHoverOn={false}
                        headingType='h4'
                    />
                </div>
                <motion.div ref={ref} className='merger change-font'
                            transition={{duration: 0.7, ease: [0.01, 0.95, 0.98, 1]}}
                            initial={{y: '200%', opacity: 0}}
                            animate={isInView ? {y: 0, opacity: 1} : {y: '100%', opacity: 0}}
                >
                    <p style={{maxWidth: '55rem'}}>
                        We build engaging user experience for early-stage startups by connecting the dots between users’
                        needs and the client’s business model
                    </p>
                    <Link to='/about' style={{fontWeight: 500}}>See details</Link>
                </motion.div>
            </div>
        </div>
    )
}

//TODO arrows dont appear individually
function HomeServices(){
    const serviceTitles= ['Marketing and Communication Plan', 'Branding', 'Digital Campaigns', 'Programmatic Advertising', 'Marketing as a Service'];
    const items = [];
    const ref = useRef();
    const isInView = useInView(ref, {once: true});

    serviceTitles.forEach((item) => {
        items.push(
            <Link to='/error' className='item'>
                <div className='item-title' style={{maxWidth: '55rem'}}>
                    <AnimatedHeading text={item} inViewOn={true} headingType='h3'/>
                </div>
                <motion.img ref={ref}
                            transition={{duration: 0.7}}
                            initial={{opacity: 0}}
                            animate={isInView ? {opacity: 1} : {opacity: 0}}
                            src={ArrowButton}
                />
            </Link>
        )
    })

    return (
        <div>
            <div className='separator'/>
            <div className='home-services container'>
                <div className='services-list'>
                    {items}
                </div>
            </div>
        </div>
    )
}

function HavenSection() {
    const ref = useRef();
    const ref2 = useRef();
    const isInView = useInView(ref, {once: true});
    const isInView2 = useInView(ref2, {once: true});

    return (
        <ParallaxProvider>
            <div className='home-cases container'>
                <div style={{maxWidth: 1280, marginBottom: '2vh'}}>
                    <AnimatedHeading text='BEHOLD OUR GREATEST PROJECT EVER' inViewOn={true} headingType='h2'/>
                </div>
                <motion.div ref={ref}
                            transition={{duration: 0.7}}
                            initial={{opacity: 0}}
                            animate={isInView ? {opacity: 1} : {opacity: 0}}
                >
                    <ParallaxBanner className='image'>
                        <ParallaxBannerLayer image={HomeCases1} speed={-12}/>
                    </ParallaxBanner>
                </motion.div>
                <motion.div ref={ref2}
                            className='case-1'
                            transition={{duration: 0.7, delay: 0.1}}
                            initial={{opacity: 0}}
                            animate={isInView2 ? {opacity: 1} : {opacity: 0}}
                >
                    <div className='flex-column' style={{gap: 5}}>
                        <h4>Haven Studios</h4>
                        <p className='change-font' style={{color: '#484848'}}>Gaming</p>
                    </div>
                    <a href='https://havenstudios.com/en'
                       target="_blank"
                       className='change-font'
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
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
        centerPadding: 10
    };
    return (
        <div className="slider-container home-slider">
            <Slider {...settings}>
                <div className='item'/>
                <div className='item'/>
                <div className='item'/>
                <div className='item'/>
                <div className='item'/>
                <div className='item'/>
            </Slider>
        </div>
    );
}

function HomeCases() {
    return (
        <div className='home-cases-slider container' style={{backgroundImage: `url(${BackImgLower})`}}>
            <AnimatedHeading text='WITNESS THE BEAUTY' inViewOn={true} headingType='h2'/>
            <div style={{maxWidth: '55rem'}}>
                <AnimatedHeading
                    text='SAFE AND BENEFICIAL DESIGN FOR HUMANITY'
                    inViewOn={true}
                    onHoverOn={false}
                    headingType='h4'
                />
            </div>
        </div>
    )
}

export default function HomePage() {
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
        </div>
    )
}