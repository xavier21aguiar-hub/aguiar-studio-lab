"use client";

import {
    skillVaultLinks,
    skillVaultNodes,
    type SkillVaultNode,
} from "@/data/skill-vault";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { Network, Sparkles } from "lucide-react";

export function SkillsSection() {
    const [activeId, setActiveId] = useState("core");
    const [openGroupId, setOpenGroupId] = useState("core");

    const nodeMap = useMemo(() => {
        return new Map(skillVaultNodes.map((node) => [node.id, node]));
    }, []);
    
    const activeNode =
    skillVaultNodes.find((node) => node.id === activeId) ?? skillVaultNodes[0];

    const connectedIds = useMemo(() => {
        const ids = new Set<string>();

        skillVaultLinks.forEach((link) => {
            if (link.source === activeId) ids.add(link.target);
            if (link.target === activeId) ids.add(link.source);
        });
        
        return ids
    }, [activeId]);

    const openGroupConnectedIds = useMemo(() => {
        const ids = new Set<string>();

        skillVaultLinks.forEach((link) => {
            if (link.source === openGroupId) ids.add(link.target);
            if (link.target === openGroupId) ids.add(link.source);
        });
        
        return ids
    }, [openGroupId]);
    
    const relatedNodes = Array.from(openGroupConnectedIds)
    .map((id) => nodeMap.get(id))
    .filter(Boolean) as SkillVaultNode[];

    function selectNode(node: SkillVaultNode) {
        setActiveId(node.id);
        
        if (node.type === "core" || node.type === "category") {
            setOpenGroupId(node.id);
        }
    }
    
    return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                    Skills
                </p>
                
                <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                    Skill Vault
                </h2>
            </div>
            
            <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
                Un mapa visual de tecnologías, herramientas y áreas de crecimiento.
                Pasa el mouse sobre cada nodo para ver cómo se conecta con el resto
                del stack.
            </p>
        </div>
        
        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[0_24px_80px_rgba(28,28,28,0.06)]">
                <div className="relative mx-auto aspect-[1000/620] w-full max-w-[920px] overflow-hidden rounded-[1.5rem] border border-[rgba(221,212,197,0.72)] bg-[#F4EFE6]"> 
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(38,70,83,0.13),transparent_24rem),radial-gradient(circle_at_18%_22%,rgba(199,109,58,0.09),transparent_18rem),radial-gradient(circle_at_82%_70%,rgba(85,107,95,0.10),transparent_20rem)]" />
                    <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(38,70,83,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(38,70,83,0.12)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
                
                    <svg
                    viewBox="0 0 1000 620"
                    className="absolute inset-0 h-full w-full opacity-70"
                    aria-hidden="true"
                    >
                        <defs>
                            <filter id="skill-vault-link-glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        {skillVaultLinks.map((link) => {
                            const source = nodeMap.get(link.source);
                            const target = nodeMap.get(link.target);
                        
                            if (!source || !target) return null;
                            
                            const isActive =
                            link.source === activeId ||
                            link.target === activeId ||
                            connectedIds.has(link.source) ||
                            connectedIds.has(link.target);
                        
                            return (
                                <g key={`${link.source}-${link.target}`}>
                                    <motion.line
                                    x1={source.x}
                                    y1={source.y}
                                    x2={target.x}
                                    y2={target.y}
                                    stroke={isActive ? "#264653" : "#CFC6B7"}
                                    strokeWidth={isActive ? 1.4 : 0.75}
                                    strokeOpacity={isActive ? 0.32 : 0.16}
                                    strokeLinecap="round"
                                    filter={isActive ? "url(#skill-vault-link-glow)" : undefined}
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    />
                                    <motion.line
                                    x1={source.x}
                                    y1={source.y}
                                    x2={target.x}
                                    y2={target.y}
                                    stroke={isActive ? "#264653" : "#F4EFE6"}
                                    strokeWidth={isActive ? 0.9 : 0.5}
                                    strokeOpacity={isActive ? 0.24 : 0.12}
                                    strokeLinecap="round"
                                    strokeDasharray="1 16"
                                    animate={{ strokeDashoffset: [0, -34] }}
                                    transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                                    />
                                </g>
                            );
                        })}
                    </svg>
                
                    {skillVaultNodes.map((node) => {
                        const isActive = node.id === activeId;
                        const isConnected = connectedIds.has(node.id);
                        const isDimmed = activeId !== "core" && !isActive && !isConnected;
                    
                        return (
                            <div
                            key={node.id}
                            className="absolute"
                            style={{
                                left: `${node.x / 10}%`,
                                top: `${node.y / 6.2}%`,
                                transform: "translate(-50%, -50%)",
                            }}
                            >
                                <motion.div
                                animate={getNodeFloatAnimation(node)}
                                transition={getNodeFloatTransition(node)}
                                >
                                    <motion.button
                                    type="button"
                                    onMouseEnter={() => selectNode(node)}
                                    onFocus={() => selectNode(node)}
                                    onClick={() => selectNode(node)}
                                    whileHover={{ scale: 1.06 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={getNodeClassName(node, isActive, isConnected, isDimmed)}
                                    >
                                        {node.label}
                                    </motion.button>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <aside className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6">
                <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] pb-5">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                            Selected node
                        </p>
                    
                        <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">
                            {activeNode.label}
                        </h3>
                    </div>
                
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                        <Network size={20} />
                    </span>
                </div>
            
                <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                    {activeNode.description}
                </p>
            
                <div className="mt-6 flex flex-wrap gap-2">
                    {activeNode.tags.map((tag) => (
                        <span
                        key={tag}
                        className="rounded-full bg-[var(--surface-soft)] px-3 py-1 text-xs text-[var(--foreground)]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-8">
                    <p className="flex items-center gap-2 text-sm font-medium text-[var(--foreground)]">
                        <Sparkles size={16} className="text-[var(--warm)]" />
                        Conexiones directas
                    </p>
                
                    <div className="mt-4 grid gap-2">
                        {relatedNodes.length > 0 ? (
                            relatedNodes.map((node) => (
                                <motion.button
                                key={node.id}
                                type="button"
                                onMouseEnter={() => selectNode(node)}
                                onFocus={() => selectNode(node)}
                                onClick={() => selectNode(node)}
                                animate={
                                    activeId === node.id
                                    ? { scale: [1, 1.025, 1], borderColor: "rgba(28,28,28,0.78)" }
                                    : { scale: 1, borderColor: "rgba(221,212,197,1)" }
                                }
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className={`rounded-2xl border bg-[var(--background)] px-4 py-3 text-left text-sm transition hover:border-[var(--foreground)] hover:text-[var(--foreground)] ${
                                    activeId === node.id
                                    ? "text-[var(--foreground)] shadow-[0_10px_26px_rgba(28,28,28,0.08)]"
                                    : "text-[var(--muted)]"
                                }`}
                                >
                                    {node.label}
                                </motion.button>
                            ))
                        ) : (
                            <p className="text-sm text-[var(--muted)]">
                                Este nodo no tiene conexiones directas.
                            </p>
                        )}
                    </div>
                </div>
            </aside>
        </div>

        <div className="mt-5 rounded-[1.5rem] border border-dashed border-[var(--accent)] bg-[rgba(219,231,232,0.35)] p-6">
            <p className="text-sm font-medium text-[var(--accent)]">
                Nota de criterio
            </p>
            
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)]">
                Este mapa no busca aparentar dominio absoluto de todo. Representa las
                herramientas que estoy usando, conectando y fortaleciendo mientras
                construyo proyectos reales.
            </p>
        </div>
    </section>
    );
}

function getNodeFloatAnimation(node: SkillVaultNode) {
    const driftX = node.type === "core" ? 4 : node.type === "category" ? 6 : 8;
    const driftY = node.type === "core" ? 5 : node.type === "category" ? 7 : 9;
    const direction = node.id.length % 2 === 0 ? 1 : -1;
    
    return {
        x: [0, direction * driftX, 0, -direction * (driftX * 0.7), 0],
        y: [0, -direction * (driftY * 0.6), direction * driftY, 0],
    };
}

function getNodeFloatTransition(node: SkillVaultNode) {
    const duration = node.type === "core" ? 9 : node.type === "category" ? 7.5 : 6.5;
    const delay = (node.id.charCodeAt(0) % 6) * 0.25;
    
    return {
        duration,
        delay,
        repeat: Infinity,
        repeatType: "mirror" as const,
        ease: "easeInOut" as const,
    };
}

function getNodeClassName(
    node: SkillVaultNode,
    isActive: boolean,
    isConnected: boolean,
    isDimmed: boolean
) {
    const base = "border text-sm font-medium backdrop-blur-md transition shadow-[0_16px_36px_rgba(28,28,28,0.10)]";
    const visibility = isDimmed ? "opacity-35" : "opacity-100";
    
    if (node.type === "core") {
        return `${base} ${visibility} flex h-28 w-28 items-center justify-center rounded-full border-[rgba(28,28,28,0.84)] bg-[rgba(28,28,28,0.94)] px-4 text-center text-[#F6F1E8] shadow-[0_18px_54px_rgba(28,28,28,0.22)]`;
    }
    
    if (node.type === "category") {
        return `${base} ${visibility} flex h-20 w-20 items-center justify-center rounded-full ${
            isActive || isConnected
            ? "border-[rgba(38,70,83,0.55)] bg-[rgba(219,231,232,0.82)] text-[var(--accent)] shadow-[0_0_32px_rgba(38,70,83,0.16)]"
            : "border-[rgba(221,212,197,0.78)] bg-[rgba(255,250,241,0.74)] text-[var(--foreground)]"
        }`;
    }
    
    return `${base} ${visibility} rounded-full px-4 py-2 ${
        isActive || isConnected
        ? "border-[rgba(28,28,28,0.70)] bg-[rgba(28,28,28,0.86)] text-[#F6F1E8] shadow-[0_0_24px_rgba(28,28,28,0.16)]"
        : "border-[rgba(221,212,197,0.82)] bg-[rgba(255,250,241,0.70)] text-[var(--muted)]"
    }`;
}
