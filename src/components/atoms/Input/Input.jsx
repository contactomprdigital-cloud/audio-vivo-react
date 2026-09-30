import Form from "react-bootstrap/Form";

function Input({ id, tipo = "text", valor, onChange, placeholder }) {
  return (
    <Form.Control
      name={id}
      type={tipo}
      value={valor}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
