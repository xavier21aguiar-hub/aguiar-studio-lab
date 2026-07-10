import { FadeIn } from "@/components/shared/fade-in";
import { Camera, Sparkles } from "lucide-react";

export function VisualLabSection() {
    return (
        <section id="visual-lab" className="mx-auto max-w-6xl px-5 py-20">
            <FadeIn>
                <div className="relative overflow-hidden rounded-[2rem] border border-dashed border-[var(--accent)] bg-[rgba(255,250,241,0.65)] p-8 md:p-12">
                    <div className="absolute right-8 top-8 hidden text-[var(--accent)] opacity-20 md:block">
                        <Camera size={96} />
                    </div>

                    <span className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-4 py-2 text-sm font-medium text-[var(--accent)]">
                        <Sparkles size={16} />
                        Coming soon
                    </span>

                    <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                        Visual Lab
                    </h2>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                        Una futura línea para explorar fotografía, video, drones, lentes y
                        documentación visual de proyectos técnicos y creativos. Por ahora,
                        queda marcado como una dirección en desarrollo.
                    </p>
                </div>
            </FadeIn>
        </section>
    );
}