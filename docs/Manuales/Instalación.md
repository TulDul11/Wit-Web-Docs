# Instalacion

### Introducción

Este manual de instalación te ayudará a instalar y preparar Whirlpool Training Interface (WTI) para tu ambiente de trabajo.

WTI es una página web que se encarga de capacitar a nuevos técnicos mediante cursos y juegos de aprendizaje.

Para el proyecto se utilizó Node.js, Unity, MySQL, HTML y CSS, por lo que se necesitará algo de conocimientos previos para poder supervisar el sistema.

### Requisitos Previos

Para poder configurar WTI deberás tener lo siguiente:
- Contar con una base de datos en la nube.
- Tener Node.js instalado con sus dependencias.
- Conocimientos de git

### Instalación y Configuración

**Creación de la base de datos**

El primer paso para poder utilizar la página web es preparar la base de datos, por lo que
una vez que esté abierta deberás crear las tablas y los datos que permitan que funcione.

Para crear las tablas necesarias, copia el siguiente código.

```jsx title="MYSQL"
CREATE DATABASE bd_wti_tecnova;
USE bd_wti_tecnova;
-- CREATE TABLES
CREATE TABLE usuarios (
    id VARCHAR(8) COLLATE utf8mb4_bin NOT NULL UNIQUE PRIMARY KEY,
    hashing VARCHAR(70) NOT NULL,
    salt VARCHAR(30) NOT NULL,
    rol VARCHAR(10) NOT NULL
);

CREATE TABLE alumnos (
    id INT AUTO_INCREMENT NOT NULL UNIQUE PRIMARY KEY,
    id_usuario CHAR(8) COLLATE utf8mb4_bin NOT NULL UNIQUE,
    nombre VARCHAR(20) NOT NULL,
    apellido VARCHAR (20),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

CREATE TABLE profesores (
    id INT AUTO_INCREMENT NOT NULL UNIQUE PRIMARY KEY,
    id_usuario CHAR(8) COLLATE utf8mb4_bin NOT NULL UNIQUE,
    nombre VARCHAR(20) NOT NULL,
    apellido VARCHAR (20),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

CREATE TABLE cursos (
    cod VARCHAR(16) NOT NULL UNIQUE PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(100) NOT NULL,
    img VARCHAR(255)
);

CREATE TABLE alumnos_cursos (
    rel INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    id_alumno INT NOT NULL,
    cod_curso VARCHAR(16) NOT NULL,
    FOREIGN KEY (id_alumno) REFERENCES alumnos(id),
    FOREIGN KEY (cod_curso) REFERENCES cursos(cod)
);

CREATE TABLE profesores_cursos (
    rel INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    id_profesor INT NOT NULL,
    cod_curso VARCHAR(16) NOT NULL,
    FOREIGN KEY (id_profesor) REFERENCES profesores(id),
    FOREIGN KEY (cod_curso) REFERENCES cursos(cod)
);

CREATE TABLE usuarios_cursos_previos (
    rel INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    id_usuario CHAR(8) COLLATE utf8mb4_bin NOT NULL,
    cod_curso VARCHAR(16) NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    FOREIGN KEY (cod_curso) REFERENCES cursos(cod)
);

CREATE TABLE sessions (
    session_id VARCHAR(128) NOT NULL PRIMARY KEY,
    expires INT UNSIGNED,
    data MEDIUMTEXT
);

CREATE TABLE preguntas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    modulo_id INT NOT NULL,
    texto TEXT NOT NULL,
    respuestas JSON NOT NULL,
    correcta INT NOT NULL,
    FOREIGN KEY (modulo_id) REFERENCES modulos(id) ON DELETE CASCADE
);

CREATE TABLE modulos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    contenido_html TEXT NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cod_curso VARCHAR(16) NOT NULL,
    tarea BOOL,
    fecha_entrega DATETIME,
    FOREIGN KEY (cod_curso) REFERENCES cursos(cod)
);

CREATE TABLE alumnos_tareas (
    rel INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    id_alumno INT NOT NULL,
    id_tarea INT NOT NULL,
    completado BOOL,
    resultado DECIMAL(3,2),
    FOREIGN KEY (id_tarea) REFERENCES modulos(id),
    FOREIGN KEY (id_alumno) REFERENCES alumnos(id)
);

-- TRIGGERS
DELIMITER $$
CREATE TRIGGER borrar_curso BEFORE DELETE ON cursos
FOR EACH ROW
BEGIN
    DELETE FROM alumnos_cursos WHERE cod_curso = OLD.cod;
    DELETE FROM profesores_cursos WHERE cod_curso = OLD.cod;
    DELETE FROM usuarios_cursos_previos WHERE cod_curso = OLD.cod;
    DELETE FROM modulos WHERE cod_curso = OLD.cod;
END; $$

DELIMITER ;

DELIMITER $$
CREATE TRIGGER asignar_tarea BEFORE DELETE ON cursos
FOR EACH ROW
BEGIN
    IF NEW.tarea THEN
    INSERT INTO alumnos_tareas (id_alumno, id_tarea, completado,

    resultado)

    SELECT alumnos_cursos.id_alumno, NEW.id, false, 0.0
    FROM alumnos_cursos
    WHERE cod_curso = NEW.cod_curso;
    END IF;
END; $$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER borrar_tareas BEFORE DELETE ON cursos
FOR EACH ROW
BEGIN
    IF OLD.tarea THEN
    DELETE FROM alumnos_tareas WHERE id_tarea = OLD.id;
    END IF;
END; $$
DELIMITER ;

DELIMITER $$

CREATE TRIGGER borrar_alumno BEFORE DELETE ON alumnos
FOR EACH ROW
BEGIN
    DELETE FROM alumnos_cursos WHERE alumnos_cursos.id_alumno = OLD.id;
    DELETE FROM alumnos_tareas WHERE alumnos_tareas.id_alumno = OLD.id;
END; $$
```

Los valores que se insertan en las tablas son de ejemplo, pero como persona encargada de agregar alumnos y maestros, deberás poder añadir a los usuarios.

**Agregar usuarios**

Para añadir a un “Alumno”, deberás iniciar sesión como profesor, después en la página principal verás un botón de agregar alumnos, das clic en el y se abrirá una ventana donde podrás subir un archivo CSV, siguiendo el formato requerido sin header podrás subirlo y los alumnos serán agregados en la base de datos.
![Agregar Alumnos](/img/Agregar-Alumnos.png)

![Formato CSV](/img/Excel.png)

![Formato CSV](/img/SubidaExcel.png)

Ahora, para añadir a un profesor, deberás hacerlo desde la base de datos como método de seguridad, utilizando el siguiente formato de query podrás agregarlo directamente a la base de datos.

```jsx title="MYSQL"
INSERT INTO usuarios
VALUES ('profesor', '$2b$10$gNpGaX5QlqmUdzUbwZNR9uzE6oyWUChMVO2dQnTPAB99XP3iA/p5i', '$2b$10$gNpGaX5QlqmUdzUbwZNR9u', 'profesor');

INSERT INTO profesores (id_usuario, nombre, apellido)
VALUES ('profesor', 'Caitlyn', 'Kiramman');
```

También podemos inicializar la plataforma con un alumno desde la aplicación MySQL.

```jsx title="MYSQL"

INSERT INTO usuarios
VALUES ('alumno','$2b$10$gNpGaX5QlqmUdzUbwZNR9uzE6oyWUChMVO2dQnTPAB99XP3iA/p5i', '$2b$10$gNpGaX5QlqmUdzUbwZNR9u', 'alumno');

INSERT INTO alumnos (id_usuario, nombre, apellido)
VALUES ('alumno', 'Vi', NULL);
```
**Conexión con la API**

Una vez que las tablas estén creadas, deberás conectar la base de datos con la API encargada de manejar la página web y tareas tipo quiz.

Para eso, en el código fuente que se te fue otorgada, encontrarás un archivo llamado .env_demo, con el siguiente formato:

```jsx title=".env"
DB_HOST=YOURDATABASEHOST
DB_USER=YOURDATABASEUSER
DB_PASS=YOURDATABASEPASSWORD
DB_NAME=YOURDATABASENAME
DB_PORT=YOURDATABASEPORT
DB_LIMIT=YOURDATABASELIMIT
SSL_CA_PATH=COMPLETEPATHTOYOURDBCREDENTIALS
SES_SEC=SESSION_SECRET_USED_FOR_COOKIE_AND_SESSION_MANAGEMENT
API_URL=WHERETHEWEBSITEWILLBEHOSTED
PORT=YOURDESIREDPORT
```
Aquí deberás sustituir los valores por los de tu base de datos, que son todos aquellos que inician con DB y renombrar el archivo a .env y de tal manera tu base de datos estará conectada a la API.

**Despliegue de la Página Web**

Para el despliegue de la aplicación en una página web accesible, podemos utilizar las siguientes herramientas:
- Microsoft Azure
- Docker
- Coolify

Con estas tres herramientas podemos desplegar nuestra propia aplicación. Podemos empezar siguiendo los siguientes pasos:
1. Inicia sesión en el Portal de Azure.
2. Asegura que tengas los créditos necesarios para mantener una máquina virtual.
Para ver costos, tendrás que ver las diferentes opciones al elegir configuraciones de
la máquina.
3. Ve a "Máquinas virtuales" > "Crear".
4. Configura los datos que te pidan.
5. Crea la VM.
6. En la configuración de Networking, habilita los puertos que necesites.
7. De aquí, sigue configurar Docker y Coolify dentro de la máquina virtual. Para hacer esto, podemos seguir la documentación dentro de la página de Coolify.
8. Siguiendo todos los pasos, podremos abrir una página de Coolify con la dirección IP que nos da Microsoft Azure. Está la puedes encontrar en partes como la configuración de Network de tu máquina virtual. Es importante que recuerdes a que puerto conectaste la aplicación de Coolify, pues no solo necesitarás habilitarlo, también lo necesitas para acceder a la aplicación.
9. Dentro de la aplicación de Coolify lo primero que tenemos que hacer es crear una cuenta de administrador.
10. Ahora desde el panel de Coolify:
- Agrega un nuevo Proyecto.
- Agrega el entorno de la aplicación (entorno de desarrollo o de producción)
- Elige crear una aplicación.
- Te pedirá escoger un tipo de aplicación de muchas. Para nuestra aplicación utilizamos un repositorio de GitHub. Si es propia de ustedes, pueden utilizar repositorio privado. Si no es el caso, seleccionamos el repositorio público.
- En caso de que escojas un repositorio privado, es necesario
- Elige el tipo de app:
    - Static site / Frontend.
    - Backend (Nixpacks, Dockerfile o Docker Compose).
- Si usas variables de entorno (.env), agrégalas en la sección correspondiente.
- Checa las configuraciones. Asegúrate de tener las opciones correctas.
- Al terminar, puedes darle a la opción de ‘Desplegar’.
- Al terminar el despliegue, podrás acceder a tu aplicación con el link dado por la aplicación de Coolify.


### Creación del Entorno de Desarrollo

Para evitar modificar directamente la versión en producción, sigue estos pasos en algún ambiente de desarrollo como lo es Visual Studio Code:

Clona el repositorio en una nueva carpeta, este puede ser mediante git o manual, con el siguiente código puedes hacerlo con GitHub, deberás cambiar los valores por los reales.

```jsx title="Ambiente de desarrollo"
git clone https://github.com/TulDul11/WIT-Web
cd WIT-Web
```

Después instala las dependencias necesarias. Utilizando ‘npm ci’, se puede descargar de forma limpia todas las dependencias.

```jsx title="Ambiente de desarrollo
npm ci
```

Deberás crear una nueva branch que se encargue de tener los cambios de manera que no se afecte la producción.

```jsx title="Ambiente de desarrollo
git checkout -b mi-rama-dev
```

Después podrás iniciar un ambiente local con el código que ya está configurado dentro de la API.

```jsx title="Ambiente de desarrollo
npm run dev
```

Una vez que tus hayas probado tus cambios podrás hacer un merge con la branch de producción, pero para eso deberás ser muy cuidadoso, por lo se recomienda utilizar git diff para ver los cambios.

```jsx title="Ambiente de desarrollo
git diff main dev
```

Una vez que estés seguro deberás usar los siguientes comandos para mover tu entorno de trabajo de dev al main y hacer un merge.

```jsx title="Ambiente de desarrollo
git checkout main
git merge mi-rama-dev
```

Si no existen conflictos la fusión se hará automáticamente, de no ser el caso git te pedirá
que los resuelvas.