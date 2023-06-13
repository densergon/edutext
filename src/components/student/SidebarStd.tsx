import { FaUserFriends } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const SiderbarStd = () => {
  return (
    <header className="menu-wrap">
            <figure className="user">
                <figcaption>Poncho Alejandro</figcaption>
            </figure>

            <nav>
                <section className="dicover">
                    <h3>Alumno</h3>
                    <ul>
                        <li>
                            <NavLink to="/admin/verasignaciones">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" /></svg>
                                Mis asignaciones
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/std/vercursos">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" /></svg>
                                Mis cursos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/std/vergrupos">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" /></svg>
                                Mis grupos
                            </NavLink>
                        </li>


                    </ul>
                </section>
                <section className="dicover">
                    <hr />
                    <ul>
                        <li>
                            <NavLink to="/std/miperfil">
                                <FaUserFriends size={20} />
                                Mi perfil
                            </NavLink>
                        </li>
                    </ul>
                </section>
            </nav>
        </header>
  )
}

export default SiderbarStd
