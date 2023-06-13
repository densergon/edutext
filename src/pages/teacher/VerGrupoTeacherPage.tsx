import { Fragment } from "react"
import Bar from "../../components/Bar"
import Sidebar from "../../components/Sidebar"
import VerGrupoTeacher from "../../components/teacher/VerGrupoTeacher"
import { useParams } from "react-router-dom"

const VerGrupoTeacherPage = () => {

    return (
        <Fragment>
            <Bar />
            <div className="dashboard">
                <Sidebar />
                <div className='view-container'>
                    <VerGrupoTeacher />
                </div>
            </div>
        </Fragment>
    )
}

export default VerGrupoTeacherPage
