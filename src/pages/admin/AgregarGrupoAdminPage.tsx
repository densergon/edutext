import { Fragment } from "react"
import Bar from "../../components/Bar"
import Sidebar from "../../components/Sidebar"
import AgregarGrupoAdmin from "../../components/admin/AgregarGrupoAdmin"

const AgregarGrupoAdminPage = () => {
  return (
    <Fragment>
            <Bar />
            <div className="dashboard">
                <Sidebar />
                <div className='view-container'>
                    <AgregarGrupoAdmin/>
                </div>
            </div>
        </Fragment>
  )
}

export default AgregarGrupoAdminPage
