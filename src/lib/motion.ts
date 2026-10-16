import type { Transition, Variants } from "framer-motion";

/**
 * Motion tokens.
 *
 * The cubic-beziers mirror the values already used in `index.css` (and the
 * existing Hero/Reveal components) so CSS transitions and JS animations share
 * one velocity curve. Nothing here should be a bare number.
 */

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const;

export const DUR = {
    fast: 0.24,
    base: 0.5,
    slow: 0.7,
    page: 0.9,
} as const;

/** Spring *options* for `useSpring` — no `type` key, unlike a Transition. */
export const SPRING = {
    soft: { stiffness: 260, damping: 32, mass: 0.9 },
    snappy: { stiffness: 420, damping: 34 },
    tilt: { stiffness: 150, damping: 20, mass: 0.6 },
    cursor: { stiffness: 700, damping: 40, mass: 0.35 },
} as const satisfies Record<
    string,
    { stiffness: number; damping: number; mass?: number }
>;

/** Spring *transition* for `animate`/`variants`. */
export const SPRING_TRANSITION: Transition = {
    type: "spring",
    stiffness: 320,
    damping: 28,
};

/** Parent variant: staggers any direct child that declares its own variants. */
export const staggerParent = (stagger = 0.06, delayChildren = 0): Variants => ({
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren } },
});

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: DUR.slow, ease: EASE_OUT },
    },
};

export const fade: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: DUR.page, ease: EASE_OUT } },
};

/**
 * Signature masked line reveal — pairs with a `overflow-hidden` wrapper so the
 * text slides up out of nothing. Requires the wrapper to compensate descenders
 * with `pb-[0.06em] -mb-[0.06em]`.
 */
export const maskLine: Variants = {
    hidden: { y: "110%" },
    show: { y: "0%", transition: { duration: 0.95, ease: EASE_OUT } },
};
