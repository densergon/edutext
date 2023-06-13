import { Fragment } from "react"
import Bar from "../../components/Bar"
import Sidebar from "../../components/Sidebar"
import VerMisGruposStd from "../../components/student/VerMisGruposStd"


const VerGruposStdPage = () => {
  return (
    <Fragment>
    <Bar />
    <div className="dashboard">
        <Sidebar />
        <div className='view-container'>
            <VerMisGruposStd/>
        </div>
    </div>
</Fragment>
  )
}

export default VerGruposStdPage
