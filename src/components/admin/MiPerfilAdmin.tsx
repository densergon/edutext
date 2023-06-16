import React, { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Define el tipo de datos que esperas recibir de la API
interface Usuario {
    id: number;
    nombre: string;
    correo: string;
    contrasenia: string;
    tipo: string;
}

const MiPerfilAdmin: React.FC = () => {
    const navigate=useNavigate()
    const [usuario, setUsuario] = useState<Usuario>({id: 0, nombre: '', correo: '', contrasenia: '', tipo: ''});

    useEffect(() => {
        // Aquí tendrías que obtener el id del usuario, por ejemplo, de la sesión
        // Para este ejemplo, usaremos un id de usuario ficticio
        const idUsuario = 1;
        
        // Realiza la solicitud a la API cuando el componente se monta
        axios.get<Usuario>(`http://localhost:5000/usuarios/${idUsuario}`)
            .then(response => {
                // Almacena los datos en el estado local
                setUsuario(response.data);
            })
            .catch(error => {
                console.error('Hubo un error al obtener los datos del usuario:', error);
            });
    }, []);

    const handleEdit = () => {
        // Redirige al usuario a la página de edición de su perfil
        // Asegúrate de tener un path '/editar-perfil' en tus rutas de React Router
        navigate('/admin/editarperfil');
    }

    return (
        <div className="container-fluid">
            <div className="p-4">
                <div>
                    <h3>Mi perfil</h3>
                </div>
                <div className="table-responsive p-2 mt-2">
                    <table className="table table-hover">
                        <tr>
                            <th scope="col">Nombre completo</th>
                            <td>{usuario.nombre}</td>
                        </tr>
                        <tr>
                            <th scope="col">Correo Electronico</th>
                            <td>{usuario.correo}</td>
                        </tr>
                        <tr>
                            <th scope="col">Contraseña</th>
                            <td>***********</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button className="btn btn-warning" onClick={handleEdit}><FaEdit /></button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MiPerfilAdmin;
