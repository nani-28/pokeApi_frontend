# Consulta y visualización de API externa

Este proyecto consume la API pública llamada "PokeAPI" desde el frontend con HTML, CSS y JavaScript.
Se hace una petición GET para obtener información de 12 pokémon y se muestran en tarjetas con su nombre, imagen, experiencia base y altura (Pokédex).

---

## Información de la API utilizada:

La Pokéapi es una API RESTful que proporciona acceso a una gran cantidad de información sobre Pokémon, incluyendo detalles sobre Pokémon específicos, sus habilidades, tipos, movimientos y más. 

---

## ⚙️ Cómo ejecutar el proyecto

   **1. Clona este repositorio:**
   ```sh
   git clone <url-del-repo>
   cd Fastify-PostgreSQL
   ```

   **2. Configura las variables de entorno:**
   ```sh
   cp backend/.env.example backend/.env
   ```

   Edita el archivo backend/.env con tus credenciales de PostgreSQL.


**3. Construye y levanta los servicios con Docker Compose:**
   ```sh
   docker-compose up --build
   ```

**4. Accede al frontend en tu navegador:**
http://localhost:8080

**5. El backend (API REST) está disponible en:**
http://localhost:3000/productos

---
