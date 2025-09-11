// ProjectActions.tsx
import { Button } from "@/components/ui/button";
import type { ProjectActionsProps } from "@/types/project";
import { Code } from "lucide-react";
import type { FC } from "react";

const ProjectActions: FC<ProjectActionsProps> = ({
    inProgress,
    liveUrl,
    githubUrl,
    onLiveClick,
}) => (
    <div className="flex flex-wrap gap-3 mt-6">
        <Button
            size="sm"
            variant="outline"
            className="px-4 py-2 rounded-full border-[var(--color-accent)] bg-[var(--tag-color)] text-[var(--tag-text)] hover:bg-[var(--color-accent)] hover:text-white transition-all duration-200 cursor-pointer"
            onClick={onLiveClick}
        >
            {inProgress ? "In Progress" : "Live Demo"}
        </Button>

        {githubUrl && (
            <Button
                size="sm"
                variant="outline"
                className="px-4 py-2 rounded-full border-[var(--color-accent)] bg-[var(--tag-color)] text-[var(--tag-text)] hover:bg-[var(--color-accent)] hover:text-white transition-all duration-200 flex items-center gap-2 cursor-pointer"
                onClick={() => window.open(githubUrl, "_blank")}
            >
                <Code size={16} /> View Code
            </Button>
        )}
    </div>
);

export default ProjectActions;
