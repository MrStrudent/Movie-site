# Práctica 7 - App de Películas con React

## Integrantes
- Erick Zaid Medina Torres
- Carlos Andrei Saucedo Aguilar

## Objetivo
Desarrollar una aplicación web SPA (Single Page Application) con React y Vite que consuma la API pública de TMDB, mostrando un listado de películas y el detalle de cada una, trabajada colaborativamente mediante GitHub y publicada en Netlify.

## Tecnologías utilizadas
- React 19
- Vite
- React Router DOM
- CSS
- TMDB API (The Movie Database)
- Git & GitHub
- Netlify

## Estructura general del proyecto
```
1-peliculas/
├── public/
│   └── _redirects
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ContextCard.jsx
│   │   ├── ContextCard.css
│   │   ├── MovieCard.jsx
│   │   └── MovieCard.css
│   ├── data/
│   │   └── httpclient.js
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── MovieDetails.jsx
│   │   └── MovieDetails.css
│   ├── routers/
│   │   └── routes.jsx
│   ├── utils/
│   │   └── getMovieImg.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── .env              (no incluido en el repositorio)
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## Instalación y ejecución local

1. Clona el repositorio:
```bash
git clone https://github.com/OryxSSJ/Movie-site.git
cd Movie-site/1-peliculas
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo `.env` en la raíz de `1-peliculas/` con tu token de TMDB:
```
VITE_TMDB_TOKEN=tu_token_aqui
```

4. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

5. Abre tu navegador en: `http://localhost:5173/`

## Rutas utilizadas
| Ruta | Descripción |
|------|-------------|
| `/` | Página principal con listado de películas |
| `/movies/:movieId` | Vista de detalle de una película específica |

## API utilizada
- **Nombre:** The Movie Database (TMDB)
- **URL base:** `https://api.themoviedb.org/3`
- **Autenticación:** Bearer Token (JWT)
- **Endpoints consumidos:**
  - `GET /discover/movie` — Obtiene el listado de películas populares
  - `GET /movie/{movieId}` — Obtiene el detalle de una película por ID
- **Documentación oficial:** https://developer.themoviedb.org/docs

## Capturas de funcionamiento

### Página principal (listado de películas)
La página principal muestra una grilla de tarjetas con el poster y título de cada película obtenida desde la API de TMDB.

### Vista de detalle
Al hacer clic en cualquier tarjeta, se navega a `/movies/:id` donde se muestra el poster, géneros y descripción completa de la película.

## Link del repositorio
https://github.com/OryxSSJ/Movie-site

## Link del despliegue en Netlify
_(Se actualizará una vez completado el despliegue)_

## Conclusiones
Esta práctica nos permitió aprender a construir una SPA con React y Vite, consumiendo una API externa real (TMDB). Trabajamos en equipo usando GitHub como flujo de trabajo colaborativo, aplicando buenas prácticas como el uso de variables de entorno para proteger credenciales y el archivo `_redirects` para una correcta navegación en producción con Netlify.

---
**Integrantes:** Erick Zaid Medina Torres | Carlos Andrei Saucedo Aguilar  
**Profesor:** Zeus Emanuel Gutierrez Cobian  
**Materia:** Desarrollo de Aplicaciones Web en la Nube y Móviles  
**Calendario Escolar:** 2026A | **Mes y Año:** Abril 2026  
**Institución:** CUCEI – Universidad de Guadalajara
