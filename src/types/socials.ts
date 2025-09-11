// socials.ts
import type { IconType } from "react-icons";

export interface SocialLink {
    icon: IconType;
    href: string;
    label: string;
}

export interface SocialsProps {
    size?: number;
    className?: string;
}
