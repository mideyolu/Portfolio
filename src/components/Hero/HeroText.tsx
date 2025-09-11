// HeroText.tsx
import { slideFromLeft } from "@/components/Animation/animation";
import SocialLinks from "@/components/Hero/SocialLinks";
import { Button } from "@/components/ui/button";
import { H1, P } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { Download, Loader2 } from "lucide-react";
import type { FC } from "react";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroText: FC = () => {
    const [loading, setLoading] = useState(false);

    const handleDownload = () => {
        setLoading(true);
        // Simulate loading state for UX (download happens immediately)
        setTimeout(() => setLoading(false), 2000);
    };

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
                <a
                    href="/Oluwuyi_Olumide_CV.pdf"
                    download
                    onClick={handleDownload}
                >
                    <Button
                        size="lg"
                        disabled={loading}
                        className="bg-[var(--button-bg-color)] hover:bg-[var(--button-hover-color)] transition-all duration-200 cursor-pointer flex items-center gap-2"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="animate-spin size-4" />
                                Downloading...
                            </>
                        ) : (
                            <>
                                <Download className="size-4" />
                                Download CV
                            </>
                        )}
                    </Button>
                </a>

                <SocialLinks className="flex gap-6" />
            </div>
        </motion.div>
    );
};

export default HeroText;
