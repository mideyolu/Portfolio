// TechBadges.tsx
import StaggeredAnimation from "@/components/Animation/StaggeredAnimation";
import { Badge } from "@/components/ui/badge";
import type { TechBadgesProps } from "@/types/skills";
import type { FC } from "react";

const TechBadges: FC<TechBadgesProps> = ({ techStack }) => (
    <StaggeredAnimation stagger={0.15} className="flex flex-wrap gap-2 mt-4">
        {techStack.map((tech) => (
            <Badge
                key={tech}
                variant="secondary"
                className="border border-[var(--color-accent)]/20 bg-[var(--tag-color)] text-[var(--text-color)] rounded-xl text-sm px-3 py-1 shadow-sm hover:shadow-md hover:text-[var(--color-accent)] transition-all duration-200"
            >
                {tech}
            </Badge>
        ))}
    </StaggeredAnimation>
);

export default TechBadges;
