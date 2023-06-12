import { Fragment } from "react"
import Bar from "../../components/Bar"
import Sidebar from "../../components/Sidebar"
import AgregarMaterial from "../../components/teacher/AgregarMaterial"

const AgregarMaterialPage = () => {
    return (
        <Fragment>
            <Bar />
            <div className="dashboard">
                <Sidebar />
                <div className='view-container'>
                    <AgregarMaterial/>
                </div>
            </div>
        </Fragment>
    )
}

export default AgregarMaterialPage
