import { FaEdit } from "react-icons/fa"

const MiPerfilAdmin = () => {
  return (
    <div className="container-fluid">
            <div className="p-4">
                <div>
                    <h3>Mi perfil</h3>
                </div>
                <div className="table-responsive p-2 mt-2">
                    <table className="table table-hover">
                        <tr>
                            <th scope="col">Nombre completo</th>
                            <td>Pepe Diaz</td>
                        </tr>
                        <tr>
                            <th scope="col">Correo Electronico</th>
                            <td>ppdiaz@dominio.net</td>
                        </tr>
                        <tr>
                            <th scope="col">Contraseña</th>
                            <td>***********</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button className="btn btn-warning"><FaEdit /></button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
  )
}

export default MiPerfilAdmin
