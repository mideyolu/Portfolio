// Contact.tsx
import AnimatedHeader from "@/components/Animation/AnimatedHeader";
import {
    slideFromLeft,
    slideFromRight,
} from "@/components/Animation/animation";
import ContactForm from "@/components/Contact/ContactForm";
import { H2 } from "@/components/ui/typography";
import ContactInfo from "@/utils/contact/ContactInfo";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { forwardRef } from "react";

const Contact = forwardRef<HTMLDivElement>((_, ref) => (
    <section
        id="contact"
        ref={ref}
        className="relative min-h-screen py-20 md:py-40 px-6 flex flex-col justify-center container max-w-[1280px] mx-auto"
    >
        <AnimatedHeader
            text={
                <H2 className="text-[var(--text-color)] text-3xl md:text-4xl font-bold mb-10 text-center">
                    Connect With{" "}
                    <span className="text-[var(--color-accent)]">Me</span>
                </H2>
            }
        />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center justify-items-center">
            <motion.div {...slideFromLeft} className="w-full">
                <ContactInfo />
            </motion.div>

            <motion.div {...slideFromRight} className="w-full">
                <ContactForm />
            </motion.div>
        </div>

        <motion.a
            href="#home"
            className="absolute bottom-2 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center cursor-pointer text-[var(--color-accent)] bg-[var(--tag-color)] p-3 rounded-4xl"
            animate={{ y: [0, -6, 0] }}
            transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut",
            }}
        >
            <ArrowUp className="size-6" />
        </motion.a>
    </section>
));

export default Contact;
