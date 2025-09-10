// AboutCard.tsx
import StaggeredAnimation from "@/components/Animation/StaggeredAnimation";
import { H4, P } from "@/components/ui/typography";
import type { AboutCardProps } from "@/types/about";
import { motion } from "framer-motion";
import type { FC } from "react";

const AboutCard: FC<AboutCardProps> = ({
    title,
    description,
    tags,
    animation,
}) => {
    return (
        <motion.div
            {...animation}
            className="bg-[var(--shadow-color)] p-6 rounded-2xl shadow-md"
        >
            {/* Title */}
            <H4 className="text-[var(--text-color)] leading-relaxed mb-3">
                {title}
            </H4>

            {/* Description */}
            {description ? (
                <P className="text-[var(--text-color)] leading-relaxed mb-3">
                    {description.trim()}
                </P>
            ) : null}

            {/* Tags */}
            {tags ? (
                <StaggeredAnimation className="flex flex-wrap gap-2 cursor-pointer">
                    {tags.map((tag, i) => (
                        <li
                            key={i}
                            className="bg-[var(--tag-color)] text-[var(--text-color)] p-3 rounded-full text-sm list-none hover:text-[var(--color-accent)] transition-colors duration-200"
                        >
                            {tag}
                        </li>
                    ))}
                </StaggeredAnimation>
            ) : null}
        </motion.div>
    );
};

export default AboutCard;
