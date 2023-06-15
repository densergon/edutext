CREATE DATABASE edutext;
USE edutext;

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(60),
    correo VARCHAR(50),
    contrasenia VARCHAR(50),
    tipo VARCHAR(50)
);

CREATE TABLE grupos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    id_profesor INT,
    FOREIGN KEY (id_profesor) REFERENCES usuarios(id)
);

CREATE TABLE grupo_Alumno (
    id_grupo INT,
    id_alumno INT,
    PRIMARY KEY (id_grupo, id_alumno),
    FOREIGN KEY (id_grupo) REFERENCES grupos(id),
    FOREIGN KEY (id_alumno) REFERENCES usuarios(id)
);

CREATE TABLE cursos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    descripcion VARCHAR(255), -- aumenté la longitud para permitir descripciones más largas
    categoria VARCHAR(40),
    id_grupo INT,
    FOREIGN KEY (id_grupo) REFERENCES grupos(id)
);

CREATE TABLE unidades (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    id_curso INT,
    FOREIGN KEY (id_curso) REFERENCES cursos(id)
);

CREATE TABLE asignaciones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    id_unidad INT,
    descripcion VARCHAR(255), -- aumenté la longitud para permitir descripciones más largas
    inicio DATETIME,
    fin DATETIME,
    FOREIGN KEY (id_unidad) REFERENCES unidades(id)
);

CREATE TABLE materiales (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    contenido BLOB,
    id_curso INT, -- cambié la clave foránea de grupo a curso
    FOREIGN KEY (id_curso) REFERENCES cursos(id)
);

-- Nueva tabla para las entregas de asignaciones
CREATE TABLE entregas_asignaciones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_asignacion INT,
    id_alumno INT,
    entrega BLOB,
    fecha_entrega DATETIME,
    calificacion INT,
    FOREIGN KEY (id_asignacion) REFERENCES asignaciones(id),
    FOREIGN KEY (id_alumno) REFERENCES usuarios(id)
);
