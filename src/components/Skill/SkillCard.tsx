// SkillCard.tsx
import type { Skill } from "@/types/skills";
import { motion } from "framer-motion";
import { P } from "@/components/ui/typography";
import { fadeSlideUp } from "@/components/Animation/animation";

const SkillCard = ({ name, icon }: Skill) => (
    <motion.div
        variants={fadeSlideUp}
        whileHover={{ scale: 1.1, rotate: 3 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="bg-[var(--tag-color)] text-[var(--text-color)] p-4 rounded-xl flex flex-col items-center justify-center shadow  transition-colors duration-200 cursor-pointer hover:border hover:border-[var(--color-accent)]"
    >
        <img src={icon} alt={name} className="w-12 h-12 mb-5 rounded-3xl" />
        <P>{name}</P>
    </motion.div>
);

export default SkillCard;
