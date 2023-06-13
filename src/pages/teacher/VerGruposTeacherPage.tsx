import { Fragment } from "react"
import Bar from "../../components/Bar"
import Sidebar from "../../components/Sidebar"
import VerGruposTeacher from "../../components/teacher/VerGruposTeacher"

const VerGruposPage = () => {
    return (
        <Fragment>
            <Bar />
            <div className="dashboard">
                <Sidebar />
                <div className='view-container'>
                    <VerGruposTeacher />
                </div>
            </div>
        </Fragment>
    )
}

export default VerGruposPage
