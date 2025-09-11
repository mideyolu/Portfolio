// SocialLinks.tsx
import StaggeredAnimation from "@/components/Animation/StaggeredAnimation";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/socialLinks";
import type { SocialsProps } from "@/types/socials";
import type { FC } from "react";

const SocialLinks: FC<SocialsProps> = ({ size = 30, className }) => {
    return (
        <StaggeredAnimation className={`flex gap-4 ${className}`}>
            {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                    <Button
                        size={"lg"}
                        key={link.label}
                        variant="default"
                        className="p-2"
                    >
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 flex items-center justify-center text-[var(--text-color)] hover:text-[var(--color-accent)] transition-colors duration-200"
                            aria-label={link.label}
                        >
                            <Icon size={size} />
                        </a>
                    </Button>
                );
            })}
        </StaggeredAnimation>
    );
};

export default SocialLinks;
