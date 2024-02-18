# Blog Backend

Este proyecto es el backend de una aplicación de blog desarrollada con Node.js y Express, utilizando PostgreSQL como sistema de gestión de base de datos. Ofrece una API RESTful para operaciones CRUD en posts de blog.

## Instalación

1. **Clonar el repositorio**.
2. **Instalar dependencias**: Ejecuta `npm install` en la raíz del proyecto.
3. **Configuración de la base de datos**: Asegúrate de tener PostgreSQL instalado y configurado. Crea una base de datos llamada `blogdb` y ejecuta las migraciones o scripts SQL proporcionados para crear las tablas necesarias.
4. **Variables de entorno**: Copia el archivo `.env.example` a `.env` y actualiza las variables con tus credenciales de la base de datos y cualquier otra configuración necesaria.
5. **Ejecutar el proyecto**: Usa `npm run dev` para iniciar el servidor en modo de desarrollo con nodemon, que se reiniciará automáticamente al hacer cambios.

## Uso

La API soporta las siguientes operaciones:

- **GET `/blog`**: Devuelve todos los posts.
- **POST `/blog`**: Crea un nuevo post. Requiere un cuerpo de solicitud con `author`, `title`, y `content`.

## Desarrollado con

- Node.js
- Express
- PostgreSQL
- Cors para manejo de CORS
- Dotenv para gestión de variables de entorno
- Morgan para logging

## Autores

- Tu Arturo Baylon

## Licencia

Este proyecto está licenciado bajo la Licencia ISC.
