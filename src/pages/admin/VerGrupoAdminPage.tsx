import { Fragment } from "react"
import Bar from "../../components/Bar"
import Sidebar from "../../components/Sidebar"
import VerGrupoAdmin from "../../components/admin/VerGrupoAdmin"

const VerGrupoAdminPage = () => {
  return (
    <Fragment>
    <Bar />
    <div className="dashboard">
        <Sidebar/>
        <div className='view-container'>
            <VerGrupoAdmin/>
        </div>
    </div>
</Fragment>
  )
}

export default VerGrupoAdminPage
