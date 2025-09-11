// MobileMenu.tsx
import { slideFadeUp } from "@/components/Animation/animation";
import { Button } from "@/components/ui/button";
import type { MobileMenuProps } from "@/types/navbar";
import { motion } from "framer-motion";
import { useState, type FC } from "react";
import { FaTimes } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const MobileMenu: FC<MobileMenuProps> = ({
    links,
    activeLink,
    setActiveLink,
    contactRef,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
    };

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <Button
                    aria-label="Toggle menu"
                    variant="default"
                    className={`
                        transition-all duration-200
                        ${
                            isOpen
                                ? "ring-2 ring-[var(--color-accent)]"
                                : "ring-0"
                        }
                        focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]
                        cursor-pointer
                    `}
                >
                    {isOpen ? <FaTimes size={24} /> : <IoMdMenu size={24} />}
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-[var(--background-color)] text-[var(--text-color)] w-56 my-3 mx-5 border border-[var(--shadow-color)] md:hidden">
                {links.map((link, index) => (
                    <motion.div key={link.name} {...slideFadeUp(index * 0.05)}>
                        <DropdownMenuItem
                            asChild
                            className="bg-transparent hover:text-[var(--text-color)] hover:bg-transparent focus:bg-transparent cursor-pointer"
                        >
                            <a
                                href={link.href}
                                onClick={() => {
                                    setActiveLink(link.href.replace("#", ""));
                                    setIsOpen(false);
                                }}
                                className={`
                                    w-full flex items-center my-2 justify-center transition-colors duration-200 relative
                                    ${
                                        activeLink ===
                                        link.href.replace("#", "")
                                            ? "text-[var(--color-accent)] after:block after:h-0.5 after:w-full after:bg-[var(--color-accent)] after:absolute after:-bottom-2"
                                            : "text-[var(--text-color)] hover:text-[var(--color-accent)] after:content-[''] after:block after:h-0.5 after:w-0 after:bg-[var(--color-accent)] after:absolute after:-bottom-2 after:transition-all after:duration-200 hover:after:w-full"
                                    }
                                `}
                            >
                                {link.name}
                            </a>
                        </DropdownMenuItem>
                    </motion.div>
                ))}

                <DropdownMenuItem asChild>
                    <Button
                        size="lg"
                        onClick={scrollToContact}
                        className="cursor-pointer w-full mt-4 bg-[var(--button-bg-color)] hover:bg-[var(--button-hover-color)] transition-all duration-200"
                    >
                        Get in Touch
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default MobileMenu;
