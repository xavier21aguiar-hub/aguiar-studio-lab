type SectionHeaderProps = {
    eyebrow: string;
    title: string;
    description?: string;
    accent?: "warm" | "olive" | "accent";
};

const accentColors = {
    warm: "text-[var(--warm)]",
    olive: "text-[var(--olive)]",
    accent: "text-[var(--accent)]",
};

export function SectionHeader({
    eyebrow,
    title,
    description,
    accent = "warm",
}: SectionHeaderProps) {
    return (
    <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
            <p className={`text-sm font-medium uppercase tracking-[0.2em] ${accentColors[accent]}`}>
                {eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                {title}
            </h2>
        </div>

        {description ? (
        <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">
            {description}
        </p>
        ) : null}
    </div>
    );
}