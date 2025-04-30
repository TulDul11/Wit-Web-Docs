## Funcionalidades finales:
###  Funcionalidades generales
    - Manejo de sesiones
        - La aplicación verifica que el usuario haya ingresado e iniciado sesión anteriormente. Si no ha iniciado sesión, mandará al usuario a la página de inicio de sesión con un mensaje de error desplegado.
### Barra lateral y Barra de navegación
    - Botón de menú en barra de navegación.
        - Abre y disminuye la barra lateral. En la versión móvil, la barra lateral
        desaparece en vez de disminuir.
    - Logo de la aplicación en barra de navegación.
        - Lleva al usuario a la página de inicio.
    - Botón de inicio en barra lateral.
        - Lleva al usuario a la página de inicio si no está en la página de inicio.
        - El botón está desactivado dentro de la página de inicio..
    - Botón de documentación en barra lateral.
        - Disponible solo para el profesor. Lleva al usuario a la página web de
        documentación de la aplicación.
    - Botón de curso previo.
        - Lleva al usuario al curso previamente visto. Si no hay curso
        previamente visto por el usuario, el botón se deshabilita y en vez se
        muestra un mensaje default.
    - Lista de cursos.
        - Muestra todos los cursos en una línea tipo columna. Dicha columna se
        puede desplazar para ver todos los cursos del usuario. Si no hay cursos,
        esto se notará con un mensaje default. Presionar cualquier curso llevará
        al usuario a dicho curso. Además, en la versión disminuida de la barra
        lateral, el botón de la lista de cursos en vez abrirá la barra lateral.

### Página de inicio de sesión (‘/’)
    - Inicio de sesión
        - El usuario puede iniciar sesión mediante escribiendo su nombre de
        usuario y contraseña. Presionando el botón de iniciar sesión o ENTER,
        se mandará los datos de usuario y contraseña y se verificarán antes de
        mandar a la página de inicio.
    - Comparación de contraseñas con encriptación
        - Al mandar los datos al backend, la contraseña se encripta y se
        comparará con la contraseña encriptada que está guardada.

    - Cambio de visibilidad para la contraseña
        - El input de contraseña puede cambiar entre visible y no visible, es
        decir, se puede ver el texto de contraseña o cambiarlo por puntos que
        impiden la visibilidad.

### Página de inicio (Alumno) (‘/home’)
    - Filtro de cursos
        - Cuadro de texto que permite al usuario buscar cursos, sea por nombre
        de curso o por código de curso.
    - Lista de cursos
        - El usuario contará con una lista de cursos en formato de cartas.
            Presionar cualquier curso llevará al alumno a dicho curso.

### Página de inicio (Profesor) (‘/home’)
    - Filtro de cursos
        - Cuadro de texto que permite al usuario buscar cursos, sea por nombre
        de curso o por código de curso.
    - Lista de cursos
        - El usuario contará con una lista de cursos en formato de cartas.
        - Presionar cualquier curso llevará al alumno a dicho curso.
        - Los cursos tienen un menú de opciones para los profesores, que les
        permitirá editar y borrar cursos.
    - Edición de cursos
        - El profesor podrá editar cursos, pudiendo editar los alumnos que
        pertenecen al curso.
    - Borrar cursos
        - El profesor podrá borrar los cursos, borrando cualquier dato
        perteneciente a los cursos.
    - Agregar alumnos
        - El profesor podrá agregar alumnos. Para agregar alumnos, el profesor
        tendrá que proveer un archivo tipo .csv (comma-separated values) con
        el formato establecido por una tabla que se mostrará. Ingresando un
        .csv correcto te marcará todos los alumnos que quieres ingresar.
        Además, si un alumno ya está registrado previamente, se marcará error.
    - Agregar cursos
        - El profesor puede crear un curso, dando el nombre del curso, el código
        del curso y una descripción. Además, podrá agregar los alumnos que
        gusten.

### Página de curso (Alumno) (‘/course’)
    - Tareas pendientes
        - El alumno podrá ver cualquier tarea pendiente que tenga. Si no está
        completada, aparecerá en la lista. Seleccionando cualquiera de las
        tareas te llevará al apartado de la tarea correspondiente.
    - Módulos
        - La lista de todas las tareas y todas las lecciones pertenecientes al
        módulo. Estos pueden ser lecciones o tareas. Seleccionando cualquiera
        de los módulos te llevará al apartado del módulo correspondiente.

### Página de curso (Profesor) (‘/course’)
    - Dashboards
        - Dashboards interactivos que cuentan con datos de los alumnos, sus
        calificaciones y su progreso

    - Módulos
        - La lista de todas las tareas y todas las lecciones pertenecientes al
        módulo. Estos pueden ser lecciones o tareas. El profesor no puede
        acceder directamente a ver el módulo y en vez de acceder mediante el
        botón de editar.
    - Edición de módulos
        - Este botón manda a la vista de edición de módulo (vista de módulo)
        para profesor.
    - Borrar módulos
        - Borra el módulo y cualquier referencia a él.
    - Creación de módulos
        - El botón manda a la página de creación de módulos, que también se
        encuentra en la vista de módulo para profesor..

### Página de módulo (Alumno) (‘/verMódulo’)
    - Fecha de entrega
        - Si el módulo es una tarea, al cargar la página se notará la fecha de
        entrega de la actividad.

    - Contenido
        - Al cargar el módulo, se mostrará el título y el resto del contenido,
        incluyendo el texto, y si es una tarea, el videojuego también se
        mostrará.

### Página de módulo (Profesor) (‘/crearMódulo’)
    - Creación de módulo
        - Dentro de la creación de módulo, el profesor requiere poner un título,
        seleccionar entre lección o tarea (lección se selecciona por default si el
        profesor no hace la elección) y un texto del curso. Si se selecciona
        tarea, se le notará al profesor que se agrega un contenido de preguntas
        y un videojuego, y además tendrá que asignar una fecha de entrega. Al
        confirmar y guardar cambios, se mandará a la página de edición de
        módulo con los nuevos datos.

    - Edición de módulo
        - Dentro de la edición de módulo se puede modificar el título del
        módulo, el texto/lección, y si es una tarea, también se puede agregar,
        modificar y eliminar preguntas.
    - Previsualización de contenido
        - Dentro de creación y edición de módulo, se puede previsualizar el
        contenido de título y texto para ver cómo se vería en la vista del
        alumno.