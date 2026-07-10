import { profile } from "@/data/profile";
import { label } from "motion/react-client";

export const navigationItems = [
    {
        label: "Work",
        href: "/work",
    },
    {
        label: "Skills",
        href: "/#skills",
    },
    {
        label: "Design",
        href: "/#design",
    },
    {
        label: "Notes",
        href: "/#notes",
    },
    {
        label: "Visual Lab",
        href: "/#visual-lab",
    },
    {
        label: "Contact",
        href: "#contact",
    },
];

export const socialLinks = [
    {
        label: "GitHub",
        href: profile.github,
    },
    {
        label: "LinkedIn",
        href: profile.linkedin,
    },
    {
        label: "Email",
        href: `mailto:${profile.email}`,
    },
];