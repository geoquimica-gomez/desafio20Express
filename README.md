# Proyecto de Repertorio de Canciones

Este proyecto es una aplicación web sencilla que permite gestionar un repertorio de canciones. Se puede agregar, editar, eliminar y consultar canciones, las cuales se almacenan en un archivo JSON (`repertorio.json`). La aplicación está dividida en dos partes: el backend (servidor Express) y el frontend (página web con HTML, CSS y JavaScript).

## Tecnologías Utilizadas

- **Backend:**
  - Node.js
  - Express
  - CORS
  - body-parser
  - Axios (para consumir APIs en el frontend)
  
- **Frontend:**
  - HTML
  - CSS (Bootstrap para los estilos)
  - JavaScript (con Axios para interactuar con la API)

## Instrucciones de Instalación

### 1. Clonar el repositorio

git clone <url-del-repositorio>
cd <nombre-del-directorio>


### 2. Configuración del Backend
Primero, debes configurar el backend, que está desarrollado en Node.js utilizando Express.

Navega al directorio del backend:
cd backend

Instala las dependencias necesarias:
npm install

Levanta el servidor:
npm run dev

El servidor se iniciará en el puerto 5000, y la API estará disponible en http://localhost:5000.

### 3. Configuración del Frontend
El frontend está ubicado en el directorio client. Este utiliza HTML y JavaScript para interactuar con la API.

Navega al directorio client y abre el archivo index.html en tu navegador:

cd client
Puedes abrir el archivo index.html directamente en tu navegador o, si prefieres, usar un servidor local para servir los archivos estáticos.

### 4. Funcionalidad
API (Backend)
El backend permite interactuar con las canciones a través de las siguientes rutas:

GET /canciones: Devuelve todas las canciones del repertorio.
GET /canciones/:id: Devuelve una canción específica por su ID.
POST /canciones: Permite agregar una nueva canción al repertorio.
PUT /canciones/:id: Permite editar una canción existente.
DELETE /canciones/:id: Permite eliminar una canción.
Frontend (Interfaz de Usuario)
La interfaz permite:

Ver la lista de canciones en una tabla.
Agregar nuevas canciones al repertorio.
Editar canciones existentes.
Eliminar canciones.

### 5. Estructura de Archivos

/backend
  ├── index.js         # Backend (API) usando Express
  ├── repertorio.json  # Archivo donde se almacenan las canciones
  ├── package.json     # Dependencias del backend
/client
  ├── index.html       # Frontend (HTML)
  ├── style.css        # Estilos personalizados
  ├── script.js        # Lógica para interactuar con el backend