## Introducción

Whirlpool requiere un programa web para capacitar a empleados de alta rotación para
arreglar sus productos del hogar tales estufas, hornos, lavadoras, secadoras, lavavajillas, entre
otros. El criterio de aceptación que se le piden a los empleados es haber cursado mínimo la
secundaria, por lo tanto la interfaz tiene que ser simple de entender y fácil de navegar.

## Lista de Requerimientos de alta prioridad

- RF-1: Acceso Diferenciado por Rol
- RF-2: Acceso a Clases y Módulos para Técnicos
- RF-3: Gestión de Cursos por Profesores
- RF-4: Inscripción de Alumnos en Cursos (Acción del Profesor)
- RF-5: Gestión y Edición de Módulos en Cursos
- RF-6: Visualización de Gráficas de Rendimiento de Alumnos
- RF-7: Visualización de Barra de Tareas Pendientes para Técnicos
- RF-8: Los capacitadores deben poder subir material a cualquier curso necesitado.
- RF-9: Los capacitadores deben poder subir preguntas a los módulos de juego.
- RNF-1: La plataforma debe tener un diseño responsivo para soportar dispositivos de
cualquier tamaño.
- RNF-2: Seguridad
- RNF-3: Disponibilidad y Tolerancia a Fallos
- RNF-4: Usabilidad e Interfaz de Usuario

## Requisitos Funcionales
### RF-1: Acceso Diferenciado por Rol

**Prioridad:** Alta (Muy importante)

**HU-1 – Inicio de Sesión según Rol**

Como usuario, quiero iniciar sesión con mi usuario y contraseña para acceder a la
plataforma en la interfaz correspondiente a mi rol (profesor o técnico), de modo que pueda
utilizar las funciones específicas de mi perfil.

**Criterios de aceptación:**

- La plataforma debe contar con una pantalla de inicio de sesión única.
- Al autenticar, según las credenciales, se redirige al usuario a la interfaz de profesor o
de técnico.
- Se deben validar correctamente el usuario y la contraseña.

**Puntos de historia:** 5


### RF-2: Acceso a Clases y Módulos para Técnicos

**Prioridad:** Alta (Muy importante)

**HU-2 – Acceso a Clases Inscritas**

Como técnico, quiero ver la lista de clases en las que he sido inscrito por un profesor, para
poder acceder a los módulos y desarrollar mis actividades de capacitación.

**Criterios de aceptación:**

- La interfaz de técnico muestra un listado de clases activas asignadas al usuario.
- Al seleccionar un curso, se despliegan los módulos asociados, que pueden contener
información teórica o juegos tipo quiz.
- Se debe incluir una barra de tareas pendientes en cada curso, la cual muestra las
actividades por completar.

**Puntos de historia:** 5

### RF-3: Gestión de Cursos por Profesores

**Prioridad:** Alta (Muy importante)

**HU-3 – Creación de Cursos**

Como profesor, quiero crear cursos de capacitación, asignándoles características específicas
(nombre, clave, descripción) y asociar alumnos a cada curso, para estructurar y administrar
las capacitaciones.

**Criterios de aceptación:**

- La plataforma ofrece una interfaz para la creación de cursos, donde se ingresen los
campos: nombre del curso, clave de acceso y descripción detallada.
- Se debe permitir seleccionar y asociar uno o varios alumnos que formarán parte del
curso.
- El curso, una vez creado, se visualiza en un listado de modulos gestionados por el
profesor.

**Puntos de historia:** 6

### RF-4: Inscripción de Alumnos en Cursos (Acción del Profesor)

**Prioridad:** Alta (Muy importante)

**HU-4 – Asignación de Alumnos a Cursos**

Como profesor, quiero poder añadir alumnos a cada curso creado, para permitirles el
acceso y seguimiento de las capacitaciones.

**Criterios de aceptación:**

- La interfaz del curso permite seleccionar alumnos existentes desde la base de datos.
- Los alumnos inscritos aparecen reflejados en el listado de participantes del curso.

**Puntos de historia:** 5

### RF-5: Gestión y Edición de Módulos en Cursos

**Prioridad:** Alta (Muy importante)

**HU-5 – Creación y Edición de Módulos**

Como profesor, quiero crear y editar módulos dentro de cada curso, para actualizar el
contenido didáctico y las actividades (incluyendo juegos tipo quiz), y así mantener la
capacitación relevante y dinámica.

**Criterios de aceptación:**

- Dentro de cada curso, el profesor puede agregar nuevos módulos indicando título y
contenido (informativo, multimedia y/o quiz interactivo).
- La herramienta permite editar los módulos existentes, modificando su contenido,
secuencia o tipo de actividad.
- Las actualizaciones deben reflejarse en tiempo real para los alumnos inscritos en el
curso.

**Puntos de historia:** 6

### RF-6: Visualización de Gráficas de Rendimiento de Alumnos

**Prioridad:** Media (Importante)

**HU-6 – Despliegue de Gráficas de Rendimiento**

Como profesor, al ingresar a la vista de un curso, quiero ver gráficos del rendimiento de mis
alumnos, para evaluar el progreso y la efectividad de las capacitaciones.

**Criterios de aceptación:**

- Al seleccionar un curso, se despliegan uno o varios gráficos que resumen indicadores
como participación, calificaciones y cumplimiento de tareas.

**Puntos de historia:** 4

### RF-7: Visualización de Barra de Tareas Pendientes para Técnicos

**Prioridad:** Media (Importante)

**HU-7 – Gestión de Tareas Pendientes**

Como técnico, quiero disponer de una barra de tareas pendientes en cada curso, para poder
identificar rápidamente las actividades que debo completar y gestionar mi aprendizaje.

**Criterios de aceptación:**

- Cada curso del técnico muestra una barra o sección dedicada a tareas pendientes.

**Puntos de historia:** 5

### RF-8: Los capacitadores deben poder subir material a cualquier curso necesitado.

**Prioridad:** Media (Importante)

**HU-8: Subida de Archivos**

Como capacitador de la aplicación, Quiero poder subir material a cualquier curso Para
poder adaptar los cursos a lo requerido

**Criterios de aceptación:**

- La aplicación debe contar con una sección para subir contenido
- Se deben de poder subir archivos de tipo png, jpg, word, pdf, mov, entre otros.
- Se debe actualizar la página para que se muestran los nuevos contenidos.

**Puntos de historia:** 6 (complejidad media, requiere mantener la página constantemente
actualizada y adaptarse a los distintos tipos de contenido)

### RF-9: Los capacitadores deben poder subir preguntas a los módulos de juego.

**Prioridad:** Alta

**HU-8: Subida de Preguntas al Juego**

Como capacitador de la aplicación, Quiero poder preguntas a los juegos Para poder calificar
a los técnicos.

**Criterios de aceptación:**

- La aplicación deberá poder aceptar preguntas de opción múltiple
- Las preguntas deberán poder desplegarse en su módulo correspondiente.

**Puntos de historia:** 7

## Requisitos No Funcionales
### RNF-1: La plataforma debe tener un diseño responsivo para soportar dispositivos de
cualquier tamaño.

**Prioridad:** Media (Importante)

**HU-10: Responsividad del Sistema**

Como usuario de la aplicación, Quiero que la plataforma tenga un diseño responsivo Para
que pueda utilizarla cómodamente en cualquier dispositivo

**Criterios de aceptación:**

- La interfaz debe adaptarse automáticamente al tamaño de pantalla del dispositivo.
- Los elementos de la interfaz deben reorganizarse para garantizar una experiencia de
usuario óptima en cualquier resolución.
- La navegación debe ser intuitiva

**Puntos de historia:** 3 (baja complejidad, requiere ajustes en diseño y pruebas en múltiples
dispositivos)

### RNF-2: Disponibilidad y Tolerancia a Fallos

**Prioridad:** Media

**HU-11: Tolerancia y Anuncio por Fallos**

Como usuario Quiero que la plataforma me avise en caso de algún error Para que pueda
arreglarlo y poder seguir utilizando la plataforma.

**Criterios de aceptación:**

- Al cometer un error, el sistema deberá hacérselo saber al usuario para que pueda
corregirlo.

**Puntos de historia:** 3

### RNF-3: Seguridad

**Prioridad:** Alta

**HU-12: Seguridad de los datos**

Como usuario que maneja datos sensibles (profesor, técnico o administrador) Quiero que mi
información y las credenciales estén protegidas mediante hashing Para evitar accesos no
autorizados y garantizar la confidencialidad de la información.

**Criterios de aceptación:**

- Las contraseñas deben almacenarse utilizando algoritmos de hash seguros.

**Puntos de historia:** 3

### RNF-4: Usabilidad e Interfaz de Usuario

**Prioridad:** Alta

**HU-13: Aplicación Intuitiva**

Como usuario final (profesor o técnico) Quiero que la interfaz de la plataforma sea intuitiva,
limpia y responsiva, Para poder utilizar la aplicación de forma cómoda en dispositivos
móviles, tablets y escritorio, sin curvas de aprendizaje innecesarias.

**Criterios de aceptación:**

- La interfaz debe adaptarse y reorganizarse automáticamente según el tamaño de
pantalla.
- Los elementos de navegación y botones deben ser claramente identificables y de fácil
acceso.

**Puntos de historia:** 6
