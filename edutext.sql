create database edutext;
use edutext;



CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(60),
    correo VARCHAR(50),
    contrasenia VARCHAR(50),
    tipo ENUM('alumno', 'profesor', 'administrador')
);

CREATE TABLE grupos (
    id INT PRIMARY KEY,
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
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    descripcion VARCHAR(50),
    categoria VARCHAR(40),
    id_grupo INT,
    FOREIGN KEY (id_grupo) REFERENCES grupos(id)
);

CREATE TABLE unidades (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    id_curso INT,
    FOREIGN KEY (id_curso) REFERENCES cursos(id)
);

CREATE TABLE asignaciones (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    id_unidad INT,
    descripcion VARCHAR(80),
    inicio DATETIME,
    fin DATETIME,
    FOREIGN KEY (id_unidad) REFERENCES unidades(id)
);

CREATE TABLE materiales (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    contenido TEXT,
    id_grupo INT,
    FOREIGN KEY (id_grupo) REFERENCES grupos(id)
);
