import { Fragment } from "react"
import Bar from "../../components/Bar"
import Sidebar from "../../components/Sidebar"
import AsignacionesTeacher from "../../components/teacher/AsignacionesTeacher"


const AsignacionesTeacherPage = () => {
    return (
        <Fragment>
            <Bar />
            <div className="dashboard">
                <Sidebar />
                <div className='view-container'>
                    <AsignacionesTeacher />
                </div>
            </div>
        </Fragment>
    )
}

export default AsignacionesTeacherPage