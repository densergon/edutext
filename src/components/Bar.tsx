import { Fragment, SyntheticEvent, memo, useEffect, useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useAuthStore } from "../store/authStore";
import { FaSignOutAlt } from "react-icons/fa";


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

    const LoggedT = <Fragment>
        <NavLink to="/calificacion" className="nav-link">Evaluar tarea</NavLink>
        <NavLink to="/teacher" className="nav-link">Dashboard</NavLink>
        <NavLink to="/" className='nav-link' onClick={fakeLog}><FaSignOutAlt/></NavLink>
    </Fragment>
    const LoggedA = <Fragment>
    <NavLink to="/" className='nav-link' onClick={fakeLog}><FaSignOutAlt/></NavLink>
</Fragment>
const LoggedStd = <Fragment>
<NavLink to="/" className='nav-link' onClick={fakeLog}><FaSignOutAlt/></NavLink>
</Fragment>



    const [content, setContent] = useState(notLogged);

    useEffect(() => {
        if(isAuth){
            if(role=="alumno"){
                setContent(LoggedStd)
            }else if(role=="profesor"){
                setContent(LoggedT)
            }else if(role=="administrador"){
                setContent(LoggedA)
            }
        }
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

export default memo(Bar)