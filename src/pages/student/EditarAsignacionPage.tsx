import { Fragment } from "react"
import Bar from "../../components/Bar"
import Sidebar from "../../components/Sidebar"
import EditarAsignacion from "../../components/teacher/EditarAsignacion"


const EditarAsignacionPage = () => {
  return (
    <Fragment>
    <Bar />
    <div className="dashboard">
        <Sidebar />
        <div className='view-container'>
            <EditarAsignacion/>
        </div>
    </div>
</Fragment>
  )
}

export default EditarAsignacionPage
