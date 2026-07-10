"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

type ProjectCardProps = {
    title: string;
    slug: string;
    category: string;
    status: string;
    description: string;
    stack: string[];
};

export function ProjectCard({
    title,
    slug,
    category,
    status,
    description,
    stack,
}: ProjectCardProps) {
    return (
        <motion.article 
        initial={{opacity: 0, y: 18}}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -6 }}
        className="group 
        rounded-[1.5rem] 
        border 
        border-[var(--border)] 
        bg-[var(--surface)] 
        p-6 
        transition 
        hover:shadow-[0_20px_60px_rgba(28,28,28,0.08)]">
            <Link href={`/work/${slug}`} className="block">
                <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm text-[var(--muted)]">
                            {category}
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
                            {title}
                        </h3>
                    </div>

                    <span className="flex 
                    h-10 
                    w-10 
                    shrink-0 
                    items-center 
                    justify-center 
                    rounded-full 
                    border 
                    border-[var(--border)] 
                    text-[var(--muted)] 
                    transition 
                    group-hover:border-[var(--foreground)] 
                    group-hover:bg-[var(--foreground)] 
                    group-hover:text-[var(--background)]">
                        <ArrowUpRight size={18}/>
                    </span>
                </div>

                <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">
                    {status}
                </span>

                <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
                    {description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                    {stack.map((tech) => (
                        <span
                        key={tech}
                        className="rounded-full bg-[var(--surface-soft)] px-3 py-1 text-xs text-[var(--foreground)]">
                            {tech}
                        </span>
                    ))}
                </div>
            </Link>
        </motion.article>
    );
}