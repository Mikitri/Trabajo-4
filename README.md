# Gestor de Tareas - Proyecto

Este es un proyecto de **Gestor de Tareas** que utiliza **Node.js** para el backend con una base de datos **SQLite** y un frontend simple en **HTML** y **JavaScript**.

### **Estructura del Proyecto**

El proyecto consta de dos partes:

1. **Frontend**: La interfaz de usuario donde los usuarios pueden agregar, ver y eliminar tareas. Está hecho con HTML, CSS y JavaScript.
2. **Backend**: Un servidor hecho con Node.js que maneja la base de datos SQLite. El backend expone una API para interactuar con las tareas.

### **Requisitos Previos**

Antes de ejecutar el proyecto, asegúrate de tener instalados los siguientes programas en tu computadora:

- **Node.js**: Puedes descargarlo desde [aquí](https://nodejs.org/).
- **npm**: Viene instalado con Node.js.
  
También necesitas **SQLite** para la base de datos (aunque SQLite generalmente no necesita instalación adicional en sistemas modernos).

### **Pasos para Ejecutar el Proyecto**

Sigue estos pasos para poner en marcha tanto el frontend como el backend:

---

#### **1. Clonar el Repositorio**

Primero, clona el repositorio en tu máquina local:

```bash
git clone https://github.com/tu-usuario/nombre-del-repositorio.git
cd nombre-del-repositorio

2. Instalar las Dependencias del Backend
Para ejecutar el backend, primero necesitas instalar las dependencias de Node.js.

Dentro del directorio del proyecto, navega a la carpeta server y ejecuta los siguientes comandos:

cd server
npm init -y
npm install express sqlite3 body-parser cors

Esto instalará las dependencias necesarias para el servidor Node.js.

3. Iniciar el Backend
Una vez instaladas las dependencias, puedes iniciar el servidor de backend. Para hacerlo, ejecuta el siguiente comando en la terminal:

node server.js

Esto iniciará el servidor en el puerto 3000 (por defecto). Verás el mensaje:

Servidor corriendo en el puerto 3000

4. Abrir el Frontend
El frontend está compuesto por archivos estáticos (HTML, CSS, JavaScript) que pueden ser abiertos directamente en el navegador. Solo necesitas abrir el archivo index.html en tu navegador preferido.

Si prefieres una experiencia más fluida, puedes utilizar un servidor local. Si tienes Visual Studio Code instalado, puedes usar la extensión Live Server:

Instala la extensión Live Server desde el marketplace de VSCode.
Haz clic derecho en el archivo index.html y selecciona "Open with Live Server".
Esto abrirá tu aplicación en un servidor local y podrás acceder a ella en la URL http://localhost:5500 (o cualquier puerto asignado por Live Server).

5. Probar la Aplicación
Agregar Tarea: Ingresa una descripción en el campo de texto y haz clic en "Agregar". La tarea se agregará al backend y aparecerá en la lista de tareas.
Eliminar Tarea: Haz clic en el botón "Eliminar" junto a una tarea para eliminarla tanto del frontend como del backend.

Detalles Técnicos

Backend:

El servidor está hecho con Node.js y usa Express para crear las rutas API.
La base de datos es SQLite, y las tareas se almacenan en un archivo tareas.db.
Las rutas principales son:
GET /tareas: Obtener todas las tareas.
POST /tareas: Agregar una nueva tarea.
DELETE /tareas/:id: Eliminar una tarea por su ID.

Frontend:

El frontend está hecho con HTML para la estructura, CSS para los estilos, y JavaScript para interactuar con el backend (mediante fetch).
Problemas Comunes
El servidor no arranca: Asegúrate de haber instalado correctamente las dependencias del backend (paso 2).
CORS: Si ves un error relacionado con CORS en la consola del navegador, asegúrate de que el servidor de backend esté corriendo en http://localhost:3000 y que tu navegador esté habilitado para permitir solicitudes locales.