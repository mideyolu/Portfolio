// // about.ts
// import {
//     slideFromLeft,
//     slideFromRight,
//     slideFromUp,
// } from "@/components/Animation/animation";


// export const aboutItems = [
//     {
//         title: "Education",
//         description:
//             "I graduated with a First Class Honors in Software Engineering from Babcock University. I developed strong foundations in software design and data-driven applications, with coursework in Algorithms & Data Structures, Database Systems, Artificial Intelligence & Applications, Quality Engineering, Requirement Engineering,  and Project Management.",
//         animation: slideFromUp,
//     },
//     {
//         title: "Expertise",
//         description:
//             "I specialize in AI, Machine Learning, and Data Science, applying tools like Python, TensorFlow, SQL, Excel, and Power BI to solve real-world problems, uncover insights and build predictive solutions. I also have experience in web development, using React and FastAPI to integrate data-driven applications.",
//         tags: [
//             "AI & ML",
//             "EDA",
//             "Data Analysis",
//             "Data Visualization",
//             "Frontend Development",
//         ],
//         animation: slideFromRight,
//     },
//     {
//         title: "Experience",
//         description:
//             "I bring over 1 year of hands-on experience in data analytics, visualization, and AI-driven solutions. At the National Center for Artificial Intelligence and Robotics, I contributed to projects such as an AI-powered attendance tracking system and a smart IoT-based parking solution, withlist while also working on personal projects in Data analysis, Machine Learning and Deep Learning . I also worked as a Frontend Intern at Bizmarrow Technologies, building responsive web interfaces and improving user experiences.",
//         tags: ["Internship", "Projects", "IoT Applications"],
//         animation: slideFromLeft,
//     },
//     {
//         title: "Volunteering",
//         description:
//             "I served as the Resource Manager of GDG Babcock (Data/AI), where I organized workshops, gathered necessary resources, and supported community learning initiatives. I also contributed to open-source initiatives through blog posts thereby encouraging peers to explore AI and data science.",
//         tags: ["Team Management", "Collaboration", "Community Engagement"],
//         animation: slideFromLeft,
//     },
// ];


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
