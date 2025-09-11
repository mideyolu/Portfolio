// AnimatedHeader.tsx
import { slideFadeUp } from "@/components/Animation/animation";
import { motion } from "framer-motion";
import type { FC, ReactNode } from "react";

interface Props {
    text: ReactNode;
    className?: string;
    delay?: number;
}

const AnimatedHeader: FC<Props> = ({ text, className = "", delay = 0 }) => {
    return (
        <motion.div
            {...slideFadeUp(delay)}
            className={`mb-12 text-center ${className}`}
        >
            <div className="text-[var(--text-color)] text-3xl md:text-4xl font-bold">
                {text}
            </div>
        </motion.div>
    );
};

export default AnimatedHeader;
