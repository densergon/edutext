import { useAuthStore } from '../../store/authStore';
import '../styles/GruposTeacher.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';


interface Grupo {
    id: number;
    nombre: string;
}

const VerGruposTeacher = () => {
    const navigate = useNavigate();
    const Grupo = (id: number) => {
        navigate('/teacher/grupo/' + id)
    }
    const id: number = useAuthStore((state) => state.id);
    const [grupos, setGrupos] = useState<Grupo[]>([]);

    useEffect(() => {
        const fetchGrupos = async () => {
                const res = await axios.get(`http:127.0.0.1:5000/profesores/${id}/grupos`);
                setGrupos(res.data);
        };

        fetchGrupos();
    }, []);
    return (
        <div className="container-fluid d-flex flex-column">
            <div className="container-fluid mt-3">
                <h3>Ver grupos</h3>
            </div>
            <div className="lista-grupo">
            {grupos.map(grupo => (
                    <div key={grupo.id} onClick={()=>Grupo(grupo.id)}>{grupo.nombre}</div>
                ))}
            </div>
        </div>
    )
}

export default VerGruposTeacher