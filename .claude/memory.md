# Gestión de Memoria y Decisiones del Proyecto

## Qué Guardar en Memoria

### Decisiones Arquitecturales DEFINITIVAS
- **Estructura Multi-Página**: Home + páginas dedicadas para escalabilidad y SEO
- **Sections-Based Architecture**: Componentes modulares en src/app/sections/
- **shadcn/ui + Tailwind**: Sistema de diseño establecido, no cambiar
- **TypeScript Strict**: Configuración establecida, mantener estricta
- **"Modern Warmth" Aesthetic**: Principio de diseño no negociable
- **Token Efficiency**: Maximizar valor por token sin comprometer calidad
- **Workshop Vertical Navigation**: Scroll natural confirmado como UX superior
- **Glassmorphism Pattern**: `bg-white/10 backdrop-blur-md` como estándar para tarjetas

### Decisiones de Negocio CRÍTICAS
- **Target Audience**: Clientes high-end de diseño interior
- **Brand Positioning**: Artesanía + Diseño profesional moderno
- **Objetivo Principal**: Impresionar al dueño del negocio + captar clientes
- **Mercado**: España, idioma español (lang="es")

### Configuraciones NO TOCAR
- **Path Aliases**: @/* configurado, usado consistentemente
- **Font Stack**: Geist Sans establecida y optimizada
- **Color System**: CSS variables definidas, respetar jerarquía
- **Deploy Pipeline**: GitHub → Vercel automático, push MANUAL por usuario
- **Commit Strategy**: Claude hace commits, usuario hace push cuando listo

## Decisiones de Implementación Permanentes

### Componentes Establecidos
- **Button Component**: class-variance-authority configurado, no cambiar API
- **Layout Structure**: Root layout con metadata SEO configurada
- **Image Optimization**: Next.js Image component, configuración priority establecida

### Patterns de Código Confirmados
- **Import Paths**: Absolutos con @/ prefix, no relativos
- **Component Structure**: Props tipadas, forwardRef donde necesario  
- **Styling Pattern**: cn() utility para conditional classes
- **File Organization**: Sections en /sections/, UI components en /components/ui/

### Performance Optimizations Aplicadas
- **Font Loading**: Geist Sans con next/font optimization
- **Image Strategy**: Priority para hero images, lazy load para resto
- **Bundle Strategy**: Next.js automático, no override sin razón crítica

## Ideas y Conceptos en Desarrollo

### Features "Wow" Planificadas
- **Instagram Feed Dinámico**: Integración con API real de Instagram
- **3D Furniture Customizer**: Experiencia interactiva de personalización
- **Behind the Design Blog**: Storytelling del proceso creativo

### Experimentos de UX Considerados
- **Scroll-Triggered Animations**: Revelar contenido con movimiento
- **Interactive Material Showcase**: Texturas y materiales en detalle
- **Virtual Showroom**: Tour 3D del estudio (futuro)

## Context de Estado Actual

### Implementación Completada
- ✅ **Project Setup**: Next.js 15 + TypeScript + Tailwind configurado
- ✅ **Basic Architecture**: Layout, routing, component structure
- ✅ **Hero Section**: Implementado con imagen de fondo y CTA
- ✅ **Design System**: shadcn/ui integrado y funcional
- ✅ **Professional Workflow**: .claude/ directory con reglas de trabajo establecidas
- ✅ **Startup Protocol**: npm run dev & obligatorio al iniciar sesión
- ✅ **Memory Management**: Sistema de decisiones definitivas implementado
- ✅ **Card Component**: shadcn/ui card component creado y funcional
- ✅ **Services Section**: 3 tarjetas de servicios implementadas correctamente
- ✅ **Token Efficiency**: Sistema de optimización de tokens implementado
- ✅ **Cache Management**: Protocolo para limpiar .next cuando hay problemas de styling

### COMPLETADO - Junio 2024
- ✅ **Tres Experiencias Únicas**: Metamorfosis, Museo, Workshop implementadas
- ✅ **Navegación Unificada**: Navbar sofisticado con animaciones
- ✅ **Estructura de Rutas**: `/` `/museo` `/workshop` funcionales
- ✅ **Metamorfosis Material Completa**: 5 fases implementadas con narrativa evolutiva
- ✅ **Sistema de Scroll Personalizado**: Gradiente ámbar coherente con marca

### COMPLETADO - Diciembre 2024: Workshop Experience Refinement
- ✅ **Navegación Vertical Workshop**: Transformado de horizontal a scroll natural
- ✅ **Video Background Integration**: Implementado `/background.mp4` en EntradaStation
- ✅ **Glassmorphism Design System**: Efecto vidrio consistente en todas las tarjetas
- ✅ **Navegación Lateral**: Burbujas de navegación reposicionadas verticalmente (derecha)
- ✅ **Optimización de Layout**: Todas las estaciones ajustadas para `h-screen` sin overflow
- ✅ **Professional UI Upgrade**: Eliminación de elementos infantiles, diseño sofisticado

### Backlog Priorizado
1. **Completar Home Page**: Todas las secciones funcionales
2. **Content Management**: Sistema para actualizar proyectos/servicios
3. **Performance Audit**: Lighthouse 90+ en todas las métricas
4. **Mobile Optimization**: Responsive design perfecto
5. **SEO Enhancement**: Meta tags, structured data, sitemap

## Reglas de Memoria

### ¿Cuándo Actualizar Esta Documentación?
- **Decisión Arquitectural**: Cambio en estructura o tecnología core
- **Business Logic Change**: Modificación en objetivos o estrategia
- **Performance Milestone**: Mejora significativa medible
- **User Experience Shift**: Cambio en flujo o experiencia principal
- **Feature Completion**: Funcionalidad completa y estable en producción

### ¿Qué NO Documentar Aquí?
- Detalles de implementación temporales
- Bugs específicos (van en issues/tasks)
- Experimentos no confirmados
- Configuraciones que pueden cambiar
- Decisiones reversibles sin impacto mayor

### Validation Process
- **Decisión → Implementación → Testing → Documentación → Memory**
- Solo documentar después de validar que la decisión es correcta
- Revisar y actualizar memoria cada milestone mayor
- Mantener CLAUDE.md como referencia rápida, .claude/ como detalle