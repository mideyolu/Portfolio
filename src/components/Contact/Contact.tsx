import { socialLinks } from "@/data/socialLinks";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Check, Copy, Download, Send } from "lucide-react";
import { useEffect, useState } from "react";

const directEmail = "oluwuyiolumide91@gmail.com";

export function ContactSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [copied, setCopied] = useState(false);
    const [localTime, setLocalTime] = useState("");

    useEffect(() => {
        const tick = () =>
            setLocalTime(
                new Intl.DateTimeFormat("en-GB", {
                    timeZone: "Africa/Lagos",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                }).format(new Date()),
            );
        tick();
        const id = window.setInterval(tick, 30000);
        return () => window.clearInterval(id);
    }, []);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(directEmail);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2200);
        } catch {
            setCopied(false);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setStatus("idle");

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // Without all three keys the previous fallbacks ("service_default" and
        // friends) would attempt a real request to a non-existent endpoint and
        // surface as a generic failure. Fail loudly onto the mailto fallback.
        if (!serviceId || !templateId || !publicKey) {
            console.error(
                "EmailJS is not configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY.",
            );
            setStatus("error");
            setLoading(false);
            return;
        }

        try {
            await emailjs.send(serviceId, templateId, { name, email, message }, publicKey);
            setName("");
            setEmail("");
            setMessage("");
            setStatus("success");
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="band mt-24 bg-paper sm:mt-32 lg:mt-40">
            <section id="contact" className="py-24 sm:py-32 lg:py-36">
                <div className="wrap">
                    <span className="idx text-accent">05 — Contact</span>

                    <h2 className="display-xl mt-5 text-ink">
                        Tell me what you're building.
                    </h2>

                    <p className="lede mt-6">
                        Open to software engineering roles and a small number of project
                        collaborations. Email is the fastest way to reach me.
                    </p>

                    <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-14">
                        {/* Direct */}
                        <div className="lg:col-span-5">
                            <div className="border-t border-rule pt-5">
                                <span className="meta">Email</span>
                                <div className="mt-2 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
                                    <a
                                        href={`mailto:${directEmail}`}
                                        className="link-u break-all text-[1.05rem] sm:text-[1.2rem]"
                                    >
                                        {directEmail}
                                    </a>
                                    <button
                                        type="button"
                                        onClick={copyEmail}
                                        aria-label="Copy email address"
                                        className="flex size-9 shrink-0 items-center justify-center rounded-full border border-rule text-ink2 transition-colors hover:border-ink hover:text-ink"
                                    >
                                        {copied ? (
                                            <Check className="size-4 text-accent" strokeWidth={1.8} />
                                        ) : (
                                            <Copy className="size-4" strokeWidth={1.6} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-rule pt-5">
                                <div>
                                    <dt className="meta">Based in</dt>
                                    <dd className="mt-1.5 text-[1rem] text-ink">
                                        Abuja, Nigeria
                                        <span className="block text-[0.85rem] text-ink3">
                                            UTC+1 · global remote
                                        </span>
                                    </dd>
                                </div>
                                <div>
                                    <dt className="meta">Local time</dt>
                                    <dd className="mt-1.5 flex items-center gap-2 text-[1rem] tabular-nums text-ink">
                                        <span className="size-1.5 rounded-full bg-accent" />
                                        {localTime || "—:—"} WAT
                                    </dd>
                                </div>
                            </dl>

                            <ul className="mt-8 border-t border-rule">
                                {socialLinks.map((link) => {
                                    const Icon = link.icon;
                                    const external = !link.href.startsWith("mailto:");
                                    return (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                target={external ? "_blank" : undefined}
                                                rel={external ? "noreferrer" : undefined}
                                                className="row-item flex items-center justify-between gap-4 px-2 py-3.5"
                                            >
                                                <span className="flex items-center gap-3 text-[1rem] text-ink">
                                                    <Icon className="size-4 text-ink3" />
                                                    {link.label}
                                                </span>
                                                <ArrowUpRight
                                                    className="size-4 text-ink3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
                                className="link-u mt-7 inline-flex text-ink2"
                            >
                                <Download className="size-4" strokeWidth={1.6} />
                                Download CV
                            </a>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-7">
                            <form
                                onSubmit={handleSubmit}
                                className="rounded-2xl border border-rule bg-surface p-6 sm:p-8"
                            >
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="contact-name"
                                            className="meta block"
                                        >
                                            Name
                                        </label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(event) => setName(event.target.value)}
                                            placeholder="Your name"
                                            className="field"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="contact-email"
                                            className="meta block"
                                        >
                                            Email
                                        </label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                            placeholder="you@company.com"
                                            className="field"
                                        />
                                    </div>
                                </div>

                                <div className="mt-4 space-y-2">
                                    <label
                                        htmlFor="contact-message"
                                        className="meta block"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        required
                                        rows={6}
                                        maxLength={600}
                                        value={message}
                                        onChange={(event) => setMessage(event.target.value)}
                                        placeholder="What are you building, and where do you need help?"
                                        className="field resize-y"
                                    />
                                    <div className="flex justify-end">
                                        <span className="meta tabular-nums">
                                            {message.length} / 600
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                                    <span className="meta">
                                        I reply within a day — usually with
                                        questions before a pitch.
                                    </span>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="btn-solid px-5 py-3 text-sm disabled:opacity-60"
                                    >
                                        {loading ? "Sending…" : "Send message"}
                                        <Send className="size-4" strokeWidth={1.8} />
                                    </button>
                                </div>

                                {status === "success" && (
                                    <p className="mt-4 rounded-lg border border-accent/40 bg-accent-soft px-4 py-3 text-[0.9rem] text-ink">
                                        Thanks — your message is in. I'll get back to you shortly.
                                    </p>
                                )}

                                {status === "error" && (
                                    <p className="mt-4 rounded-lg border border-rule px-4 py-3 text-[0.9rem] text-ink2">
                                        That didn't send. Email me directly at{" "}
                                        <a
                                            href={`mailto:${directEmail}`}
                                            className="link-u text-accent"
                                        >
                                            {directEmail}
                                        </a>
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactSection;
