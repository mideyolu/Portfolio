import type { ThemeMode } from "@/lib/theme";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = ({
    theme,
    onToggle,
}: {
    theme: ThemeMode;
    onToggle: () => void;
}) => (
    <button
        type="button"
        onClick={onToggle}
        aria-label={
            theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
        }
        className="flex size-9 items-center justify-center rounded-full border border-rule text-ink2 transition-colors duration-200 hover:border-ink hover:text-ink"
    >
        {theme === "dark" ? (
            <Sun className="size-[15px]" strokeWidth={1.6} />
        ) : (
            <Moon className="size-[15px]" strokeWidth={1.6} />
        )}
    </button>
);
