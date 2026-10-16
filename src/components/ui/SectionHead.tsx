import { Reveal } from "@/components/ui/Reveal";

export function SectionHead({
    idx,
    title,
    note,
}: {
    idx: string;
    title: string;
    note?: string;
}) {
    return (
        <Reveal>
            <div className="sec-head">
                <span className="sec-idx">{idx}</span>
                <h2 className="sec-title">{title}</h2>
                {note ? <span className="meta sec-note">{note}</span> : null}
            </div>
        </Reveal>
    );
}

export default SectionHead;
