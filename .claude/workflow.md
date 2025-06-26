# Workflow y Reglas de Desarrollo

## Filosofía de Trabajo

### Principios Fundamentales
- **Profesionalismo Máximo**: Cada línea de código debe ser de calidad de producción
- **Eficiencia Extrema**: Soluciones optimizadas y probadas en todo momento
- **Creatividad Vanguardista**: Diseños originales que marquen tendencia
- **Monitoreo Constante**: Estado de aplicación siempre bajo control

### Estándares de Calidad
- **Código**: TypeScript estricto, componentes reutilizables, arquitectura escalable
- **Diseño**: "Modern Warmth" + elementos vanguardistas únicos
- **Performance**: Optimización de Core Web Vitals, lazy loading, code splitting
- **Accesibilidad**: WCAG 2.1 AA compliance mínimo

## Flujo de Desarrollo

### 1. Análisis y Planificación
- Usar TodoWrite para trackear todas las tareas
- Analizar impacto en arquitectura existente
- Validar coherencia con brand essence

### 2. Implementación
- **Desarrollo Iterativo**: Componente por componente
- **Testing Continuo**: npm run dev activo durante desarrollo
- **Server Background**: SIEMPRE iniciar npm run dev en background al comenzar sesión
- **Validación Visual**: Verificar en navegador tras cada cambio significativo
- **Monitoreo Continuo**: Observar output del servidor para errores/warnings

### 3. Control de Calidad
- **Pre-commit**: npm run lint, npm run build exitosos
- **Verificación Manual**: Funcionalidad y diseño correctos
- **Performance Check**: Lighthouse audit para cambios críticos

### 4. Deploy Strategy
- **Staging**: Push cuando funcionalidad completa y testada
- **Production**: Solo versiones estables que agreguen valor real
- **Rollback Ready**: Siempre mantener última versión estable funcional

## Reglas de Creatividad

### Diseño Vanguardista
- **Innovar sin Comprometer UX**: Elementos únicos que mejoren experiencia
- **Micro-interacciones**: Detalles que sorprendan y deleiten
- **Composición Visual**: Uso creativo de espacios, tipografías, colores
- **Storytelling Visual**: Cada elemento debe contar parte de la historia de marca

### Experimentación Controlada
- **Feature Flags**: Para funcionalidades experimentales
- **A/B Mental Testing**: Considerar múltiples enfoques antes de implementar
- **Progressive Enhancement**: Funcionalidad base + capas de mejora

## Monitoreo de Aplicación

### Checks Obligatorios
1. **Dev Server Start**: OBLIGATORIO iniciar npm run dev al comenzar cada sesión
2. **Estado de Build**: Verificar npm run build antes de cada push
3. **Error Monitoring**: Console errors, network failures, render issues
4. **Performance Baseline**: Mantener métricas de rendimiento
5. **User Journey**: Testar flujo completo usuario regular

### Debugging Protocol
- **Issue Identification**: Reproducir y documentar problemas
- **Root Cause Analysis**: Identificar causa real, no síntoma
- **Fix Validation**: Confirmar solución no introduce regresiones
- **Prevention**: Implementar checks que eviten repetición

## Git & Deploy Strategy

### Commit Standards
- **Mensajes Descriptivos**: Qué se cambió y por qué
- **Atomic Commits**: Un concepto/feature por commit
- **Clean History**: Rebase cuando sea necesario para claridad

### Deploy Triggers
- **Features Completas**: Funcionalidad terminada y testada
- **Bug Fixes Críticos**: Problemas que afectan experiencia usuario
- **Performance Improvements**: Optimizaciones medibles
- **Content Updates**: Cambios de contenido aprobados

### Production Readiness Checklist
- [ ] npm run build exitoso
- [ ] npm run lint sin errores
- [ ] Funcionalidad testada manualmente
- [ ] Performance acceptable
- [ ] Mobile responsive verificado
- [ ] Cross-browser compatibility básica

## Herramientas y Recursos

### Desarrollo
- **v0.dev**: Para inspiración y prototyping rápido
- **shadcn/ui**: Componentes base consistentes
- **Tailwind CSS**: Sistema de diseño cohesivo

### Monitoring
- **Browser DevTools**: Performance, Network, Console
- **Vercel Analytics**: Performance metrics en producción
- **Lighthouse**: Auditorías de calidad regulares