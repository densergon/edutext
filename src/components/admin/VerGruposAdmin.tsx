import { useNavigate } from 'react-router-dom';
import '../styles/GruposAdmin.css'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from 'axios';
interface Grupo{
  id:number;
  nombre:string;
  id_profesor:number
}

const VerGruposAdmin = () => {

   const navigate = useNavigate();
    const [grupos,setGrupos]=useState<Grupo[]>([]);
    const handleGrupoClick = (id: number) => {
        navigate('/admin/grupo/' + id)
    }

    useEffect(() => {
      // Realiza la solicitud a la API cuando el componente se monta
      axios.get<Grupo[]>('http://localhost:5000/grupos')
          .then(response => {
              // Almacena los datos en el estado local
              setGrupos(response.data);
          })
          .catch(error => {
              console.error('Hubo un error al obtener los grupos:', error);
          });
  }, []);
  return (
    <div className="container-fluid">
      <div className="container p-3">
        <div>
            <h3>Grupos</h3>
        </div>
        <div className="grupos-list">
        {grupos.map(grupo => (
                <div className="grupo-admin" key={grupo.id} onClick={() => handleGrupoClick(grupo.id)}>
                    <div>
                           <p>{grupo.nombre}</p>
                            </div>
                            <div>
                              <button className='btn btn-warning'><FaEdit/></button>
                              <button className='btn btn-danger'><FaTrash/></button>
                              </div>
                </div>
            ))}
            </div>
        </div>
      </div>
  )
}

export default VerGruposAdmin
