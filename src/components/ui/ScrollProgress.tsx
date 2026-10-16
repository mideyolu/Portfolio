import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/**
 * Hairline reading-progress bar pinned to the top of the viewport.
 *
 * Driven by `scaleX`, which the compositor handles without layout. Sits above
 * the navbar (z-40) and below the grain overlay.
 */
export function ScrollProgress() {
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll();

    const spring = useSpring(scrollYProgress, {
        stiffness: 140,
        damping: 26,
        restDelta: 0.001,
    });

    return (
        <motion.div
            aria-hidden="true"
            style={{ scaleX: reduce ? scrollYProgress : spring }}
            className="fixed inset-x-0 top-0 z-[45] h-px origin-left bg-accent"
        />
    );
}

export default ScrollProgress;
