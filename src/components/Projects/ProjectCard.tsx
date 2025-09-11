// ProjectCard.tsx
import type { Project } from "@/types/project";
import ProjectActions from "@/utils/project/ProjectActions";
import ProjectImage from "@/utils/project/ProjectImage";
import ProjectModal from "@/utils/project/ProjectModal";
// import TechBadges from "@/utils/project/TechBadges";
import { useEffect, useState } from "react";

const ProjectCard = ({ project }: { project: Project }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handleLiveDemoClick = () => {
        if (project.inProgress) {
            setModalOpen(true);
        } else if (project.liveUrl) {
            window.open(project.liveUrl, "_blank");
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="bg-[var(--shadow-color)] border border-[var(--tag-color)]/40 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-6 p-6 md:p-8">
                    <div className="flex-1 space-y-4">
                        <h3 className="text-xl md:text-2xl font-extrabold text-[var(--color-accent)] tracking-wide">
                            {project.title}
                        </h3>
                        <p className="text-[var(--text-color)] leading-relaxed text-sm md:text-base">
                            {project.description}
                        </p>
{/*
                        <TechBadges techStack={project.techStack} /> */}

                        <ProjectActions
                            inProgress={project.inProgress}
                            liveUrl={project.liveUrl}
                            githubUrl={project.githubUrl}
                            onLiveClick={handleLiveDemoClick}
                        />
                    </div>

                    <ProjectImage
                        images={project.image}
                        isLoading={isLoading}
                    />
                </div>
            </div>

            <ProjectModal
                title={project.title}
                open={modalOpen}
                onOpenChange={setModalOpen}
            />
        </>
    );
};

export default ProjectCard;
