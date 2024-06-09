import {motion, useInView} from "framer-motion";
import {useRef} from "react";

const MotionHeading = ({ tag, children, ...props }) => {
    const Tag = motion[tag];
    return <Tag {...props}>{children}</Tag>;
};

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
