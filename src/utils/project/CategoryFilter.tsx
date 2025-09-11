// CategoryFilter.tsx
import StaggeredAnimation from "@/components/Animation/StaggeredAnimation";
import { Button } from "@/components/ui/button";
import type { CategoryFilterProps } from "@/types/project";
import type { FC } from "react";

const CategoryFilter: FC<CategoryFilterProps> = ({
    categories,
    selectedCategory,
    onSelectCategory,
}) => {
    return (
        <StaggeredAnimation
            className="flex flex-wrap justify-center gap-4 mb-8"
            stagger={0.05}
        >
            {categories.map((category, index) => (
                <Button
                    key={index}
                    onClick={() => onSelectCategory(category)}
                    className={`px-4 py-2 rounded-full border cursor-pointer transition-colors duration-200 ${
                        selectedCategory === category
                            ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)] hover:bg-[var(--button-hover-color)]"
                            : "bg-[var(--tag-color)] text-[var(--text-color)] border-[var(--color-accent)]/30 hover:bg-[var(--button-hover-color)] hover:text-[var(--tag-text)] hover:border-none"
                    }`}
                >
                    {category}
                </Button>
            ))}
        </StaggeredAnimation>
    );
};

export default CategoryFilter;
