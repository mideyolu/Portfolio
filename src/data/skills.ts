// skills.ts
import type { SkillCategoryGroup, TechSkill } from "@/types/skills";

export const techSkills: TechSkill[] = [
    // AI & Machine Learning
    {
        name: "Agno",
        category: "AI & Machine Learning",
        badge: "Multi-agent",
        usedInProjects: ["FinWise", "Trekly"],
        description: "Orchestrating specialist agents with tool calling and structured outputs.",
    },
    {
        name: "TensorFlow Lite",
        category: "AI & Machine Learning",
        badge: "Edge ML",
        usedInProjects: ["Respirix"],
        description: "Quantized CNNs deployed where latency and hardware are constrained.",
    },
    {
        name: "Python",
        category: "AI & Machine Learning",
        badge: "Core language",
        usedInProjects: [
            "Respirix",
            "FinWise",
            "Bank Customer Attrition Engine",
            "Activewear Sales Intelligence",
        ],
        description: "Data pipelines, model training, and async REST services.",
    },
    {
        name: "Scikit-learn & XGBoost",
        category: "AI & Machine Learning",
        badge: "Tabular ML",
        usedInProjects: ["Bank Customer Attrition Engine"],
        description: "Feature engineering, class balancing, and gradient-boosted trees.",
    },
    {
        name: "OpenCV",
        category: "AI & Machine Learning",
        badge: "Vision",
        usedInProjects: ["Respirix", "NCAIR Biometric Systems"],
        description: "Image preprocessing and facial biometric detection.",
    },
    {
        name: "LLM APIs",
        category: "AI & Machine Learning",
        badge: "Foundation models",
        usedInProjects: ["FinWise", "Trekly"],
        description: "Structured outputs, function calling, and agent reasoning loops.",
    },

    // Backend & Architecture
    {
        name: "FastAPI",
        category: "Backend & Architecture",
        badge: "Async services",
        usedInProjects: ["Respirix", "FinWise", "Trekly"],
        description: "Async Python services with Pydantic validation and generated OpenAPI.",
    },
    {
        name: "PostgreSQL",
        category: "Backend & Architecture",
        badge: "Relational",
        usedInProjects: ["Trekly"],
        description: "Indexed schemas, transactions, and query tuning.",
    },
    {
        name: "MySQL",
        category: "Backend & Architecture",
        badge: "Records",
        usedInProjects: ["Respirix"],
        description: "Normalised clinical records, metadata, and audit logs.",
    },
    {
        name: "System Design",
        category: "Backend & Architecture",
        badge: "Architecture",
        usedInProjects: ["Respirix", "FinWise", "Trekly"],
        description: "Clear boundaries, decoupled services, and async work where it counts.",
    },
    {
        name: "Firebase",
        category: "Backend & Architecture",
        badge: "Auth & storage",
        usedInProjects: ["FinWise"],
        description: "Auth, cloud storage, and real-time sync.",
    },

    // Frontend & Interfaces
    {
        name: "React",
        category: "Frontend & Interfaces",
        badge: "UI runtime",
        usedInProjects: ["Respirix", "FinWise", "Trekly", "CryptoWorld", "Portfolio"],
        description: "Component architecture, concurrent rendering, and clean state.",
    },
    {
        name: "TypeScript",
        category: "Frontend & Interfaces",
        badge: "Type safety",
        usedInProjects: ["Respirix", "FinWise", "Trekly", "Portfolio"],
        description: "Strict types, generics, and codebases that survive contact with a team.",
    },
    {
        name: "Tailwind CSS",
        category: "Frontend & Interfaces",
        badge: "Styling",
        usedInProjects: ["FinWise", "Trekly", "CryptoWorld", "Portfolio"],
        description: "Design tokens, tight type scales, and responsive grids.",
    },
    {
        name: "Framer Motion",
        category: "Frontend & Interfaces",
        badge: "Motion",
        usedInProjects: ["Portfolio"],
        description: "Spring transitions, layout animation, and gesture-driven UI.",
    },
    {
        name: "Redux Toolkit",
        category: "Frontend & Interfaces",
        badge: "State",
        usedInProjects: ["CryptoWorld"],
        description: "Normalised slices and async thunks for high-frequency data.",
    },

    // Tools & Infrastructure
    {
        name: "Power BI & DAX",
        category: "Tools & Infrastructure",
        badge: "BI",
        usedInProjects: [
            "Activewear Sales Intelligence",
            "Nike Enterprise Sales Analytics",
        ],
        description: "Star schemas, time-intelligence measures, and interactive drilldowns.",
    },
    {
        name: "Docker",
        category: "Tools & Infrastructure",
        badge: "Containers",
        usedInProjects: ["FastAPI Microservices", "ML Deployment"],
        description: "Multi-stage builds and runtime parity between machines.",
    },
    {
        name: "Git",
        category: "Tools & Infrastructure",
        badge: "Workflow",
        usedInProjects: ["Respirix", "FinWise", "CryptoWorld", "Portfolio"],
        description: "Feature-branch workflows, clean commits, and CI setups.",
    },

];

export const skillCategoryGroups: SkillCategoryGroup[] = [
    {
        category: "AI & Machine Learning",
        description: "Agents, computer vision, and applied ML that reaches production.",
        skills: techSkills.filter((s) => s.category === "AI & Machine Learning"),
    },
    {
        category: "Backend & Architecture",
        description: "Async services, data models, and the boundaries between them.",
        skills: techSkills.filter((s) => s.category === "Backend & Architecture"),
    },
    {
        category: "Frontend & Interfaces",
        description: "Interfaces for dense, high-stakes work — fast and legible.",
        skills: techSkills.filter((s) => s.category === "Frontend & Interfaces"),
    },
    {
        category: "Tools & Infrastructure",
        description: "Containers, BI modelling, and version control.",
        skills: techSkills.filter((s) => s.category === "Tools & Infrastructure"),
    },
];
