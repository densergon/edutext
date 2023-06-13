import { FaListAlt, FaListUl, FaUserFriends, FaUsers } from "react-icons/fa"
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
                            <NavLink to="/std/verasignaciones">
                            <FaListUl size={25}/>
                                Mis asignaciones
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/std/vercursos">
                                <FaListAlt size={25}/>
                                Mis cursos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/std/vergrupos" >
                            <FaUsers size={25}/>
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
