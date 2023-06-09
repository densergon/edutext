import img from '../assets/pexels-jonathan-borba-3021325.jpg';
import './Register.css'
const RegisterForm = () => {

    return (
        <section className="register-container" style={{ backgroundImage: `url(${img})` }}>
            <div className="register-form">
                <form>
                    <h2 className="ms-3 my-4">Crea una cuenta</h2>
                    <div className="form-group mx-2 my-3">
                        <input type="text" className="form-control" placeholder="Nombre completo" />
                    </div>
                    <div className="form-group mx-2 my-3">
                        <input type="mail" className="form-control" placeholder="Correo Electronico" />
                    </div>
                    <div className="form-group mx-2 my-3">
                        <input type="password" className="form-control" placeholder="Contraseña" />
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