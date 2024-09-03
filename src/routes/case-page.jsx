import {motion, useTime, useTransform} from "framer-motion";
import BackgroundImg from "../assets/graphic-dark.png";
import {AnimatedHeadingWords} from "../animations";
import {Link} from "react-router-dom";
import GetInTouchImg from "../assets/get-in-touch.png";

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
                                    <div style={{width: 165}}>
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
        <div>
            <div>

            </div>
        </div>
    )
}

export default function CasePage(){
    return(
        <div>
            <TitleSection/>
        </div>
    )
}
