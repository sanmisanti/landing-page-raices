# Token Efficiency Guidelines

## Filosofía de Eficiencia

**Principio Core**: Maximizar valor por token - cada token debe contribuir directamente al objetivo del usuario manteniendo la máxima calidad.

## Estrategias de Optimización

### Input Token Efficiency
- **Parallel Tool Calls**: SIEMPRE hacer múltiples tool calls en una sola respuesta cuando sea posible
- **Batch Operations**: Agrupar tareas relacionadas en una sola ejecución
- **Context Reuse**: Aprovechar información ya disponible en lugar de re-leer
- **Targeted Searches**: Usar Grep/Glob específicos en lugar de búsquedas amplias

### Output Token Efficiency
- **Concise Communication**: Respuestas directas sin preámbulos innecesarios
- **Action-Focused**: Priorizar hacer sobre explicar, a menos que se solicite explicación
- **Smart Summarization**: Resumir resultados largos manteniendo información crítica
- **Avoid Redundancy**: No repetir información ya establecida

## Técnicas Específicas

### Tool Usage Optimization
```
✅ GOOD: Múltiples tool calls paralelos
✅ GOOD: Batch git operations (status + diff + log)
✅ GOOD: Read múltiples files en una respuesta
❌ BAD: Tool calls secuenciales innecesarios
❌ BAD: Re-leer files ya conocidos
```

### Communication Optimization
```
✅ GOOD: "Card component created successfully"
✅ GOOD: "✅ Build passed ✅ Lint clean ✅ Ready for commit"
❌ BAD: "I have successfully completed the task of creating..."
❌ BAD: Explanar cada paso cuando no es necesario
```

### Context Management
- **Memory First**: Consultar .claude/memory.md antes de explorar
- **Assumption Validation**: Validar supuestos antes de implementar
- **State Awareness**: Mantener contexto de estado actual sin re-verificar constantemente

## Quality Assurance

### Non-Negotiable Quality Standards
- **Correctness**: Solución debe funcionar perfectamente
- **Best Practices**: Seguir patrones establecidos del proyecto
- **Performance**: No sacrificar rendimiento por eficiencia de tokens
- **Security**: Mantener estándares de seguridad siempre

### Efficiency vs Quality Balance
- **High-Impact Changes**: Usar tokens necesarios para cambios críticos
- **Documentation**: Documentar decisiones importantes independientemente de tokens
- **Testing**: Verificar funcionalidad aunque requiera tokens adicionales
- **Error Prevention**: Mejor prevenir que corregir después

## Métricas de Éxito

### Indicators de Eficiencia Efectiva
- **Tasks per Token**: Más tareas completadas por token usado
- **Error Rate**: Menos errores que requieren corrección
- **First-Time Success**: Soluciones que funcionan en primer intento
- **Value Delivery**: Progreso tangible hacia objetivos del usuario

### Red Flags de Ineficiencia
- **Repeated Tool Calls**: Misma información obtenida múltiples veces
- **Verbose Explanations**: Explicaciones largas no solicitadas
- **Context Loss**: Re-descubrir información ya conocida
- **Incomplete Solutions**: Soluciones parciales que requieren múltiples rounds

## Workflow Optimizado

### Session Start Protocol
1. **npm run dev &** (background server)
2. **Quick Status Check**: git status + lint + build (parallel)
3. **Context Load**: Revisar .claude/memory.md para decisiones
4. **Goal Clarification**: Entender objetivo específico del usuario

### Development Cycle
1. **Plan**: TodoWrite con tareas específicas
2. **Execute**: Batch tool calls cuando posible
3. **Validate**: Build + lint + manual test
4. **Commit**: Estado estable alcanzado
5. **Update**: Memory si decisión crítica

### Communication Style
- **Status Updates**: Concisos y accionables
- **Problem Solving**: Directo a la solución
- **Progress Reports**: Bullets points con checkmarks
- **Error Handling**: Root cause + solution, no explicaciones largas