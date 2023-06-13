import '../styles/GruposTeacher.css'
import { useNavigate } from 'react-router-dom'
const VerGruposTeacher = () => {
    const navigate = useNavigate();
    const grupo = (id: number) => {
        navigate('/teacher/grupo/' + id)
    }
    return (
        <div className="container-fluid d-flex flex-column">
            <div className="container-fluid mt-3">
                <h3>Ver grupos</h3>
            </div>
            <div className="lista-grupo">
                <div className="grupo">
                    <span>
                        <p>Nombre del grupo</p>
                    </span>
                </div>
                <div className="grupo" onClick={() => grupo(5)}>
                    <span>
                        <p>Nombre del grupo</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default VerGruposTeacher