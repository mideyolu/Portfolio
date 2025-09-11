// // TechStack.tsx
// import AnimatedHeader from "@/components/Animation/AnimatedHeader";
// import StaggeredAnimation from "@/components/Animation/StaggeredAnimation";
// import SkillCard from "@/components/Skill/SkillCard";
// import { H2, P } from "@/components/ui/typography";
// import { skills } from "@/data/skills";
// import { useEffect, useState } from "react";

// const Skills = () => {
//     const [isLoading, setIsLoading] = useState<boolean>(true);

//     useEffect(() => {
//         const timer = setTimeout(() => setIsLoading(false), 1500);
//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <section
//             id="skills"
//             className="min-h-screen py-20 md:py-40 px-6 flex flex-col justify-center container max-w-[1280px] mx-auto"
//         >
//             <div className="text-center px-4 ">
//                 <div className="">
//                     <AnimatedHeader
//                         text={
//                             <H2 className="text-[var(--text-color)] text-3xl md:text-4xl font-bold">
//                                 My Tech{" "}
//                                 <span className="text-[var(--color-accent)]">
//                                     Stack
//                                 </span>
//                             </H2>
//                         }
//                     />
//                     <P>
//                         A curated list of technologies/frameworks I use to build
//                         machine learning and web applications.
//                     </P>
//                 </div>
// {/*
//                 <StaggeredAnimation
//                     className="mt-10  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center items-center"
//                     stagger={0.1}
//                 >
//                     {(isLoading ? Array(13).fill({}) : skills).map(
//                         (skill, index) => (
//                             <SkillCard
//                                 key={index}

//                                 {...skill}
//                                 loading={isLoading}
//                             />
//                         ),
//                     )}
//                 </StaggeredAnimation> */}
//             </div>
//         </section>
//     );
// };

// export default Skills;

const Skills = () => {
    return <div>Skills</div>;
};

export default Skills;
