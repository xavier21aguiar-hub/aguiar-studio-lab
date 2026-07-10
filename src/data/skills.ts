export type SkillGroup = {
    title: string;
    description: string;
    skills: string[];
};

export const skillGroups: SkillGroup[] = [
    {
        title: "Front-end",
        description: 
        "Construcción de interfaces web modernas, responsivas y orientadas a experiencia de usuario.",
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
        title: "Back-end",
        description:
        "APIs, lógica de servidor, estructura de proyectos y conexión con bases de datos.",
        skills: ["Python", "FastAPI", "Node.js", "REST APIs", "SQLite"],
    },
    {
        title: "Data & BI",
        description:
        "Trabajo con datos, consultas, validación de información, dashboards y análisis.",
        skills: ["SQL", "Pandas", "Power BI", "Streamlit", "Data Validation", "Dashboards"],
    },
    {
        title: "Cloud & Tools",
        description:
        "Herramientas usadas en entornos reales de desarrollo, análisis y colaboración.",
        skills: ["Azure", "Microsoft Fabric", "Postman", "Git", "GitHub", "VS Code"],
    },
    {
        title: "Currently Learning",
        description:
        "Tecnologías y áreas que estoy fortaleciendo para construir proyectos más completos.",
        skills: ["UI Design", "System Design básico", "Automation", "AI Assistants", "Data Modeling"],
    },
] 