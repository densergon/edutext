
import axios from 'axios';
import { useState, useEffect } from 'react';

interface Profesor {
    id: number;
    nombre: string;
}

const AgregarGrupoAdmin = () => {
    const [profesores, setProfesores] = useState<Profesor[]>([]);
    const [nombreCurso, setNombreCurso] = useState("");
    const [profesorSeleccionado, setProfesorSeleccionado] = useState<number | null>(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/profesores')
        .then(response => {
            if (response.data.error) {
                alert(response.data.error);
            } else {
                console.log(response.data)
                setProfesores(response.data)
            }
        });
    }, []);

    const handleNombreCursoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNombreCurso(event.target.value);
    }

    const handleProfesorSeleccionadoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setProfesorSeleccionado(Number(event.target.value));
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        if (!profesorSeleccionado || nombreCurso === "") {
            alert("Por favor completa todos los campos.");
            return;
        }
    
        try {
            const response = await axios.post('http://127.0.0.1:5000/grupos', {
                nombre: nombreCurso,
                id_profesor: profesorSeleccionado
            });
    
            if (response.status === 201) {
                alert("Grupo creado exitosamente");
                setNombreCurso("");
                setProfesorSeleccionado(null);
            } else {
                throw new Error();
            }
        } catch (error) {
            alert("Ha ocurrido un error al crear el grupo. Por favor intenta de nuevo.");
        }
    }

    return (
        <div className="container-fluid">
            <div className="p-2 mt-2">
                <div>
                    <h3>Agregar Grupo</h3>
                </div>
                <div>
                    <div className="p-2">
                        <form onSubmit={handleSubmit}>
                            <div className="my-2 mx-2">
                                <p>Nombre del grupo</p>
                                <input type="text" className="form-control" value={nombreCurso} onChange={handleNombreCursoChange} />
                            </div>
                            <div className="my-2 mx-2">
                                <p>Profesor asignado</p>
                                <select className="form-control" value={profesorSeleccionado || ''} onChange={handleProfesorSeleccionadoChange}>
                                    <option value="">Seleccione un profesor</option>
                                    {profesores.map(profesor => (
                                        <option key={profesor.id} value={profesor.id}>
                                            {profesor.nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="my-4 d-flex justify-content-end">
                                <button className="btn btn-primary">Agregar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgregarGrupoAdmin
