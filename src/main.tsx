import { MotionConfig } from "framer-motion";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const storedTheme = localStorage.getItem("theme");
document.documentElement.dataset.theme =
    storedTheme === "dark" || storedTheme === "light" ? storedTheme : "light";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* `reducedMotion="user"` makes every Framer Motion component in the
            tree respect the OS preference without per-component guards. */}
        <MotionConfig reducedMotion="user">
            <App />
        </MotionConfig>
    </StrictMode>,
);
