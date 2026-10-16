import { Reveal } from "@/components/ui/Reveal";
import { activeFocusItems } from "@/data/currentlyBuilding";

/**
 * Thin "what I'm working on now" strip under the hero proof numbers.
 *
 * Activates `data/currentlyBuilding.ts`, which was fully typed but had no
 * consumer anywhere in the app.
 */
export function Currently() {
    return (
        <div className="mt-14 border-t border-rule pt-6">
            <Reveal>
                <div className="flex items-baseline justify-between gap-4">
                    <span className="meta">Currently building</span>
                    <span className="meta">
                        {activeFocusItems.length} threads
                    </span>
                </div>
            </Reveal>

            <ul className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
                {activeFocusItems.map((item, i) => (
                    <li key={item.id} className="border-t border-rule pt-4">
                        <Reveal delay={0.05 * i}>
                            <div className="flex items-center justify-between gap-3">
                                <span className="idx">{item.area}</span>
                                <span className="flex items-center gap-1.5 text-[0.72rem] text-ink2">
                                    <span className="size-1.5 rounded-full bg-accent" />
                                    {item.status}
                                </span>
                            </div>

                            <h3 className="mt-2 text-[0.98rem] font-medium tracking-[-0.02em] text-ink">
                                {item.title}
                            </h3>

                            <p className="mt-1.5 text-[0.85rem] leading-relaxed text-ink2">
                                {item.description}
                            </p>
                        </Reveal>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Currently;
