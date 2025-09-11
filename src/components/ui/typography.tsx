import type { TypographyProps } from "@/types/typography";
import type { FC } from "react";

const FONT_HEADING = "font-[var(--font-heading)]";
const TEXT_COLOR = "text-[var(--text-color)]";

// Centralized sizes
const fontSizes = {
    h1: "text-[2.5rem] md:text-[3.5rem]",
    h2: "text-3xl md:text-4xl",
    h3: "text-[1.4rem] md:text-[1.5rem]",
    h4: "text-[1.3rem] md:text-[1.2rem]",
    h5: "text-[1rem] md:text-[1.1rem]",
    h6: "text-base md:text-lg",
    p: "text-[1rem] md:text-[1.1rem]",
};

// H1
export const H1: FC<TypographyProps> = ({ children, className = "" }) => (
    <h1
        className={`scroll-m-20 ${fontSizes.h1} font-extrabold tracking-tight ${FONT_HEADING} ${TEXT_COLOR} ${className}`}
    >
        {children}
    </h1>
);

// H2
export const H2: FC<TypographyProps> = ({ children, className = "" }) => (
    <h2
        className={`scroll-m-20 ${fontSizes.h2} font-bold tracking-tight ${FONT_HEADING} ${TEXT_COLOR} ${className}`}
    >
        {children}
    </h2>
);

// H3
export const H3: FC<TypographyProps> = ({ children, className = "" }) => (
    <h3
        className={`scroll-m-20 ${fontSizes.h3} font-semibold tracking-tight ${FONT_HEADING} ${TEXT_COLOR} ${className}`}
    >
        {children}
    </h3>
);

// H4
export const H4: FC<TypographyProps> = ({ children, className = "" }) => (
    <h4
        className={`scroll-m-20 ${fontSizes.h4} font-semibold tracking-tight ${FONT_HEADING} ${TEXT_COLOR} ${className}`}
    >
        {children}
    </h4>
);

// H5
export const H5: FC<TypographyProps> = ({ children, className = "" }) => (
    <h5
        className={`scroll-m-20 ${fontSizes.h5} font-medium tracking-tight ${FONT_HEADING} ${TEXT_COLOR} ${className}`}
    >
        {children}
    </h5>
);

// H6
export const H6: FC<TypographyProps> = ({ children, className = "" }) => (
    <h6
        className={`scroll-m-20 ${fontSizes.h6} font-medium tracking-tight ${FONT_HEADING} ${TEXT_COLOR} ${className}`}
    >
        {children}
    </h6>
);

export const P: FC<TypographyProps> = ({ children, className = "" }) => (
    <h6
        className={`scroll-m-20 ${fontSizes.p} font-medium tracking-tight ${FONT_HEADING} ${className}`}
    >
        {children}
    </h6>
);
