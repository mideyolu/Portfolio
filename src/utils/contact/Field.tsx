// Field.tsx
interface FieldProps {
    label: string;
    children: React.ReactNode;
}

export const Field = ({ label, children }: FieldProps) => (
    <div className="space-y-2">
        <label className="text-sm text-[var(--text-color)]">{label}</label>
        {children}
    </div>
);
