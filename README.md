# Rick and Morty Characters App

Aplicación web en React 18 + Vite para explorar, buscar y gestionar personajes de Rick and Morty usando GraphQL, React Router DOM, TailwindCSS y TypeScript.

## Características principales
- **Listado de personajes** con búsqueda, filtros avanzados (nombre, especie, estado, género) y ordenamiento (A-Z, Z-A).
- **Favoritos**: marca y desmarca personajes, destacados arriba.
- **Soft-delete**: elimina personajes visualmente y restaura desde la barra lateral (persistente en localStorage).
- **Comentarios**: agrega comentarios por personaje (persistentes en localStorage).
- **Navegación responsiva**: experiencia optimizada para desktop y mobile.
- **Visual fiel a Figma**: paleta de colores y tipografía Greycliff CF.
- **Componentes reutilizables** y estructura modular.

## Estructura de Componentes

Este proyecto utiliza la metodología de diseño atómico para organizar los componentes de React en:

- **Átomos:** Componentes básicos e independientes (botones, tipografías, iconos, etc.).
- **Moléculas:** Combinaciones simples de átomos que forman unidades funcionales (inputs con label, tarjetas simples, etc.).
- **Organismos:** Componentes complejos que agrupan átomos y moléculas para construir secciones completas de la interfaz (sidebars, listas de personajes, etc.).

Esta estructura facilita la escalabilidad, el mantenimiento y la reutilización de los componentes en toda la aplicación.

## Instalación y ejecución

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/Kathe17/rick-and-morty-app.git
   cd rick-and-morty-app
   ```

2. **Instala dependencias:**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecuta la aplicación en modo desarrollo:**
   ```bash
   npm run dev
   # o
   yarn dev
   ```
   La app estará disponible en `http://localhost:5173` (o el puerto que indique Vite).

## Uso de la aplicación

- **Buscar y filtrar:** Usa la barra superior y el panel de filtros para buscar por nombre, especie, estado o género.
- **Ordenar:** Ordena los personajes por nombre (A-Z / Z-A) desde el panel de filtros.
- **Favoritos:** Haz clic en el corazón para marcar/desmarcar favoritos. Los favoritos aparecen primero.
- **Eliminar/restaurar:** Haz clic en el ícono de papelera para eliminar (soft-delete). Puedes restaurar desde la sección "Deleted Characters" en la barra lateral.
- **Comentarios:** En la vista de detalle de personaje, agrega comentarios que se guardan localmente.
- **Navegación:**
  - En desktop, selecciona un personaje para ver detalles en el panel principal.
  - En mobile, navega a la ruta `/character/:id`.

## API utilizada

La app consume la API pública de Rick and Morty GraphQL:
- **Endpoint:** `https://rickandmortyapi.com/graphql`
- **Documentación:** https://rickandmortyapi.com/documentation

### Ejemplo de consulta GraphQL
```graphql
query ($name: String, $species: String, $status: String, $gender: String) {
  characters(filter: { name: $name, species: $species, status: $status, gender: $gender }) {
    results {
      id
      name
      image
      species
      status
      gender
    }
  }
}
```

## Scripts disponibles
- `npm run dev` — Ejecuta la app en modo desarrollo
- `npm run build` — Compila la app para producción
- `npm run preview` — Previsualiza la app de producción

## Estructura del proyecto
- `src/components/` — Componentes atómicos, moleculares y organismos
- `src/pages/` — Vistas principales (listado, detalle)
- `src/hooks/` — Hooks personalizados para lógica de UI y estado
- `src/graphql/` — Consultas GraphQL
- `src/assets/` — Imágenes y recursos

## Notas adicionales
- El estado de favoritos, eliminados y comentarios se guarda en `localStorage`.
- El diseño es responsivo y accesible.
- Puedes personalizar la paleta de colores en `tailwind.config.js` y las fuentes en `index.css`.

---

Desarrollado por Katherine Rey — 2025
