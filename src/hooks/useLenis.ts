import Lenis from "lenis";
import { useEffect } from "react";

/** Height of the sticky header plus breathing room, in px. */
const ANCHOR_OFFSET = -80;

/**
 * Module-scoped handle to the live Lenis instance.
 *
 * Lets components outside the hook (the footer's back-to-top, for example)
 * drive the same scroll pipeline instead of calling `window.scrollTo` and
 * fighting it. Stays `null` under reduced motion, or before mount.
 */
let instance: Lenis | null = null;

/**
 * Scrolls to a target through Lenis when it is running, and falls back to
 * native smooth scrolling when it is not (reduced motion, or SSR/first paint).
 */
export function scrollToTarget(
    target: number | string | HTMLElement,
    offset = 0,
) {
    if (instance) {
        instance.scrollTo(target, { offset });
        return;
    }

    if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: "smooth" });
        return;
    }

    const element =
        typeof target === "string"
            ? document.querySelector<HTMLElement>(target)
            : target;

    element?.scrollIntoView({ behavior: "smooth" });
}

/**
 * Lenis smooth scrolling, plus hash-link interception so in-page anchors
 * animate through Lenis and respect the sticky header offset.
 *
 * Returns early under `prefers-reduced-motion`, leaving native scrolling
 * (and the browser's own anchor jump) completely untouched.
 */
export function useLenis() {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const lenis = new Lenis({
            duration: 1.05,
            smoothWheel: true,
            // Leave touch devices on native momentum scrolling.
            syncTouch: false,
        });
        instance = lenis;

        let frame = requestAnimationFrame(function loop(time) {
            lenis.raf(time);
            frame = requestAnimationFrame(loop);
        });

        const onClick = (event: MouseEvent) => {
            if (event.defaultPrevented || event.metaKey || event.ctrlKey) return;

            const target = event.target as HTMLElement | null;
            const anchor = target?.closest<HTMLAnchorElement>('a[href^="#"]');
            if (!anchor) return;

            const hash = anchor.getAttribute("href");
            if (!hash || hash === "#") return;

            const element = document.querySelector<HTMLElement>(hash);
            if (!element) return;

            event.preventDefault();
            lenis.scrollTo(element, { offset: ANCHOR_OFFSET });
            window.history.pushState(null, "", hash);
        };

        document.addEventListener("click", onClick);

        return () => {
            document.removeEventListener("click", onClick);
            cancelAnimationFrame(frame);
            instance = null;
            lenis.destroy();
        };
    }, []);
}

export default useLenis;
