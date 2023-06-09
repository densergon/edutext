import { ChangeEvent, FormEvent, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import './Login.css'

const LoginForm = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const isAuth: boolean = useAuthStore((state) => state.isAuth);
    const role: String = useAuthStore((state) => state.role);
    const { setLog, setRole } = useAuthStore();


    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        switch (name) {
            case 'email':
                if (emailRef.current) {
                    emailRef.current.value = value;
                }
                break;
            case 'password':
                if (passwordRef.current) {
                    passwordRef.current.value = value;
                }
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Acceder a los datos ingresados usando los refs
        const email = emailRef.current;
        const password = passwordRef.current;

        // Realizar alguna acción con los datos ingresados
        if (email && password) {
            console.log('Email:', email.value);
            console.log('Password:', password.value);
        }
        //setRole("student");
        //setLog(true);

        if (email && password) {
            if (email.value == "student@domain.net" && password.value == 'student') {
                alert('Estudiante')
                setRole("student")
                setLog(true)
            } else if (email.value == "teacher@domain.net" && password.value == 'teacher') {
                alert('Profesor')
                setRole("teacher")
                setLog(true)
            }
        }

        // Restablecer los valores de los refs
        if (emailRef.current) {
            emailRef.current.value = '';
        }
        if (passwordRef.current) {
            passwordRef.current.value = '';
        }
    };



    useEffect(() => {
        if (isAuth) {
            if (role == "student") {
                navigate("/student")
            } else if (role == "teacher") {
                navigate("/teacher")
            }
        }
    }, [isAuth])

    return (
        <section className="styled-bg login-container">
            <div className="video-container">
                <video autoPlay muted loop>
                    <source src="/src/assets/pexels-tima-miroshnichenko-5199830-3840x2160-25fps.mp4" type="video/mp4" />
                </video>
                <div className="caption">
                    <form onSubmit={handleSubmit}>
                        <h2 className="ms-3 my-4">Iniciar Sesión</h2>
                        <div className="form-group mx-2 my-3">
                            <input type="email" name="email" className="form-control" placeholder="Correo Electronico" ref={emailRef} />
                        </div>
                        <div className="form-group mx-2 my-3">
                            <input type="password" className="form-control" placeholder="Contraseña" ref={passwordRef} />
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