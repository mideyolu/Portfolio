// navbar.ts
import { type RefObject } from "react";

export interface NavLink {
    name: string;
    href: string;
}

export interface MobileMenuProps {
    links: NavLink[];
    activeLink: string;
    setActiveLink: (link: string) => void;
    contactRef: RefObject<HTMLDivElement | null>;
}
