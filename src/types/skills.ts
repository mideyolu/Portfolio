// skills.ts

export interface TechSkill {
    name: string;
    category: "AI & Machine Learning" | "Backend & Architecture" | "Frontend & Interfaces" | "Tools & Infrastructure";
    badge?: string;
    usedInProjects: string[];
    description: string;
}

export interface SkillCategoryGroup {
    category: "AI & Machine Learning" | "Backend & Architecture" | "Frontend & Interfaces" | "Tools & Infrastructure";
    description: string;
    skills: TechSkill[];
}

// Backward compatibility types
export type Skill = {
    name: string;
    icon: string;
};

export interface TechBadgesProps {
    techStack: string[];
}
