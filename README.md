# Oscar David Valencia - Portfolio de Ingeniero de Software

[![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh)

Sitio web personal de portfolio profesional que muestra mis habilidades, proyectos y experiencia como ingeniero de software full-stack.

## 🌟 Características

- **🌐 Bilingüe**: Soporte completo para español e inglés con detección automática del idioma del navegador
- **🎨 Temas Dinámicos**: Modo claro y oscuro con detección de preferencias del sistema y persistencia de selección
- **📱 Diseño Responsive**: Optimizado para dispositivos móviles, tablets y escritorio
- **⚡ Alto Rendimiento**: Construido con Astro para una carga ultra-rápida
- **♿ Accesible**: Cumple con estándares WCAG 2.1 AA
- **📄 Descarga de CV**: Currículum disponible en PDF en ambos idiomas
- **📬 Formulario de Contacto**: Integración con Web3Forms para mensajes directos
- **🎯 SEO Optimizado**: Meta tags, Open Graph y datos estructurados

## 🚀 Stack Tecnológico

- **Framework**: [Astro](https://astro.build) - Framework moderno para sitios estáticos
- **Lenguaje**: TypeScript (tipado estricto, sin uso de `any`)
- **Package Manager**: [Bun](https://bun.sh) - Runtime y gestor de paquetes ultra-rápido
- **Estilos**: CSS3 con gradientes personalizados
- **Servicios**: Web3Forms para funcionalidad de contacto
- **Iconos**:
  - [lucide-astro](https://lucide.dev/) - Biblioteca principal de iconos
  - [tabler-icons](https://tabler-icons.io/) - Biblioteca secundaria de iconos

## 📂 Estructura del Proyecto

```bash
portfolio/
├── public/                          # Archivos estáticos
│   ├── favicon.svg                  # Favicon del sitio
│   ├── profile.jpg                  # Foto de perfil
│   ├── Oscar_David_Valencia_resume_en.pdf
│   └── Oscar_David_Valencia_resume_es.pdf
├── src/
│   ├── assets/                      # Assets optimizables
│   │   ├── images/                  # Imágenes de proyectos
│   │   └── svg/                     # Logos personales
│   ├── components/                  # Componentes de Astro
│   │   ├── About.astro             # Sección "Sobre mí"
│   │   ├── Contact.astro           # Formulario de contacto
│   │   ├── Header.astro            # Barra de navegación
│   │   ├── Hero.astro              # Sección hero principal
│   │   ├── Projects.astro          # Showcase de proyectos
│   │   └── Skills.astro            # Habilidades técnicas
│   ├── i18n/                       # Internacionalización
│   │   └── index.ts                # Traducciones y configuración i18n
│   ├── layouts/
│   │   └── Layout.astro            # Layout principal
│   ├── pages/
│   │   └── [...lang].astro         # Página principal con rutas dinámicas
│   ├── scripts/
│   │   └── theme.ts                # Lógica del sistema de temas
│   └── styles/
│       └── global.css              # Estilos globales
├── resume_en.json                   # Datos del currículum en inglés
├── resume_es.json                   # Datos del currículum en español
├── PRD.md                          # Documento de requisitos del producto
├── astro.config.mjs                # Configuración de Astro
├── tsconfig.json                   # Configuración de TypeScript
├── package.json                    # Dependencias del proyecto
└── README.md                       # Este archivo
```

## 🛠️ Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, en la terminal:

| Comando            | Acción                                              |
| :----------------- | :-------------------------------------------------- |
| `bun install`      | Instala las dependencias                            |
| `bun dev`          | Inicia el servidor de desarrollo en `localhost:4321`|
| `bun build`        | Construye el sitio para producción en `./dist/`     |
| `bun preview`      | Previsualiza la construcción localmente             |
| `bun astro ...`    | Ejecuta comandos CLI de Astro                       |

## 🚦 Inicio Rápido

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/DavidValenciaX/portfolio.git
   cd portfolio
   ```

2. **Instalar dependencias**

   ```bash
   bun install
   ```

3. **Iniciar el servidor de desarrollo**

   ```bash
   bun dev
   ```

4. **Abrir en el navegador**

   ```html
   http://localhost:4321
   ```

## 🌍 Internacionalización

El sitio soporta dos idiomas:

- **Español** (por defecto): `/` o `/es`
- **Inglés**: `/en`

Los archivos de traducción se encuentran en `src/i18n/index.ts` y los datos del currículum en `resume_es.json` y `resume_en.json`.

## 🎨 Sistema de Temas

El sitio incluye dos temas:

- **Modo Claro**: Gradientes claros, apariencia profesional y optimista
- **Modo Oscuro**: Gradientes oscuros, apariencia moderna y elegante

La preferencia del tema se guarda en `localStorage` y se sincroniza automáticamente con las preferencias del sistema.

## 📊 Rendimiento

El sitio está optimizado para obtener excelentes puntuaciones en Lighthouse:

- Performance: >90
- Accessibility: >95
- Best Practices: >90
- SEO: >95

## 🔧 Configuración de TypeScript

El proyecto utiliza TypeScript con configuración estricta:

- Sin uso de tipo `any`
- Tipado explícito requerido
- Verificaciones estrictas habilitadas

## 📝 Datos del Currículum

Los datos del portfolio se gestionan mediante archivos JSON estructurados (`resume_es.json` y `resume_en.json`) que incluyen:

- Información básica y de contacto
- Experiencia laboral
- Educación
- Certificaciones
- Publicaciones
- Habilidades técnicas
- Proyectos destacados
- Idiomas

## 🤝 Contacto

- **Email**: <davidvalencia0526@gmail.com>
- **LinkedIn**: [oscar-david-valencia-alvarez-3b26321a3](https://www.linkedin.com/in/oscar-david-valencia-alvarez-3b26321a3)
- **GitHub**: [DavidValenciaX](https://github.com/DavidValenciaX)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo una licencia de uso personal.

---

## **Desarrollado por Oscar David Valencia**
