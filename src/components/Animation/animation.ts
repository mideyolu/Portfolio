import type { MotionProps } from "framer-motion";

export const slideFadeUp = (delay = 0): MotionProps => ({
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.3, delay },
});

// Slide from left (x-axis)
export const slideFromLeft: MotionProps = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
};

// Slide from right (x-axis)
export const slideFromRight: MotionProps = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
};

// Slide from up
export const slideFromUp = {
    initial: { opacity: 0, y: -50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

// Scale & fade (for images)
export const scaleFade: MotionProps = {
    initial: { scale: 0.8, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.8, delay: 0.2 },
};

// Rotate broken circle
export const rotateCircle: MotionProps = {
    initial: { rotate: -90, opacity: 0 },
    whileInView: { rotate: 270, opacity: 1 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 1 },
};

export const fadeSlideUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
};
