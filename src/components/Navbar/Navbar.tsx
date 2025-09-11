import MobileMenu from "@/components/Navbar/MobileMenu";
import { useActiveSection } from "@/components/hooks/useActiveSection";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/navLinks";
import { type FC, type RefObject } from "react";

interface NavbarProps {
    contactRef: RefObject<HTMLDivElement | null>;
}

const Navbar: FC<NavbarProps> = ({ contactRef }) => {
    const { activeLink, setActiveLink } = useActiveSection(navLinks);

    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header className="fixed w-full z-50 shadow-md shadow-[#1a1a1a] bg-[#0a0a0a]">
            <nav className="container max-w-[1280px] mx-auto flex justify-between items-center px-6 py-2">
                {/* Logo */}
                <div className="flex justify-center items-center gap-2">
                    <img src="/logo.png" alt="Logo" className="w-15" />
                    <span className="block text-[var(--text-color)] font-semibold">
                        Is
                        <span className="text-[var(--color-accent)]">mail</span>
                    </span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <li key={link.name} className="relative">
                            <a
                                href={link.href}
                                className={`transition-colors duration-200 relative
                                    ${
                                        activeLink ===
                                        link.href.replace("#", "")
                                            ? "text-[var(--color-accent)] after:block after:h-0.5 after:w-full after:bg-[var(--color-accent)] after:absolute after:-bottom-2"
                                            : "text-[var(--text-color)] hover:text-[var(--color-accent)] after:content-[''] after:block after:h-0.5 after:w-0 after:bg-[var(--color-accent)] after:absolute after:-bottom-2 after:transition-all after:duration-200 hover:after:w-full"
                                    }`}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Button
                        onClick={scrollToContact}
                        size="lg"
                        className="bg-[var(--button-bg-color)] hover:bg-[var(--button-hover-color)] transition-all duration-200 cursor-pointer"
                    >
                        Get In Touch
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <MobileMenu
                        contactRef={contactRef}
                        links={navLinks}
                        activeLink={activeLink}
                        setActiveLink={setActiveLink}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
