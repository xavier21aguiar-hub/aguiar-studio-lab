export type ProjectLink = {
    label: string;
    href: string;
    type: "repo" | "demo" | "case-study" | "document";
};

export type ProjectMetric = {
    label: string;
    value: string;
};

export type ProjectScreenshot = {
    title: string;
    description: string;
};

export type ProjectCover = {
    label: string;
    title: string;
    description: string;
};

export type Project = {
    title: string;
    slug: string;
    category: string;
    status: string;
    description: string;
    stack: string[];
    year: string;
    role: string;
    featured?: boolean;
    cover: ProjectCover;
    highlights: string[];
    metrics: ProjectMetric[];
    links: ProjectLink[];
    screenshots: ProjectScreenshot[];
    problem: string;
    solution: string;
    process: string[];
    challenges: string[];
    learnings: string[];
    nextSteps: string[];
};

export const projects: Project[] = [
    {
        title: "Tequila Dashboard",
        slug: "tequila-dashboard",
        category: "Data Product",
        status: "MVP funcional",
        year: "2026",
        role: "Developer / Data Analyst",
        description: 
        "Dashboard interactivo para análisis, edición y visualización de precios usando Python, Streamlit y Pandas.",
        stack: ["Python", "Streamlit", "Pandas"],
        cover: {
            label: "Data Product",
            title: "Interactive pricing dashboard",
            description:
            "Una interfaz para convertir datos de precios en lectura clara, edición controlada y análisis rápido.",
        },
        highlights: [
            "Dashboard funcional construido con Streamlit.",
            "Edición de datos desde interfaz.",
            "Validación de errores relacionados con tipos de columnas.",
            "Base para análisis visual de precios.",
        ],
        metrics: [
            {
                label: "Estado",
                value: "MVP",
            },
            {
                label: "Stack principal",
                value: "Python",
            },
            {
                label: "Tipo",
                value: "Dashboard",
            },
        ],
        links: [],
        screenshots: [
            {
                title: "Vista general del dashboard",
                description:
                "Espacio reservado para una captura donde se muestren KPIs, filtros y tabla principal.",
            },
            {
                title: "Tabla editable",
                description:
                "Espacio reservado para mostrar la sección donde se editan productos o precios.",
            },
            {
                title: "Debugging visual",
                description:
                "Espacio reservado para documentar el error de tipos de datos y su solución.",
            },
        ],
        problem:
        "Se necesitaba una forma práctica de visualizar, editar y analizar información de productos y precios sin depender de archivos sueltos o revisiones manuales.",
        solution:
        "Construí un dashboard interactivo con Streamlit para consultar información, editar datos, mostrar métricas y mejorar la lectura de precios mediante una interfaz clara.",
        process: [
            "Organización inicial del dataset.",
            "Construcción de vistas interactivas en Streamlit.",
            "Configuración de tablas editables.",
            "Validación de errores relacionados con tipos de datos.",
            "Ajustes visuales para mejorar la experiencia de uso.",
        ],
        challenges: [
            "Compatibilidad entre tipos de datos de Pandas y columnas editables de Streamlit.",
            "Evitar que la interfaz se rompiera al editar información.",
            "Mantener una estructura clara en un archivo que creció rápidamente.",
        ],
        learnings: [
            "Validar tipos de datos antes de renderizar componentes editables.",
            "Separar mejor lógica de datos y lógica visual.",
            "Diseñar dashboards pensando en usuarios que necesitan actuar rápido.",
        ],
        nextSteps: [
            "Separar el proyecto por módulos.",
            "Agregar persistencia más sólida.",
            "Mejorar filtros, gráficas y diseño responsive.",
        ],
    },
    {
        title: "CIMMYT Data Work",
        slug: "cimmyt-data-work",
        category: "Data & BI",
        status: "En progreso",
        year: "2026",
        role: "Data / BI Support",
        description: 
        "Trabajo práctico con bases de datos, SQL, Azure, Power BI y validación de fuentes de información.",
        stack: ["SQL", "Azure", "Power BI", "Fabric"],
        cover: {
            label: "Data & BI",
            title: "Data validation and BI support",
            description:
            "Trabajo aplicado con modelos de datos, validación de fuentes, consultas SQL y documentación técnica.",
        },
        highlights: [
            "Validación de estructuras de tablas y vistas.",
            "Mapeo de fuentes de información.",
            "Apoyo en consultas SQL y análisis de columnas.",
            "Documentación de datos claros, pendientes y no validados.",
        ],
        metrics: [
            {
                label: "Área",
                value: "Data",
            },
            {
                label: "Stack",
                value: "SQL / BI",
            },
            {
                label: "Contexto",
                value: "Servicio social",
            },
        ],
        links: [],
        screenshots: [
            {
                title: "Modelo de datos anonimizado",
                description:
                "Espacio reservado para una representación visual sin datos sensibles.",
            },
            {
                title: "Validación de fuentes",
                description:
                "Espacio reservado para mostrar el proceso de check, mapeo y estado de validación.",
            },
            {
                title: "Consultas SQL",
                description:
                "Espacio reservado para explicar consultas o revisiones técnicas de manera segura.",
            },
        ],
        problem:
        "Durante el servicio social surgió la necesidad de validar fuentes de datos, entender modelos de tablas/vistas y apoyar procesos de análisis para reporting y toma de decisiones.",
        solution:
        "Apoyé en revisión de estructuras SQL, validación de columnas, mapeo de información, exploración de modelos de datos y documentación de fuentes para procesos de BI.",
        process: [
            "Revisión de tablas, vistas y columnas disponibles.",
            "Validación de campos y relaciones entre fuentes.",
            "Mapeo de información clara y no clara.",
            "Apoyo en consultas SQL y revisión de errores.",
            "Documentación del estado de validación de fuentes.",
        ],
        challenges: [
            "Entender modelos de datos existentes sin conocer todo el contexto de negocio.",
            "Diferenciar información validada de información pendiente.",
            "Traducir requerimientos funcionales a consultas y revisiones técnicas.",
        ],
        learnings: [
            "Leer estructuras de bases de datos con criterio.",
            "Documentar fuentes de información de forma más profesional.",
            "Preguntar mejor cuando una regla de negocio no está clara.",
        ],
        nextSteps: [
            "Profundizar en modelado dimensional.",
            "Mejorar consultas SQL para análisis.",
            "Aprender más sobre pipelines y optimización en Fabric.",
        ],
    },
    {
        title: "Jarvis PC Assistant",
        slug: "jarvis-pc-assistant",
        category: "Automation / AI",
        status: "MVP técnico",
        year: "2026",
        role: "Fullstack Developer",
        description:
        "Asistente local para organizar espacios de trabajo, guardar notas de sesión y preparar contexto técnico.",
        stack: ["Python", "FastAPI", "SQLite", "React"],
        cover: {
            label: "Automation / AI",
            title: "Local assistant for technical context",
            description:
            "Una base para organizar workspaces, notas de sesión y contexto de proyectos desde una app local.",
        },
        highlights: [
            "Backend inicial con FastAPI.",
            "Modelo de workspaces funcional.",
            "Base para notas de sesión.",
            "Preparación de contexto técnico por proyecto.",
        ],
        metrics: [
            {
                label: "Tipo",
                value: "Assistant",
            },
            {
                label: "Backend",
                value: "FastAPI",
            },
            {
                label: "Estado",
                value: "MVP",
            },
        ],
        links: [],
        screenshots: [
            {
                title: "Swagger / API",
                description:
                "Espacio reservado para mostrar endpoints funcionales del backend.",
            },
            {
                title: "Workspaces",
                description:
                "Espacio reservado para mostrar creación y consulta de espacios de trabajo.",
            },
            {
                title: "Session Notes",
                description:
                "Espacio reservado para documentar notas de sesión y contexto.",
            },
        ],
        problem:
        "Al trabajar en varios proyectos, se vuelve difícil recordar pendientes, contexto técnico, comandos, decisiones y avances de sesiones anteriores.",
        solution:
        "Desarrollé la base de un asistente local con backend en FastAPI para manejar workspaces, notas de sesión y preparación de contexto para continuar proyectos.",
        process: [
            "Definición del MVP inicial.",
            "Creación del backend con FastAPI.",
            "Configuración de base de datos local.",
            "Desarrollo de endpoints para workspaces.",
            "Inicio de módulos para session notes y contexto.",
        ],
        challenges: [
            "Diseñar una arquitectura simple sin sobrecomplicar el MVP.",
            "Separar rutas, modelos, servicios y base de datos.",
            "Pensar en una herramienta útil para uso personal real.",
        ],
        learnings: [
            "Crear APIs organizadas con FastAPI.",
            "Trabajar con estructura backend más profesional.",
            "Diseñar MVPs enfocados en resolver un problema concreto.",
        ],
        nextSteps: [
            "Terminar endpoints de session notes.",
            "Crear motor básico de contexto.",
            "Conectar frontend más completo.",
            "Agregar búsqueda y resumen por workspace.",
        ],
    },
    {
        title: "Synapse",
        slug: "synapse",
        category: "Productivity / Knowledge System",
        status: "MVP inicial",
        year: "2026",
        role: "Product / Fullstack Developer",
        featured: true,
        description:
        "Aplicación tipo workspace inspirada en Notion para organizar proyectos, notas de sesión, contexto técnico y seguimiento de aprendizaje.",
        stack: ["Python", "FastAPI", "SQLite", "React", "Vite"],
        cover: {
            label: "Knowledge System",
            title: "Workspace for projects and learning",
            description:
            "Una herramienta personal para centralizar proyectos, notas, sesiones, pendientes y contexto técnico.",
        },
        highlights: [
            "Concepto tipo Notion adaptado al aprendizaje técnico.",
            "Organización por workspaces.",
            "Base para notas y contexto.",
            "Enfoque en seguimiento real de proyectos.",
        ],
        metrics: [
            {
                label: "Tipo",
                value: "Workspace",
            },
            {
                label: "Estado",
                value: "Inicial",
            },
            {
                label: "Enfoque",
                value: "Productividad",
            },
        ],
        links: [ ],
        screenshots: [
            {
                title: "Vista de workspaces",
                description:
                "Espacio reservado para mostrar cómo se organizarán proyectos y áreas.",
            },
            {
                title: "Notas de sesión",
                description:
                "Espacio reservado para mostrar documentación de sesiones de trabajo.",
            },
            {
                title: "Context engine",
                description:
                "Espacio reservado para explicar el futuro motor de contexto.",
            },
        ],
        problem:
        "La información de aprendizaje y proyectos suele quedar dispersa entre chats, carpetas, notas, capturas, errores y pendientes.",
        solution:
        "Planteé y empecé una aplicación tipo workspace para centralizar proyectos, notas, sesiones y contexto técnico de forma más ordenada.",
        process: [
            "Definición de la idea como herramienta tipo Notion enfocada en aprendizaje técnico.",
            "Diseño inicial de workspaces.",
            "Construcción de base backend.",
            "Planeación de notas de sesión.",
            "Preparación para un motor de contexto básico.",
        ],
        challenges: [
            "Convertir una idea amplia en un MVP manejable.",
            "Evitar que el proyecto creciera demasiado antes de tener una base funcional.",
            "Diseñar una experiencia útil sin copiar directamente Notion.",
        ],
        learnings: [
            "Reducir una idea grande a módulos concretos.",
            "Pensar en producto además de código.",
            "Diseñar sistemas para organizar información y no solo almacenarla.",
        ],
        nextSteps: [
            "Mejorar la interfaz de workspaces.",
            "Agregar notas por proyecto.",
            "Crear resumen automático de contexto.",
            "Preparar una vista tipo dashboard personal.",
        ],
    },
    {
        title: "Fresh Code",
        slug: "fresh-code",
        category: "Web / E-commerce",
        status: "Rebuil en progreso",
        year: "2026",
        role: "Frontend / Product Developer / Marketing",
        description:
        "Proyecto web tipo tienda digital construido originalmente con HTML, CSS, JavaScript y Firebase, actualmente en proceso de evolución hacia una versión más moderna, rápida y escalable.",
        stack: ["HTML", "CSS", "JavaScript", "Firebase", "Next.js", "TypeScript", "Tailwind CSS"],
        cover: {
            label: "Web Product",
            title: "From classic web to modern storefront",
            description:
            "Freh Code representa la evolución de una tienda web inicial hacia una experiencia más profesional con mejor estructura, rendimiento y administración.",
        },
        highlights: [
            "Proyecto original construido con HTML, CSS, JavaScript y Firebase.",
            "Base para autenticación, datos y flujo de tienda digital.",
            "Actualmente pensado para migrar a Next.js y TypeScript.",
            "Enfoque en mejorar rendimiento, estructura, diseño y experiencia de usuario.",
        ],
        metrics: [
            {
                label: "Tipo",
                value: "E-commerce",
            },
            {
                label: "Estado",
                value: "Rebuild",
            },
            {
                label: "Enfoque",
                value: "Web App",
            },
        ],
        links: [
            {
                label: "Ver sitio",
                href: "https://freshcodeoficial.vercel.app/",
                type: "demo",
            },
        ],
        screenshots: [
            {
                title: "Fresh Code V1",
                description:
                "Espacio reservado para mostrar cómo se organizarán proyectos y áreas.",
            },
            {
                title: "Nueva arquitectura",
                description:
                "Espacio reservado para mostrar documentación de sesiones de trabajo.",
            },
            {
                title: "Admin / Storefront",
                description:
                "Espacio reservado para explicar el futuro motor de contexto.",
            },
        ],
        problem:
        "El proyecto original funcionaba como una tienda web, pero al crecer surgió la necesidad de mejorar estructura, rendimiento, manetemiento, diseño y experiencia de administración.",
        solution:
        "La solución es evolucionar Fresh Code desde una base clásica de HTML, CSS, JavaScript y Firebase hacia una versión moderna con Next.js, TypeScript, Tailwind CSS y una arquitectura más clara para frontend, datos y administración.",
        process: [
            "Construcción inicial del sitio con HTML, CSS y JavaScript.",
            "Integración con Firebase para manejar datos y funcionalidades base.",
            "Identificación de limitaciones en estructura, mantenimiento y rendimiento.",
            "Planeación de una migración progresiva hacia Next.js.",
            "Separación futura de componentes, datos, configuración y vistas administrativas.",
        ],
        challenges: [
            "Evitar que la nueva versión sea solo un rediseño visual sin mejora técnica real.",
            "Migrar funcionalidades existentes sin romper la lógica original.",
            "Organizar Firebase y variables de entorno de forma más segura.",
            "Diseñar una experiencia que se sienta más ligera, rápida y profesional."
        ],
        learnings: [
            "Entender la diferencia entre construir una página y construir una aplicación mantenible.",
            "Valorar la separación entre UI, datos, configuración y lógica.",
            "Aprender a evolucionar un proyecto existente en lugar de abandonarlo.",
            "Pensar en rendimiento, escalabilidad y experiencia de usuario desde etapas tempranas.",
        ],
        nextSteps: [
            "Migrar la base del proyecto a Next.js con TypeScript.",
            "Centralizar configuración de Firebase mediante variables de entorno.",
            "Crear componentes reutilizables para productos, navegación, carrito y administración.",
            "Optimizar carga, recursos visuales y estructura responsive.",
            "Preparar una versión más cercana a una app instalable o experiencia web independiente.",
        ],
    },
    {
        title: "My Bonsai App",
        slug: "bonsai-app",
        category: "API / Frontend Experience",
        status: "MVP funcional",
        year: "2026",
        role: "Frontend Developer",
        description:
        "Aplicación interactiva inspirada en el cuidado de un bonsái, integrando consumo de API de clima para mostrar condiciones ambientales y apoyar una experiencia visual basada en datos externos.",
        stack: ["React", "JavaScript", "CSS", "Weather API", "API Consumation", "Frontend State"],
        cover: {
            label: "API Expereance",
            title: "Weather-based bonsai interface",
            description:
            "Una app visual que conecta información climática externa con una experiencia interactiva enfocada en estado, contexto y presentación de datos.",
        },
        highlights: [
            "Consumo de API externa de clima.",
            "Manejo de datos dinámicos desde frontend.",
            "Estados de carga, error y respuesta exitosa.",
            "Interfaz visual inspirada en el cuidado de un bonsái.",
            "Base para futuras recomendaciones según condiciones ambientales.",
        ],
        metrics: [
            {
                label: "Tipo",
                value: "API App",
            },
            {
                label: "Estado",
                value: "MVP",
            },
            {
                label: "Enfoque",
                value: "Clima",
            },
        ],
        links: [
            {
                label: "Ver sitio",
                href: "https://bonsai-frontend-rho.vercel.app/",
                type: "demo",
            },
        ],
        screenshots: [
            {
                title: "Vista principal",
                description:
                "Espacio reservado para mostrar cómo se organizarán proyectos y áreas.",
            },
            {
                title: "Datos de clima",
                description:
                "Espacio reservado para mostrar documentación de sesiones de trabajo.",
            },
            {
                title: "Estados de interfaz",
                description:
                "Espacio reservado para explicar el futuro motor de contexto.",
            },
        ],
        problem:
        "Se necesitaba practicar el consumo de APIs externas en una aplicación real, manejando respuestas dinámicas, errores, estados de carga y presentación clara de datos para el usuario.",
        solution:
        "Construí una aplicación frontend inspirada en el cuidado de un bonsái, donde se consulta una API de clima para obtener información ambiental y mostrarla dentro de una experiencia visual más amigable.",
        process: [
            "Definición de la idea visual alrededor del concepto de un bonsái.","Selección e integración de una API de clima.",
            "Construcción de la interfaz principal.",
            "Creación de lógica para consultar datos externos.",
            "Manejo de estados de carga, error y respuesta correcta.",
            "Presentación de información climática en una UI más clara y visual.",
        ],
        challenges: [
            "Entender la estructura de respuesta de la API de clima.",
            "Manejar errores cuando la API no responde o los datos no llegan como se espera.",
            "Evitar mostrar información vacía o rota en la interfaz.",
            "Conectar datos técnicos de clima con una experiencia visual más comprensible.",
            "Preparar el proyecto para ocultar claves de API de forma segura en una versión desplegada.",
        ],
        learnings: [
            "Consumir APIs externas desde frontend.",
            "Leer y transformar respuestas JSON.",
            "Manejar estados de carga, error y éxito.",
            "Separar mejor la lógica de consumo de datos de la interfaz.",
            "Entender la importancia de proteger API keys con variables de entorno.",
        ],
        nextSteps: [
            "Crear recomendaciones de cuidado del bonsái según clima, temperatura y humedad.",
            "Mejorar diseño responsive y experiencia visual.",
        ],
    },
];

export const featuredProjects = projects;

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}