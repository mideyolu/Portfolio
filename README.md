# Olumide Oluwuyi — Portfolio

Personal engineering portfolio. Single-page, statically built, no server.

## Stack

| Layer | Choice |
| --- | --- |
| Build | Vite 7 |
| UI | React 19 + TypeScript (strict) |
| Styling | Tailwind CSS v4 (CSS-first tokens, no config file) |
| Motion | Framer Motion 12 |
| Smooth scroll | Lenis |
| Icons | lucide-react + react-icons |
| Forms | EmailJS |

## Getting started

```bash
npm install
npm run dev      # dev server (no typecheck — see note below)
npm run build    # tsc -b && vite build
npm run lint     # eslint
npm run preview  # serve dist/
```

> **Note:** `npm run dev` does **not** typecheck. Vite strips types without
> checking them, so `tsc` errors only surface in `npm run build`. Run the build
> before opening a PR.

### Environment

The contact form needs three EmailJS keys in `.env.local`:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

If any are missing the form does not attempt a request — it fails straight to
the `mailto:` fallback rather than silently posting to a non-existent endpoint.

## Architecture

```
src/
├── main.tsx                    # root + <MotionConfig reducedMotion="user">
├── App.tsx                     # → components/Portfolio
├── index.css                   # design tokens, type scale, component classes
├── components/
│   ├── Portfolio.tsx           # page assembly + theme state + Lenis
│   ├── Hero/                   # Hero, Currently
│   ├── Projects/               # Project (feature + bento), ProjectModal
│   ├── About/  Experience/  Skill/  Contact/  Footer/
│   ├── Navbar/Navmenu.tsx      # floating nav, hides on scroll-down
│   ├── Loader/                 # first-paint overlay
│   └── ui/                     # primitives (see table below)
├── data/                       # ALL copy and content lives here
├── hooks/useLenis.ts           # smooth scroll + anchor interception
├── lib/motion.ts               # motion tokens
└── types/                      # shared content types
```

### Section order

`home` → `projects` → `about` → `experience` → `skills` → `contact`.

`Navbar/Navmenu.tsx` derives the active section from this list, and
`data/navLinks.ts` drives both the nav and the footer index. Add a section in
all three places or the scroll spy will not see it.

## Design system

Editorial "paper and ink": one accent, hairline rules, generous type. Defined
entirely in `src/index.css` as custom properties and mapped into Tailwind via
`@theme inline`, so utilities like `bg-paper`, `text-ink2` and `border-rule`
exist without a Tailwind config.

| Token | Role |
| --- | --- |
| `--paper` | page background |
| `--surface`, `--surface-2` | raised / inset fills |
| `--ink`, `--ink-2`, `--ink-3` | primary, secondary, tertiary text |
| `--rule`, `--rule-strong` | hairline borders |
| `--accent`, `--accent-soft` | the single accent + its wash |

**`.band`** inverts the entire palette for a full-bleed section (used by
Contact). Because components reference tokens rather than literal colours,
anything inside a `.band` inverts for free — this is why no component hardcodes
a hex value.

Type helpers: `.display-xl`, `.display-lg`, `.display-md`, `.title-sm`, `.lede`,
`.prose-quiet`, `.meta`, `.idx`, `.serif-em`, plus `.sec-head`, `.chip`,
`.frame`, `.field`, `.btn-solid`, `.btn-ghost`, `.link-u`, `.row-item`.

## Motion system

Tokens live in `src/lib/motion.ts`; the cubic-beziers match the ones already in
`index.css` so CSS and JS motion share a velocity curve. Prefer these over
inline numbers.

`main.tsx` wraps the tree in `<MotionConfig reducedMotion="user">`, so every
Framer component respects the OS preference. Components that set their own
`initial` state must still guard with `useReducedMotion()` to avoid a one-frame
offset flash.

| Primitive | Purpose |
| --- | --- |
| `ui/Reveal` | Standard scroll-in entrance (fade + rise) |
| `ui/TextReveal` | Per-word opacity statement reveal |
| `ui/TiltCard` | Spring pointer tilt + accent wash |
| `ui/MagneticButton` | Cursor-attracted CTA |
| `ui/CountUp` | One-shot number count on view |
| `ui/ScrollProgress` | Top reading-progress hairline |
| `ui/GrainField`, `GraphGrid` | Paper grain overlay, layout grid |
| `ui/CustomCursor` | Pointer-following cursor (fine pointers only) |

**Performance rules:** animate `transform`/`opacity` only; keep pointer work in
motion values rather than React state; never animate `height` (the Experience
accordion collapses via `grid-template-rows` for this reason); gate pointer
effects on `pointerType === "mouse"`.

**Smooth scrolling:** `hooks/useLenis.ts` owns scrolling. `scroll-behavior:
smooth` is deliberately **absent** from `index.css` — having both makes the
browser fight Lenis. Use `scrollToTarget()` from that module instead of
`window.scrollTo` for in-page navigation.

## Content

All copy is data, not markup. Edit `src/data/` and the UI follows:

- `project.ts` — case studies (`featured: true` renders the full feature
  treatment; everything else lands in the bento grid)
- `about.ts` — manifesto, principles, experience timeline
- `skills.ts` — skills grouped by category, with `usedInProjects` back-references
- `currentlyBuilding.ts` — the hero "Currently building" strip
- `socialLinks.ts`, `navLinks.ts`

When adding a project, set `metrics` to one headline result plus two supporting
numbers; the bento cards surface the first two.

## Accessibility

- Custom cursor is disabled on coarse pointers and under reduced motion.
- Scroll animations degrade to instant states under `prefers-reduced-motion`.
- The collapsed accordion body is `aria-hidden`; the toggle is `aria-expanded`.
- Focus rings use `:focus-visible` against `--accent`.

## Deploy

`npm run build` emits a static `dist/`. Serve it from any static host; no
redirects or server runtime required.
