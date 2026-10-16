// about.ts

export interface ExperienceItem {
    id: string;
    year: string;
    role: string;
    organization: string;
    location: string;
    summary: string;
    highlights: string[];
    skills: string[];
    type: "work" | "education" | "leadership";
}

export interface Principle {
    title: string;
    body: string;
}
