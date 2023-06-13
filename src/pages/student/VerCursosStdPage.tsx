import { Fragment } from "react"
import Bar from "../../components/Bar"
import Sidebar from "../../components/Sidebar"

const VerCursosStdPage = () => {
  return (
    <Fragment>
    <Bar />
    <div className="dashboard">
        <Sidebar      />
        <div className='view-container'>
        </div>
    </div>
</Fragment>
  )
}

export default VerCursosStdPage
