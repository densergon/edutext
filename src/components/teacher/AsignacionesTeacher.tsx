import { FaEdit, FaTrashAlt } from "react-icons/fa"
import '../styles/AsignacionesTeacher.css'

const AsignacionesTeacher = () => {
    return (
        <div className="container-fluid mt-2 pt-2">
            <h3>Asignaciones</h3>
            <hr />
            <div className="container-fluid">
                <div className="container-fluid d-flex flex-column">
                    <div className="asignacion-box">
                        <div className="asignacion-detalles">
                            <h3>Hacer un robot</h3>
                            <p>Grupo: 3CV12</p>
                            <p>Fecha de entrega: 10/6/2023</p>
                        </div>
                        <div className="asignacion-acciones">
                            <button className="btn btn-warning"><FaEdit /></button>
                            <button className="btn btn-danger"><FaTrashAlt /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AsignacionesTeacher