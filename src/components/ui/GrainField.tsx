import { cn } from "@/lib/utils";

/**
 * Paper grain. Rendered as a tiling SVG turbulence so there is no image
 * request, no JS, and no animation loop — the whole effect costs one
 * composited layer at ~3.5% opacity.
 *
 * `soft-light` is used rather than `multiply` so the grain reads correctly on
 * both the paper (light) and the ink (dark) bands without a theme branch.
 */
const NOISE = encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'>" +
        "<filter id='n'>" +
        "<feTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/>" +
        "</filter>" +
        "<rect width='100%' height='100%' filter='url(#n)'/>" +
        "</svg>",
);

export function GrainField({
    opacity = 0.035,
    className,
}: {
    opacity?: number;
    className?: string;
}) {
    return (
        <div
            aria-hidden="true"
            style={{
                opacity,
                backgroundImage: `url("data:image/svg+xml,${NOISE}")`,
                backgroundSize: "160px 160px",
            }}
            className={cn(
                "pointer-events-none fixed inset-0 z-[55] mix-blend-soft-light",
                className,
            )}
        />
    );
}

/**
 * Layout-sheet grid. Fades out radially so it never competes with body copy.
 * Intended to sit behind a section at `absolute inset-0`, not fixed.
 */
export function GraphGrid({ className }: { className?: string }) {
    const layer =
        "linear-gradient(to right, var(--rule) 1px, transparent 1px), linear-gradient(to bottom, var(--rule) 1px, transparent 1px)";
    const mask =
        "radial-gradient(120% 85% at 50% 0%, black, transparent 72%)";

    return (
        <div
            aria-hidden="true"
            style={{
                backgroundImage: layer,
                backgroundSize: "88px 88px",
                maskImage: mask,
                WebkitMaskImage: mask,
            }}
            className={cn("pointer-events-none absolute inset-0", className)}
        />
    );
}

export default GrainField;
