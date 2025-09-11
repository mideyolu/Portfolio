// HeroText.tsx
import { slideFromLeft } from "@/components/Animation/animation";
import SocialLinks from "@/components/Hero/SocialLinks";
import { Button } from "@/components/ui/button";
import { H1, P } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import type { FC } from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroText: FC = () => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center text-center space-y-8 md:w-2/3"
            {...slideFromLeft}
        >
            {/* Name */}
            <H1 className="font-extrabold text-[var(--text-color)]">
                Hey there, I'm{" "}
                <span className="block text-[var(--color-accent)] mt-2">
                    Olumide!
                </span>
            </H1>

            {/* Static profession intro */}
            <P className="text-[var(--text-color)]">
                Software Engineer that specializes in{" "}
                <span className="text-[var(--color-accent)]">
                    <Typewriter
                        words={[
                            "Data Science",
                            "Machine Learning",
                            "Web Development",
                            "Data Analytics",
                            "Data Visualization",
                            "Software Engineering",
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </P>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 flex-wrap">
                <a href="/Oluwuyi_Olumide_CV.pdf" download>
                    <Button
                        size="lg"
                        className="bg-[var(--button-bg-color)] hover:bg-[var(--button-hover-color)] transition-all duration-200 cursor-pointer"
                    >
                        <Download className="size-4" />
                        Download CV
                    </Button>
                </a>

                <SocialLinks className="flex gap-6" />
            </div>
        </motion.div>
    );
};

export default HeroText;
