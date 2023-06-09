import { Fragment } from 'react';
import { useState } from 'react';
import AgregarAlumnoModal from './AgregarAlumnoModal ';
import './BotonAgregar.css';

const BotonAgregarAlumno = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    return (
         <Fragment>
            <button onClick={handleShow} className="boton-agregar">
         Agregar Alumno
     </button>
     <AgregarAlumnoModal show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow}/>
         </Fragment>

    );
}

export default BotonAgregarAlumno ;