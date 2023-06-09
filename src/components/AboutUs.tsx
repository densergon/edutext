import { Container, Row, Col } from 'react-bootstrap';
import student1 from '../assets/student1.png';
import student2 from '../assets/student2.png';
import './AboutUs.css'
const AboutUs = () => {
    return (
        <main className="contenedor">
            <Container>
                <Row className="aboutUs-section">
                    <Col md={6}>
                        <div className="aboutUs-imageContainer">
                            <img className="aboutUs-image" src={student1} alt="imagen estudiante 1" />
                            <img className="aboutUs-image" src={student2} alt="imagen estudiante 2" />
                        </div>
                    </Col>

                    <Col md={6} className="aboutUs-text">
                        <h3>🚀 Sobre Nosotros</h3>

                        <p>🎓 En Mi Escuela Online, estamos comprometidos con el desarrollo y mejora constante del aprendizaje en línea. Creemos en la capacidad de la tecnología para transformar la educación, y nuestro objetivo es hacer el aprendizaje accesible y efectivo para todos.</p>

                        <p>💡 Nuestra plataforma utiliza técnicas de enseñanza innovadoras y adaptativas, combinadas con un sólido apoyo a los estudiantes, para fomentar el amor por el aprendizaje y ayudar a los estudiantes a alcanzar sus metas educativas.</p>

                        <p>🤝 Estamos aquí para ayudarte en tu viaje de aprendizaje. Juntos, podemos hacer del aprendizaje en línea una experiencia enriquecedora y exitosa.</p>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export default AboutUs;
