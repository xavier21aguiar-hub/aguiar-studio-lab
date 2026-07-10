import { span } from "motion/react-client";
import type { ReactNode } from "react";

type AreaCardProps = {
    title: string;
    status: string;
    description: string;
    icon?: ReactNode;
};

export function AreaCard({ title, status, description, icon }: AreaCardProps) {
    return (
        <div className="group
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--surface)]
        p-4
        transition 
        hover:-translate-y-0.5 
        hover:border-[var(--foreground)]">
            <div className="flex
            items-center
            justify-between
            gap-4">

                <div className="flex
                items-center
                gap-3">
                    {icon ? (
                        <span className="flex
                        h-9
                        w-9
                        items-center
                        justify-center 
                        rounded-full 
                        bg-[var(--surface-soft)] 
                        text-[var(--accent)] 
                        transition 
                        group-hover:bg-[var(--foreground)] 
                        group-hover:text-[var(--background)]">
                            {icon}
                        </span>
                    ) : null }

                    <h2 className="font-semibold">{title}</h2>
                </div>

                <span className="
                rounded-full
                border
                border-[var(--border)]
                px-3
                py-1
                text-xs
                text-[var(--muted)]">
                    {status}
                </span>
            </div>

            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                {description}
            </p>
        </div>
    );
}