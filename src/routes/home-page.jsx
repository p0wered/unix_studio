import StarImg from '../assets/star.png';
import GetInTouchImg from '../assets/get-in-touch.png';
import BackgroundImg from '../assets/graphic.png';
import {HeadingLarge} from "../animations";
import {motion, useTime, useTransform} from "framer-motion";
import {Link} from "react-router-dom";

function TitleSection({title, desc, lowerText}) {
    const time = useTime();
    const rotate = useTransform(time, [0, 12000], [0, 360], { clamp: false });
    return (
        <div className='title-section' style={{backgroundImage: `url(${BackgroundImg})`}}>
            <div className='inner'>
                <HeadingLarge text={title}/>
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
                <motion.p className='lower-text'
                          transition={{duration: 1, ease: [0.01, 0.95, 0.98, 1], type: 'spring'}}
                          initial={{y: '200%', opacity: 0}}
                          animate={{y: 0, opacity: 1}}
                >

                    {lowerText}
                </motion.p>
                <div>
                    <Link to='/'>
                        <motion.img
                            style={{rotate}}
                            transition={{duration: 1, type: 'spring'}}
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

export default function HomePage() {
    return (
        <>
            <TitleSection title='UNIXSTUDIO DIGITAL AGENCY'
                          desc=''
                          lowerText='We won 50+ design awards in 2022 stand alone, some of which had us share the stage
                          with Google, Netflix, and Spotify'
                          btn={true}
            />
            <div style={{height: '100vh', backgroundColor: 'white'}}>
                <div className='separator'/>
            </div>
        </>
    )
}