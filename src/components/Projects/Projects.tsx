// Projects.tsx
import AnimatedHeader from "@/components/Animation/AnimatedHeader";
import { ProjectCardList } from "@/components/Projects/ProjectCardList";
import { H2 } from "@/components/ui/typography";
import { projects } from "@/data/project";
import CategoryFilter from "@/utils/project/CategoryFilter";
import { useEffect, useState } from "react";

const categoryOptions: (
    | "All"
    | "Web"
    | "Data"
    | "ML"
    | "AI"
    | "Mobile"
    | "Other"
)[] = ["All", "Web", "Data", "ML", "AI", "Other"];

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState<"All" | string>(
        "All",
    );
    const [filteredProjects, setFilteredProjects] = useState(projects);

    useEffect(() => {
        if (selectedCategory === "All") {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(
                projects.filter((project) =>
                    project.categories.includes(selectedCategory as any),
                ),
            );
        }
    }, [selectedCategory]);

    return (
        <div
            id="projects"
            className="min-h-screen py-20 md:py-40 px-6 flex flex-col justify-center container max-w-[1280px] mx-auto"
        >
            <div className="text-center px-4 mb-10">
                <AnimatedHeader
                    text={
                        <H2 className="text-[var(--text-color)] text-3xl md:text-4xl font-bold">
                            Selected{" "}
                            <span className="text-[var(--color-accent)]">
                                Works
                            </span>
                        </H2>
                    }
                />
            </div>

            {/* Category Filter */}
            <CategoryFilter
                categories={categoryOptions}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            {/* Project List */}
            <ProjectCardList projects={filteredProjects} />
        </div>
    );
};

export default Projects;
