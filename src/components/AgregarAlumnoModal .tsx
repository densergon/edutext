
import { Modal, Button, Form } from 'react-bootstrap';

const AgregarAlumnoModal = ({show,setShow,handleClose,handleShow}) => {

    return (
        <><Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Alumno</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nombre del Alumno</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el nombre del alumno" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese el correo electrónico del alumno" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Guardar Cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AgregarAlumnoModal ;
