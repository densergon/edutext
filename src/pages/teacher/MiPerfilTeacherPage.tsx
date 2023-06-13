import '../../components/styles/Dashboard.less'
import Sidebar from '../../components/Sidebar';
import { Fragment } from 'react';
import Bar from '../../components/Bar';
import MiPerfilTeacher from '../../components/teacher/MiPerfilTeacher';

const MiPerfilTeacherPage = () => {

    return (

        <Fragment>
            <Bar />
            <div className="dashboard">
                <Sidebar />
                <div className='view-container'>
                    <MiPerfilTeacher />
                </div>
            </div>
        </Fragment>
    )
}

export default MiPerfilTeacherPage