# Mood 🎹

Mood es una aplicación web de e-commerce de instrumentos musicales, desarrollada con Angular como práctica académica de desarrollo front-end. Utiliza servicios externos (MockAPI, PostImages) para simular una tienda real.

## 🚀 Funcionalidades

- ✅ Agregar instrumentos al carrito.
- ✅ Eliminar instrumentos del carrito.
- ✅ Seleccionar la cantidad deseada.
- ✅ Sección de contacto con formulario para dejar comentarios.
- ✅ Página de inicio minimalista con acceso directo a la tienda.
- ✅ Instrumentos y comentarios cargados desde una API externa (MockAPI).

## 📂 Estructura del proyecto

- src/ Código fuente de Angular, módulos Angular y ruteo.
  - app/
    - components/ — Componentes
    - services/ — Servicios

## ⚙️ Instalación local

1. Clonar el repositorio:
  ```bash
  git clone https://github.com/JeremiasBustos02/mood.git
  cd mood
  ```
2. Instalar dependencias:
  ```bash
  npm install
  ```
3. Ejecutar el servidor:
  ```bash
  ng serve
  ```
4. Abrir el navegador:
  ```bash
  http://localhost:4200
  ```

## 🌐 Servicios externos utilizados.

 - MockApi Para los instrumentos y comentarios.
 - PostImages Para alojar las imagenes de los instrumentos.

### 📦 Links y endpoints

- 🏠 **/home**: Página principal con diseño minimalista y acceso directo a la tienda.

- 🎸 **/instruments**:  
  Recurso: [`https://685479426a6ef0ed662f2f06.mockapi.io/mood/instruments`](https://685479426a6ef0ed662f2f06.mockapi.io/mood/instruments)

- 💬 **/about**:  
  Recurso: [`https://685479426a6ef0ed662f2f06.mockapi.io/mood/comments`](https://685479426a6ef0ed662f2f06.mockapi.io/mood/comments)

- 🖼️ **Galería de imágenes (PostImages)**:  
  Recurso: [`https://postimg.cc/gallery/tT84Gxj`](https://postimg.cc/gallery/tT84Gxj)

## 🧠 Posibles mejoras

- Autenticación de usuarios.
- Página de detalle por instrumento.
- Paginado o filtrado por categoría.
- Responsive design mejorado.

## 👤 Autor

Jeremías Bustos — [@JeremiasBustos02](https://github.com/JeremiasBustos02) - jeremias.e.bustos@gmail.com
