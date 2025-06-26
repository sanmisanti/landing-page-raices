# Protocolo de Inicio de Sesión

## Inicio Automático OBLIGATORIO

### Al comenzar cualquier sesión de trabajo:

1. **SIEMPRE ejecutar**: `npm run dev &` en background
2. **Verificar**: Server corriendo en http://localhost:3000
3. **Monitorear**: Output del servidor para errores/warnings
4. **Confirmar**: Build exitoso y aplicación cargando

### Comandos de Inicio Estándar:
```bash
# Iniciar servidor de desarrollo en background
npm run dev &

# Verificar estado de build
npm run build

# Verificar linting
npm run lint
```

### Monitoreo Durante Desarrollo:
- **Hot Reload**: Verificar cambios se reflejan automáticamente
- **Console Errors**: Observar errores en tiempo real
- **Network Issues**: Detectar problemas de carga de recursos
- **Performance**: Notar degradación en tiempo de respuesta

### Troubleshooting Común:
- **Puerto ocupado**: `pkill -f "next dev"` y reiniciar
- **Cache issues**: `rm -rf .next` y reiniciar
- **Dependency issues**: `npm install` y reiniciar

## Workflow de Sesión Completa:

1. **Startup** → `npm run dev &`
2. **Development** → Hacer cambios + verificar en servidor
3. **Testing** → `npm run build` + `npm run lint`
4. **Deploy** → Push cuando versión estable
5. **Cleanup** → Server se cierra automáticamente al terminar sesión

### Estado Ideal:
- ✅ Dev server ejecutándose en background
- ✅ Hot reload funcionando
- ✅ Console limpio sin errores
- ✅ Aplicación cargando correctamente en navegador