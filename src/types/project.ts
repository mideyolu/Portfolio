// project.ts
export type ProjectCategory = "All" | "Web" | "AI" | "ML" | "Data" | "Autonomous Agents" | "Other";

export interface ProjectMetric {
    label: string;
    value: string;
}

export interface Project {
    id: number;
    number: string;
    title: string;
    tagline: string;
    description: string;
    problem: string;
    solution: string;
    architecture?: string;
    outcome: string;
    metrics?: ProjectMetric[];
    techStack: string[];
    image: string[];
    liveUrl?: string;
    githubUrl?: string;
    categories: ("Web" | "Data" | "ML" | "AI" | "Mobile" | "Other")[];
    inProgress: boolean;
    featured?: boolean;
    featuredLayout?: "large-left" | "large-right" | "immersive-wide" | "split";
}

export interface ProjectImageProps {
    images: string[];
    isLoading: boolean;
}

export interface ProjectActionsProps {
    inProgress: boolean;
    liveUrl?: string;
    githubUrl?: string;
    onLiveClick: () => void;
}

export interface InProgressModalProps {
    title: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export interface ImageLightboxProps {
    images: string[];
    alt: string;
    className?: string;
}

export interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}
