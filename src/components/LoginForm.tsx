import {  useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import './styles/Login.css'
import axios from "axios";

const LoginForm = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const isAuth: boolean = useAuthStore((state) => state.isAuth);
    const role: String = useAuthStore((state) => state.role);
    const { setLog, setRole } = useAuthStore();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { correo: email, contrasenia: password });
            if (response.data.error) {
                alert(response.data.error);
            } else {
                alert(response.data.message);
                if (response.data.tipo === 'alumno') {
                    setRole('alumno');
                    setLog(true)
                } else if (response.data.tipo === 'profesor') {
                    setRole('profesor')
                    setLog(true)
                } else {
                    setRole('administrador')
                    setLog(true)
                }
            }
        } catch (error) {
            console.error('Error durante el inicio de sesión', error);
        }
    };


    useEffect(() => {
        if (isAuth) {
            if (role == "alumno") {
                navigate("/student")
            } else if (role == "profesor") {
                navigate("/teacher")
            }else if(role == "administrador"){
                navigate("/admin")
            }
        }
    }, [isAuth])

    return (
        <section className="styled-bg login-container">
            <div className="video-container">
                <video autoPlay muted loop>
                    <source src="/src/assets/pexels-tima-miroshnichenko-5199830-3840x2160-25fps.webm" type="video/webm" />
                </video>
                <div className="caption">
                    <form onSubmit={submitForm}>
                        <h2 className="ms-3 my-4">Iniciar Sesión</h2>
                        <div className="form-group mx-2 my-3">
                            <input type="email" name="email" className="form-control" placeholder="Correo Electronico" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group mx-2 my-3">
                            <input type="password" className="form-control" placeholder="Contraseña"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="form-group my-3">
                            <p>¿Olvidó su Contraseña?</p>
                        </div>
                        <div className="form-group mx-2 my-3 d-flex justify-content-end">
                            <button className="btn btn-primary" type='submit'>Iniciar Sesión</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default LoginForm