# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Work Rules & Guidelines

**IMPORTANT**: This project follows professional workflow standards. Always consult the `.claude/` directory for detailed guidelines:

- **`.claude/workflow.md`**: Development workflow, quality standards, and deploy strategy
- **`.claude/memory.md`**: Critical decisions, architectural choices, and what to preserve in memory
- **`.claude/startup.md`**: Session startup protocol - ALWAYS start with `npm run dev &`

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
**"Modern Warmth"** - Balancing cozy, artisanal feel (wood textures, warm colors) with clean, modern, high-end layout (sharp typography, generous whitespace).

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

**Multi-Page Architecture**: Professional, scalable approach with dedicated pages for better SEO:

**Home Page Sections** (current implementation):
- `Navbar`: Clean navigation
- `Hero`: High-impact visual and headline  
- `FeaturedProjects`: Curated selection of top work
- `Services`: Summary of offerings
- `Testimonials`: Social proof
- `CtaSection`: Clear call to action
- `Footer`: Contact info and social links

**Future Full Pages**:
- `Portfolio`: Detailed project case studies (before/after, stories)
- `Services`: In-depth explanation of each service
- `Courses`: Calendar, descriptions, and registration
- `About Us`: The story of the founder
- `Contact`: Form, WhatsApp, map

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
- **Custom animations** using tailwindcss-animate plugin

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

## Future "Wow" Factor Features

Planned enhancements to create an impressive user experience:
- Dynamic, embedded Instagram feed
- Interactive 3D furniture customizer
- "Behind the Design" blog section

## Development Notes

- Website goal: Impress business owner and create powerful client acquisition tool
- Primary audience: High-end interior design clients
- Language: Spanish (configured as `lang="es"`)
- Workflow: Use v0.dev for UI inspiration and iterative component development