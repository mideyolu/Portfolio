// AboutHeader.tsx
import { slideFadeUp } from "@/components/Animation/animation";
import { H2 } from "@/components/ui/typography";
import { motion } from "framer-motion";
import type { FC } from "react";

const AboutHeader: FC = () => {
    return (
        <motion.div {...slideFadeUp(0.1)} className="mb-12 text-center">
            <H2 className="text-[var(--text-color)] text-3xl md:text-4xl font-bold">
                About <span className="text-[var(--color-accent)]">Me</span>
            </H2>
        </motion.div>
    );
};

export default AboutHeader;
