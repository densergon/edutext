import { useState } from "react"
import { useParams } from "react-router-dom"
import '../styles/GrupoAdmin.css'

const VerGrupoAdmin = () => {
    const {id}=useParams()
    const [profesor,setProfesor]=useState("Pedro Diaz")
  return (
    <div className="container-fluid">
      <div className="container p-2">
        <h3>Grupo {id}</h3>
      </div>
      <div className="my-2 px-3">
        <p>Profesor asignado: {profesor}</p>
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
                    <tbody></tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default VerGrupoAdmin
