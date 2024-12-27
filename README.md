# Gestion de Turnos para Consultorio Psicológico

Este es un proyecto de gestión de turnos para un consultorio psicológico, desarrollado utilizando **React** para el frontend y **NestJS** para el backend. La base de datos empleada es **PostgreSQL**.

## Características Principales

- **Registro de Usuarios**: Los usuarios pueden registrarse desde el frontend y sus datos son almacenados en el backend.
- **Inicio de Sesión**: Los usuarios pueden iniciar sesión para acceder a sus citas.
- **Visualización de Citas**: Al iniciar sesión, los usuarios pueden ver las citas que tienen reservadas.
- **Reserva de Citas**:
  - Horario disponible: De **8:00 AM a 6:00 PM**.
  - Días disponibles: De **lunes a viernes**.
  - Restricción de reserva: Solo se permiten reservas con **24 horas de antelación**.
- **Cancelación de Citas**: Los usuarios pueden cancelar sus citas reservadas.

## Tecnologías Utilizadas

### Frontend

- **React**
- **React Router**: Para la navegación.
- **Axios**: Para realizar peticiones HTTP al backend.
- **CSS** (o cualquier librería de estilos como por ejemplo: **Bootstrap**): Para el diseño de la interfaz.

### Backend

- **NestJS**
- **TypeORM**: Para la gestión de la base de datos.
- **PostgreSQL**: Base de datos relacional.
- **JWT**: Para autenticación y autorización.

## Requisitos Previos

- Node.js (versión 16 o superior)
- PostgreSQL (instalado y en ejecución)
- Yarn o npm (para manejar dependencias)

## Instalación

### 1. Clonar el Repositorio

```bash
git clone https://github.com/AbiContreras27/gestionTurno.git
cd gestion-turnos
```

### 2. Configuración del Backend

1. Ir al directorio del backend:
   ```bash
   cd backend
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Configurar variables de entorno en un archivo `.env.example`:
   ```env
   PORT=3000

   DB_TYPE=postgres
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=lacontraseñadetuDB
   DB_DATABASE=reservacitas
   DB_SYNC=true
   DB_LOGGING=["error"]
   DB_ENTITIES=[User, Credential, Appointment]
   DB_DROP=true
   ```
4. Ejecutar migraciones de la base de datos:
   ```bash
   npm run typeorm migration:run
   ```
5. Iniciar el servidor:
   ```bash
   npm run start:dev
   ```

### 3. Configuración del Frontend

1. Ir al directorio del frontend:
   ```bash
   cd front/vite-project
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Uso

1. Registrar un usuario desde la interfaz del formulario en el frontend.
2. Iniciar sesión con el usuario registrado.
3. Navegar a la sección de Reservar citas para:
   - Reservar nuevas citas dentro de los horarios permitidos.
5. Navegar a la sección de Mis Turnos para:
   - Ver citas reservadas.
   - Cancelar citas existentes.

## Rutas Disponibles

El backend se despliega localmente en `http://localhost:3000/` y expone las siguientes rutas:
- **/users**: Manejo de usuarios.
- **/appointments**: Manejo de citas.

## Contribución

1. Hacer un fork del repositorio.
2. Crear una rama para tu funcionalidad:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realizar tus cambios y confirmar:
   ```bash
   git commit -m "Agregada nueva funcionalidad"
   ```
4. Enviar tus cambios al repositorio remoto:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Crear un Pull Request.


## Autor

Desarrollado por: **Abigail Contreras**.

