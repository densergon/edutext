import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Grupo {
    id: number;
    nombre: string;
    id_profesor: number;
}

const MisGruposTeacher: React.FC = () => {
    const [grupos, setGrupos] = useState<Grupo[]>([]);

    // Asume que el id del profesor está almacenado en una variable "idProfesor"
    const idProfesor = 2; // Cambiar según corresponda

    useEffect(() => {
        const obtenerGrupos = async () => {
            try {
                const response = await axios.get(`http:127.0.0.1:5000/profesores/${idProfesor}/grupos`);
                setGrupos(response.data);
            } catch (error) {
                console.error('Hubo un error al obtener los grupos:', error);
            }
        };

        obtenerGrupos();
    }, [idProfesor]);

    return (
        <div>
            <h2>Mis grupos</h2>
            <ul>
                {grupos.map((grupo) => (
                    <li key={grupo.id}>{grupo.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default MisGruposTeacher;