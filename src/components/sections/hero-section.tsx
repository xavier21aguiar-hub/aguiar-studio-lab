import { AreaCard } from "@/components/shared/area-card";
import { FadeIn } from "@/components/shared/fade-in";
import { profile } from "@/data/profile";
import Link from "next/link";
import { ArrowRight,
    BookOpen,
    Bot,
    Camera,
    Code2,
    Database,
    FileText,
    MapPin,
    Palette,
    Sparkles
} from "lucide-react";

const areas = [
    {
        title: "Build",
        status: "Activo",
        description: "Software, dashboards, automatización, bases de datos, APIs y productos digitales.",
        icon: <Code2 size={18} />,
    },
    {
        title: "Design",
        status: "Activo",
        description: "Interfaces, layouts, sistemas visuales, experiencia de usuario y diseño web.",
        icon: <Palette size={18} />,
    },
    {
        title: "Notes",
        status: "Activo",
        description: "Bitácora técnica con aprendizajes, errores resueltos, decisiones y mejoras.",
        icon: <BookOpen size={18} />,
    },
    {
        title: "Visual Lab",
        status: "Coming soon",
        description: "Futura línea para explorar fotografía, video, drones y documentación visual.",
        icon: <Camera size={18} />,
    }
];

const quickStats = [
    {
        label: "Áreas",
        value: "4",
    },
    {
        label: "Proyectos",
        value: "5+",
    },
    {
        label: "Estado",
        value: "Building",
    },
];

export function HeroSection() {
    return (
    <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-[1.1fr_0.9fr]">
        <FadeIn>
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">
                <Sparkles size={16} className="text-[var(--warm)]"/>
                {profile.focus}
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.065em] text-[var(--foreground)] md:text-7xl">
                {profile.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                {profile.heroDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-[var(--muted)]">
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2">
                    <MapPin size={16} />
                    {profile.location}
                </span>
                
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2">
                    <Code2 size={16} />
                    {profile.currentStatus}
                </span>
            </div>
            
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-center text-sm font-medium text-[#F6F1E8] transition hover:scale-[1.02] hover:opacity-90"
                >
                    Ver proyectos
                    <ArrowRight size={16} />
                </Link>
                
                <Link
                href="/cv"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-center text-sm font-medium transition hover:border-[var(--foreground)]"
                >
                    <FileText size={16} />
                    Ver CV
                </Link>
            </div>
            
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
                {quickStats.map((stat) => (
                    <div
                    key={stat.label}
                    className="rounded-2xl border border-[var(--border)] bg-[rgba(255,250,241,0.62)] p-4"
                    >
                        <p className="text-2xl font-semibold tracking-[-0.04em]">
                            {stat.value}
                        </p>
                        <p className="mt-1 text-xs text-[var(--muted)]">{stat.label}</p>
                    </div>
                ))}
            </div>
        </FadeIn>
        
        <FadeIn delay={0.15}>
            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_24px_80px_rgba(28,28,28,0.08)]">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[rgba(199,109,58,0.15)] blur-3xl" />
                <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[rgba(38,70,83,0.14)] blur-3xl" />
                <div className="relative rounded-[1.5rem] border border-[var(--border)] bg-[var(--background)] p-5">
                    <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                        <div>
                            <p className="text-sm font-semibold">Studio System</p>
                            <p className="text-xs text-[var(--muted)]">Portfolio OS v0.9</p>
                        </div>
                        
                        <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
                            Building
                        </span>
                    </div>
                    
                    <div className="mt-5 grid gap-3">
                        {areas.map((area) => (
                            <AreaCard
                            key={area.title}
                            title={area.title}
                            status={area.status}
                            description={area.description}
                            icon={area.icon}
                            />
                        ))}
                    </div>
                    
                    <div className="mt-5 grid grid-cols-2 gap-3">
                        <div className="rounded-2xl bg-[var(--surface-soft)] p-4">
                            <Database className="mb-3 text-[var(--olive)]" size={20} />
                            <p className="text-sm font-semibold">Data work</p>
                            <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                                SQL, BI, Azure, dashboards y validación.
                            </p>
                        </div>
                        
                        <div className="rounded-2xl bg-[var(--surface-soft)] p-4">
                            <Bot className="mb-3 text-[var(--warm)]" size={20} />
                            <p className="text-sm font-semibold">AI systems</p>
                            <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                                Automatización, asistentes y contexto técnico.
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-5 rounded-2xl border border-dashed border-[var(--accent)] bg-[rgba(219,231,232,0.42)] p-4">
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                            Próxima línea
                        </p>
                        
                        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                            Visual Lab queda como espacio futuro para foto, video, drones y
                            documentación visual de proyectos.
                        </p>
                    </div>
                </div>
            </div>
        </FadeIn>
    </section>
    );
}