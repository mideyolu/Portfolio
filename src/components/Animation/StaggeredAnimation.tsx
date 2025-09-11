// StaggeredAnimation.tsx
import { motion } from "framer-motion";
import type { FC, ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
    stagger?: number;
    delayChildren?: number;
    initial?: "hidden" | false;
}

const StaggeredAnimation: FC<Props> = ({
    children,
    className = "",
    stagger = 0.3,
    delayChildren = 0,
    initial = "hidden",
}) => {
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: stagger,
                delayChildren,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className={className}
            variants={containerVariants}
            initial={initial}
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
        >
            {Array.isArray(children) ? (
                children.map((child, i) => (
                    <motion.div key={i} variants={itemVariants}>
                        {child}
                    </motion.div>
                ))
            ) : (
                <motion.div variants={itemVariants}>{children}</motion.div>
            )}
        </motion.div>
    );
};

export default StaggeredAnimation;
