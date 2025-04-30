
## Frontend
### Vista general
1. **(TERMINADO) Crear una barra navegadora que incluye:**
    - Botón de menú para abrir barra lateral que incluye:
        - Botón de cerrar sesión
        - Despliegue de los cursos del usuario
        - Despliegue de curso previamente visto
        - Acceso a página de home
        - Acceso a página de documentación (solo para profesor)
    - Logo de WTI

### Vista de login
1. **(TERMINADO) Página de login con lo siguiente**
    - Logo
    - Título de página
    - Marca legal
    - Input para el usuario
    - Input para la contraseña
    - Botón para iniciar sesión
    - Texto de error
2. **(TERMINADO) Conexión con la base de datos funcional**
3. **(TERMINADO) Checa la contraseña utilizando encriptaciones**
4. **(TERMINADO) Mejorar visuales del mensaje de error.**
    - Agregar una imagen de una X
5. **(TERMINADO) Manejo de sesiones**
    - No se debería poder acceder a las páginas que no son de inicio de
    sesión si no hay una sesión iniciada.

6. **(TERMINADO) En la barra de contraseña, incluir un botón que permite ver la**
**contraseña que se ha escrito, o ocultarla.**

### Vista del profesor
1. **(TERMINADO) Agregar conexión con base de datos para cargar la**
**información del profesor.**
2. **(TERMINADO) Agregar funcionalidad a botones de crear alumnos y cursos.**
3. **(TERMINADO) Agregar funcionalidad al botón de editar y borrar cursos.**
4. **(TERMINADO) Agregar los elementos dentro de la vista**
    - Creación de curso
    - Añadir responsividad
    - Poder modificar cursos
    - Botón de agregar alumnos

### Vista alumno
1. **(TERMINADO) Agregar conexión con base de datos para cargar la**
**información del alumno.**
2. **(TERMINADO) Mejores colores para barra de navegación y background**
3. **(TERMINADO) Arreglar los elementos dentro de la vista**
    - Los cursos del alumno
        - Nombre de curso
        - Clave de curso

4. **(TERMINADO) Iframe que carga el videojuego embebido con preguntas del módulo actual.**

### Página de curso (alumno)
1. **(TERMINADO) Portada del curso**
    - Imagen principal
    - Título del curso
    - Descripción
2. **(TERMINADO) Menú de navegación del curso (incluir la barra lateral)**
    - Mostrar curso actual
    - Botón de regreso a home
    - Navegación a otros cursos
3. **(TERMINADO) Despliegue de tareas por hacer**
    - Título tarea
    - Fecha de entrega
4. **(TERMINADO) Estadísticas del curso**
    - Promedio
    - #de tareas por hacer
    - % de progreso del curso
5. **(TERMINADO) Calificaciones**
6. **(TERMINADO) Vista de módulos (contenido, tareas, etc.)**
7. **(TERMINADO) Vista de datos de profesor**
8. **(TERMINADO) Progreso de curso**


### Página de curso (profesor)
1. **(TERMINADO) Dashboard de estadísticas de alumnos**
2. **(TERMINADO) Vista de alumnos inscritos y sus calificaciones**
3. **(TERMINADO) Vista de módulos (Creación de contenido, tareas, etc.)**

### Página de Módulos(Profesor)
1. **(TERMINADO) Inclusión de vista “crear módulo” que permite:**
    - Edición con Quill.js
    - Adjuntar imágenes y texto enriquecido
    - Crear preguntas estilo quiz en un banco de preguntas para el
    videojuego a través de Alpine.js
    - Elegir si es una Lección o una Tarea
2. **(TERMINADO) Inclusión de vista “editar módulo” que permite:**
    - Actualizar el Quill.js con nueva información.
    - Actualizar el banco de preguntas para el videojuego.
    - Actualizar el título del módulo.

### Videojuegos
1. **(TERMINADO) Que acceda a la base de datos para las preguntas**
2. **(TERMINADO) Que esté embebido dentro de la página web en módulos**
3. **(TERMINADO) Registro en la base de datos de respuestas correctas y puntaje por tarea.**

### Backend
1. **(TERMINADO) Lógica de inicio de sesión va en el Backend**
2. **(TERMINADO) Lógica que permita nuestra aplicación utilizar diferentes URLs de acceso, manejado a través de CORS.**

### Seguridad
1. **(TERMINADO) Utilizar hash para la encriptación de credenciales.**