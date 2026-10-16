// projects.ts
import type { Project } from "@/types/project";

export const projects: Project[] = [
    {
        id: 1,
        number: "01",
        title: "Respirix",
        tagline:
            "Lung-cancer triage on a CPU: 120ms per CT slice.",
        description:
            "A clinical screening app that runs a quantized TensorFlow Lite model over chest CT slices and gives radiologists a fast, reviewable second opinion.",
        problem:
            "Early-stage nodules are easy to miss in clinics without on-site GPU infrastructure, where every scan waits on a radiologist's queue.",
        solution:
            "A quantized TFLite CNN served behind FastAPI, with an async preprocessing pipeline and a React review canvas clinicians can actually read.",
        architecture:
            "FastAPI REST microservice with TFLite runtime, async image preprocessing pipeline, MySQL clinical records, and a React diagnostic canvas.",
        outcome:
            "Sub-120ms inference per slice preliminary triage without a GPU server.",
        metrics: [
            { label: "Inference latency", value: "<120ms" },
            { label: "Model", value: "TFLite CNN" },
            { label: "Stack", value: "FastAPI + React" },
        ],
        techStack: [
            "FastAPI",
            "React",
            "TensorFlow Lite",
            "Python",
            "MySQL",
            "AntDesign",
            "TypeScript",
        ],
        image: [
            "/assets/projects/respirix/respirix-2.png",
            "/assets/projects/respirix/respirix-1.png",
            "/assets/projects/respirix/respirix-3.png",
            "/assets/projects/respirix/respirix-4.png",
        ],
        liveUrl: "https://respirix-ashy.vercel.app/",
        githubUrl: "https://github.com/mideyolu/RespirixNet_backend",
        categories: ["AI", "ML", "Web"],
        inProgress: false,
        featured: true,
        featuredLayout: "large-left",
    },

    {
        id: 2,
        number: "02",
        title: "Activewear Sales Intelligence",
        tagline: "150,000 transactions in one KPI view, and 70% less reporting prep.",
        description:
            "An executive dashboard covering sales performance, product trends, regional distribution, and order detail — built on a Python ETL and star-schema model.",
        problem:
            "Leadership couldn't see demand shifts, stockouts, or return anomalies across retail zones until the quarterly report landed.",
        solution:
            "Python ETL into a star schema, DAX measures for margin sensitivity, and drill-through dashboards for each region and category.",
        architecture:
            "Automated Python tabular ingestion, star-schema relational model, multidimensional DAX calculation tables, and Power BI interactive analytics.",
        outcome:
            "150k+ records unified into one KPI view, cutting quarterly reporting prep by over 70%.",
        metrics: [
            { label: "Records", value: "150k+" },
            { label: "Reporting prep", value: "−70%" },
            { label: "Model", value: "Star schema DAX" },
        ],
        techStack: ["Power BI", "Python", "DAX", "Excel", "Data Modeling"],
        image: [
            "/assets/projects/active_sales/active_sales-1.jpg",
            "/assets/projects/active_sales/active_sales-2.jpg",
            "/assets/projects/active_sales/active_sales-3.jpg",
            "/assets/projects/active_sales/active_sales-4.jpg",
        ],
        liveUrl:
            "https://app.powerbi.com/view?r=eyJrIjoiYTU3MWNhNjAtMmZiMS00Y2ZmLTlhZDgtOWE2MTAzM2VmOWRkIiwidCI6Ijk2MzdkZDk1LWY4ZmUtNDhkZC05NTNmLWJkNGQyOTZhMTllMCJ9&pageName=c14b5e51907b83d899c2",
        githubUrl: "https://github.com/mideyolu",
        categories: ["Data"],
        inProgress: false,
        featured: false,
    },

    {
        id: 3,
        number: "03",
        title: "Bank Customer Attrition Engine",
        tagline:
            "Churn prediction at 89.4% ROC-AUC, and the five reasons customers leave.",
        description:
            "Gradient-boosted models that flag which customers are about to leave, plus a Dash interface the risk team can read.",
        problem:
            "Banks usually notice churn when the closure request arrives, not before.",
        solution:
            "XGBoost and Random Forest trained on demographic and behavioural signals, balanced with SMOTE, tuned with GridSearchCV, served in Dash.",
        architecture:
            "Python ML pipeline with feature engineering, SMOTE balancing, hyperparameter tuning via GridSearchCV, and a Dash/Plotly dashboard.",
        outcome:
            "89.4% ROC-AUC on validation cohorts, with the top five churn drivers made legible.",
        metrics: [
            { label: "ROC-AUC", value: "89.4%" },
            { label: "Model", value: "XGBoost + SMOTE" },
            { label: "Dashboard", value: "Dash / Plotly" },
        ],
        techStack: ["Python", "scikit-learn", "XGBoost", "Dash", "Plotly"],
        image: [
            "/assets/projects/bank/bank_prediction.png",
            "/assets/projects/bank/bank_kpi's.png",
            "/assets/projects/bank/bank_visuals-1.png",
            "/assets/projects/bank/bank_visuals-2.png",
        ],
        liveUrl: "#",
        githubUrl:
            "https://github.com/mideyolu/ML-projects/tree/main/Bank-Customer-Attrition",
        categories: ["ML", "Data"],
        inProgress: false,
        featured: false,
    },

    {
        id: 4,
        number: "04",
        title: "CryptoWorld",
        tagline: "100+ coins streaming live, without a terminal window.",
        description:
            "A fast client for following 100+ coins — price, market cap, volume, and news — without a desktop terminal.",
        problem:
            "Traders want sub-second price action across exchanges without heavy terminal software.",
        solution:
            "Redux Toolkit slices for normalised state, Coinranking streaming, and Chart.js canvases that stay responsive under load.",
        architecture:
            "React client with normalised Redux Toolkit slices, Coinranking API streaming, interactive canvas chart rendering, and Tailwind.",
        outcome:
            "100+ assets tracked live with historical ranges and instant currency toggles, with no UI lag.",
        metrics: [
            { label: "Assets", value: "100+ coins" },
            { label: "State", value: "Redux Toolkit" },
            { label: "Charts", value: "Chart.js" },
        ],
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
        featured: false,
    },

    {
        id: 5,
        number: "05",
        title: "Enterprise Retail Sales Analytics",
        tagline:
            "Footwear-versus-apparel margin, by region, in a single model.",
        description:
            "A multidimensional model over a real-world public retail dataset, cut by region, channel, and product category.",
        problem:
            "Deep product hierarchies across continental markets made margin erosion hard to spot in any one category.",
        solution:
            "Excel data model with Power Query transforms, nested pivots, automated KPI alerts, and scenario-based margin testing.",
        architecture:
            "Excel data model with Power Query automated transforms, nested pivot hierarchies, and dynamic visual KPI dashboards.",
        outcome:
            "Instant visibility into footwear versus apparel margin spread across four operating regions.",
        metrics: [
            { label: "Regions", value: "4 territories" },
            { label: "Model", value: "Power Query" },
            { label: "Reporting", value: "Scenario matrix" },
        ],
        techStack: [
            "Excel",
            "Power Query",
            "Data Analysis",
            "Financial Modeling",
        ],
        image: [
            "/assets/projects/nike_sales/nike_sales-1.png",
            "/assets/projects/nike_sales/nike_sales-2.png",
            "/assets/projects/nike_sales/nike_sales-3.png",
            "/assets/projects/nike_sales/nike_sales-4.png",
        ],
        liveUrl: "#",
        githubUrl: "#",
        categories: ["Data"],
        inProgress: false,
        featured: false,
    },

    // {
    //     id: 6,
    //     number: "06",
    //     title: "Trekly",
    //     tagline: "Four agents, one itinerary: flights, hotels and budget in six seconds.",
    //     description:
    //         "Coordinated agents that search flights and hotels, then build a day-by-day plan around your budget and preferences.",
    //     problem:
    //         "Trip planning means juggling dozens of disconnected booking sites, price engines, and schedules — decision fatigue by design.",
    //     solution:
    //         "An Agno planner coordinating flight search, hotel ranking, and budget optimisation over FastAPI, with persistent PostgreSQL state.",
    //     architecture:
    //         "Agno agentic planner coordinating flight search tools, hotel ranking agents, and budget optimisation over FastAPI with PostgreSQL state.",
    //     outcome:
    //         "A coherent 7-day itinerary with live budget forecasting in under 6 seconds.",
    //     metrics: [
    //         { label: "Architecture", value: "Multi-agent" },
    //         { label: "Database", value: "PostgreSQL" },
    //         { label: "Framework", value: "FastAPI + Agno" },
    //     ],
    //     techStack: [
    //         "FastAPI",
    //         "Agno",
    //         "React",
    //         "TypeScript",
    //         "PostgreSQL",
    //         "TailwindCSS",
    //         "Shadcn UI",
    //     ],
    //     image: ["/assets/projects/no-image.jpg"],
    //     liveUrl: "#",
    //     githubUrl: "https://github.com/mideyolu",
    //     categories: ["AI", "Web"],
    //     inProgress: true,
    //     featured: false,
    // },
];
