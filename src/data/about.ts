// about.ts
import type { ExperienceItem, Principle } from "@/types/about";

export const manifesto = {
    statement: "I build software that actually solves the problem.",
    extended:
        "I work across software engineering and AI — from backend systems and APIs to the interfaces people use daily. Most projects start with a problem I find interesting, then I choose the technology that fits it.",

    creds: [
        { label: "Degree", value: "B.Sc. Software Engineering" },
        { label: "Honours", value: "First Class" },
        { label: "Focus", value: "Software Engineering & AI" },
        { label: "Based", value: "Abuja, Nigeria · Open to remote" },
    ],
};

export const principles: Principle[] = [
    {
        title: "Start with the problem",
        body: "I’d rather understand what needs to be solved first than pick a technology and force a problem into it.",
    },
    {
        title: "Build, don’t just prototype",
        body: "I care about what happens beyond the demo the backend, data, authentication, APIs, deployment, and all the small details that make a product usable.",
    },
    {
        title: "Use AI when it helps",
        body: "I’m interested in AI because of what it can make possible, not because every project needs an AI feature. Sometimes the best solution is still simple software.",
    },
];


export const experiences: ExperienceItem[] = [
    {
        id: "exp-1",
        year: "2021 — 2025",
        role: "B.Sc. Software Engineering, First Class Honours",
        organization: "Babcock University",
        location: "Nigeria",
        summary:
            "First Class Honours 4.71, with deep work in algorithms, distributed systems, and machine learning.",
        highlights: [
            "Graduated with First Class Honours.",
            "Specialised in algorithms, distributed systems, databases, and machine learning.",
            "Thesis on deep learning for medical imaging diagnostics — the work behind RespirixNet.",
        ],
        skills: [
            "Algorithms",
            "Data Structures",
            "System Design",
            "Machine Learning",
        ],
        type: "education",
    },
    {
        id: "exp-2",
        year: "2024 — Present",

        role: "Software & AI Product Engineer",
        organization: "Independent Practice",
        location: "Nigeria / Remote",
        summary:
            "Building Stifstream an ecommerce analytics platform that streams order events to monitor revenue and many more.",
        highlights: [
            "Building Trekly, an agentic itinerary engine coordinating flight, hotel, and budget tools.",
            "Shipped RespirixNet, a clinical web app running TensorFlow Lite inference under 120ms.",
        ],
        skills: [
            "FastAPI",
            "Agno",
            "React",
            "TypeScript",
            "Python",
            "PostgreSQL",
        ],
        type: "work",
    },
    {
        id: "exp-3",
        year: "2024 — 2024",
        role: "AI & Robotics Engineering Intern",
        organization: "National Centre for AI & Robotics (NCAIR)",
        location: "Abuja, Nigeria",
        summary:
            "Applied computer vision, AI, and embedded systems to public-sector problems.",
        highlights: [
            "Built a biometric attendance system with OpenCV, Python, and neural embeddings.",
            "Built smart parking workflows wiring ultrasonic sensors, microcontroller firmware, and live dashboards.",
            "Worked with research scientists on edge deployment limits and hardware telemetry.",
        ],
        skills: [
            "Computer Vision",
            "OpenCV",
            "Python",
            "IoT",
            "Embedded Systems",
        ],
        type: "work",
    },
    {
        id: "exp-4",
        year: "2023",
        role: "Frontend Software Engineer Intern",
        organization: "Bizmarrow Technologies",
        location: "Nigeria",
        summary:
            "Responsive web apps, client portals, and a shared component library.",
        highlights: [
            "Shipped responsive client sites with strong Lighthouse performance.",
            "Standardised a shared UI library across projects, cutting build turnaround by 35%.",
            "Improved accessibility and semantic structure across dynamic pages.",
        ],
        skills: ["React", "JavaScript", "Responsive Design", "Web Performance"],
        type: "work",
    },
    {
        id: "exp-5",
        year: "2024 — 2025",
        role: "Resource Manager & Technical Lead (Data/AI)",
        organization: "Google Developer Student Clubs (GDSC) Babcock",
        location: "Babcock University",
        summary:
            "Ran workshops and open-source hackathons for the campus engineering community.",
        highlights: [
            "Ran machine learning, data science, and web development workshops for 200+ students.",
            "Managed developer resources, project showcases, and student mentorship.",
            "Grew an open-source habit among undergraduate engineers.",
        ],
        skills: [
            "Technical Leadership",
            "Data Science",
            "Workshops",
            "Mentorship",
        ],
        type: "leadership",
    },
];
