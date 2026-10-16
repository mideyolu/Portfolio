import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Per-word opacity reveal for statements that need to arrive slowly.
 *
 * Replaces the inline implementation in `About.tsx`. Spaces are rendered as
 * explicit `&nbsp;` inside each word span so the words stay in normal flow and
 * line-break correctly.
 */
export function TextReveal({
    text,
    className,
    stagger = 0.022,
    delay = 0,
}: {
    text: string;
    className?: string;
    /** Seconds between words. 0.02–0.03 suits a long statement. */
    stagger?: number;
    delay?: number;
}) {
    const reduce = useReducedMotion();
    const words = text.split(" ");

    if (reduce) {
        return <p className={className}>{text}</p>;
    }

    return (
        <motion.p
            className={cn(className)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
            variants={{
                hidden: {},
                show: {
                    transition: { staggerChildren: stagger, delayChildren: delay },
                },
            }}
        >
            {words.map((word, i) => (
                <motion.span
                    key={`${word}-${i}`}
                    className="inline-block"
                    variants={{
                        hidden: { opacity: 0.14 },
                        show: { opacity: 1 },
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {word}
                    {i < words.length - 1 ? "\u00A0" : ""}
                </motion.span>
            ))}
        </motion.p>
    );
}

export default TextReveal;
