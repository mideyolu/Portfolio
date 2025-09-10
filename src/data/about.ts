// about.ts
import {
    slideFromRight,
    slideFromUp
} from "@/components/Animation/animation";

export const aboutItems = [
    {
        title: "About Me",
        description: "I'm a Software Engineer specializing in AI, Machine Learning, and Data Science. I graduated with a First Class Honors in Software Engineering from Babcock University, with strong foundations in algorithms, databases, and software design.",

        tags: [
            "AI & ML",
            "Data Science",
            "EDA",
            "Data Analysis",
            "Visualization",
            "Web Development",
        ],
        animation: slideFromUp,
    },
    {
        title: "Experience & Volunteering",
        description:
            "I have over a year of experience in data analytics, AI-driven solutions, and frontend development. At the National Center for Artificial Intelligence and Robotics, I worked on an AI-powered attendance system and a smart IoT parking solutions. I interned at Bizmarrow Technologies, creating responsive web interfaces, and volunteered as Resource Manager at GDG Babcock (Data/AI), where I organized workshops and supported open-source initiatives.",


        tags: [
            "Internship",
            "Projects",
            "IoT Applications",
            "Community Engagement",
        ],
        animation: slideFromRight,
    },
];
