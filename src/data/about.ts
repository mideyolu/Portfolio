
// about.ts



import {
    slideFromRight,
    slideFromUp,
    slideFromLeft,
    slideFromDown
} from "@/components/Animation/animation";

export const aboutItems = [
    {
        title: "My Profile",
        description:
            "I'm a Software Engineer specializing in AI, Machine Learning, and Data Science. I graduated with a First Class Honors in Software Engineering from Babcock University, with strong foundations in algorithms, databases, and software design.",
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
        title: "NCAIR",
        description:
            "At the National Center for Artificial Intelligence and Robotics, I worked on cutting-edge projects including an AI-powered attendance system and smart IoT parking solutions. This experience allowed me to apply my knowledge in artificial intelligence to solve real-world problems and develop innovative technological solutions.",
        tags: [
            "AI Solutions",
            "IoT Applications",
            "Computer Vision",
            "Project Development",
        ],
        animation: slideFromRight,
   },
    {
        title: "Bizmarrow Technologies",
        description:
            "During my internship at Bizmarrow Technologies, I focused on frontend development, creating responsive and user-friendly web interfaces. This opportunity helped me strengthen my skills in modern web technologies and understand the commercial application of software development.",
        tags: [
            "Frontend Development",
            "Responsive Design",
            "Web Technologies",
            
        ],
        animation: slideFromLeft,
    },
    {
        title: "Volunteering",
        description:
            "I served as Resource Manager at GDG Babcock (Data/AI), where I organized technical workshops, managed community resources, and supported open-source initiatives. This role allowed me to contribute to the developer community while developing leadership and organizational skills.",
        tags: [
            "Community Engagement",
            "Workshop Organization",
      
            "Internship",
            "Leadership",
        ],
        animation: slideFromDown,
    },
];
