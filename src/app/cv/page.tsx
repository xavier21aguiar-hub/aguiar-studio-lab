import { cvData } from "@/data/cv";
import { profile } from "@/data/profile";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    Download,
    ExternalLink,
    Mail,
    MapPin,
    Phone,
    Sparkles,
} from "lucide-react";

export const metadata = {
    title: "CV | Xavier Aguiar",
    description:
    "CV web de Xavier Aguiar: desarrollo web, bases de datos, APIs, automatización, datos y proyectos técnicos.",
};

export default function CVPage() {
    return (
    <main className="mx-auto max-w-6xl px-5 py-10 md:py-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
            >
                <ArrowLeft size={16} />
                Volver al portafolio
            </Link>
            
            <div className="flex flex-wrap gap-3">
                <a
                href={profile.cvEsPath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[#F6F1E8] transition hover:scale-[1.02] hover:opacity-90"
                >
                    <Download size={16} />
                    CV Español
                </a>
                
                <a
                href={profile.cvEnPath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--foreground)]"
                >
                    <Download size={16} />
                    CV English
                </a>
            </div>
        </div>
        
        <section className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] shadow-[0_24px_80px_rgba(28,28,28,0.08)]">
            <div className="grid lg:grid-cols-[0.38fr_0.62fr]">
                <aside className="bg-[var(--foreground)] p-7 text-[#F6F1E8] md:p-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-[#F6F1E8] bg-[var(--surface-soft)] shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
                            <Image
                            src={cvData.image}
                            alt={`Foto de ${cvData.name}`}
                            fill
                            className="object-cover"
                            priority
                            />
                        </div>
                        
                        <h1 className="mt-6 text-3xl font-semibold tracking-[-0.04em]">
                            {cvData.name}
                        </h1>
                        
                        <p className="mt-2 text-sm leading-6 text-[#d6c8b5]">
                            {cvData.title}
                        </p>
                    </div>
                    
                    <SidebarSection title="Contacto">
                        <ContactItem icon={<Mail size={17} />} text={cvData.email} />
                        <ContactItem icon={<Phone size={17} />} text={cvData.phone} />
                        <ContactItem icon={<MapPin size={17} />} text={cvData.location} />
                        <ContactItem icon={<ExternalLink size={17} />} text={cvData.linkedin} href={cvData.linkedinUrl} />
                    </SidebarSection>
                    
                    <SidebarSection title="Formación académica">
                        <ul className="space-y-3">
                            {cvData.education.map((item) => (
                                <li key={item} className="text-sm leading-6 text-[#d6c8b5]">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </SidebarSection>
                    
                    <SidebarSection title="Otros conocimientos">
                        <ul className="space-y-3">
                            {cvData.knowledge.map((item) => (
                                <li key={item} className="text-sm leading-6 text-[#d6c8b5]">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </SidebarSection>
                    
                    <SidebarSection title="Idiomas">
                        <ul className="space-y-3">
                            {cvData.languages.map((item) => (
                                <li key={item} className="text-sm leading-6 text-[#d6c8b5]">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </SidebarSection>
                </aside>
                
                <div className="p-7 md:p-10">
                    <section>
                        <p className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--warm)]">
                            Perfil profesional
                        </p>
                        
                        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
                            Desarrollo, datos, APIs y documentación técnica.
                        </h2>
                        
                        <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                            {cvData.profile}
                        </p>
                    </section>
                    
                    <SectionDivider />
                    
                    <section>
                        <SectionTitle title="Stack técnico" />
                        <div className="mt-5 flex flex-wrap gap-2">
                            {cvData.skills.map((skill) => (
                                <span
                                key={skill}
                                className="rounded-full bg-[var(--surface-soft)] px-3 py-1 text-xs text-[var(--foreground)]"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>
                    
                    <SectionDivider />
                    
                    <section>
                        <SectionTitle title="Proyectos seleccionados" />
                        <div className="mt-5 grid gap-4">
                            {cvData.projects.map((project) => (
                                <article
                                key={project.title}
                                className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl font-semibold tracking-[-0.03em]">
                                                {project.title}
                                            </h3>
                                            
                                            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                                                {project.description}
                                            </p>
                                        </div>

                                        <Sparkles
                                        size={18}
                                        className="mt-1 shrink-0 text-[var(--warm)]"
                                        />
                                    </div>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                            key={tag}
                                            className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                    
                    <SectionDivider />
                    
                    <section>
                        <SectionTitle title="Experiencia laboral" />
                        
                        <div className="mt-5 grid gap-5">
                            {cvData.experience.map((job) => (
                                <article
                                key={`${job.role}-${job.company}`}
                                className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5"
                                >
                                    <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                                        <div>
                                            <h3 className="text-xl font-semibold tracking-[-0.03em]">
                                                {job.role}
                                            </h3>
                                            
                                            <p className="mt-1 text-sm text-[var(--muted)]">
                                                {job.company}
                                            </p>
                                        </div>
                                        
                                        <span className="w-fit rounded-full bg-[var(--surface-soft)] px-3 py-1 text-xs text-[var(--foreground)]">
                                            {job.period}
                                        </span> 
                                    </div>
                                    
                                    <ul className="mt-4 space-y-2">
                                        {job.bullets.map((bullet) => (
                                            <li
                                            key={bullet}
                                            className="text-sm leading-6 text-[var(--muted)]"
                                            >
                                                <span className="mr-2 text-[var(--warm)]">•</span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </main>
    );
}

function SidebarSection({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="mt-9">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#F6F1E8]">
                {title}
            </h2>

            <div className="mt-4">{children}</div>
        </section>
    );
}

function ContactItem({
    icon,
    text,
    href,
}: {
    icon: React.ReactNode;
    text: string;
    href?: string;
}) {
    const content = (
        <>
            <span className="mt-1 shrink-0 text-[#F6F1E8]">{icon}</span>
            <span>{text}</span>
        </>
    );
    if (href) {
        return (
            <a href={href}
            target="_blank"
            rel="noreferrer"
            className="mb-3 flex items-start gap-3 text-sm leading-6 text-[#d6c8b5] transition hover:text-[#F6F1E8]">
                {content}
            </a>
        );
    }
    return (
    <div className="mb-3 flex items-start gap-3 text-sm leading-6 text-[#d6c8b5]">
        {content}
    </div>
    );
}

function SectionTitle({ title }: { title: string }) {
    return (
    <h2 className="rounded-2xl bg-[var(--surface-soft)] px-5 py-3 text-xl font-semibold uppercase tracking-[0.08em]">
        {title}
    </h2>
    );
}

function SectionDivider() {
    return <div className="my-8 h-px bg-[var(--border)]" />;
}