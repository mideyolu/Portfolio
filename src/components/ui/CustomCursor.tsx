import { SPRING } from "@/lib/motion";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type Mode = "default" | "link" | "open";

/**
 * Pointer-following cursor, desktop + fine-pointer only.
 *
 * Position lives in motion values, so tracking the pointer costs zero React
 * renders. `mode` is the only state, and it is written through a functional
 * update guarded on change — previously every `mousemove` re-rendered this
 * component, which was the single most expensive thing on the page.
 */
export function CustomCursor() {
    const [mode, setMode] = useState<Mode>("default");
    const [visible, setVisible] = useState(false);
    const [enabled, setEnabled] = useState(false);

    const x = useMotionValue(-200);
    const y = useMotionValue(-200);
    const smoothX = useSpring(x, SPRING.cursor);
    const smoothY = useSpring(y, SPRING.cursor);

    useEffect(() => {
        const fine = window.matchMedia("(pointer: fine)").matches;
        const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (!fine || reduced) return;

        setEnabled(true);
        document.documentElement.classList.add("has-custom-cursor");

        const handleMove = (event: MouseEvent) => {
            x.set(event.clientX);
            y.set(event.clientY);
            setVisible(true);

            const target = event.target as HTMLElement | null;
            const next: Mode = target?.closest<HTMLElement>(
                "[data-cursor='project']",
            )
                ? "open"
                : target?.closest("a, button, [role='button']")
                  ? "link"
                  : "default";

            setMode((current) => (current === next ? current : next));
        };

        const handleLeave = () => setVisible(false);

        window.addEventListener("mousemove", handleMove, { passive: true });
        document.addEventListener("mouseleave", handleLeave);

        return () => {
            document.documentElement.classList.remove("has-custom-cursor");
            window.removeEventListener("mousemove", handleMove);
            document.removeEventListener("mouseleave", handleLeave);
        };
    }, [x, y]);

    if (!enabled || !visible) return null;

    return (
        <motion.div
            style={{ x: smoothX, y: smoothY }}
            className="pointer-events-none fixed left-0 top-0 z-[60] hidden lg:block"
            aria-hidden="true"
        >
            <div className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                {mode === "open" ? (
                    <span className="animate-in fade-in zoom-in-90 duration-150 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-[0.7rem] font-medium tracking-[-0.01em] text-paper">
                        Open
                    </span>
                ) : (
                    <span
                        className={`block rounded-full transition-all duration-300 ease-out ${
                            mode === "link"
                                ? "size-8 border border-ink/40 bg-ink/5"
                                : "size-2 bg-ink"
                        }`}
                    />
                )}
            </div>
        </motion.div>
    );
}

export default CustomCursor;
