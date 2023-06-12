import { Fragment } from "react"
import Sidebar from "../../components/Sidebar"
import AgregarCurso from "../../components/teacher/AgregarCurso"
import Bar from "../../components/Bar"

const AgregarCursoPage = () => {
  return (
    <Fragment>
            <Bar />
            <div className="dashboard">
                <Sidebar />
                <div className='view-container'>
                    <AgregarCurso/>
                </div>
            </div>
        </Fragment>
  )
}

export default AgregarCursoPage
