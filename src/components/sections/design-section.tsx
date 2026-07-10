import { FadeIn } from "@/components/shared/fade-in";
import { PenTool } from "lucide-react";

export function DesignSection() {
    return (
        <section id="design" className="mx-auto max-w-6xl px-5 py-20">
            <FadeIn>
                <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--foreground)] p-8 text-[var(--background)] md:p-12">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(246,241,232,0.12)]">
                        <PenTool size={22}/>
                    </div>
                    
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#d6c8b5]">
                        Design
                    </p>

                    <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                        No solo quiero construir proyectos. También quiero aprender a
                        presentarlos mejor.
                    </h2>
                    
                    <p className="mt-6 max-w-2xl text-sm leading-7 text-[#d6c8b5]">
                        Esta área estará enfocada en diseño web, interfaces, composición
                        visual, sistemas de componentes y criterio estético aplicado a
                        productos digitales.
                    </p>
                </div>
            </FadeIn>
        </section>
    );
}