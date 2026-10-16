import { EASE_OUT } from "@/lib/motion";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

/**
 * Counts from 0 to `value` once, when scrolled into view.
 *
 * Writes to `textContent` instead of React state, so a 60fps count-up causes
 * zero re-renders. Renders the final value on first paint, which means no
 * layout shift and no flash of "0" if the element is already on screen.
 */
export function CountUp({
    value,
    prefix = "",
    suffix = "",
    decimals = 0,
    duration = 1.4,
    className,
}: {
    value: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    duration?: number;
    className?: string;
}) {
    const reduce = useReducedMotion();
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

    useEffect(() => {
        const node = ref.current;
        if (!node || !inView) return;

        const render = (n: number) => `${prefix}${n.toFixed(decimals)}${suffix}`;

        if (reduce) {
            node.textContent = render(value);
            return;
        }

        const controls = animate(0, value, {
            duration,
            ease: EASE_OUT,
            onUpdate: (n) => {
                node.textContent = render(n);
            },
        });

        return () => controls.stop();
    }, [inView, value, prefix, suffix, decimals, duration, reduce]);

    return (
        <span ref={ref} className={cn("tabular-nums", className)}>
            {`${prefix}${value.toFixed(decimals)}${suffix}`}
        </span>
    );
}

export default CountUp;
