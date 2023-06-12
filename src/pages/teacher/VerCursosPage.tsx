import { Fragment } from "react"
import Bar from "../../components/Bar"
import Sidebar from "../../components/Sidebar"
import VerCursos from "../../components/teacher/VerCursos"

const VerCursosPage = () => {
  return (
    <Fragment>
            <Bar />
            <div className="dashboard">
                <Sidebar />
                <div className='view-container'>
                    <VerCursos/>
                </div>
            </div>
        </Fragment>
  )
}

export default VerCursosPage
