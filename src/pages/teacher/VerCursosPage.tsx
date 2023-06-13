import { Fragment } from "react"
import Bar from "../../components/Bar"
import Sidebar from "../../components/Sidebar"
import VerCursosTeacher from "../../components/teacher/VerCursosTeacher"

const VerCursosPage = () => {
  return (
    <Fragment>
      <Bar />
      <div className="dashboard">
        <Sidebar />
        <div className='view-container'>
          <VerCursosTeacher />
        </div>
      </div>
    </Fragment>
  )
}

export default VerCursosPage
