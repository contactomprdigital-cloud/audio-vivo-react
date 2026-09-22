import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Login from "../molecules/Login";

function Inicio() {
  return (
    <>
      <header className="cabecera">
        <div className="cabecera-contenido">
          <img className="marca-logo" src="/logo.png" alt="Sonido Vivo" />
          <div>
            <h1 className="marca-titulo">Sonido Vivo</h1>
            <p className="marca-lema">Instrumentos y Equipos Musicales • Viña del Mar</p>
          </div>
        </div>
      </header>

      <Container className="login-pantalla" fluid>
        <Row className="justify-content-center w-100">
          <Col xs={12} sm={10} md={7} lg={5} xl={4}>
            <div className="login-tarjeta">
              <div className="titulo-login">
                <h2>Iniciar Sesión</h2>
              </div>
              <Login />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Inicio;
