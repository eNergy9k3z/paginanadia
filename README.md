# Página Web Dr. Nadia Sanchez Cano

Esta es una aplicación web moderna construida con **React** y **Vite**, diseñada para la venta de productos de salud (cetonas exógenas) y la marca personal de la Dra. Nadia Sanchez Cano.

## Tecnologías

- **React**: Biblioteca de UI.
- **Vite**: Entorno de desarrollo rápido.
- **CSS Vanilla (CSS Modules/Global)**: Estilos modernos sin frameworks pesados, optimizados para rendimiento.
- **Fuentes**: Inter y Outfit (Google Fonts).

## Estructura del Proyecto

- `src/components/`: Contiene todos los componentes de la UI (Navbar, Hero, Productos, etc.).
- `src/index.css`: Variables globales de diseño (colores, tipografía) y utilidades.
- `public/`: Contiene las imágenes estáticas.

## Instrucciones

1.  Instalar dependencias (si no se ha hecho):
    ```bash
    npm install
    ```

2.  Correr el servidor de desarrollo:
    ```bash
    npm run dev
    ```

3.  Construir para producción:
    ```bash
    npm run build
    ```

## Personalización

- **Colores**: Editar `src/index.css` en la sección `:root`.
- **Productos**: Editar el array `products` en `src/components/ProductSection.jsx`.
- **Imágenes**: Reemplazar las imágenes en `public/` con las fotos reales.
