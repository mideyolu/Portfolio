// ProjectModal.tsx
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import type { InProgressModalProps } from "@/types/project";
import type { FC } from "react";

const ProjectModal: FC<InProgressModalProps> = ({
    title,
    open,
    onOpenChange,
}) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[400px] bg-[var(--tag-color)] text-[var(--text-color)] border border-[var(--tag-color)]/90 ">
                <DialogHeader>
                    <DialogTitle>
                        <span className="my-1 text-[var(--color-accent)]">
                            {title}{" "}
                        </span>
                        - In Progress
                    </DialogTitle>
                    <DialogDescription className="my-1 text-[var(--text-color)]">
                        This project is currently under development. Please
                        check back later!
                    </DialogDescription>
                </DialogHeader>
                <div className="mt-4 flex justify-center">
                    <DialogClose
                        asChild
                        className="bg-[var(--button-bg-color)] hover:bg-[var(--button-hover-color)] transition-all duration-200 cursor-pointer border-0 hover:text-[--text-color]"
                    >
                        <Button variant="outline">Close</Button>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ProjectModal;
