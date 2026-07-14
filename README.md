# Aguiar Studio Lab

Portafolio técnico-creativo de **Xavier Emanuel Aguiar Meza**, enfocado en desarrollo web, datos, automatización, APIs, diseño de interfaces y documentación técnica de proyectos.

Este sitio funciona como portafolio profesional, CV web y laboratorio personal para presentar proyectos reales, aprendizajes, tecnologías y evolución técnica.

---

## Descripción

**Aguiar Studio Lab** reúne proyectos de software, análisis de datos, automatización, dashboards, bases de datos y diseño web.  
El objetivo del sitio es mostrar no solo los resultados, sino también el proceso detrás de cada proyecto:

- Problema identificado.
- Solución propuesta.
- Stack utilizado.
- Proceso de desarrollo.
- Retos y debugging.
- Aprendizajes.
- Próximos pasos.

---

## Características principales

- Home profesional con enfoque técnico-creativo.
- Sistema de proyectos destacados.
- Rutas dinámicas para case studies.
- Proyecto destacado configurable con `featured: true`.
- Skill Vault interactivo inspirado en mapas tipo Obsidian.
- CV web en `/cv`.
- Descarga de CV en español e inglés.
- Header responsive con menú móvil.
- Footer con contacto, disponibilidad y enlaces profesionales.
- Diseño minimalista cálido, editorial y técnico.

---

## Stack

### Frontend

- Next.js
- TypeScript
- React
- Tailwind CSS

### UI / Interacción

- Motion
- Lucide React
- Componentes reutilizables propios

### Organización de datos

- Archivos TypeScript en `src/data`
- Proyectos renderizados desde datos
- CV renderizado desde datos
- Skill Vault renderizado desde nodos y conexiones

---

## Estructura del proyecto

```txt
aguiar-studio-lab/
├── public/
│   ├── cv/
│   │   ├── xavier-aguiar-cv-es.pdf
│   │   └── xavier-aguiar-cv-en.pdf
│   └── images/
│       └── profile/
│           └── xavier-profile.jpg
├── src/
│   ├── app/
│   │   ├── cv/
│   │   │   └── page.tsx
│   │   ├── work/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── shared/
│   └── data/
│       ├── cv.ts
│       ├── navigation.ts
│       ├── profile.ts
│       ├── projects.ts
│       └── skill-vault.ts
├── package.json
└── README.md

--- 
## Secciones del sitio

Home

Página principal con presentación personal, enfoque profesional, acceso a proyectos, CV y áreas de trabajo.

Work

Listado de proyectos técnicos. Cada proyecto tiene una página individual tipo case study.

Case Studies

Cada proyecto incluye:
- Descripción.
- Estado.
- Año.
- Rol.
- Stack.
- Highlights.
- Problema.
- Solución.
- Proceso.
- Retos.
- Aprendizajes.
- Próximos pasos.

## Skill Vault

Mapa interactivo de tecnologías y áreas de crecimiento, inspirado en una bóveda de conocimiento tipo Obsidian.

## CV Web

Página /cv con perfil profesional, stack, proyectos, experiencia, formación y botones para descargar el CV en español e inglés.

## Proyectos incluidos
- **Synapse**
Aplicación tipo workspace inspirada en Notion para organizar proyectos, notas de sesión, contexto técnico y seguimiento de aprendizaje.
- **Tequila Dashboard**
Dashboard interactivo para análisis, edición y visualización de precios usando Python, Streamlit y Pandas.
- **CIMMYT Data Work**
Trabajo práctico con bases de datos, SQL, Azure, Power BI, Microsoft Fabric y validación de fuentes de información.
- **Jarvis PC Assistant**
Asistente local para organizar espacios de trabajo, guardar notas de sesión y preparar contexto técnico.
Instalación local
- **Fresh Code**  
Proyecto web tipo tienda digital construido originalmente con HTML, CSS, JavaScript y Firebase, actualmente en proceso de rebuild hacia Next.js, TypeScript y una arquitectura más profesional.
- **Bonsai Weather App**  
Aplicación interactiva inspirada en el cuidado de un bonsái, integrando consumo de API de clima, manejo de estados de carga/error y presentación visual de datos externos.

