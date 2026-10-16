import AboutSection from "@/components/About/About";
import ContactSection from "@/components/Contact/Contact";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Loader from "@/components/Loader/Loader";
import NavMenu from "@/components/Navbar/Navmenu";
import ProjectsSection from "@/components/Projects/Project";
import SkillsSection from "@/components/Skill/Skill";
import CustomCursor from "@/components/ui/CustomCursor";
import GrainField from "@/components/ui/GrainField";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { useLenis } from "@/hooks/useLenis";
import { getInitialTheme, setThemeDocumentAttribute, type ThemeMode } from "@/lib/theme";
import { useEffect, useState } from "react";

export function Portfolio() {
    const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
    const [loading, setLoading] = useState(true);

    useLenis();

    useEffect(() => {
        setThemeDocumentAttribute(theme);
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        const timeout = window.setTimeout(() => setLoading(false), 850);
        return () => window.clearTimeout(timeout);
    }, []);

    return (
        <div className="min-h-screen bg-paper text-ink">
            <ScrollProgress />
            <GrainField />
            <CustomCursor />
            <Loader visible={loading} />

            <NavMenu
                theme={theme}
                onToggleTheme={() =>
                    setTheme((current) =>
                        current === "dark" ? "light" : "dark",
                    )
                }
            />

            <main>
                <Hero />
                <ProjectsSection />
                <AboutSection />
                <ExperienceSection />
                <SkillsSection />
                <ContactSection />
            </main>

            <Footer />
        </div>
    );
}

export default Portfolio;
