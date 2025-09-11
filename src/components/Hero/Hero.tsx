// Hero.tsx
import HeroText from "@/components/Hero/HeroText";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import type { FC } from "react";

const Hero: FC = () => {
    return (
        <section
            id="home"
            className="relative flex items-center justify-center min-h-screen px-6"
        >
            <div className="container max-w-[1280px] mx-auto flex justify-center items-center">
                <HeroText />
            </div>

            <motion.a
                href="#about"
                className="absolute bottom-6 flex flex-col items-center cursor-pointer bg-[var(--tag-color)] p-3 rounded-4xl text-[var(--color-accent)]"
                animate={{ y: [0, 10, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "easeInOut",
                }}
            >
                <ArrowDown className="size-6" />
            </motion.a>
        </section>
    );
};

export default Hero;
