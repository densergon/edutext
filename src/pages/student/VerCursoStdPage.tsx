import { Fragment } from "react"
import Sidebar from "../../components/Sidebar"
import Bar from "../../components/Bar"

const VerCursoStdPage = () => {
  return (
    <Fragment>
    <Bar />
    <div className="dashboard">
        <Sidebar />
        <div className='view-container'>
            
        </div>
    </div>
</Fragment>
  )
}

export default VerCursoStdPage
