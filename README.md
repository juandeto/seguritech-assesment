# Aplicación de Streaming Demo

## Ejecutar la aplicación

```bash
npm run dev
```

## Compilar la aplicación

```bash
npm run build
```

## Previsualizar la aplicación

```bash
npm run preview
```

## Probar la aplicación

```bash
npm run test
```

## Probar la aplicación en modo observación

```bash
npm run test:watch
```

## Linting de la aplicación

```bash
npm run lint
```

## Decisiones Técnicas y Arquitectónicas

### Arquitectura
- **Estructura de Componentes**: Componentes organizados de forma simple: elementos comunes reutilizables (/common) y páginas (/pages).
- **Diseño Responsivo**: Implementación de diseños responsivos utilizando media queries para garantizar que la aplicación funcione bien en todos los tamaños de dispositivos.
- **Estado en Parámetros URL**: Se utilizaron parámetros URL para paginación para permitiendo marcar y compartir vistas específicas en lugar de estado local.
- **Estado Local vs. Global**: Se consideró qué estado debería ser global (los items) versus local (paginación, filtrado).

### Estrategia de Pruebas
- **Pruebas Unitarias**: Implementadas con Vitest y React Testing Library enfocándose en el comportamiento del componente en lugar de los detalles de implementación.
- **Manejo de Errores a Nivel de Componente**: Cada página maneja sus propios estados de error, proporcionando retroalimentación clara a los usuarios.

### Consideraciones de Rendimiento
- **Memoización**: Se utilizó useMemo de React para optimizar cálculos costosos para filtrado y paginación.
- **Paginación**: Implementada para limitar el número de elementos renderizados a la vez, mejorando el rendimiento para conjuntos de datos grandes.
- **Lazy loading**: El contenido se obtiene solo cuando es necesario para reducir el tiempo de carga inicial.

### Decisiones de UI/UX
- **Grid Layout**: Utilizado para la visualización de contenido para proporcionar una vista limpia y organizada de los elementos multimedia.
- **Estilo Consistente**: Se mantuvo un estilo consistente en todos los componentes para una experiencia de usuario cohesiva.
- **Modal Responsive**: Diseñado para funcionar bien en todos los tamaños de pantalla con ajustes de estilo apropiados.
- **Navegación Accesible**: Implementación de navegación clara con elementos HTML semánticos adecuados.
