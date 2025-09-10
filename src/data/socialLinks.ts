// socialLinks.ts

import type { SocialLink } from "@/types/socials";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const socialLinks: SocialLink[] = [
    {
        icon: FaTwitter,
        href: "https://x.com/is_midey",
        label: "Twitter",
    },
    {
        icon: FaLinkedin,
        href: "https://www.linkedin.com/in/olumide-oluwuyi/",
        label: "LinkedIn",
    },
    {
        icon: FaGithub,
        href: "https://github.com/mideyolu",
        label: "GitHub"
    },
    {
        icon: FaEnvelope,
        href: "mailto:oluwuyiolumide91@gmail.com",
        label: "Email",
    },
];
