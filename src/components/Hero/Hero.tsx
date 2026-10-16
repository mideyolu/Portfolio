import { Currently } from "@/components/Hero/Currently";
import CountUp from "@/components/ui/CountUp";
import { GraphGrid } from "@/components/ui/GrainField";
import MagneticButton from "@/components/ui/MagneticButton";
import { socialLinks } from "@/data/socialLinks";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const LINES = ["Software engineer,", "building AI systems", "that do real work."];

const STATS = [
    {
        value: 120,
        prefix: "<",
        suffix: "ms",
        decimals: 0,
        label: "Per-slice CT inference, Respirix",
    },
    {
        value: 89.4,
        prefix: "",
        suffix: "%",
        decimals: 1,
        label: "ROC-AUC, churn model",
    },
    {
        value: 150,
        prefix: "",
        suffix: "k+",
        decimals: 0,
        label: "Transactions in one BI model",
    },
    {
        value: 6,
        prefix: "<",
        suffix: "s",
        decimals: 0,
        label: "Multi-agent itinerary, Trekly",
    },
];

function useLocalTime() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const tick = () => {
            setTime(
                new Intl.DateTimeFormat("en-GB", {
                    timeZone: "Africa/Lagos",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                }).format(new Date()),
            );
        };
        tick();
        const id = window.setInterval(tick, 15000);
        return () => window.clearInterval(id);
    }, []);

    return time;
}

export function Hero() {
    const reduce = useReducedMotion();
    const time = useLocalTime();

    /** Flat delay ladder keeps the headline, lede and actions in strict order. */
    const lineTransition = (i: number) => ({
        duration: 0.9,
        delay: 0.15 + i * 0.09,
        ease: [0.16, 1, 0.3, 1] as const,
    });

    const rise = (delay: number, y = 16) => ({
        initial: reduce ? false : { opacity: 0, y },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
    });

    return (
        <section
            id="home"
            className="relative overflow-hidden pt-[calc(var(--header-h)+2.5rem)] sm:pt-[calc(var(--header-h)+4rem)]"
        >
            <GraphGrid className="opacity-60" />

            <div className="wrap relative">
                {/* Status strip */}
                <motion.div
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-rule pb-4"
                >
                    <span className="meta">
                        B.Sc. Software Engineering · First Class
                    </span>
                    <span className="meta flex items-center gap-4">
                        <span className="flex items-center gap-2">
                            <span className="relative flex size-1.5">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70" />
                                <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                            </span>
                            Available for roles and select projects
                        </span>
                        <span className="hidden tabular-nums text-ink sm:inline">
                            {time ? `${time} WAT` : "—:— WAT"}
                        </span>
                    </span>
                </motion.div>

                <div className="grid items-end gap-10 pt-10 sm:pt-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
                    {/* Headline */}
                    <div>
                        <h1 className="display-xl text-ink">
                            {LINES.map((line, i) => (
                                <span
                                    key={line}
                                    className="block overflow-hidden pb-[0.06em] -mb-[0.06em]"
                                >
                                    <motion.span
                                        className="block"
                                        initial={
                                            reduce ? false : { y: "108%" }
                                        }
                                        animate={{ y: 0 }}
                                        transition={lineTransition(i)}
                                    >
                                        {line}
                                    </motion.span>
                                </span>
                            ))}
                        </h1>

                        <motion.p className="lede mt-7 sm:mt-9" {...rise(0.5)}>
                            Clinical imaging at the edge, multi-agent planning
                            engines, and the interfaces that make them legible.
                            First Class Software Engineering graduate shipping
                            full-stack products end to end.
                        </motion.p>

                        <motion.div
                            className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4"
                            {...rise(0.62)}
                        >
                            <MagneticButton href="#projects">
                                See selected work
                                <ArrowDown
                                    className="size-4"
                                    strokeWidth={1.8}
                                />
                            </MagneticButton>

                            <a href="#contact" className="link-u">
                                Get in touch
                                <ArrowUpRight
                                    className="size-4"
                                    strokeWidth={1.8}
                                />
                            </a>
                        </motion.div>

                        <motion.div
                            className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2"
                            {...rise(0.75, 0)}
                        >
                            {socialLinks.map((link) => {
                                const Icon = link.icon;
                                const external = !link.href.startsWith("mailto:");
                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target={external ? "_blank" : undefined}
                                        rel={external ? "noreferrer" : undefined}
                                        className="group inline-flex items-center gap-1.5 text-[0.85rem] text-ink2 transition-colors hover:text-ink"
                                    >
                                        <Icon className="size-3.5" />
                                        <span className="border-b border-transparent pb-px transition-colors group-hover:border-ink">
                                            {link.label}
                                        </span>
                                    </a>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Portrait */}
                    <motion.figure
                        className="relative mx-auto w-full max-w-sm lg:max-w-none"
                        initial={reduce ? false : { opacity: 0, y: 26 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.35,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        <div className="frame group relative">
                            <img
                                src="/profile.jpg"
                                alt="Olumide Oluwuyi"
                                className="aspect-[4/5] w-full object-cover object-top grayscale transition-all duration-700 ease-out group-hover:grayscale-0"
                            />
                        </div>
                        <figcaption className="mt-3 border-t border-rule pt-3">
                            <span className="text-[0.85rem] text-ink">
                                Olumide Oluwuyi
                            </span>
                        </figcaption>
                    </motion.figure>
                </div>

                {/* Proof strip */}
                <motion.dl
                    className="mt-14 grid grid-cols-2 border-t border-rule sm:mt-20 sm:grid-cols-4"
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.8 }}
                >
                    {STATS.map((stat) => (
                        <div
                            key={stat.label}
                            className="border-b border-rule py-5 sm:border-b-0 sm:px-6 sm:first:pl-0 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:border-rule"
                        >
                            <dt className="title-sm text-ink">
                                <CountUp
                                    value={stat.value}
                                    prefix={stat.prefix}
                                    suffix={stat.suffix}
                                    decimals={stat.decimals}
                                />
                            </dt>
                            <dd className="meta mt-1 leading-snug">
                                {stat.label}
                            </dd>
                        </div>
                    ))}
                </motion.dl>

                <Currently />
            </div>
        </section>
    );
}

export default Hero;
