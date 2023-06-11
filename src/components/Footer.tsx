import { Container, Row, Col } from 'react-bootstrap';
import './styles/Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col md={3}>
                        <h5>Edutext</h5>
                        <ul className="list-unstyled">
                            <li>Sobre Nosotros</li>
                            <li>Contacto</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Recursos</h5>
                        <ul className="list-unstyled">
                            <li>Blog</li>
                            <li>Libros Recomendados</li>
                            <li>Tutoriales</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Programas</h5>
                        <ul className="list-unstyled">
                            <li>Club de Lectura</li>
                            <li>Talleres</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Síguenos</h5>
                        <ul className="list-unstyled">
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <p className="footer-creditos">© 2023 Edutext. Todos los derechos reservados.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
