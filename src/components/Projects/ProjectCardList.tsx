// ProjectCardList.tsx
import ProjectCard from "@/components/Projects/ProjectCard";
import type { Project } from "@/types/project";

export const ProjectCardList = ({ projects }: { projects: Project[] }) => {
    return (
        <div className="space-y-[1.5rem]">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};
