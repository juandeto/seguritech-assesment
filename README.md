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

### Stack Tecnológico
- **React**: Elegido por su arquitectura basada en componentes, que permite una mejor organización del código y reutilización.
- **TypeScript**: Proporciona seguridad de tipos, mejor experiencia para el desarrollador y ayuda a detectar errores durante el desarrollo.
- **Redux Toolkit**: Utilizado para la gestión de estado global. Como todas las páginas necesitan acceso a los mismos elementos de contenido, se decidió utilizar una solución de gestión de estado global. Además, la paginación se maneja en el lado del cliente, por lo que los elementos de contenido se almacenan en el estado global una vez y luego se filtran y paginan según sea necesario.
- **Styled Components**: Permite el estilo a nivel de componente con todo el poder de CSS, mejorando la mantenibilidad.
- **React Router**: Proporciona enrutamiento declarativo para aplicaciones React.
- **Vite**: Seleccionado como herramienta de compilación por su rápido servidor de desarrollo y compilaciones optimizadas para producción.

### Arquitectura
- **Estructura de Componentes**: Componentes organizados en elementos comunes reutilizables y componentes específicos de página.
- **Diseño Responsivo**: Implementación de diseños responsivos utilizando media queries para garantizar que la aplicación funcione bien en todos los tamaños de dispositivos.
- **Estado en Parámetros URL**: Se utilizaron parámetros URL para paginación y filtrado para permitir marcar y compartir vistas específicas en lugar de estado local.
- **Estado Local vs. Global**: Se consideró cuidadosamente qué estado debería ser global (elementos de contenido) versus local (paginación, filtrado).

### Estrategia de Pruebas
- **Pruebas Unitarias**: Implementadas con Vitest y React Testing Library enfocándose en el comportamiento del componente en lugar de los detalles de implementación.
- **Manejo de Errores a Nivel de Componente**: Cada página maneja sus propios estados de error, proporcionando retroalimentación clara a los usuarios.

### Consideraciones de Rendimiento
- **Memorización**: Se utilizó useMemo de React para optimizar cálculos costosos para filtrado y paginación.
- **Paginación**: Implementada para limitar el número de elementos renderizados a la vez, mejorando el rendimiento para conjuntos de datos grandes.
- **Carga Perezosa**: El contenido se obtiene solo cuando es necesario para reducir el tiempo de carga inicial.

### Decisiones de UI/UX
- **Diseño en Cuadrícula**: Utilizado para la visualización de contenido para proporcionar una vista limpia y organizada de los elementos multimedia.
- **Estilo Consistente**: Se mantuvo un estilo consistente en todos los componentes para una experiencia de usuario cohesiva.
- **Modal Responsivo**: Diseñado para funcionar bien en todos los tamaños de pantalla con ajustes de estilo apropiados.
- **Navegación Accesible**: Implementación de navegación clara con elementos HTML semánticos adecuados.


### Posibles mejoras

- **Testing integral**: Implementar testing integral y end-to-end para verificar que todo funciona como se espera.
- **Blur para las imagenes**: las imagenes pueden tardar en cargar en algunos casos. Implementaria algun tipo de skeleton con blur para las imagenes.
- **Styled files**: los styled components los implementaria en un file distinto para los componentes relacionados.
- **Filtro en la URL**: guardaria el filtro por año en la URL para que pueda ser compartida esa vista.
