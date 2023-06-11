import '../../components/styles/Dashboard.less'

import Sidebar from '../../components/Sidebar';
import VerAlumnos from '../../components/teacher/VerAlumnos';
import { Fragment } from 'react';
import Bar from '../../components/Bar';

const Dashboard = () => {

    return (

        <Fragment>
            <Bar />
            <div className="dashboard">
                <Sidebar />
                <div className='view-container'>
                    <VerAlumnos />
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard