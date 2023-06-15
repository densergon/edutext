import { Fragment } from "react"
import Bar from "../components/Bar"
import Sidebar from "../components/Sidebar"
import MaterialDetails from "../components/MaterialDetails"

const Material = () => {
  return (
    <Fragment>
    <Bar />
    <div className="dashboard">
        <Sidebar />
        <div className='view-container'>
            <MaterialDetails  />
        </div>
    </div>
</Fragment>
  )
}

export default Material
