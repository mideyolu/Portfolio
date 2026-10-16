import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { experiences } from "@/data/about";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useRef, useState } from "react";

export function ExperienceSection() {
    const [openId, setOpenId] = useState<string | null>(
        experiences[0]?.id ?? null,
    );
    const reduce = useReducedMotion();
    const listRef = useRef<HTMLUListElement>(null);

    // Rail fills as the list travels through the viewport. `offset` is tuned so
    // progress starts when the list top crosses 80% height and completes when
    // the list bottom passes 35%.
    const { scrollYProgress } = useScroll({
        target: listRef,
        offset: ["start 0.8", "end 0.35"],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    });

    const toggle = (id: string) =>
        setOpenId((current) => (current === id ? null : id));

    return (
        <section id="experience" className="pt-24 sm:pt-32 lg:pt-40">
            <div className="wrap">
                <SectionHead
                    idx="03"
                    title="Experience"
                    note={`2021 — present · ${experiences.length} roles`}
                />

                <div className="relative">
                    {/* Progress rail — `scaleY` keeps this off the layout path. */}
                    <span
                        aria-hidden="true"
                        className="absolute left-0 top-0 hidden h-full w-px bg-rule md:block"
                    >
                        <motion.span
                            style={{ scaleY: reduce ? 1 : scaleY }}
                            className="block h-full w-full origin-top bg-accent"
                        />
                    </span>

                    <ul ref={listRef} className="md:pl-8">
                        {experiences.map((exp) => {
                            const open = openId === exp.id;

                            return (
                                <li
                                    key={exp.id}
                                    className="relative border-t border-rule last:border-b"
                                >
                                    <span
                                        aria-hidden="true"
                                        className={cn(
                                            "absolute -left-8 top-[2.1rem] hidden size-1.5 rounded-full transition-colors duration-300 md:block",
                                            open ? "bg-accent" : "bg-rule-strong",
                                        )}
                                    />

                                    <button
                                        type="button"
                                        onClick={() => toggle(exp.id)}
                                        aria-expanded={open}
                                        className="grid w-full gap-2 py-6 text-left transition-colors duration-200 md:grid-cols-12 md:gap-6 md:py-7"
                                    >
                                        <div className="md:col-span-3">
                                            <span
                                                className={cn(
                                                    "idx transition-colors duration-200",
                                                    open && "text-accent",
                                                )}
                                            >
                                                {exp.year}
                                            </span>
                                        </div>

                                        <div className="md:col-span-5">
                                            <h3 className="text-[1.1rem] font-medium tracking-[-0.03em] text-ink sm:text-[1.25rem]">
                                                {exp.role}
                                            </h3>
                                            <p className="mt-1 text-[0.9rem] text-ink2">
                                                {exp.organization}
                                                <span className="text-ink3">
                                                    {" "}
                                                    · {exp.location}
                                                </span>
                                            </p>
                                        </div>

                                        <div className="flex items-start justify-between gap-4 md:col-span-4">
                                            <p className="text-[0.9rem] leading-relaxed text-ink2">
                                                {exp.summary}
                                            </p>
                                            <span
                                                className={cn(
                                                    "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border transition-colors duration-200",
                                                    open
                                                        ? "border-accent text-accent"
                                                        : "border-rule text-ink3",
                                                )}
                                            >
                                                {open ? (
                                                    <Minus
                                                        className="size-3.5"
                                                        strokeWidth={1.8}
                                                    />
                                                ) : (
                                                    <Plus
                                                        className="size-3.5"
                                                        strokeWidth={1.8}
                                                    />
                                                )}
                                            </span>
                                        </div>
                                    </button>

                                    {/*
                                     * Collapse via `grid-template-rows`, not
                                     * `height`. Both look identical, but only
                                     * this one avoids a layout pass per frame.
                                     */}
                                    <div
                                        aria-hidden={!open}
                                        className={cn(
                                            "grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                                            open
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "grid-rows-[0fr] opacity-0",
                                        )}
                                    >
                                        <div className="min-h-0 overflow-hidden">
                                            <div className="grid gap-6 pb-8 md:grid-cols-12 md:gap-6">
                                                <div className="md:col-span-3">
                                                    <span className="meta">
                                                        Highlights
                                                    </span>
                                                </div>
                                                <div className="md:col-span-5">
                                                    <ul className="space-y-2.5">
                                                        {exp.highlights.map(
                                                            (highlight) => (
                                                                <li
                                                                    key={
                                                                        highlight
                                                                    }
                                                                    className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink2"
                                                                >
                                                                    <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                                                                    <span>
                                                                        {
                                                                            highlight
                                                                        }
                                                                    </span>
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                </div>
                                                <div className="md:col-span-4">
                                                    <span className="meta">
                                                        Tools
                                                    </span>
                                                    <div className="mt-3 flex flex-wrap gap-1.5">
                                                        {exp.skills.map(
                                                            (skill) => (
                                                                <span
                                                                    key={skill}
                                                                    className="chip"
                                                                >
                                                                    {skill}
                                                                </span>
                                                            ),
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <Reveal>
                    <p className="meta mt-6">
                        Full detail, references, and coursework are in the CV.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}

export default ExperienceSection;
