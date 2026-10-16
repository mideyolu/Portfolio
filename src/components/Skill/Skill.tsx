import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { skillCategoryGroups, techSkills } from "@/data/skills";
import type { TechSkill } from "@/types/skills";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function SkillsSection() {
    const [selected, setSelected] = useState<TechSkill>(techSkills[0]);

    return (
        <section id="skills" className="pt-24 sm:pt-32 lg:pt-40">
            <div className="wrap">
                <SectionHead
                    idx="04"
                    title="Stack"
                    note={`${techSkills.length} technologies, all in production work`}
                />

                <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
                    {/* Groups */}
                    <div className="lg:col-span-7">
                        {skillCategoryGroups.map((group) => (
                            <Reveal key={group.category}>
                                <div className="mb-10 last:mb-0">
                                    <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-3">
                                        <h3 className="text-[1.05rem] font-medium tracking-[-0.02em] text-ink">
                                            {group.category}
                                        </h3>
                                        <span className="meta">
                                            {group.skills.length} items
                                        </span>
                                    </div>
                                    <p className="mt-3 text-[0.9rem] text-ink2">
                                        {group.description}
                                    </p>

                                    <ul className="mt-4 border-b border-rule">
                                        {group.skills.map((skill) => {
                                            const active = selected.name === skill.name;

                                            return (
                                                <li key={skill.name}>
                                                    <button
                                                        type="button"
                                                        onMouseEnter={() => setSelected(skill)}
                                                        onFocus={() => setSelected(skill)}
                                                        onClick={() => setSelected(skill)}
                                                        aria-pressed={active}
                                                        className={`row-item flex w-full items-center justify-between gap-4 px-2 py-3 transition-colors ${
                                                            active ? "text-accent" : "text-ink"
                                                        }`}
                                                    >
                                                        <span className="text-[1.05rem] tracking-[-0.02em]">
                                                            {skill.name}
                                                        </span>
                                                        <span className="flex items-center gap-3">
                                                            <span className="meta hidden sm:inline">
                                                                {skill.badge}
                                                            </span>
                                                            <ArrowUpRight
                                                                className={`size-4 transition-all duration-300 ${
                                                                    active
                                                                        ? "translate-x-0.5 -translate-y-0.5 text-accent"
                                                                        : "text-ink3"
                                                                }`}
                                                                strokeWidth={1.7}
                                                            />
                                                        </span>
                                                    </button>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {/* Inspector */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-[calc(var(--header-h)+2rem)] border-t border-rule pt-6">
                            <span className="meta">Selected</span>

                            <div className="mt-3 min-h-[13rem]">
                                <div className="flex flex-wrap items-baseline justify-between gap-3">
                                    <h3 className="display-md text-ink">{selected.name}</h3>
                                    <span className="chip">{selected.badge}</span>
                                </div>

                                <p className="mt-4 text-[1rem] leading-relaxed text-ink2">
                                    {selected.description}
                                </p>

                                <div className="mt-7 border-t border-rule pt-4">
                                    <span className="meta">Used in</span>
                                    <ul className="mt-3 space-y-2">
                                        {selected.usedInProjects.map((name) => (
                                            <li key={name}>
                                                <a
                                                    href="#projects"
                                                    className="group inline-flex items-center gap-2 text-[0.95rem] text-ink transition-colors hover:text-accent"
                                                >
                                                    <span className="size-1.5 rounded-full bg-accent" />
                                                    {name}
                                                    <ArrowUpRight
                                                        className="size-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                                                        strokeWidth={1.7}
                                                    />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <p className="mt-8 border-t border-rule pt-4 text-[0.9rem] leading-relaxed text-ink2">
                                Chosen for latency, maintainability, and fit with the problem —
                                not for the trend cycle.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;
