import { Fragment } from "react"
import Bar from "../../components/Bar"
import Sidebar from "../../components/Sidebar"
import AgregarAsignacion from "../../components/teacher/AgregarAsignacion"

const AgregarAsignacionPage = () => {
    return (
        <Fragment>
            <Bar />
            <div className="dashboard">
                <Sidebar />
                <div className='view-container'>
                    <AgregarAsignacion />
                </div>
            </div>
        </Fragment>
    )
}

export default AgregarAsignacionPage