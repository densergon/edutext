import { FaEdit, FaTrashAlt } from "react-icons/fa"
import '../styles/AsignacionesTeacher.css'
import { useNavigate } from "react-router-dom"

const AsignacionesTeacher = () => {
    const navigate=useNavigate()

    const edit=(id:number)=>{
        navigate('/teacher/editarasignacion/'+id)
    }
    return (
        <div className="container-fluid mt-2 pt-2">
            <h3>Asignaciones</h3>
            <hr />
            <div className="container-fluid">
                <div className="container-fluid d-flex flex-column">
                    <div className="asignacion-box">
                        <div className="asignacion-detalles">
                            <h3>Hacer un robot</h3>
                            <h5>Unidad 4-Robotica</h5>
                            <p>Fecha de entrega: 10/6/2023</p>
                        </div>
                        <div className="asignacion-acciones">
                            <button className="btn btn-warning" onClick={()=>edit(1)}><FaEdit /></button>
                            <button className="btn btn-danger"><FaTrashAlt /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AsignacionesTeacher