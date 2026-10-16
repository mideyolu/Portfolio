import type { Project } from "@/types/project";
import {
    CheckCircle2,
    ChevronLeft,
    ChevronRight,
    Code2,
    ExternalLink,
    X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        setActiveImageIndex(0);

        if (!project) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
            if (project.image.length > 1) {
                if (event.key === "ArrowRight") {
                    setActiveImageIndex((prev) => (prev + 1) % project.image.length);
                } else if (event.key === "ArrowLeft") {
                    setActiveImageIndex(
                        (prev) => (prev - 1 + project.image.length) % project.image.length,
                    );
                }
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [project, onClose]);

    return (
        <AnimatePresence>
            {project && (
                <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-3 sm:p-6 lg:p-10">
                    <motion.div
                        className="fixed inset-0 bg-black/55 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={onClose}
                        aria-hidden="true"
                    />

                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label={`${project.title} case study`}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 my-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-rule bg-paper shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between gap-4 border-b border-rule px-5 py-4 sm:px-7">
                            <div className="flex min-w-0 items-baseline gap-3">
                                <span className="idx text-accent">{project.number}</span>
                                <h2 className="truncate text-[1.05rem] font-medium tracking-[-0.03em] text-ink">
                                    {project.title}
                                </h2>
                            </div>
                            <button
                                type="button"
                                onClick={onClose}
                                aria-label="Close case study"
                                className="flex size-8 shrink-0 items-center justify-center rounded-full border border-rule text-ink2 transition-colors hover:border-ink hover:text-ink"
                            >
                                <X className="size-4" strokeWidth={1.7} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="max-h-[calc(100vh-11rem)] overflow-y-auto px-5 py-6 sm:px-7 sm:py-8">
                            {/* Gallery */}
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-rule bg-surface2">
                                <img
                                    src={
                                        project.image[activeImageIndex] ||
                                        "/assets/projects/no-image.jpg"
                                    }
                                    alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                                    className="size-full object-contain"
                                />

                                {project.image.length > 1 && (
                                    <>
                                        <button
                                            type="button"
                                            aria-label="Previous screenshot"
                                            onClick={() =>
                                                setActiveImageIndex(
                                                    (prev) =>
                                                        (prev - 1 + project.image.length) %
                                                        project.image.length,
                                                )
                                            }
                                            className="absolute left-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-rule bg-paper/85 text-ink backdrop-blur transition-colors hover:bg-paper"
                                        >
                                            <ChevronLeft className="size-5" strokeWidth={1.6} />
                                        </button>
                                        <button
                                            type="button"
                                            aria-label="Next screenshot"
                                            onClick={() =>
                                                setActiveImageIndex(
                                                    (prev) =>
                                                        (prev + 1) % project.image.length,
                                                )
                                            }
                                            className="absolute right-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-rule bg-paper/85 text-ink backdrop-blur transition-colors hover:bg-paper"
                                        >
                                            <ChevronRight className="size-5" strokeWidth={1.6} />
                                        </button>
                                    </>
                                )}
                            </div>

                            {project.image.length > 1 && (
                                <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                                    {project.image.map((src, index) => (
                                        <button
                                            key={src}
                                            type="button"
                                            onClick={() => setActiveImageIndex(index)}
                                            aria-label={`Show screenshot ${index + 1}`}
                                            className={`size-12 shrink-0 overflow-hidden rounded-md border transition-all ${
                                                index === activeImageIndex
                                                    ? "border-accent opacity-100"
                                                    : "border-rule opacity-55 hover:opacity-90"
                                            }`}
                                        >
                                            <img
                                                src={src}
                                                alt=""
                                                className="size-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Headline */}
                            <p className="meta mt-7">{project.categories.join(" · ")}</p>
                            <h3 className="display-md mt-2 text-ink">{project.tagline}</h3>
                            <p className="prose-quiet mt-4">{project.description}</p>

                            {/* Metrics */}
                            {project.metrics && project.metrics.length > 0 && (
                                <dl className="mt-7 grid grid-cols-1 border-t border-rule sm:grid-cols-3">
                                    {project.metrics.map((metric) => (
                                        <div
                                            key={metric.label}
                                            className="border-b border-rule py-3.5 sm:border-b-0 sm:px-5 sm:first:pl-0 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:border-rule"
                                        >
                                            <dt className="meta">{metric.label}</dt>
                                            <dd className="title-sm mt-1 tabular-nums text-ink">
                                                {metric.value}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            )}

                            {/* Case study */}
                            <div className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-3">
                                {[
                                    { label: "Problem", text: project.problem },
                                    { label: "Architecture", text: project.solution },
                                    { label: "Outcome", text: project.outcome },
                                ].map((block) => (
                                    <div key={block.label} className="border-t border-rule pt-4">
                                        <span className="meta text-accent">{block.label}</span>
                                        <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink2">
                                            {block.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Architecture note */}
                            {project.architecture && (
                                <div className="mt-8 border-t border-rule pt-4">
                                    <span className="meta">How it's built</span>
                                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink2">
                                        {project.architecture}
                                    </p>
                                </div>
                            )}

                            {/* Stack */}
                            <div className="mt-8 border-t border-rule pt-4">
                                <span className="meta">Stack</span>
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="chip">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-rule bg-surface px-5 py-4 sm:px-7">
                            <span className="inline-flex items-center gap-2 text-[0.85rem] text-ink2">
                                {project.inProgress ? (
                                    <>
                                        <span className="size-1.5 rounded-full bg-accent" />
                                        In progress
                                    </>
                                ) : (
                                    <>
                                        <CheckCircle2 className="size-4 text-accent" strokeWidth={1.7} />
                                        Shipped
                                    </>
                                )}
                            </span>

                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                                {project.liveUrl && project.liveUrl !== "#" && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="link-u text-sm"
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
                                        className="link-u text-sm"
                                    >
                                        Code
                                        <Code2 className="size-3.5" strokeWidth={1.7} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

export default ProjectModal;
