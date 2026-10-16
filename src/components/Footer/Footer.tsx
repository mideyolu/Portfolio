import { navLinks } from "@/data/navLinks";
import { socialLinks } from "@/data/socialLinks";
import { scrollToTarget } from "@/hooks/useLenis";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export function Footer() {
    const scrollToTop = () => scrollToTarget(0);

    return (
        <footer className="border-t border-rule">
            <div className="wrap pt-14 pb-10">
                <div className="grid gap-10 border-b border-rule pb-10 md:grid-cols-12">
                    <div className="md:col-span-5">
                        <p className="text-[1.05rem] font-medium tracking-[-0.03em] text-ink">
                            Olumide Oluwuyi
                        </p>
                        <p className="mt-2 max-w-sm text-[0.95rem] leading-relaxed text-ink2">
                            Software engineer building AI products and full-stack systems from
                            Lagos, Nigeria.
                        </p>
                        <p className="meta mt-4 flex items-center gap-2">
                            <span className="size-1.5 rounded-full bg-accent" />
                            Available for roles and select projects
                        </p>
                    </div>

                    <nav className="md:col-span-3">
                        <span className="meta">Index</span>
                        <ul className="mt-3 space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-[0.95rem] text-ink2 transition-colors hover:text-accent"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="md:col-span-4">
                        <span className="meta">Elsewhere</span>
                        <ul className="mt-3 space-y-2">
                            {socialLinks.map((link) => {
                                const Icon = link.icon;
                                const external = !link.href.startsWith("mailto:");
                                return (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            target={external ? "_blank" : undefined}
                                            rel={external ? "noreferrer" : undefined}
                                            className="group inline-flex items-center gap-2 text-[0.95rem] text-ink2 transition-colors hover:text-accent"
                                        >
                                            <Icon className="size-3.5" />
                                            {link.label}
                                            <ArrowUpRight
                                                className="size-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                                                strokeWidth={1.7}
                                            />
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>

                        <a
                            href="/Oluwuyi_Olumide_CV.pdf"
                            download="Oluwuyi_Olumide_CV.pdf"
                            className="mt-4 inline-block text-[0.95rem] text-ink underline decoration-rule underline-offset-4 transition-colors hover:decoration-accent"
                        >
                            CV (PDF)
                        </a>
                    </div>
                </div>

                <div className="overflow-hidden py-10">
                    <p
                        aria-hidden="true"
                        className="whitespace-nowrap text-[clamp(2.75rem,11vw,8.5rem)] font-medium leading-[0.9] tracking-[-0.055em] text-ink"
                    >
                        Olumide{" "}
                        <span className="serif-em font-normal tracking-[-0.03em]">
                            Oluwuyi
                        </span>
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-6">
                    <span className="meta">© 2026 Olumide Oluwuyi · Lagos, Nigeria</span>

                    <button
                        type="button"
                        onClick={scrollToTop}
                        className="inline-flex items-center gap-2 text-[0.9rem] text-ink2 transition-colors hover:text-ink"
                    >
                        Back to top
                        <ArrowUp className="size-4" strokeWidth={1.7} />
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
