import { GraphGrid } from "@/components/ui/GrainField";
import ProjectModal from "@/components/Projects/ProjectModal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import TiltCard from "@/components/ui/TiltCard";
import { projects } from "@/data/project";
import type { Project } from "@/types/project";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";

/**
 * Bento spans for the five non-featured projects: 3+3 across the first row,
 * then 2+2+2. Falls back to a half-width cell if the list grows.
 */
const BENTO_SPANS = [
    "lg:col-span-3",
    "lg:col-span-3",
    "lg:col-span-2",
    "lg:col-span-2",
    "lg:col-span-2",
];

function Metrics({ project }: { project: Project }) {
    if (!project.metrics?.length) return null;

    return (
        <dl className="grid grid-cols-3 border-y border-rule">
            {project.metrics.map((metric) => (
                <div
                    key={metric.label}
                    className="px-3 py-3.5 first:pl-0 [&:not(:first-child)]:border-l [&:not(:first-child)]:border-rule"
                >
                    <dt className="meta">{metric.label}</dt>
                    <dd className="title-sm mt-1 tabular-nums text-ink">
                        {metric.value}
                    </dd>
                </div>
            ))}
        </dl>
    );
}

function Points({ project }: { project: Project }) {
    const rows = [
        { label: "Problem", text: project.problem },
        { label: "Approach", text: project.solution },
        { label: "Outcome", text: project.outcome },
    ];

    return (
        <div>
            {rows.map((row) => (
                <div
                    key={row.label}
                    className="border-t border-rule py-3.5 last:border-b"
                >
                    <div className="flex flex-col gap-1 sm:flex-row sm:gap-5">
                        <span className="meta w-24 flex-none pt-0.5">
                            {row.label}
                        </span>
                        <p className="text-[0.9375rem] leading-relaxed text-ink2">
                            {row.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

function Actions({ project, onOpen }: { project: Project; onOpen: () => void }) {
    return (
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <button
                type="button"
                onClick={onOpen}
                className="btn-solid px-4 py-2.5 text-sm"
            >
                Read case study
                <ArrowUpRight className="size-4" strokeWidth={1.8} />
            </button>

            {project.liveUrl && project.liveUrl !== "#" && (
                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link-u text-ink2"
                >
                    Live
                    <ExternalLink className="size-3.5" strokeWidth={1.7} />
                </a>
            )}

            {project.githubUrl && project.githubUrl !== "#" && (
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link-u text-ink2"
                >
                    Code
                    <Code2 className="size-3.5" strokeWidth={1.7} />
                </a>
            )}
        </div>
    );
}

function Feature({ project, onOpen }: { project: Project; onOpen: () => void }) {
    const mirrored = project.featuredLayout === "large-right";

    return (
        <Reveal>
            <article className="grid items-start gap-8 lg:grid-cols-12 lg:gap-14">
                {/* Grid placement lives on the TiltCard, since it is the grid
                    item — putting `lg:order-*` on the button inside would have
                    no effect on grid ordering. */}
                <TiltCard
                    className={`lg:col-span-7 ${mirrored ? "lg:order-2" : ""}`}
                    max={4}
                >
                    <button
                        type="button"
                        onClick={onOpen}
                        data-cursor="project"
                        aria-label={`Open ${project.title} case study`}
                        className="frame relative block w-full cursor-pointer"
                    >
                        <img
                            src={
                                project.image[0] || "/assets/projects/no-image.jpg"
                            }
                            alt={project.title}
                            loading="lazy"
                            className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />
                        {project.inProgress && (
                            <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/55 px-3 py-1 text-[0.7rem] text-white backdrop-blur-md">
                                In progress
                            </span>
                        )}
                    </button>
                </TiltCard>

                <div className={`lg:col-span-5 ${mirrored ? "lg:order-1" : ""}`}>
                    <div className="flex items-baseline gap-3">
                        <span className="idx text-accent">{project.number}</span>
                        <span className="meta">
                            {project.categories.join(" · ")}
                        </span>
                    </div>

                    <h3 className="display-md mt-3 text-ink">{project.title}</h3>
                    <p className="mt-2 text-[1.05rem] leading-snug tracking-[-0.015em] text-ink2">
                        {project.tagline}
                    </p>

                    <div className="mt-6">
                        <Points project={project} />
                    </div>

                    <div className="mt-6">
                        <Metrics project={project} />
                    </div>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                            <span key={tech} className="chip">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="mt-7">
                        <Actions project={project} onOpen={onOpen} />
                    </div>
                </div>
            </article>
        </Reveal>
    );
}

function BentoCard({
    project,
    onOpen,
}: {
    project: Project;
    onOpen: () => void;
}) {
    const src = project.image[0];
    const hasImage = Boolean(src && !src.includes("no-image"));

    return (
        <TiltCard className="h-full" max={5}>
            <button
                type="button"
                onClick={onOpen}
                data-cursor="project"
                aria-label={`Open ${project.title} case study`}
                className="flex h-full w-full flex-col border-t border-rule pt-5 text-left"
            >
                {hasImage ? (
                    <div className="frame relative overflow-hidden">
                        <img
                            src={src}
                            alt={project.title}
                            loading="lazy"
                            className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                        {project.inProgress && (
                            <span className="absolute left-3 top-3 rounded-full border border-white/25 bg-black/55 px-2.5 py-1 text-[0.68rem] text-white backdrop-blur-md">
                                In progress
                            </span>
                        )}
                    </div>
                ) : (
                    /* Typographic fallback for projects without screenshots. */
                    <div className="frame relative grid aspect-[16/10] place-items-center overflow-hidden">
                        <GraphGrid />
                        <span className="idx relative">
                            {project.categories.join(" · ")}
                        </span>
                    </div>
                )}

                <div className="flex min-h-0 flex-1 flex-col pt-4">
                    <div className="flex items-start justify-between gap-3">
                        <span className="idx text-accent">{project.number}</span>
                        <ArrowUpRight
                            className="size-4 shrink-0 text-ink3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            strokeWidth={1.7}
                        />
                    </div>

                    <h3 className="mt-2 text-[1.15rem] font-medium tracking-[-0.03em] text-ink">
                        {project.title}
                    </h3>
                    <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink2">
                        {project.tagline}
                    </p>

                    {project.metrics?.length ? (
                        <div className="mt-auto pt-5">
                            <dl className="grid grid-cols-2 gap-x-4 border-t border-rule pt-3">
                                {project.metrics.slice(0, 2).map((metric) => (
                                    <div key={metric.label}>
                                        <dt className="meta">{metric.label}</dt>
                                        <dd className="mt-0.5 text-[0.95rem] tabular-nums text-ink">
                                            {metric.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    ) : null}
                </div>
            </button>
        </TiltCard>
    );
}

export function ProjectsSection() {
    const [active, setActive] = useState<Project | null>(null);

    const { featured, rest } = useMemo(
        () => ({
            featured: projects.filter((p) => p.featured),
            rest: projects.filter((p) => !p.featured),
        }),
        [],
    );

    return (
        <section id="projects" className="pt-24 sm:pt-32 lg:pt-40">
            <div className="wrap">
                <SectionHead
                    idx="01"
                    title="Selected work"
                    note={`${projects.length} projects · ${
                        projects.filter((p) => p.inProgress).length
                    } in progress`}
                />

                <div className="space-y-24 sm:space-y-32">
                    {featured.map((project) => (
                        <Feature
                            key={project.id}
                            project={project}
                            onOpen={() => setActive(project)}
                        />
                    ))}
                </div>

                {/* Bento grid for the remaining work */}
                <div className="mt-20 sm:mt-28">
                    <Reveal>
                        <div className="mb-8 flex items-baseline justify-between gap-4">
                            <h3 className="title-sm text-ink">More work</h3>
                            <span className="meta">
                                {rest.length} projects
                            </span>
                        </div>
                    </Reveal>

                    <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-6">
                        {rest.map((project, i) => (
                            <Reveal
                                key={project.id}
                                delay={0.05 * i}
                                className={BENTO_SPANS[i] ?? "lg:col-span-2"}
                            >
                                <BentoCard
                                    project={project}
                                    onOpen={() => setActive(project)}
                                />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>

            <ProjectModal project={active} onClose={() => setActive(null)} />
        </section>
    );
}

export default ProjectsSection;
