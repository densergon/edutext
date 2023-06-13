import { Fragment } from "react"
import Bar from "../../components/Bar"
import VerGruposAdmin from "../../components/admin/VerGruposAdmin"
import Sidebar from "../../components/Sidebar"


const VerGruposAdminPage = () => {
  return (
    <Fragment>
    <Bar />
    <div className="dashboard">
        <Sidebar/>
        <div className='view-container'>
            <VerGruposAdmin/>
        </div>
    </div>
</Fragment>
  )
}

export default VerGruposAdminPage
