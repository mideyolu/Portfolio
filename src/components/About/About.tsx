import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import TextReveal from "@/components/ui/TextReveal";
import { manifesto, principles } from "@/data/about";
import { ArrowUpRight, Download } from "lucide-react";

export function AboutSection() {
    return (
        <section id="about" className="pt-24 sm:pt-32 lg:pt-40">
            <div className="wrap">
                <SectionHead
                    idx="02"
                    title="About"
                    note="Software engineering, applied AI"
                />

                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-7">
                        <TextReveal
                            text={manifesto.statement}
                            className="display-lg text-ink"
                        />

                        <Reveal delay={0.15}>
                            <p className="prose-quiet mt-7">
                                {manifesto.extended}
                            </p>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <a
                                href="/Oluwuyi_Olumide_CV.pdf"
                                download="Oluwuyi_Olumide_CV.pdf"
                                className="link-u mt-7 text-ink2"
                            >
                                <Download className="size-4" strokeWidth={1.6} />
                                Download CV
                            </a>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-5">
                        <Reveal>
                            <dl className="border-t border-rule">
                                {manifesto.creds.map((cred) => (
                                    <div
                                        key={cred.label}
                                        className="flex items-baseline justify-between gap-6 border-b border-rule py-3.5"
                                    >
                                        <dt className="meta">{cred.label}</dt>
                                        <dd className="text-right text-[0.95rem] text-ink">
                                            {cred.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </Reveal>

                        <div className="mt-10 space-y-0">
                            {principles.map((principle, i) => (
                                <Reveal key={principle.title} delay={0.06 * i}>
                                    <div className="border-t border-rule py-5 last:border-b">
                                        <div className="flex items-baseline gap-3">
                                            <span className="idx">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <h3 className="title-sm text-ink">
                                                {principle.title}
                                            </h3>
                                        </div>
                                        <p className="mt-2 pl-[2.4rem] text-[0.9375rem] leading-relaxed text-ink2">
                                            {principle.body}
                                        </p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>

                        <Reveal>
                            <a
                                href="#experience"
                                className="link-u mt-8 inline-flex"
                            >
                                Where I've worked
                                <ArrowUpRight className="size-4" strokeWidth={1.8} />
                            </a>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
