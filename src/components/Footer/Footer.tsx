// Footer.tsx
import SocialLinks from "@/components/Hero/SocialLinks";
import { navLinks } from "@/data/navLinks";
import type { FC } from "react";

const Footer: FC = () => {
    return (
        <header className="py-10 md:py-10 w-full z-50 shadow-md shadow-[#1a1a1a] bg-[#0a0a0a]">
            <footer className="container max-w-[1280px] mx-auto flex justify-center flex-col gap-5 space-y-4 md:flex-row md:justify-between items-center px-6 py-2">
                {/* Logo */}
                <div className="flex flex-col items-center justify-center space-y-6 md:space-y-3 md:items-start gap-2">
                    <img src="/logo.png" alt="Logo" className="w-15" />
                    <span className="block text-[var(--text-color)] font-semibold">
                        Is
                        <span className="text-[var(--color-accent)]">mail</span>
                    </span>
                    <SocialLinks />
                </div>

                <ul className="space-y-6">
                    {navLinks.map((link) => (
                        <li key={link.name} className="relative">
                            <a
                                href={link.href}
                                className={`transition-colors duration-200 relative
                                    ${"text-[var(--text-color)] hover:text-[var(--color-accent)] after:content-[''] after:block after:h-0.5 after:w-0 after:bg-[var(--color-accent)] after:absolute after:-bottom-2 after:transition-all after:duration-200 hover:after:w-full"}`}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="text-[var(--color-accent)] font-semibold">
                    {new Date().getFullYear()}
                </div>
            </footer>
        </header>
    );
};

export default Footer;
