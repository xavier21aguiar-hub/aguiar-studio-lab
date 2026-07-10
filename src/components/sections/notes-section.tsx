import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";
import { TerminalSquare } from "lucide-react";

export function NotesSection() {
    return (
        <section id="notes" className="mx-auto max-w-6xl px-5 py-20">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
                <FadeIn>
                    <SectionHeader
                    eyebrow="Notes"
                    title="Bitácora técnica"
                    accent="olive"
                    />
                </FadeIn>

                <FadeIn delay={0.12}>
                    <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-6">
                        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--olive)]">
                            <TerminalSquare size={20} />
                        </div>

                        <p className="text-sm leading-7 text-[var(--muted)]">
                            Aquí documentaré errores, soluciones, aprendizajes, decisiones
                            técnicas y mejoras de cada proyecto. La idea es mostrar no solo el
                            resultado, sino también el proceso real detrás de construir software.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}