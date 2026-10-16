import { SPRING } from "@/lib/motion";
import { cn } from "@/lib/utils";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useReducedMotion,
    useSpring,
} from "framer-motion";
import type { PointerEvent as ReactPointerEvent, ReactNode } from "react";
import { useRef } from "react";

/**
 * Spring-physics pointer tilt with an accent wash that tracks the cursor.
 *
 * Everything lives in motion values, so a pointer move never triggers a React
 * render. Pointer-only (`pointerType === "mouse"`) and disabled under
 * `prefers-reduced-motion`.
 */
export function TiltCard({
    children,
    className,
    max = 6,
    spotlight = true,
}: {
    children: ReactNode;
    className?: string;
    /** Max rotation in degrees. Keep <= 8 or it reads as a toy. */
    max?: number;
    spotlight?: boolean;
}) {
    const reduce = useReducedMotion();
    const ref = useRef<HTMLDivElement>(null);

    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const glowX = useMotionValue(50);
    const glowY = useMotionValue(50);

    const springX = useSpring(rotateX, SPRING.tilt);
    const springY = useSpring(rotateY, SPRING.tilt);

    // `var(--accent-soft)` keeps it on-palette and inverts correctly inside
    // `.band`, so no hardcoded colour ever enters the component.
    const wash = useMotionTemplate`radial-gradient(420px circle at ${glowX}% ${glowY}%, var(--accent-soft), transparent 68%)`;

    const handleMove = (event: ReactPointerEvent<HTMLDivElement>) => {
        if (reduce || event.pointerType !== "mouse") return;

        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;

        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;

        // Negated Y so pushing the cursor up tips the top edge away.
        rotateY.set(px * max * 2);
        rotateX.set(-py * max * 2);

        glowX.set((px + 0.5) * 100);
        glowY.set((py + 0.5) * 100);
    };

    const reset = () => {
        rotateX.set(0);
        rotateY.set(0);
        glowX.set(50);
        glowY.set(50);
    };

    return (
        <motion.div
            ref={ref}
            onPointerMove={handleMove}
            onPointerLeave={reset}
            style={{
                rotateX: springX,
                rotateY: springY,
                transformPerspective: 1100,
                transformStyle: "preserve-3d",
            }}
            className={cn("group relative", className)}
        >
            {children}

            {spotlight ? (
                <motion.span
                    aria-hidden="true"
                    style={{ background: wash }}
                    className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
            ) : null}
        </motion.div>
    );
}

export default TiltCard;
