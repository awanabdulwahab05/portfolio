
import { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
} from "motion/react";

export default function BirdAnimation() {
    const heroRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        ["0vw", "65vw"]
    );

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        ["0vh", "-15vh"]
    );

    return (
        <div
            ref={heroRef}
            className="absolute inset-0 z-20 overflow-hidden pointer-events-none"
        >
            <motion.div
                className="absolute left-[5%] top-[50%]"
                style={{ x, y }}
            >
                <div
                    className="bird-sprite"
                    role="img"
                    aria-label="Bird flapping its wings"
                />
            </motion.div>
        </div>
    );
}
