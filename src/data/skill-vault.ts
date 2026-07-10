export type SkillVaultNode = {
    id: string;
    label: string;
    type: "core" | "category" | "skill";
    x: number;
    y: number;
    description: string;
    tags: string[];
};

export type SkillVaultLink = {
    source: string;
    target: string;
};

export const skillVaultNodes: SkillVaultNode[] = [
    {
        id: "core",
        label: "Aguiar Lab",
        type: "core",
        x: 500,
        y: 320,
        description:
        "Centro del portafolio: desarrollo, datos, automatización, diseño y documentación técnica.",
        tags: ["Portfolio", "Projects", "Learning"],
    },
    {
        id: "frontend",
        label: "Frontend",
        type: "category",
        x: 270,
        y: 160,
        description:
        "Interfaces web, componentes, layouts responsivos y experiencia visual.",
        tags: ["UI", "Web", "React"],
    },
    {
        id: "backend",
        label: "Backend",
        type: "category",
        x: 730,
        y: 160,
        description:
        "APIs, lógica de servidor, estructura de proyectos y persistencia de datos.",
        tags: ["APIs", "Server", "FastAPI"],
    },
    {
        id: "data",
        label: "Data & BI",
        type: "category",
        x: 735,
        y: 455,
        description:
        "Bases de datos, análisis, validación de información, dashboards y reporting.",
        tags: ["SQL", "BI", "Dashboards"],
    },
    {
        id: "tools",
        label: "Tools",
        type: "category",
        x: 270,
        y: 455,
        description:
        "Herramientas de desarrollo, pruebas, control de versiones y flujo de trabajo.",
        tags: ["Git", "Postman", "VS Code"],
    },
    {
        id: "design",
        label: "Design",
        type: "category",
        x: 500,
        y: 90,
        description:
        "Diseño visual, composición, sistemas de interfaz y presentación de proyectos.",
        tags: ["UI Design", "Visual", "Systems"],
    },

    {
        id: "react",
        label: "React",
        type: "skill",
        x: 140,
        y: 95,
        description:
        "Construcción de interfaces mediante componentes reutilizables.",
        tags: ["Frontend", "Components"],
    },
    {
        id: "next",
        label: "Next.js",
        type: "skill",
        x: 245,
        y: 65,
        description:
        "Framework usado para construir este portafolio con rutas, layout y estructura profesional.",
        tags: ["Frontend", "Routing"],
    },
    {
        id: "tailwind",
        label: "Tailwind",
        type: "skill",
        x: 355,
        y: 105,
        description:
        "Sistema de estilos utilitario para construir interfaces limpias y responsivas.",
        tags: ["CSS", "Design System"],
    },
    {
        id: "typescript",
        label: "TypeScript",
        type: "skill",
        x: 235,
        y: 250,
        description:
        "Tipado estático para mejorar claridad, mantenimiento y seguridad del código.",
        tags: ["Frontend", "Types"],
    },
    
    {
        id: "python",
        label: "Python",
        type: "skill",
        x: 620,
        y: 80,
        description:
        "Lenguaje usado en dashboards, automatización, análisis de datos y backend.",
        tags: ["Backend", "Data"],
    },
    {
        id: "fastapi",
        label: "FastAPI",
        type: "skill",
        x: 775,
        y: 75,
        description:
        "Framework para construir APIs rápidas y organizadas en proyectos como Jarvis y Synapse.",
        tags: ["Backend", "APIs"],
    },
    {
        id: "sqlite",
        label: "SQLite",
        type: "skill",
        x: 855,
        y: 180,
        description:
        "Base de datos local útil para MVPs, prototipos y herramientas personales.",
        tags: ["Database", "Local"],
    },
    {
        id: "rest",
        label: "REST APIs",
        type: "skill",
        x: 665,
        y: 255,
        description:
        "Diseño y consumo de endpoints para conectar frontend, backend y servicios externos.",
        tags: ["Backend", "Postman"],
    },
    
    {
        id: "sql",
        label: "SQL",
        type: "skill",
        x: 625,
        y: 440,
        description:
        "Consultas, validación de columnas, revisión de modelos y análisis de datos.",
        tags: ["Data", "Queries"],
    },
    {
        id: "pandas",
        label: "Pandas",
        type: "skill",
        x: 730,
        y: 560,
        description:
        "Manipulación y limpieza de datos en proyectos de análisis y dashboards.",
        tags: ["Python", "Data"],
    }, 
    {
        id: "powerbi",
        label: "Power BI",
        type: "skill",
        x: 875,
        y: 465,
        description:
        "Visualización de información, reporting y lectura de indicadores.",
        tags: ["BI", "Dashboard"],
    },
    {
        id: "fabric",
        label: "Fabric",
        type: "skill",
        x: 810,
        y: 350,
        description:
        "Exploración de procesos de datos, notebooks, pipelines y optimización en entorno Microsoft.",
        tags: ["Cloud", "Data"],
    },
    
    {
        id: "git",
        label: "Git",
        type: "skill",
        x: 125,
        y: 420,
        description:
        "Control de versiones para organizar avances, cambios y ramas de proyectos.",
        tags: ["Version Control"],
    },
    {
        id: "postman",
        label: "Postman",
        type: "skill",
        x: 215,
        y: 560,
        description:
        "Pruebas de APIs, generación de tokens, validación de respuestas y debugging.",
        tags: ["APIs", "Testing"],
    },
    {
        id: "azure",
        label: "Azure",
        type: "skill",
        x: 365,
        y: 540,
        description:
        "Herramientas cloud vistas en contexto práctico para datos, automatización y servicios.",
        tags: ["Cloud", "Microsoft"],
    },
    {
        id: "vscode",
        label: "VS Code",
        type: "skill",
        x: 355,
        y: 365,
        description:
        "Entorno principal de desarrollo para proyectos web, Python, APIs y documentación.",
        tags: ["Editor", "Workflow"],
    },
    
    {
        id: "ui-design",
        label: "UI Design",
        type: "skill",
        x: 415,
        y: 25,
        description:
        "Diseño de interfaces limpias, jerarquía visual, composición y experiencia de usuario.",
        tags: ["Design", "Interface"],
    },
    {
        id: "docs",
        label: "Documentation",
        type: "skill",
        x: 585,
        y: 30,
        description:
        "Documentación de errores, decisiones técnicas, procesos y aprendizajes.",
        tags: ["Notes", "Learning"],
    },
    {
        id: "systems",
        label: "Design Systems",
        type: "skill",
        x: 500,
        y: 205,
        description:
        "Construcción de componentes, patrones visuales y consistencia de interfaz.",
        tags: ["UI", "Components"],
    },
];

export const skillVaultLinks: SkillVaultLink[] = [
    { source: "core", target: "frontend" },
    { source: "core", target: "backend" },
    { source: "core", target: "data" },
    { source: "core", target: "tools" },
    { source: "core", target: "design" },
    
    { source: "frontend", target: "react" },
    { source: "frontend", target: "next" },
    { source: "frontend", target: "tailwind" },
    { source: "frontend", target: "typescript" },
    
    { source: "backend", target: "python" },
    { source: "backend", target: "fastapi" },
    { source: "backend", target: "sqlite" },
    { source: "backend", target: "rest" },

    { source: "data", target: "sql" },
    { source: "data", target: "pandas" },
    { source: "data", target: "powerbi" },
    { source: "data", target: "fabric" },

    { source: "tools", target: "git" },
    { source: "tools", target: "postman" },
    { source: "tools", target: "azure" },
    { source: "tools", target: "vscode" },

    { source: "design", target: "ui-design" },
    { source: "design", target: "docs" },
    { source: "design", target: "systems" },
];