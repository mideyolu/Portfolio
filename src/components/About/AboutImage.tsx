// AboutImage.tsx
import {
    rotateCircle,
    scaleFade,
    slideFromRight,
} from "@/components/Animation/animation";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useState, type FC } from "react";

const AboutImage: FC = () => {
    const [radius, setRadius] = useState(180);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) setRadius(100);
            else setRadius(180);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <motion.div
            className="md:w-1/2 flex justify-center"
            {...slideFromRight}
        >
            <div className="relative hidden md:flex items-center justify-center">
                <motion.img
                    src="/profile.jpg"
                    alt="Ismail"
                    className="w-full aspect-square rounded-full object-cover relative z-10"
                    {...scaleFade}
                />

                <motion.svg
                    className="absolute w-[420px] h-[420px] z-0"
                    viewBox="0 0 420 420"
                    {...rotateCircle}
                >
                    <circle
                        cx="210"
                        cy="210"
                        r={radius}
                        fill="none"
                        stroke="var(--color-accent)"
                        strokeWidth="6"
                        strokeDasharray="80 40"
                        strokeLinecap="round"
                    />
                </motion.svg>
            </div>

            <div className="w-full flex md:hidden justify-center">
                <Card className="p-4 rounded-2xl shadow-lg bg-[hsl(var(--card-bg))] border-[var(--color-accent)]/60">
                    <CardContent className="flex justify-center">
                        <motion.img
                            src="/profile.jpg"
                            alt="Ismail"
                            className="w-64 aspect-square rounded-2xl object-cover"
                            {...scaleFade}
                        />
                    </CardContent>
                </Card>
            </div>
        </motion.div>
    );
};

export default AboutImage;
