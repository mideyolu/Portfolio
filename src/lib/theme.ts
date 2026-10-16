/**
 * Theme persistence helpers.
 *
 * Deliberately separate from `components/ui/theme.tsx`: that file must only
 * export components for React Fast Refresh to work
 * (`react-refresh/only-export-components`).
 */

export type ThemeMode = "dark" | "light";

export const getInitialTheme = (): ThemeMode => {
    if (typeof window === "undefined") {
        return "light";
    }

    const stored = window.localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
        return stored;
    }

    return "light";
};

export const setThemeDocumentAttribute = (theme: ThemeMode) => {
    document.documentElement.dataset.theme = theme;
};
