import { FaEdit, FaTrash } from 'react-icons/fa'
import '../styles/Cursos.css'
import { useNavigate } from 'react-router-dom'
const VerCursosTeacher = () => {
  const navigate = useNavigate();
  const curso = (id: number) => {
    navigate('/teacher/curso/' + id)
  }
  return (
    <div className="container-fluid d-flex flex-column">
      <div className="container-fluid mt-3">
        <h3>Ver cursos</h3>
      </div>
      <div className="lista-cursos">
        <div className="curso">
          <span>
            <p>Titulo del curso</p>
            <p>Asignaciones: 8</p>
          </span>
          <span>
            <button className='btn btn-warning'><FaEdit /></button>
            <button className='btn btn-danger'><FaTrash /></button>
          </span>
        </div>
        <div className="curso" onClick={() => curso(5)}>
          <span>
            <p>Titulo del curso</p>
            <p>Asignaciones: 8</p>
          </span>
          <span>
            <button className='btn btn-warning'><FaEdit /></button>
            <button className='btn btn-danger'><FaTrash /></button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default VerCursosTeacher
