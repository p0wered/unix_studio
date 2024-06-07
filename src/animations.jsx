import {motion} from "framer-motion";

export function HeadingLarge({text}) {
    const words = text.split(' ');
    const wordVariants = {
        hidden: {y: '100%', opacity: 0},
        visible: (i) => ({
            y: '0%',
            opacity: 1,
            transition: {
                duration: 1,
                delay: i * 0.05,
                ease: [0.01, 0.97, 0.99, 1],
                type: 'spring'
            },
        }),
    };
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {words.map((word, index) => (
                <div className='animated-text-box' key={index}>
                    <motion.h1
                        variants={wordVariants}
                        initial="hidden"
                        animate="visible"
                        custom={index}
                        style={{display: 'inline-block'}}
                    >
                        {word}
                    </motion.h1>
                </div>
            ))}
        </div>
    );
}
