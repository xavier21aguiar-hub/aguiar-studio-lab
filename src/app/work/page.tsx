import { ProjectCard } from "@/components/shared/project-card";
import { projects } from "@/data/projects";

export const metadata = {
    title: "Work | Aguiar Studio Lab",
    description:
    "Proyectos técnicos, dashboards, automatización, datos, diseño web y sistemas de productividad.",
};

export default function WorkPage() {
    return (
        <main className="mx-auto max-w-6xl px-5 py-20">
            <section>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--warm)]">
                    Work
                </p>

                <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
                    Proyectos, casos de estudio y experimentos técnicos.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                    Una colección de proyectos donde documento problemas reales, soluciones,
                    tecnologías, errores, aprendizajes y próximos pasos.
                </p>
            </section>

            <section className="mt-16 grid gap-5 md:grid-cols-2">
                {projects.map((project) => (
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
            </section>
        </main>
    );
}