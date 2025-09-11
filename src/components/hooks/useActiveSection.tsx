import { useEffect, useState } from "react";
import type { NavLink } from "@/types/navbar";

export const useActiveSection = (navLinks: NavLink[], threshold = 0.1) => {
    const [activeLink, setActiveLink] = useState<string>("");

    useEffect(() => {
        const handleObserver = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    if (id) setActiveLink(id);
                }
            });
        };

        const observer = new IntersectionObserver(handleObserver, {
            threshold,
        });

        navLinks.forEach((link) => {
            if (link.href.startsWith("#") && link.href.length > 1) {
                const section = document.querySelector(link.href);
                if (section) observer.observe(section);
            }
        });

        return () => observer.disconnect();
    }, [navLinks, threshold]);

    return { activeLink, setActiveLink };
};
