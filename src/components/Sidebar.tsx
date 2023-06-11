import { NavLink } from 'react-router-dom'
import '../components/styles/Dashboard.less'
import { FaUserFriends } from 'react-icons/fa'

const Sidebar = () => {
    return (
        <header className="menu-wrap">
            <figure className="user">
                <figcaption>Mi perfil</figcaption>
            </figure>

            <nav>
                <section className="dicover">
                    <h3>Gestión de asignaciones</h3>

                    <ul>
                        <li>
                            <NavLink to="/teacher/asignaciones">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" /></svg>
                                Ver asignaciones
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/teacher/agregarasignacion">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 7L11 7 11 11 7 11 7 13 11 13 11 17 13 17 13 13 17 13 17 11 13 11z" /><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z" /></svg>
                                Añadir asignación
                            </NavLink>
                        </li>

                    </ul>
                </section>

                <section className="dicover">
                    <h3>Gestión de cursos</h3>

                    <ul>
                        <li>
                            <a href="#" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" /></svg>
                                Ver cursos
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 7L11 7 11 11 7 11 7 13 11 13 11 17 13 17 13 13 17 13 17 11 13 11z" /><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z" /></svg>
                                Agregar curso
                            </a>
                        </li>

                    </ul>
                </section>

                <section className="dicover">
                    <h3>Gestión de material</h3>

                    <ul>


                        <li>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21,3h-4V2h-2v1H9V2H7v1H3C2.447,3,2,3.447,2,4v17c0,0.553,0.447,1,1,1h18c0.553,0,1-0.447,1-1V4C22,3.447,21.553,3,21,3z M7,5v1h2V5h6v1h2V5h3v3H4V5H7z M4,20V10h16v10H4z" /><path d="M11,15.586l-1.793-1.793l-1.414,1.414l2.5,2.5C10.488,17.902,10.744,18,11,18s0.512-0.098,0.707-0.293l5-5l-1.414-1.414 L11,15.586z" /></svg>
                                Agregar material
                            </a>
                        </li>


                    </ul>
                </section>
                <section className="dicover">
                    <h3>Gestión de grupos</h3>

                    <ul>


                        <li>
                            <a href="#">
                                <FaUserFriends size={20} />
                                Mis grupos
                            </a>
                        </li>


                    </ul>
                </section>
                <section className="dicover">
                    <hr />
                    <ul>
                        <li>
                            <a href="#">
                                <FaUserFriends size={20} />
                                Mi perfil
                            </a>
                        </li>
                    </ul>
                </section>
            </nav>
        </header>
    )
}

export default Sidebar