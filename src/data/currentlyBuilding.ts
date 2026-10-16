// currentlyBuilding.ts

export interface ActiveFocus {
    id: string;
    area: string;
    title: string;
    status: string;
    description: string;
    technologies: string[];
}

export const activeFocusItems: ActiveFocus[] = [
    {
        id: "focus-1",
        area: "Ecommerce Analytics",
        title: "SiftStreams",
        status: "In Development",
        description:
            "A real-time e-commerce analytics platform that streams order events to monitor revenue, active users, conversion rates, and product performance through a live dashboard.",
        technologies: [
            "FastAPI",
            "React",
            "TypeScript",
            "PostgreSQL",
            "Redis Streams",
            "Docker",
        ],
    },

    {
        id: "focus-2",
        area: "AI Travel Planning",
        title: "Trekly",
        status: "In Development",
        description:
            "An AI-powered travel planning platform that uses intelligent agents to generate personalized itineraries, discover destinations, and streamline trip planning based on travelers' preferences, budgets, and interests.",
        technologies: [
            "Agno",
            "FastAPI",
            "React",
            "Gemini",
            "SerpAPI",
            "Google Places API",
        ],
    },
];
