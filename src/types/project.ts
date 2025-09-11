//project.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    image: string[];
    liveUrl?: string;
    githubUrl?: string;
    categories: ("Web" | "Data" | "ML" | "AI" | "Mobile" | "Other")[];
    inProgress: boolean;
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
