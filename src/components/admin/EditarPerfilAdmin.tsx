import  { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useAuthStore } from '../../store/authStore';

interface Usuario {
    id: number;
    nombre: string;
    correo: string;
    contrasenia: string;
    tipo: string;
}

const EditarPerfilAdmin: React.FC = () => {
    const id: number = useAuthStore((state) => state.id);
    const [usuario, setUsuario] = useState<Usuario>({id: 0, nombre: '', correo: '', contrasenia: '', tipo: ''});

    useEffect(() => {
        const idUsuario = 1;  //Obtener esto de la sesión o de donde corresponda
        axios.get<Usuario>(`http://127.0.0.1:5000/usuarios/${idUsuario}`)
            .then(response => {
                setUsuario(response.data);
            })
            .catch(error => {
                console.error('Hubo un error al obtener los datos del usuario:', error);
            });
    }, []);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUsuario(prevState => ({...prevState, [name]: value}));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        axios.put('http://127.0.0.1:5000/usuarios/'+id, usuario)
            .then(response => {
                console.log(response.data);
                // Aquí puedes redirigir al usuario, mostrar un mensaje de éxito, etc.
            })
            .catch(error => {
                console.error('Hubo un error al actualizar el perfil del usuario:', error);
            });
    }

    return (
        <div className='container-fluid'>
            <div className='container p-2'>
            <form onSubmit={handleSubmit}>
           <div className='my-2 mx-2'>
           <label>Nombre completo</label>
            <input name="nombre" value={usuario.nombre} onChange={handleChange} className='form-control'/>
           </div>

          <div className='my-2 mx-2'>
          <label>Correo Electrónico</label>
            <input name="correo" value={usuario.correo} onChange={handleChange} className='form-control' />
          </div>

           <div className='my-2 mx-2'>
           <label>Contraseña</label>
            <input type="password" name="contrasenia" value={usuario.contrasenia} onChange={handleChange} className='form-control'/>

           </div>
            <div className='my-2 mx-2 d-flex justify-content-end'>
            <button type='submit' className='btn btn-warning'>Salvar cambios</button>
            </div>
        </form>
            </div>
        </div>
    )
}

export default EditarPerfilAdmin;
