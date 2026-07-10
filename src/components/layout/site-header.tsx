"use client";

import { navigationItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function SiteHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    function closeMenu() {
        setIsOpen(false);
    }

    return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(246,241,232,0.78)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <Link href="/" onClick={closeMenu} className="group flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--foreground)] bg-[var(--foreground)] text-sm font-semibold text-[var(--background)]">
                    {profile.initials}
                </span>

                <div className="leading-tight">
                    <p className="text-sm font-semibold tracking-tight">
                        {profile.brand}
                    </p>
                    <p className="text-xs text-[var(--muted)]">
                        {profile.shortRole}
                    </p>
                </div>
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
                {navigationItems.map((item) => {
                    const isActive = item.href === "/work"
                        ? pathname.startsWith("/work")
                        : pathname === "/" && item.href.startsWith("/#");

                    return(
                        <Link key={item.href}
                        href={item.href}
                        className={`text-sm transition hover:text-[var(--foreground)] ${
                            isActive
                                ? "text-[var(--foreground)]"
                                : "text-[var(--muted)]"
                        }`}>
                            {item.label}
                        </Link>
                    );
                })}

                <Link
                href="/cv"
                className="rounded-full bg-[var(--foreground)] px-5 py-2 text-sm font-medium text-[#F6F1E8] transition hover:scale-[1.02] hover:opacity-90"
                >
                    CV
                </Link>
            </nav>

            <button type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] md:hidden"
            aria-label="Abrir menú">
                {isOpen ? <X size={18}/> : <Menu size={18}/>}
            </button>
        </div>

        {isOpen ? (
            <div className="border-t border-[var(--border)] bg-[var(--background)] px-5 py-4 md:hidden">
                <nav className="mx-auto grid max-w-6xl gap-2">
                    {navigationItems.map((item) => (
                        <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
                        >
                            {item.label}
                        </Link>
                    ))}
                    
                    <Link
                    href="/cv"
                    onClick={closeMenu}
                    className="rounded-2xl bg-[var(--foreground)] px-4 py-3 text-center text-sm font-medium text-[#F6F1E8]"
                    >
                        Ver CV
                    </Link>
                </nav>
            </div>
        ) : null}
    </header>
    );
}