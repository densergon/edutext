import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import '../styles/GrupoAdmin.css'
import axios from "axios";

interface Profesor {
  nombre: string;
}

interface Alumno {
  nombre: string;
  correo: string;
}

const VerGrupoAdmin = () => {
  const { id } = useParams<{id: string}>()
  const [profesor, setProfesor] = useState<Profesor | null>(null)
  const [alumnos, setAlumnos] = useState<Alumno[]>([])
  useEffect(() => {
    const fetchProfesor = async () => {
      const response = await axios.get(`http://127.0.0.1:5000/grupos/${id}/profesor`)
      setProfesor(response.data)
    }

    const fetchAlumnos = async () => {
      const response = await axios.get(`http://127.0.0.1:5000/grupos/${id}/alumnos`)
      setAlumnos(response.data)
    }

    fetchProfesor()
    fetchAlumnos()
  }, [id])
  return (
    <div className="container-fluid">
      <div className="container p-2">
        <h3>Grupo {id}</h3>
      </div>
      <div className="my-2 px-3">
        <p>Profesor asignado: {profesor?.nombre}</p>
      </div>
      <div className="container-fluid">
        <div className="my-2">
            <h4>Alumnos</h4>
        </div>
        <div className="container-fluid my-2">
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Correo electronico</th>
                        </tr>
                    </thead>
                    <tbody>
                    {alumnos.map((alumno, index) => (
                  <tr key={index}>
                    <td>{alumno.nombre}</td>
                    <td>{alumno.correo}</td>
                  </tr>
                ))}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default VerGrupoAdmin
