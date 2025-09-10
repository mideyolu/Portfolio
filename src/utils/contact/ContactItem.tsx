// ContactItem.tsx
import { H5 } from "@/components/ui/typography";
import type { ReactNode } from "react";

interface ContactItemProps {
    icon: ReactNode;
    title: string;
    children: ReactNode;
}

export const ContactItem = ({ icon, title, children }: ContactItemProps) => (
    <div className="flex items-start gap-4">
        <span className="flex items-center p-3 justify-center w-10 h-10 rounded-full bg-[var(--tag-color)]/99 text-[var(--color-accent)]">
            {icon}
        </span>

        <div className="flex flex-col gap-1">
            <H5>{title}</H5>
            {children}
        </div>
    </div>
);
