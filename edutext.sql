create database edutext;
use edutext;



CREATE TABLE Usuarios (
    id INT PRIMARY KEY,
    nombre VARCHAR(60),
    correo VARCHAR(50),
    contrasenia VARCHAR(50),
    tipo ENUM('alumno', 'profesor', 'administrador')
);

CREATE TABLE Grupos (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    id_profesor INT,
    FOREIGN KEY (id_profesor) REFERENCES Usuarios(id)
);

CREATE TABLE Grupo_Alumno (
    id_grupo INT,
    id_alumno INT,
    PRIMARY KEY (id_grupo, id_alumno),
    FOREIGN KEY (id_grupo) REFERENCES Grupos(id),
    FOREIGN KEY (id_alumno) REFERENCES Usuarios(id)
);

CREATE TABLE Cursos (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    descripcion VARCHAR(50),
    categoria VARCHAR(40),
    id_grupo INT,
    FOREIGN KEY (id_grupo) REFERENCES Grupos(id)
);

CREATE TABLE Unidades (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    id_curso INT,
    FOREIGN KEY (id_curso) REFERENCES Cursos(id)
);

CREATE TABLE Asignaciones (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    id_unidad INT,
    descripcion VARCHAR(80),
    inicio DATETIME,
    fin DATETIME,
    FOREIGN KEY (id_unidad) REFERENCES Unidades(id)
);

CREATE TABLE Materiales (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    contenido TEXT,
    id_grupo INT,
    FOREIGN KEY (id_grupo) REFERENCES Grupos(id)
);
