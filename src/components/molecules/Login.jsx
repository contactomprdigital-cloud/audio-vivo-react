import { useState } from "react";
import Form from "react-bootstrap/Form";
import { CampoTexto } from "../atoms/CampoTexto/CampoTexto";
import { Boton } from "../atoms/Boton/Boton";

function Login() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  function manejarEnvio(e) {
    e.preventDefault();
  }

  return (
    <Form id="form-login" onSubmit={manejarEnvio}>
      <Form.Group className="mb-3" controlId="correo">
        <Form.Label>Correo electrónico</Form.Label>
        <CampoTexto
          id="correo"
          tipo="email"
          valor={correo}
          onChange={setCorreo}
          placeholder="ejemplo@correo.cl"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Contraseña</Form.Label>
        <CampoTexto
          id="password"
          tipo="password"
          valor={password}
          onChange={setPassword}
          placeholder="Mínimo 12 caracteres"
        />
      </Form.Group>

      <Boton tipo="submit" variante="login">Ingresar</Boton>
    </Form>
  );
}

export default Login;