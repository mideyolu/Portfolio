//ContactInput.tsx
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field } from "@/utils/contact/Field";
import type { FC } from "react";

interface ContactInputProps {
    label: string;
    value: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    placeholder: string;
    type?: string;
    isTextarea?: boolean;
    maxLength?: number;
}

const baseClasses = `
  bg-[var(--tag-color)]
  text-[var(--text-color)]
  placeholder-gray-400
  border border-transparent
  rounded-lg
  focus-visible:border-[var(--color-accent)]
  focus-visible:ring-[var(--color-accent)]
  focus-visible:ring-1
  focus-visible:outline-none
  transition-all
  duration-200
`;

const ContactInput: FC<ContactInputProps> = ({
    label,
    value,
    onChange,
    placeholder,
    type = "text",
    isTextarea = false,
    maxLength,
}) => {
    return (
        <Field label={label}>
            {isTextarea ? (
                <Textarea
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    className={baseClasses + " resize-none"}
                />
            ) : (
                <Input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={baseClasses}
                />
            )}
        </Field>
    );
};

export default ContactInput;
