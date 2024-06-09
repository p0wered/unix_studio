import {
    motion,
    useAnimationFrame,
    useInView,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity
} from "framer-motion";
import { wrap } from "@motionone/utils";
import {useRef} from "react";

const MotionHeading = ({ tag, children, ...props }) => {
    const Tag = motion[tag];
    return <Tag {...props}>{children}</Tag>;
};

export function Separator(){
    const ref = useRef();
    const inView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            transition={{duration: 0.8}}
            initial={{scaleX: 0}}
            animate={inView ? {scaleX: 1} : {scaleX: 0}}
            className='separator'
        />
    )
}

export function SeparatorWide(){
    const ref = useRef();
    const inView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            transition={{duration: 0.8}}
            initial={{scaleX: 0}}
            animate={inView ? {scaleX: 1} : {scaleX: 0}}
            className='separator'
            style={{margin: 0}}
        />
    )
}

export function AnimatedHeading({text, inViewOn, onHoverOn, headingType}) {
    const words = text.split(' ');
    const translate = onHoverOn ? 12 : 0;
    const ref = useRef();
    const inView = useInView(ref, { once: true });
    const isInView = inViewOn ? inView : true;
    const wordVariants = {
        hidden: {y: '100%', opacity: 0},
        visible: (i) => ({
            y: '0%',
            opacity: 1,
            transition: {
                duration: 0.7,
                delay: i * 0.05,
                ease: [0.01, 0.97, 0.99, 1],
            },
        }),
    };
    return (
        <div ref={ref} style={{display: 'flex', flexWrap: 'wrap'}}>
            {words.map((word, index) => (
                <div className='animated-text-box' key={index}>
                    <MotionHeading
                        variants={wordVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        custom={index}
                        tag={headingType}
                        whileHover={{translateX: translate}}
                        style={{display: 'inline-block', marginRight: 14}}
                    >
                        {word}
                    </MotionHeading>
                </div>
            ))}
        </div>
    );
}

export function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -40, v)}%`);
    const directionFactor = useRef(1);

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        // This is what changes the direction of the scroll once we
        // switch scrolling directions.
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax">
            <motion.div className="scroller" style={{x}}>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
            </motion.div>
        </div>
    );
}