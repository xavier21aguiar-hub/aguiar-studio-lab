import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/shared/project-card";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function WorkSection() {
    const mainProject = featuredProjects.find((project) => project.featured) ?? featuredProjects[0];
    const secondaryProjects = featuredProjects.filter(
        (project) => project.slug !== mainProject?.slug
    );
    
    return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20">
        <FadeIn>
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <SectionHeader
                eyebrow="Work"
                title="Proyectos destacados"
                description="Una selección inicial de proyectos reales y conceptos en desarrollo. Cada uno se convertirá después en un caso de estudio completo."
                accent="warm"
                />

                <Link href="/work"
                className="inline-flex 
                w-fit 
                items-center 
                gap-2 
                rounded-full 
                border 
                border-[var(--border)] 
                bg-[var(--surface)] 
                px-5 py-3 
                text-sm 
                font-medium 
                text-[var(--muted)] transition hover:border-[var(--foreground)] hover:text-[var(--foreground)]">
                    Ver todos
                    <ArrowRight size={16} />
                </Link>
            </div>
        </FadeIn>

        {mainProject ? (
            <FadeIn delay={0.08}>
                <Link
                href={`/work/${mainProject.slug}`}
                className="group 
                grid 
                overflow-hidden 
                rounded-[2rem] 
                border 
                border-[var(--border)] 
                bg-[var(--surface)] 
                shadow-[0_24px_80px_rgba(28,28,28,0.06)] 
                transition 
                hover:-translate-y-1 
                hover:shadow-[0_28px_90px_rgba(28,28,28,0.1)] 
                md:grid-cols-[1fr_0.85fr]"
                >
                    <div className="p-7 md:p-9">
                        <div className="mb-6 flex flex-wrap items-center gap-3">
                            <span className="rounded-full bg-[var(--surface-soft)] px-3 py-1 text-xs font-medium text-[var(--foreground)]">
                                Featured project
                            </span>
                            
                            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">
                                {mainProject.status}
                            </span>
                        </div>
                        
                        <p className="text-sm text-[var(--muted)]">
                            {mainProject.category}
                        </p>
                        
                        <h3 className="mt-3 max-w-xl text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
                            {mainProject.title}
                        </h3>
                        
                        <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                            {mainProject.description}
                        </p>
                        
                        <div className="mt-7 flex flex-wrap gap-2">
                            {mainProject.stack.map((tech) => (
                                <span
                                key={tech}
                                className="rounded-full bg-[var(--surface-soft)] px-3 py-1 text-xs text-[var(--foreground)]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                        <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
                            Ver caso de estudio
                            <ArrowUpRight
                            size={16}
                            className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </div>
                    </div>
                    
                    <div className="relative min-h-[280px] border-t border-[var(--border)] bg-[var(--background)] p-5 md:border-l md:border-t-0">
                        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[rgba(199,109,58,0.16)] blur-3xl" />
                        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[rgba(38,70,83,0.14)] blur-3xl" />
                        <div className="relative h-full rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,250,241,0.72)] p-5">
                            <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                                <p className="text-sm font-semibold">Case study</p>
                                <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs text-[var(--accent)]">
                                    {mainProject.year}
                                </span>
                            </div>
                            
                            <div className="mt-6 grid gap-3">
                                {mainProject.highlights.slice(0, 3).map((highlight) => (
                                    <div
                                    key={highlight}
                                    className="rounded-2xl bg-[var(--surface-soft)] p-4 text-sm leading-6 text-[var(--muted)]"
                                    >
                                        {highlight}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Link>
            </FadeIn>
        ) : null}
        
        <div className="mt-5 grid gap-5 md:grid-cols-3">
            {secondaryProjects.map((project) => (
                <ProjectCard
                key={project.slug}
                title={project.title}
                slug={project.slug}
                category={project.category}
                status={project.status}
                description={project.description}
                stack={project.stack}
                />
            ))}
        </div>
    </section>
    );
}