// projects.ts
import type { Project } from "@/types/project";

export const projects: Project[] = [
    {
        id: 1,
        title: "Respirix",
        description:
            "Full-stack AI system using FastAPI and React to detect lung cancer from CT scans with a TensorFlow Lite model.",
        techStack: [
            "FastAPI",
            "React",
            "MySQL",
            "AntDesign",
            "TensorFlow Lite",
            "Python",
        ],
        image: [
            "/assets/projects/respirix/respirix-2.png",
            "/assets/projects/respirix/respirix-1.png",
            "/assets/projects/respirix/respirix-3.png",
            "/assets/projects/respirix/respirix-4.png",
        ],
        liveUrl: "https://respirix-ashy.vercel.app/",
        githubUrl: "https://github.com/mideyolu/RespirixNet_backend",
        categories: ["Web", "ML", "AI"],
        inProgress: false,
    },

    {
        id: 2,
        title: "Activewear Sales Dashboard",
        description:
            "A Power BI dashboard delivering actionable insights into Activewear sales performance, product trends, regional distribution, and detailed order analytics to support decision-making.",
        techStack: ["Power BI", "Excel", "Python"],
        image: [
            "/assets/projects/active_sales/active_sales-1.jpg",
            "/assets/projects/active_sales/active_sales-2.jpg",
            "/assets/projects/active_sales/active_sales-3.jpg",
            "/assets/projects/active_sales/active_sales-4.jpg",
        ],
        liveUrl:
            "https://app.powerbi.com/view?r=eyJrIjoiYTU3MWNhNjAtMmZiMS00Y2ZmLTlhZDgtOWE2MTAzM2VmOWRkIiwidCI6Ijk2MzdkZDk1LWY4ZmUtNDhkZC05NTNmLWJkNGQyOTZhMTllMCJ9&pageName=c14b5e51907b83d899c2",
        categories: ["Data"],
        inProgress: false,
    },

    {
        id: 3,
        title: "CryptoWorld",
        description:
            "A modern web app for tracking real-time cryptocurrency prices, news, and market analytics with interactive charts.",
        techStack: [
            "React",
            "JavaScript",
            "TailwindCSS",
            "MaterialUI",
            "Redux Toolkit",
            "Chart.js",
        ],
        image: [
            "/assets/projects/crypto/crypto-1.png",
            "/assets/projects/crypto/crypto-2.png",
            "/assets/projects/crypto/crypto-3.png",
            "/assets/projects/crypto/crypto-4.png",
        ],
        liveUrl: "https://crypto-world-lemon.vercel.app/login",
        githubUrl: "https://github.com/mideyolu/CryptoWorld",
        categories: ["Web"],
        inProgress: false,
    },

    {
        id: 4,
        title: "Bank Customer Attrition Prediction",
        description:
            "A machine learning project that predicts customer churn using scikit-learn and XGBoost, deployed with Dash for interactive visualization.",
        techStack: ["Python", "scikit-learn", "XGBoost", "Dash"],
        image: [
            "/assets/projects/bank/bank_kpi's.png",
            "/assets/projects/bank/bank_prediction.png",
            "/assets/projects/bank/bank_visuals-1.png",
            "/assets/projects/bank/bank_visuals-2.png",
        ],
        liveUrl: "#",
        githubUrl:
            "https://github.com/mideyolu/ML-projects/tree/main/Bank-Customer-Attrition",
        categories: ["ML", "Data"],
        inProgress: false,
    },

    {
        id: 5,
        title: "Nike Sales Dashboard",
        description:
            "An interactive Excel dashboard analyzing Nike's sales performance across regions and categories.",
        techStack: ["Excel"],
        image: [
            "/assets/projects/nike_sales/nike_sales-1.png",
            "/assets/projects/nike_sales/nike_sales-2.png",
            "/assets/projects/nike_sales/nike_sales-3.png",
            "/assets/projects/nike_sales/nike_sales-4.png",
        ],
        liveUrl: "#",
        categories: ["Data"],
        inProgress: false,
    },

    {
        id: 6,
        title: "FinWise",
        description:
            "A multi-agent AI-powered financial analytics web app providing insights, trends, and report generation for personal finance and investment portfolios.",
        techStack: [
            "React",
            "TypeScript",
            "TailwindCSS",
            "ShadCn",
            "FastAPI",
            "Agno",
            "Firebase",
        ],
        image: [
            "/assets/projects/fin_wise/fin_wise-1.jpg",
            "/assets/projects/fin_wise/fin_wise-2.jpg",
            "/assets/projects/fin_wise/fin_wise-3.jpg",
        ],
        liveUrl: "#",
        githubUrl: "#",
        categories: ["Web", "AI"],
        inProgress: true,
    },

    // {
    //     id: 6,
    //     title: "Trekly",
    //     description:
    //         "A multi-agent travel itinerary planner that provides personalized recommendations for flights, hotel and generates dynamic travel plan activities.",
    //     techStack: ["React", "TailwindCSS", "ShadCn", "FastAPI","PostgreSQL", "Agno"],
    //     image: ["/assets/projects/no-image.jpg"],
    //     liveUrl: "#",
    //     githubUrl: "#",
    //     categories: ["Web", "AI"],
    //     inProgress: true,
    // },
];
