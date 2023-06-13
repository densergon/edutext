import { useParams } from 'react-router-dom'
import '../styles/GruposTeacher.css'
import { FaEye } from 'react-icons/fa'
const VerGruposTeacher = () => {
    const { id } = useParams()
    return (
        <div className="container-fluid d-flex flex-column">
            <div className="container-fluid mt-3">
                <h3>Grupo {id}</h3>
            </div>
            <div className="container-fluid mt-3">
                <h4>Alumnos</h4>
            </div>
            <div className="table-responsive pt-3">
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th scope='col'>Nombre</th>
                            <th scope='col'>Correo electronico</th>
                            <th scope='col'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Pepe Diaz</td>
                            <td>ppdiaz@dominio.net</td>
                            <td>
                                <button className='btn btn-primary'>
                                    <FaEye />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default VerGruposTeacher