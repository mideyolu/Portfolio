// // About.tsx
import AboutImage from "@/components/About/AboutImage";
import Timeline from "@/components/About/Timeline";
import AnimatedHeader from "@/components/Animation/AnimatedHeader";
import { H2 } from "@/components/ui/typography";
import type { FC } from "react";

const About: FC = () => {
    return (
        <section
            id="about"
            className="container max-w-[1280px] mx-auto min-h-screen py-20 md:py-40 px-6 flex flex-col items-center justify-center text-center space-y-16"
        >
            {/* About Header */}
            <AnimatedHeader
                text={
                    <H2 className="text-[var(--text-color)] text-3xl md:text-4xl font-bold">
                        About{" "}
                        <span className="text-[var(--color-accent)]">Me</span>
                    </H2>
                }
            />

            <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full">
                {/* Profile Image */}
                <div className="flex-1 w-full flex justify-center">
                    <AboutImage />
                </div>
                {/* Timeline */}
                <div className="md:flex-[1.3] lg:flex-1 w-full flex justify-center">
                    <Timeline />
                </div>
            </div>
        </section>
    );
};

export default About;
