import Sidebar from '../../components/Sidebar'
import MisGruposTeacher from '../../components/teacher/MisGruposTeacher'
import { Fragment } from "react"
import Bar from '../../components/Bar'

const MisGruposTeacherPage = () => {
  return (
    <Fragment>
            <Bar />
            <div className="dashboard">
                <Sidebar />
                <div className='view-container'>
                    <MisGruposTeacher/>
                </div>
            </div>
        </Fragment>
  )
}

export default MisGruposTeacherPage