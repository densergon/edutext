import { Fragment, SyntheticEvent, useEffect, useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useAuthStore } from "../store/authStore";


const Bar = () => {
    const isAuth = useAuthStore((state) => state.isAuth);
    const role = useAuthStore((state) => state.role);
    const { setLog, setRole } = useAuthStore();

    const fakeLog = (e: SyntheticEvent) => {
        e.preventDefault();
        setRole("")
        setLog(false);

    }

    const notLogged = <Fragment>
        <NavLink to="/aboutUs" className='nav-link'>¿Quienes somos?</NavLink>
        <NavLink to="/login" className='nav-link'>Iniciar Sesión</NavLink>
        <NavLink to="/register" className='btn btn-primary' >Registrarme</NavLink>
    </Fragment>

    const Logged = <Fragment>
        <NavLink to="/calificacion" className="nav-link">Evaluar tarea</NavLink>
        <NavLink to="/teacher" className="nav-link">Dashboard</NavLink>
    </Fragment>


    const [content, setContent] = useState(notLogged);

    useEffect(() => {
        isAuth ? setContent(Logged) : setContent(notLogged)
    }, [isAuth])

    return (
        <Navbar bg="light" expand="lg" fixed="top" className="shadow-nav">
            <Container>
                <Navbar.Brand href="/">Edutext</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {content}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Bar