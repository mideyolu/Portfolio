// ProjectImage.tsx
import type { ProjectImageProps } from "@/types/project";
import ImageLightbox from "@/utils/project/ImageLightbox";
import type { FC } from "react";

const ProjectImage: FC<ProjectImageProps> = ({ images, isLoading }) => (
    <div className="lg:w-1/2 relative overflow-hidden rounded-2xl flex items-center justify-center shadow-inner">
        {isLoading ? (
            <div className="w-full h-64 md:h-full bg-[var(--tag-color)]/70 animate-pulse rounded-2xl" />
        ) : (
            <ImageLightbox
                images={images}
                alt="Project Image"
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg"
            />
        )}
    </div>
);

export default ProjectImage;
