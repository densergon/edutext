import { Fragment } from "react"
import Bar from "../../components/Bar"
import Sidebar from "../../components/Sidebar"
import SubirAsignacionStd from "../../components/student/SubirAsignacionStd"


const SubirAsignacionStdPage = () => {
  return (
    <Fragment>
    <Bar />
    <div className="dashboard">
        <Sidebar />
        <div className='view-container'>
            <SubirAsignacionStd/>
        </div>
    </div>
</Fragment>
  )
}

export default SubirAsignacionStdPage
