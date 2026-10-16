import { ThemeToggle } from "@/components/ui/theme";
import { navLinks } from "@/data/navLinks";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type ThemeMode = "dark" | "light";

export function NavMenu({
    theme,
    onToggleTheme,
}: {
    theme: ThemeMode;
    onToggleTheme: () => void;
}) {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        let lastY = window.scrollY;

        const onScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 24);
            setHidden(y > 200 && y > lastY && !menuOpen);
            lastY = y;

            const sections = [
                "home",
                "projects",
                "about",
                "experience",
                "skills",
                "contact",
            ];
            for (const id of sections) {
                const el = document.getElementById(id);
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                if (rect.top <= 180 && rect.bottom >= 180) {
                    setActiveSection(id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, [menuOpen]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-40 transition-transform duration-500 ease-out ${
                    hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"
                }`}
            >
                <div
                    className={`transition-all duration-300 ${
                        scrolled
                            ? "border-b border-rule bg-paper/85 backdrop-blur-xl"
                            : "border-b border-transparent"
                    }`}
                >
                    <div className="wrap flex h-[var(--header-h)] items-center justify-between gap-6">
                        <a
                            href="#home"
                            className="group flex items-baseline gap-2 focus:outline-none"
                        >
                            <span className="text-[0.95rem] font-medium tracking-[-0.03em] text-ink">
                                Mideyolu
                            </span>
                            <span className="hidden text-[0.7rem] tracking-[-0.01em] text-ink3 transition-colors group-hover:text-accent sm:inline">
                                Software engineer
                            </span>
                        </a>

                        <nav className="hidden items-center gap-7 md:flex">
                            {navLinks.map((link) => {
                                const key = link.href.replace("#", "");
                                const active = activeSection === key;

                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className={`relative py-1 text-[0.9rem] tracking-[-0.01em] transition-colors duration-200 ${
                                            active
                                                ? "text-ink"
                                                : "text-ink2 hover:text-ink"
                                        }`}
                                    >
                                        {link.name}
                                        {active && (
                                            <motion.span
                                                layoutId="nav-underline"
                                                className="absolute -bottom-0.5 left-0 h-px w-full bg-accent"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 420,
                                                    damping: 34,
                                                }}
                                            />
                                        )}
                                    </a>
                                );
                            })}
                        </nav>

                        <div className="flex items-center gap-2.5">
                            <span className="hidden items-center gap-2 rounded-full border border-rule px-3 py-1.5 text-[0.75rem] text-ink2 lg:inline-flex">
                                <span className="relative flex size-1.5">
                                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70" />
                                    <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                                </span>
                                Available for work
                            </span>

                            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

                            <a
                                href="#contact"
                                className="hidden items-center gap-1.5 rounded-lg bg-ink px-3.5 py-2 text-[0.85rem] font-medium text-paper transition-colors duration-200 hover:bg-accent hover:text-white sm:inline-flex"
                            >
                                Get in touch
                                <ArrowUpRight className="size-3.5" strokeWidth={1.8} />
                            </a>

                            <button
                                type="button"
                                onClick={() => setMenuOpen((v) => !v)}
                                aria-label={menuOpen ? "Close menu" : "Open menu"}
                                aria-expanded={menuOpen}
                                className="flex size-9 items-center justify-center rounded-full border border-rule text-ink transition-colors hover:border-ink md:hidden"
                            >
                                {menuOpen ? (
                                    <X className="size-4" strokeWidth={1.7} />
                                ) : (
                                    <Menu className="size-4" strokeWidth={1.7} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-30 bg-paper md:hidden"
                    >
                        <div className="wrap flex h-full flex-col justify-between pt-[calc(var(--header-h)+2rem)] pb-10">
                            <nav className="flex flex-col">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        initial={{ opacity: 0, y: 14 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.05 + i * 0.045,
                                            duration: 0.5,
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                        className="flex items-baseline justify-between border-b border-rule py-4 text-[1.75rem] font-medium tracking-[-0.035em] text-ink"
                                    >
                                        {link.name}
                                        <span className="idx">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                    </motion.a>
                                ))}
                            </nav>

                            <div className="space-y-3">
                                <a
                                    href="mailto:oluwuyiolumide91@gmail.com"
                                    className="block break-all text-[0.95rem] text-ink2"
                                >
                                    oluwuyiolumide91@gmail.com
                                </a>
                                <p className="meta">Lagos, Nigeria · UTC+1</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default NavMenu;
