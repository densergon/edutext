import { useNavigate } from 'react-router-dom';
import '../styles/GruposAdmin.css'
const VerGruposAdmin = () => {
    const navigate = useNavigate();
    const Grupo = (id: number) => {
        navigate('/admin/grupo/' + id)
    }
  return (
    <div className="container-fluid">
      <div className="container p-3">
        <div>
            <h3>Grupos</h3>
        </div>
        <div className="grupos-list">
            <div className="grupo-admin" onClick={() => Grupo(5)}>
                <p>Nombre del grupo</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default VerGruposAdmin
