// ImageLightbox.tsx
import { Button } from "@/components/ui/button";
import type { ImageLightboxProps } from "@/types/project";
import type { FC } from "react";
import { useState } from "react";

const ImageLightbox: FC<ImageLightboxProps> = ({ images, alt, className }) => {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () =>
        setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevImage = () =>
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    if (images.length === 1) {
        return (
            <img
                src={images[0]}
                alt={alt}
                className={`w-full h-full object-cover rounded-2xl shadow-lg ${className}`}
            />
        );
    }

    return (
        <>
            <img
                src={images[0]}
                alt={alt}
                className={`cursor-pointer transition-transform duration-300 hover:scale-105 ${className}`}
                onClick={() => {
                    setOpen(true);
                    setCurrentIndex(0);
                }}
            />

            {open && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center p-4">
                    <div className="relative w-full h-full flex justify-center items-center">
                        <img
                            src={images[currentIndex]}
                            alt={alt}
                            className="max-w-[80vw] max-h-[90vh] object-contain rounded-lg shadow-lg"
                        />

                        <Button
                            className="cursor-pointer absolute top-5 right-5 z-20 rounded-full p-3 bg-[var(--button-bg-color)] hover:bg-[var(--button-hover-color)]"
                            onClick={() => setOpen(false)}
                        >
                            ✕
                        </Button>

                        <Button
                            className="cursor-pointer absolute left-5 top-1/2 -translate-y-1/2 z-20 rounded-full p-3 bg-[var(--button-bg-color)] hover:bg-[var(--button-hover-color)]"
                            onClick={prevImage}
                        >
                            ◀
                        </Button>
                        <Button
                            className="cursor-pointer absolute right-5 top-1/2 -translate-y-1/2 z-20 rounded-full p-3 bg-[var(--button-bg-color)] hover:bg-[var(--button-hover-color)]"
                            onClick={nextImage}
                        >
                            ▶
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageLightbox;
