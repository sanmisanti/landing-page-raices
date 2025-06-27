# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Work Rules & Guidelines

**IMPORTANT**: This project follows professional workflow standards. Always consult the `.claude/` directory for detailed guidelines:

- **`.claude/workflow.md`**: Development workflow, quality standards, and deploy strategy
- **`.claude/memory.md`**: Critical decisions, architectural choices, and what to preserve in memory
- **`.claude/startup.md`**: Session startup protocol - ALWAYS start with `npm run dev &`
- **`.claude/efficiency.md`**: Token optimization strategies maintaining maximum quality
- **`.claude/design-exploration.md`**: Three unique experience concepts and implementation status
- **`.claude/session-summary-jun2024.md`**: Complete session summary with all achievements and decisions

Key principles: Maximum professionalism, extreme efficiency, avant-garde creativity, constant application monitoring.

## Project Overview

This is a Next.js 15 website for "Raíces y Diseño" - a high-end interior design and artisan furniture studio. The site is built with React 19 RC, TypeScript, and Tailwind CSS as an immersive "Digital Studio" that showcases custom furniture, interior design projects, and tells the brand story.

### Business Context
- **Core Business**: Artisan furniture (benches, lamps, armchairs), furniture restoration, and educational workshops
- **Expansion**: Moving into full-service interior design
- **Brand Essence**: 
  - **Raíces (Roots)**: Craftsmanship, process, raw materials, story behind each piece
  - **Diseño (Design)**: Final aesthetic, professional vision, modern elegance
- **Key Asset**: Active Instagram account showcasing their work

### Design Philosophy
**"Modern Warmth" Evolution** - El concepto evolucionó hacia tres expresiones únicas:

1. **Orgánico**: Metamorfosis Material con paletas naturales evolutivas (verde → ámbar → dorado)
2. **Elegante**: Museo con iluminación sofisticada y efectos premium (slate oscuro + spotlights ámbar)
3. **Artesanal**: Workshop con texturas y ambiente de taller (maderas + herramientas)

Cada experiencia mantiene la calidez artesanal pero con personalidad visual distintiva.

## Development Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with Next.js config

## Architecture

### Project Structure
```
src/app/
├── layout.tsx          # Root layout with Geist Sans font and metadata
├── page.tsx            # Home page composing sections
├── globals.css         # Global styles with Tailwind directives
├── sections/           # Page sections (hero, featured-projects, etc.)
├── components/ui/      # Reusable UI components
└── lib/               # Utility functions
```

### Site Structure & Strategy

**Multi-Experience Architecture**: Three unique digital experiences implemented:

#### Current Implementation - Three Routes:

**`/` - Metamorfosis Material (Home):**
- `Navbar`: Sophisticated animated navigation
- `Hero`: Fase 1 - Semilla (verde claro, partículas, raíces)
- `FeaturedProjects`: Fase 2 - Árbol Joven (ideas que toman forma)
- `Services`: Fase 3 - Árbol Maduro (materiales nobles)
- `Testimonials`: Fase 4 - Tala Selectiva (proceso artesanal)
- `CtaSection`: Fase 5 - Pieza Final (obra maestra)
- `Footer`: Simple y elegante

**`/museo` - Museo Interactivo:**
- Hall de entrada con spotlight effects
- Cursor que sigue mouse con efectos de iluminación
- Preview de salas temáticas
- Ambiente de galería profesional

**`/workshop` - Workshop Digital:**
- Navegación horizontal entre estaciones
- Cursor dinámico por sección
- Experiencia inmersiva de taller
- Partículas ambientales

#### Future Expansion Pages:
- `Portfolio`: Detailed project case studies
- `Contact`: Form, WhatsApp, map
- `About`: Story of the founder

### Key Design Decisions

**Sections-based Architecture**: The main page is composed of discrete sections imported from `src/app/sections/`. This makes the page modular and easy to maintain.

**shadcn/ui Integration**: Uses shadcn/ui component library with:
- New York style configuration
- Neutral base color scheme
- CSS variables for theming
- Custom path aliases (`@/*` maps to `src/*`)

**Component Structure**: 
- UI components in `src/app/components/ui/` using Radix UI primitives
- Button component with class-variance-authority for variants
- Project card component for displaying portfolio items

### Styling Approach

- **Tailwind CSS** with custom color system using CSS variables
- **CSS-in-JS approach** with cn() utility for conditional classes
- **Responsive design** with mobile-first approach
- **Framer Motion** for premium animations and interactions
- **Custom CSS**: Scrollbar personalizada con gradiente ámbar, `bg-gradient-radial` para spotlight effects
- **Glassmorphism**: Backdrop blur effects en navbar y cards

### Font and Typography

Uses Geist Sans font family optimized by Next.js font system, configured in layout.tsx.

### Image Handling

Next.js Image component with proper optimization for hero backgrounds and project images.

## Path Aliases

- `@/*` maps to `src/*` (configured in tsconfig.json)
- Components use absolute imports: `@/app/components/ui/button`

## Internationalization

Site is configured for Spanish language (lang="es" in root layout).

## TypeScript Configuration

- Strict mode enabled
- ES2017 target
- Path mapping configured
- Next.js plugin integrated

## Implemented "Wow" Factor Features ✅

**Three unique digital experiences fully implemented:**

### Metamorfosis Material (/)
- Narrativa evolutiva desde semilla hasta obra maestra
- 5 fases con paletas de colores orgánicas
- Animaciones temáticas por sección (partículas, raíces, virutas, etc.)
- Transiciones fluidas entre conceptos

### Museo Interactivo (/museo)
- Spotlight cursor que sigue el mouse
- Efectos de iluminación museística
- Hall de entrada con preview de salas
- Ambiente de galería profesional

### Workshop Digital (/workshop)
- Navegación horizontal inmersiva
- Cursor dinámico que cambia por estación
- Partículas ambientales de taller
- Experiencia artesanal única

## Future Enhancement Ideas
- Dynamic, embedded Instagram feed
- Interactive 3D furniture customizer
- "Behind the Design" blog section
- Content management system
- Advanced analytics integration

## Development Notes

- Website goal: Impress business owner and create powerful client acquisition tool
- Primary audience: High-end interior design clients
- Language: Spanish (configured as `lang="es"`)
- Workflow: Use v0.dev for UI inspiration and iterative component development