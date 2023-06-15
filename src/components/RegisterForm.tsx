import { useState } from 'react';
import img from '../assets/pexels-jonathan-borba-3021325-min.jpg';
import './styles/Register.css'
import axios from 'axios';
const RegisterForm = () => {

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasenia, setContrasenia] = useState("");
    const [tipo, setTipo] = useState("profesor");
  
    const submitForm = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const usuario = {
          nombre: nombre,
          correo: correo,
          contrasenia: contrasenia,
          tipo: tipo,
        };
  
        const response = await axios.post('http://127.0.0.1:5000/usuarios', usuario);
  
        if(response.status === 201) {
          alert("Usuario agregado exitosamente.");
          setNombre("")
          setCorreo("")
          setContrasenia("")
        } else {
          alert("Hubo un error al agregar el usuario.");
        }
  
      } catch (error) {
        console.error(error);
      }
    }

    return (
        <section className="register-container" style={{ backgroundImage: `url(${img})` }}>
            <div className="register-form">
                <form onSubmit={submitForm}>
                    <h2 className="ms-3 my-4">Crea una cuenta</h2>
                    <div className="form-group mx-2 my-3">
                        <input type="text" className="form-control" placeholder="Nombre completo" value={nombre} onChange={e => setNombre(e.target.value)} required />
                    </div>
                    <div className="form-group mx-2 my-3">
                        <input type="mail" className="form-control" placeholder="Correo Electronico" value={correo} onChange={e => setCorreo(e.target.value)} required/>
                    </div>
                    <div className="form-group mx-2 my-3">
                        <input type="password" className="form-control" placeholder="Contraseña" value={contrasenia} onChange={e => setContrasenia(e.target.value)} />
                    </div>
                    <div className="form-group mx-2 my-3 d-flex justify-content-end">
                        <button type='submit' className="btn btn-primary" >Crear cuenta</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default RegisterForm