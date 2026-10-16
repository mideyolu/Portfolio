import { cn } from "@/lib/utils";

export function Loader({ visible }: { visible: boolean }) {
    return (
        <div
            aria-hidden={!visible}
            className={cn(
                "fixed inset-0 z-[70] flex flex-col items-center justify-center bg-paper transition-all duration-500 ease-out",
                visible ? "opacity-100" : "pointer-events-none opacity-0",
            )}
        >
            <p className="text-[1.05rem] font-medium tracking-[-0.03em] text-ink">
                Olumide Oluwuyi
            </p>
            <div className="mt-4 h-px w-40 overflow-hidden bg-rule">
                <span className="loader-bar block h-full w-full bg-accent" />
            </div>
            <p className="meta mt-4">Software engineer</p>
        </div>
    );
}

export default Loader;
