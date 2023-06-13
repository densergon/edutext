import { Fragment } from "react"
import Bar from "../../components/Bar"
import Sidebar from "../../components/Sidebar"
import MiPerfilAdmin from "../../components/admin/MiPerfilAdmin"

const MiPerfilAdminPage = () => {
  return (
    <Fragment>
    <Bar />
    <div className="dashboard">
        <Sidebar/>
        <div className='view-container'>
            <MiPerfilAdmin/>
        </div>
    </div>
</Fragment>
  )
}

export default MiPerfilAdminPage
