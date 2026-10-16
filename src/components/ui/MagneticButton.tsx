import { cn } from "@/lib/utils";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { PointerEvent as ReactPointerEvent, ReactNode } from "react";
import { useRef } from "react";

/**
 * Cursor-attracted anchor. Travels a fraction of the cursor offset from its
 * own centre and springs home on leave.
 *
 * Degrades to a plain anchor on touch (no hover) and under reduced motion.
 */
export function MagneticButton({
    href,
    children,
    className,
    strength = 0.28,
    external = false,
    onClick,
}: {
    href: string;
    children: ReactNode;
    className?: string;
    /** Fraction of the cursor offset the button travels. 0.2–0.35 reads as premium. */
    strength?: number;
    external?: boolean;
    onClick?: () => void;
}) {
    const reduce = useReducedMotion();
    const ref = useRef<HTMLAnchorElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 320, damping: 26, mass: 0.5 });
    const springY = useSpring(y, { stiffness: 320, damping: 26, mass: 0.5 });

    const handleMove = (event: ReactPointerEvent<HTMLAnchorElement>) => {
        if (reduce || event.pointerType !== "mouse") return;

        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;

        x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
        y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.a
            ref={ref}
            href={href}
            onClick={onClick}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            onPointerMove={handleMove}
            onPointerLeave={reset}
            style={{ x: springX, y: springY }}
            className={cn("btn-solid", className)}
        >
            {children}
        </motion.a>
    );
}

export default MagneticButton;
