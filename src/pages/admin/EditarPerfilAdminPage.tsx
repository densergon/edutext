import { Fragment } from "react"
import Bar from "../../components/Bar"
import Sidebar from "../../components/Sidebar"
import EditarPerfilAdmin from "../../components/admin/EditarPerfilAdmin"

const EditarPerfilAdminPage = () => {
  return (
    <Fragment>
            <Bar />
            <div className="dashboard">
                <Sidebar />
                <div className='view-container'>
                    <EditarPerfilAdmin/>
                </div>
            </div>
        </Fragment>
  )
}

export default EditarPerfilAdminPage
