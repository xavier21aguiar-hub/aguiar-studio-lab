import { profile } from "@/data/profile";
import { socialLinks } from "@/data/navigation";
import { ArrowUpRight, FileText, Mail, MapPin, Sparkles } from "lucide-react";

export function SiteFooter() {
    return (
    <footer id="contact" className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="grid gap-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_24px_80px_rgba(28,28,28,0.06)] md:grid-cols-[1.1fr_0.9fr] md:p-10">
                <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--warm)]">
                        Contact
                    </p>
                    
                    <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
                        Construyamos algo con intención.
                    </h2>
                    
                    <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)]">
                        {profile.description}
                    </p>
                    
                    <div className="mt-8 grid gap-3">
                        <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--olive)]">
                                <MapPin size={18} />
                            </span>
                            {profile.location}
                        </div>
                        
                        <a
                        href={`mailto:${profile.email}`}
                        className="flex items-center gap-3 text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
                        >
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--warm)]">
                                <Mail size={18} />
                            </span>
                            {profile.email}
                        </a>
                    </div>
                </div>
                
                <aside className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--background)] p-5">
                    <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] pb-5">
                        <div>
                            <p className="text-sm font-semibold">{profile.name}</p>
                            <p className="mt-1 text-xs text-[var(--muted)]">
                                {profile.role}
                            </p>
                        </div>
                        
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                            <Sparkles size={18} />
                        </span>
                    </div>
                    
                    <p className="mt-5 rounded-2xl bg-[var(--surface-soft)] p-4 text-sm leading-6 text-[var(--muted)]">
                        {profile.availability}
                    </p>
                    
                    <div className="mt-5 grid gap-3">
                        {socialLinks.map((link) => (
                            <a
                            key={link.href}
                            href={link.href}
                            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                            rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                            className="group flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--muted)] transition hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
                            >
                                {link.label}
                                
                                <ArrowUpRight
                                size={16}
                                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </a>
                        ))}
                        
                        <a
                        href="/cv"
                        className="flex items-center justify-center gap-2 rounded-2xl bg-[var(--foreground)] px-4 py-3 text-center text-sm font-medium text-[#F6F1E8] transition hover:scale-[1.01] hover:opacity-90"
                        >
                            Ver CV
                        </a>
                    </div>
                </aside>
            </div>
            
            <div className="mt-8 flex flex-col gap-3 text-xs text-[var(--muted)] md:flex-row md:items-center md:justify-between">
                <p>
                    © 2026 {profile.brand}. Diseñado y construido como laboratorio
                    personal de desarrollo, datos y diseño.
                </p>
                <p>Built with Next.js, TypeScript and Tailwind CSS.</p>
            </div>
        </div>
    </footer>
    );
}