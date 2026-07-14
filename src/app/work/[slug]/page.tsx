import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Code2,
  ImageIcon,
} from "lucide-react";
import { getProjectBySlug, projects, type ProjectLink } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado | Aguiar Studio Lab",
    };
  }

  return {
    title: `${project.title} | Aguiar Studio Lab`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
      >
        <ArrowLeft size={16} />
        Volver a proyectos
      </Link>

      <section className="mt-10 grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--warm)]">
            {project.category}
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.length > 0 ? (
              project.links.map((link) => (
                <ProjectExternalLink key={link.href} link={link} />
              ))
            ) : (
              <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">
                Links en preparación
              </span>
            )}
          </div>
        </div>

        <ProjectVisual
          label={project.cover.label}
          title={project.cover.title}
          description={project.cover.description}
          demoLink={project.links.find((link) => link.type === "demo")}
        />
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {project.metrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-5"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              {metric.label}
            </p>

            <p className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
              {metric.value}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-10 grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <aside className="h-fit rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6">
          <div className="grid gap-5">
            <InfoItem label="Estado" value={project.status} />
            <InfoItem label="Año" value={project.year} />
            <InfoItem label="Rol" value={project.role} />

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Stack
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[var(--surface-soft)] px-3 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--olive)]">
            Highlights
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
            Lo más importante del proyecto
          </h2>

          <ul className="mt-6 grid gap-3">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-3 rounded-2xl bg-[var(--surface-soft)] p-4 text-sm leading-6 text-[var(--muted)]"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-[var(--olive)]"
                />
                {highlight}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-16 grid gap-5 md:grid-cols-2">
        <ContentBlock title="Problema" content={project.problem} />
        <ContentBlock title="Solución" content={project.solution} />
      </section>

      <section className="mt-16">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--warm)]">
            Screenshots
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
            Espacios visuales del proyecto
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
            Por ahora estos bloques funcionan como placeholders. Después se
            reemplazarán con capturas reales, demos o imágenes anonimizadas.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {project.screenshots.map((screenshot) => (
            <article
              key={screenshot.title}
              className="overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)]"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-[var(--surface-soft)]">
                <ImageIcon size={42} className="text-[var(--muted)]" />
              </div>

              <div className="p-5">
                <h3 className="font-semibold tracking-[-0.02em]">
                  {screenshot.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {screenshot.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-8 md:grid-cols-3">
        <ListBlock title="Proceso" items={project.process} />
        <ListBlock title="Retos / Debugging" items={project.challenges} />
        <ListBlock title="Aprendizajes" items={project.learnings} />
      </section>

      <section className="mt-16 rounded-[2rem] border border-[var(--border)] bg-[var(--foreground)] p-8 text-[var(--background)] md:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#d6c8b5]">
          Next steps
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
          Próximas mejoras
        </h2>

        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {project.nextSteps.map((step) => (
            <li
              key={step}
              className="rounded-2xl border border-[rgba(246,241,232,0.18)] bg-[rgba(246,241,232,0.08)] p-4 text-sm leading-6 text-[#d6c8b5]"
            >
              {step}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

function ProjectVisual({
  label,
  title,
  description,
  demoLink,
}: {
  label: string;
  title: string;
  description: string;
  demoLink?: ProjectLink;
}) {
  const content = (
    <>
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[rgba(199,109,58,0.16)] blur-3xl" />
      <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[rgba(38,70,83,0.14)] blur-3xl" />

      <div className="relative rounded-[1.5rem] border border-[var(--border)] bg-[var(--background)] p-5">
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
          <div>
            <p className="text-sm font-semibold">{label}</p>

            <p className="mt-1 text-xs text-[var(--muted)]">
              {demoLink ? "Demo pública disponible" : "Demo en preparación"}
            </p>
          </div>

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--foreground)] text-[#F6F1E8] transition group-hover:scale-105">
            <ArrowUpRight size={17} />
          </span>
        </div>

        <div className="py-12">
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
            Case study preview
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em]">
            {title}
          </h2>

          <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
            {description}
          </p>

          <div className="mt-7">
            {demoLink ? (
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-4 py-2 text-sm font-medium text-[#F6F1E8]">
                Abrir proyecto
                <ExternalLink size={15} />
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--muted)]">
                Próximamente
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="h-20 rounded-2xl bg-[var(--surface-soft)]" />
          <div className="h-20 rounded-2xl bg-[var(--accent-soft)]" />
          <div className="h-20 rounded-2xl bg-[var(--surface-soft)]" />
        </div>
      </div>
    </>
  );

  if (demoLink) {
    return (
      <a
        href={demoLink.href}
        target="_blank"
        rel="noreferrer"
        className="group relative block overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_24px_80px_rgba(28,28,28,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(28,28,28,0.12)]"
        aria-label={`Abrir proyecto ${title}`}
      >
        {content}
      </a>
    );
  }

  return (
    <aside className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_24px_80px_rgba(28,28,28,0.08)]">
      {content}
    </aside>
  );
}

function ProjectExternalLink({ link }: { link: ProjectLink }) {
  const Icon = link.type === "repo" ? Code2 : ExternalLink;

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)] transition hover:opacity-90"
    >
      <Icon size={16} />
      {link.label}
    </a>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
        {label}
      </p>
      <p className="mt-2 font-semibold">{value}</p>
    </div>
  );
}

function ContentBlock({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <article className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-6">
      <h2 className="text-2xl font-semibold tracking-[-0.03em]">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{content}</p>
    </article>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-6">
      <h2 className="text-2xl font-semibold tracking-[-0.03em]">{title}</h2>

      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="text-sm leading-6 text-[var(--muted)]">
            <span className="mr-2 text-[var(--warm)]">•</span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}