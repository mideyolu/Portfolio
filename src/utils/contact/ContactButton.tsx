// ContactButton.tsx
import { Button } from "@/components/ui/button";
import type { ButtonHTMLAttributes, FC } from "react";

interface ContactButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
}

const ContactButton: FC<ContactButtonProps> = ({
    loading,
    children,
    ...props
}) => {
    return (
        <Button
            type="submit"
            disabled={loading}
            size="lg"
            className="w-full cursor-pointer bg-[var(--button-bg-color)] hover:bg-[var(--button-hover-color)] text-white rounded-lg"
            {...props}
        >
            {loading ? "Sending..." : children}
        </Button>
    );
};

export default ContactButton;
