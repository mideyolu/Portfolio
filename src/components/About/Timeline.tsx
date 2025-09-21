// Timeline.tsx
import { aboutItems } from "@/data/about";
import AboutCard from "@/utils/about/AboutCard";
import type { FC } from "react";

const Timeline: FC = () => {
    return (
        <div className="relative border-l-2 border-gray-700 ml-6">
            {aboutItems.map((item, index) => (
                <div
                    key={index}
                    className="mb-10 ml-1 md:ml-6 flex items-start gap-6 text-justify"
                >
                    <div className="absolute -left-[11px] flex items-center justify-center w-5 h-5 bg-[var(--color-accent)] rounded-full border-2 border-[var(--shadow-color)]" />

                    <AboutCard
                        title={item.title}
                        description={item.description}
                        tags={item.tags}
                        animation={item.animation}
                    />
                </div>
            ))}
        </div>
    );
};

export default Timeline;
