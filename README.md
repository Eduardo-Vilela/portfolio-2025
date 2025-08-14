# Portfolio 2025 - Estructura Profesional

Este portfolio está estructurado siguiendo las mejores prácticas de desarrollo y los principios de **Screaming Architecture**, donde la estructura de carpetas "grita" el propósito de la aplicación.

## 🏗️ Estructura de Carpetas

```
src/
├── app/                    # Next.js App Router
│   ├── (routes)/          # Agrupación de rutas (no afecta la URL)
│   │   ├── about/         # Página About (/about)
│   │   ├── projects/      # Página Projects (/projects)
│   │   └── contact/       # Página Contact (/contact)
│   ├── components/        # Componentes reutilizables
│   │   ├── layout/        # Componentes de layout (Header, Footer, etc.)
│   │   ├── sections/      # Secciones de página (Hero, About, etc.)
│   │   └── ui/            # Componentes de UI básicos (Button, Card, etc.)
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── lib/                   # Configuraciones y utilidades de librerías
├── types/                 # Definiciones de tipos TypeScript
├── constants/             # Constantes y datos estáticos
├── hooks/                 # Custom hooks de React
├── utils/                 # Funciones utilitarias
└── styles/                # Estilos adicionales y variables CSS
```

## 🎯 Principios de Screaming Architecture

### 1. **Claridad de Propósito**
- Cada carpeta tiene un nombre que describe exactamente qué contiene
- La estructura es autoexplicativa para cualquier desarrollador

### 2. **Separación de Responsabilidades**
- **`components/`**: Solo componentes de React
- **`hooks/`**: Solo lógica reutilizable
- **`utils/`**: Solo funciones utilitarias
- **`types/`**: Solo definiciones de TypeScript

### 3. **Escalabilidad**
- Fácil agregar nuevas páginas en `(routes)/`
- Fácil agregar nuevos componentes en `components/`
- Fácil agregar nuevas utilidades en `utils/`

## 🚀 Cómo Usar

### Agregar una Nueva Página
1. Crear carpeta en `src/app/(routes)/nombre-pagina/`
2. Crear `page.tsx` dentro de esa carpeta
3. La ruta será automáticamente `/nombre-pagina`

### Agregar un Nuevo Componente
1. Crear archivo en la carpeta apropiada de `components/`
2. Exportar desde `src/app/components/index.ts`
3. Importar donde se necesite

### Agregar Nuevos Tipos
1. Definir interfaces en `src/types/index.ts`
2. Importar en los componentes que los usen

## 📁 Descripción de Carpetas

### `app/`
- **`(routes)/`**: Agrupación de rutas que no afecta la URL
- **`components/`**: Componentes reutilizables organizados por función
- **`layout.tsx`**: Layout principal que envuelve todas las páginas

### `lib/`
- Configuraciones de librerías externas
- Clientes de APIs
- Configuraciones de base de datos

### `types/`
- Interfaces y tipos de TypeScript
- Definiciones de datos de la aplicación
- Tipos para props de componentes

### `constants/`
- Datos estáticos de la aplicación
- Configuraciones
- Información personal del portfolio

### `hooks/`
- Custom hooks de React
- Lógica reutilizable entre componentes
- Hooks para manejo de estado global

### `utils/`
- Funciones utilitarias
- Helpers para formateo de datos
- Funciones de validación

### `styles/`
- Variables CSS
- Mixins y funciones de CSS
- Temas y configuraciones de diseño

## 🔧 Tecnologías Utilizadas

- **Next.js 14** con App Router
- **TypeScript** para tipado estático
- **Tailwind CSS** para estilos
- **React Bootstrap** para componentes adicionales
- **Custom Hooks** para lógica reutilizable

## 📝 Convenciones de Nomenclatura

- **Carpetas**: kebab-case (`user-profile/`)
- **Archivos**: kebab-case (`user-profile.tsx`)
- **Componentes**: PascalCase (`UserProfile`)
- **Hooks**: camelCase con prefijo `use` (`useUserProfile`)
- **Utilidades**: camelCase (`formatDate`)

## 🎨 Patrones de Diseño

- **Componentes Atómicos**: Componentes pequeños y reutilizables
- **Composición**: Combinar componentes simples para crear complejos
- **Props Drilling**: Minimizar el paso de props innecesario
- **Custom Hooks**: Extraer lógica compleja a hooks reutilizables

## 🚀 Próximos Pasos

1. **Crear páginas adicionales** en `(routes)/`
2. **Implementar componentes UI** en `components/ui/`
3. **Agregar más custom hooks** según sea necesario
4. **Implementar sistema de temas** en `styles/`
5. **Agregar tests** en carpeta `__tests__/`

## 📚 Recursos Adicionales

- [Next.js App Router](https://nextjs.org/docs/app)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Hooks](https://react.dev/reference/react/hooks)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

Esta estructura te permitirá mantener un código limpio, escalable y fácil de mantener a medida que tu portfolio crezca.
